<template>
  <div class="background-manager">
    <ParticleBackground v-if="showParticles" />
    <TerrainBackground v-if="showTerrain" />
    <ParallaxBackground v-if="showParallax" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ParticleBackground from './ParticleBackground.vue';
import TerrainBackground from './TerrainBackground.vue';
import ParallaxBackground from './ParallaxBackground.vue';

const route = useRoute();

// Control which backgrounds are displayed - now shown on all pages
const showParticles = ref(true); // Always show particles
const showTerrain = ref(true);   // Show terrain on all pages
const showParallax = ref(true);  // Show parallax on all pages

// Performance checks
let isHighPerformanceDevice = true;

onMounted(() => {
  // Check device performance capabilities
  checkDevicePerformance();
  
  // Initial background setup based on route
  updateBackgrounds(route.path);
});

// Watch for route changes to update backgrounds
watch(() => route.path, (newPath) => {
  updateBackgrounds(newPath);
});

function checkDevicePerformance() {
  // Simple performance check based on device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isLowEndDevice = isMobile && window.innerWidth < 768;
  
  // Disable more intensive effects on low-end devices
  if (isLowEndDevice) {
    isHighPerformanceDevice = false;
    showTerrain.value = false; // Disable terrain on low-end devices
  }
}

function updateBackgrounds(path) {
  // Apply the same background effects to all pages,
  // only considering device performance for 3D terrain
  showTerrain.value = isHighPerformanceDevice;
  showParallax.value = true;
}
</script>

<style scoped>
.background-manager {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5; /* Higher z-index to ensure it shows above page-specific backgrounds */
  pointer-events: none; /* Allow clicks to pass through */
}
</style>
