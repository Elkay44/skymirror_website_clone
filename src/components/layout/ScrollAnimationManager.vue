<template>
  <div class="scroll-animation-manager">
    <!-- Subtle scroll indicators that appear based on scroll position -->
    <div 
      class="scroll-indicator top" 
      :class="{ 'visible': scrollY > 100 && scrollY < maxScroll - windowHeight - 100 }"
    ></div>
    <div 
      class="scroll-indicator bottom" 
      :class="{ 'visible': scrollY < maxScroll - windowHeight - 100 }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const scrollY = ref(0);
const windowHeight = ref(0);
const maxScroll = ref(0);

// Event emitter for sharing scroll data with other components
const emitScrollEvent = (scrollData) => {
  window.dispatchEvent(new CustomEvent('scroll-position-changed', { 
    detail: scrollData 
  }));
};

function handleScroll() {
  scrollY.value = window.scrollY;
  
  // Calculate scroll percentage (0 to 1)
  const scrollPercentage = Math.min(
    scrollY.value / (maxScroll.value - windowHeight.value), 
    1
  );
  
  // Emit scroll data for other components to react to
  emitScrollEvent({
    scrollY: scrollY.value,
    scrollPercentage,
    route: route.path
  });
  
  // Apply scroll-based effects to the body
  applyScrollEffects(scrollPercentage);
}

function applyScrollEffects(scrollPercentage) {
  // Create subtle hue rotation based on scroll position
  const hueRotation = Math.floor(scrollPercentage * 15); // Subtle 0-15deg rotation
  
  // Set CSS variable to affect backgrounds
  document.documentElement.style.setProperty('--scroll-hue-rotate', `${hueRotation}deg`);
  
  // Adjust background opacity based on scroll depth
  const baseOpacity = 0.7;
  const scrollOpacity = baseOpacity + (scrollPercentage * 0.2); // 0.7 to 0.9
  document.documentElement.style.setProperty('--bg-opacity', scrollOpacity);
}

function updateDimensions() {
  windowHeight.value = window.innerHeight;
  maxScroll.value = document.body.scrollHeight;
}

// Throttle scroll events for better performance
function throttle(callback, delay) {
  let previousCall = 0;
  return function() {
    const now = Date.now();
    if (now - previousCall >= delay) {
      previousCall = now;
      callback.apply(null, arguments);
    }
  };
}

const throttledScroll = throttle(handleScroll, 16); // ~60fps

onMounted(() => {
  updateDimensions();
  window.addEventListener('scroll', throttledScroll, { passive: true });
  window.addEventListener('resize', updateDimensions);
  
  // Initial scroll calculation
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', throttledScroll);
  window.removeEventListener('resize', updateDimensions);
});
</script>

<style>
/* Global CSS variables for scroll effects */
:root {
  --scroll-hue-rotate: 0deg;
  --bg-opacity: 0.7;
}

/* Add a subtle hue-rotate filter to the background elements based on scroll */
.animated-gradient-overlay,
.particle-canvas,
.terrain-container {
  filter: hue-rotate(var(--scroll-hue-rotate));
}

.particle-background,
.terrain-background {
  opacity: var(--bg-opacity);
}

.scroll-animation-manager {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.scroll-indicator {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.scroll-indicator.visible {
  opacity: 0.3;
}

.scroll-indicator.top {
  top: 20px;
}

.scroll-indicator.bottom {
  bottom: 20px;
}

.scroll-indicator.top::after,
.scroll-indicator.bottom::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 10px;
  height: 10px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
}

.scroll-indicator.top::after {
  top: 16px;
  transform: translateX(-50%) rotate(135deg);
}

.scroll-indicator.bottom::after {
  top: 12px;
  transform: translateX(-50%) rotate(-45deg);
}
</style>
