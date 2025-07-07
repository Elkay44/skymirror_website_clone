<template>
  <div class="particle-background">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
    <div class="animated-gradient-overlay"></div>
    <div class="texture-overlay"></div>
    <div class="light-reflection"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const particleCanvas = ref(null);
let animationFrame = null;
let ctx;
let width;
let height;
let particles = [];

const PARAMS = {
  particleCount: 100,
  particleColor: 'rgba(74, 144, 226, 0.6)', // Primary color
  lineColor: 'rgba(74, 144, 226, 0.2)', // Primary color with transparency
  particleRadius: 2,
  lineWidth: 1,
  lineDistance: 150,
  speedFactor: 0.5,
  secondaryColor: 'rgba(133, 87, 217, 0.4)', // Accent1 color
  tertiaryColor: 'rgba(66, 184, 131, 0.4)', // Accent2 color
  mouseRadius: 150, // Radius of mouse influence
  mouseForce: 0.05, // Strength of mouse attraction
};

// Track mouse position
let mouseX = 0;
let mouseY = 0;
let isMouseActive = false;

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = Math.random() * PARAMS.speedFactor - PARAMS.speedFactor / 2;
    this.vy = Math.random() * PARAMS.speedFactor - PARAMS.speedFactor / 2;
    this.radius = Math.random() * PARAMS.particleRadius + 1;
    
    // Randomly assign one of the three brand colors
    const colorChoice = Math.floor(Math.random() * 3);
    if (colorChoice === 0) {
      this.color = PARAMS.particleColor;
    } else if (colorChoice === 1) {
      this.color = PARAMS.secondaryColor;
    } else {
      this.color = PARAMS.tertiaryColor;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    // Apply mouse attraction if mouse is active
    if (isMouseActive) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If particle is within mouse influence radius
      if (distance < PARAMS.mouseRadius) {
        // Calculate normalized force (stronger when closer)
        const force = (1 - distance / PARAMS.mouseRadius) * PARAMS.mouseForce;
        
        // Apply attraction to velocity
        this.vx += dx * force;
        this.vy += dy * force;
      }
    }
    
    // Apply slight damping for more natural movement
    this.vx *= 0.99;
    this.vy *= 0.99;
    
    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }
}

function init() {
  if (!particleCanvas.value) return;
  
  ctx = particleCanvas.value.getContext('2d');
  resizeCanvas();
  createParticles();
  animate();
  
  window.addEventListener('resize', resizeCanvas);
  
  // Add mouse interaction events
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseenter', () => { isMouseActive = true; });
  window.addEventListener('mouseleave', () => { isMouseActive = false; });
  
  // Add touch support for mobile
  window.addEventListener('touchmove', handleTouchMove);
  window.addEventListener('touchstart', () => { isMouseActive = true; });
  window.addEventListener('touchend', () => { isMouseActive = false; });
}

function handleMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  isMouseActive = true;
}

function handleTouchMove(event) {
  if (event.touches.length > 0) {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
    isMouseActive = true;
  }
}

function resizeCanvas() {
  if (!particleCanvas.value) return;
  
  width = window.innerWidth;
  height = window.innerHeight;
  particleCanvas.value.width = width;
  particleCanvas.value.height = height;
  
  // Recreate particles on resize
  if (particles.length) {
    particles = [];
    createParticles();
  }
}

function createParticles() {
  const particleCount = Math.min(PARAMS.particleCount, Math.floor(width * height / 10000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < PARAMS.lineDistance) {
        // Calculate opacity based on distance
        const opacity = 1 - (distance / PARAMS.lineDistance);
        
        // Use a gradient between the two particle colors
        const gradient = ctx.createLinearGradient(
          particles[i].x, particles[i].y, 
          particles[j].x, particles[j].y
        );
        
        // Extract the colors without the opacity
        const color1 = particles[i].color.replace(/[^,]+(?=\))/, opacity.toFixed(2));
        const color2 = particles[j].color.replace(/[^,]+(?=\))/, opacity.toFixed(2));
        
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = PARAMS.lineWidth * opacity;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  animationFrame = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);

  // Update and draw particles
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }

  drawLines();
}

onMounted(() => {
  init();
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseenter', () => { isMouseActive = true; });
  window.removeEventListener('mouseleave', () => { isMouseActive = false; });
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchstart', () => { isMouseActive = true; });
  window.removeEventListener('touchend', () => { isMouseActive = false; });
});
</script>

<style scoped>
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3; /* Adjusted to be behind terrain but still visible */
  overflow: hidden;
}

.particle-canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.animated-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, 
    rgba(74, 144, 226, 0.05), 
    rgba(133, 87, 217, 0.05), 
    rgba(66, 184, 131, 0.05), 
    rgba(74, 144, 226, 0.03));
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  opacity: 0.7;
}

.texture-overlay {
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></svg>');
  opacity: 0.15;
  pointer-events: none;
  animation: texture-scroll 120s linear infinite;
}

.light-reflection {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  mix-blend-mode: soft-light;
  opacity: 0.15;
  background: radial-gradient(
    circle at 30% 40%,
    rgba(255, 255, 255, 0.8),
    transparent 60%
  );
  animation: light-shift 30s infinite alternate ease-in-out;
  pointer-events: none;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes texture-scroll {
  from { background-position: 0 0; }
  to { background-position: 1000px 1000px; }
}

@keyframes light-shift {
  0% { transform: translate(-10%, -10%) scale(1); }
  50% { transform: translate(5%, 5%) scale(1.2); }
  100% { transform: translate(10%, -5%) scale(1); }
}
</style>
