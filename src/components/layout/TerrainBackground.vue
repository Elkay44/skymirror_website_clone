<template>
  <div class="terrain-background">
    <div ref="terrainContainer" class="terrain-container"></div>
    <div class="overlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// We'll need to install Three.js
// This will be initialized when the component is mounted
let THREE;
let scene, camera, renderer, terrain, clock;
let animationFrame;
let isScrollListenerActive = false;
let currentScrollY = 0;
let scrollPercentage = 0;

// Get current route to adapt terrain based on page content
const route = useRoute();
const terrainContainer = ref(null);

// Route-specific terrain configurations
const routeTerrainMappings = {
  '/quantum-ai': {
    color: 0x8557d9, // Purple for AI pages
    wireframeOpacity: 0.4,
    complexity: 1.8, // More complex terrain
    rotationSpeed: 0.15
  },
  '/technology': {
    color: 0x42b883, // Green for technology pages
    wireframeOpacity: 0.35,
    complexity: 1.5,
    rotationSpeed: 0.12
  },
  '/': {
    color: 0x4a90e2, // Blue for home page
    wireframeOpacity: 0.3,
    complexity: 1.2,
    rotationSpeed: 0.1
  }
};

// Default terrain settings
const defaultTerrainSettings = {
  color: 0x4a90e2, // Primary blue
  wireframeOpacity: 0.3,
  complexity: 1.0,
  rotationSpeed: 0.1
};

// Get terrain settings based on current route
function getTerrainSettingsForRoute(routePath) {
  // Find the best matching route configuration
  const matchingRoute = Object.keys(routeTerrainMappings)
    .find(path => routePath.includes(path));
  
  return matchingRoute 
    ? routeTerrainMappings[matchingRoute] 
    : defaultTerrainSettings;
}

async function initThree() {
  // Dynamically import Three.js to avoid affecting initial page load
  const threeModule = await import('three');
  THREE = threeModule;
  
  // Initialize the scene
  scene = new THREE.Scene();
  
  // Create a camera
  const aspectRatio = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 1000);
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 0, 0);
  
  // Create a renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // Transparent background
  
  // Add the renderer to the DOM
  if (terrainContainer.value) {
    terrainContainer.value.appendChild(renderer.domElement);
  }
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);
  
  // Create the terrain
  createTerrain();
  
  // Add resize listener
  window.addEventListener('resize', onWindowResize);
  
  // Initialize animation clock
  clock = new THREE.Clock();
  
  // Start animation loop
  animate();
}

function createTerrain() {
  // Get settings based on current route
  const terrainSettings = getTerrainSettingsForRoute(route.path);
  const complexity = terrainSettings.complexity;
  
  // Create a grid of vertices with resolution based on device capability
  const geometry = new THREE.PlaneGeometry(30, 30, 100, 100);
  
  // Displace the vertices to create the terrain effect
  const vertices = geometry.attributes.position.array;
  for (let i = 0; i < vertices.length; i += 3) {
    // Don't modify x and z, only modify y (height)
    // Use complexity factor to adjust terrain formation
    vertices[i + 1] = Math.sin(vertices[i] / 2) * Math.cos(vertices[i + 2] / 2) * 1.5 * complexity;
  }
  
  // Compute normals to ensure proper lighting
  geometry.computeVertexNormals();
  
  // Create material with wireframe effect using route-specific colors
  const material = new THREE.MeshPhongMaterial({
    color: terrainSettings.color,
    specular: 0x8557d9, // Accent1 color for highlights
    shininess: 30,
    wireframe: true,
    transparent: true,
    opacity: terrainSettings.wireframeOpacity,
  });
  
  // Create the mesh and add it to the scene
  terrain = new THREE.Mesh(geometry, material);
  terrain.rotation.x = -Math.PI / 2; // Rotate to be horizontal
  terrain.position.y = -5; // Position below the view
  scene.add(terrain);
  
  // Store the rotation speed for this terrain
  terrain.userData.rotationSpeed = terrainSettings.rotationSpeed;
}

function animate() {
  animationFrame = requestAnimationFrame(animate);
  
  // Get elapsed time
  const delta = clock.getDelta();
  
  // Rotate the terrain with speed based on route and scroll position
  if (terrain) {
    // Base rotation speed from terrain settings
    const baseSpeed = terrain.userData.rotationSpeed;
    
    // Adjust rotation based on scroll position (faster when scrolling)
    let scrollInfluence = 1.0;
    if (isScrollListenerActive) {
      // Increase rotation slightly when scrolling down the page
      scrollInfluence = 1.0 + (scrollPercentage * 0.3); // Up to 30% faster at bottom of page
    }
    
    terrain.rotation.z += delta * baseSpeed * scrollInfluence;
    
    // Add slight wave motion based on time
    terrain.position.y = -5 + Math.sin(clock.elapsedTime * 0.2) * 0.2;
  }
  
  // Render the scene
  renderer.render(scene, camera);
}

// Listen for scroll events from the ScrollAnimationManager
function setupScrollListener() {
  isScrollListenerActive = true;
  
  window.addEventListener('scroll-position-changed', (event) => {
    currentScrollY = event.detail.scrollY;
    scrollPercentage = event.detail.scrollPercentage;
    
    // Adjust camera position slightly based on scroll
    if (camera) {
      camera.position.y = 5 + (scrollPercentage * 1); // Move up slightly as user scrolls
    }
  });
}

function onWindowResize() {
  if (!camera || !renderer) return;
  
  // Update camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
}

onMounted(async () => {
  try {
    await initThree();
    // Setup scroll listener after terrain is initialized
    setupScrollListener();
  } catch (error) {
    console.error('Failed to initialize 3D terrain:', error);
    // Fallback in case Three.js fails to load or initialize
  }
});

// Watch for route changes to update terrain
watch(() => route.path, (newPath) => {
  // If terrain exists, update it for the new route
  if (terrain && scene) {
    // Remove existing terrain
    scene.remove(terrain);
    terrain.geometry.dispose();
    terrain.material.dispose();
    
    // Create new terrain with settings for the new route
    createTerrain();
  }
});

onUnmounted(() => {
  // Clean up resources
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('scroll-position-changed', setupScrollListener);
  
  // Clean up Three.js resources
  if (terrain) {
    terrain.geometry.dispose();
    terrain.material.dispose();
    scene.remove(terrain);
  }
  
  if (renderer) {
    renderer.dispose();
    if (terrainContainer.value && terrainContainer.value.contains(renderer.domElement)) {
      terrainContainer.value.removeChild(renderer.domElement);
    }
  }
});
</script>

<style scoped>
.terrain-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
  /* No need to change z-index, it's working with the parallax background */
}

.terrain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.8) 100%);
  opacity: 0.4;
}
</style>
