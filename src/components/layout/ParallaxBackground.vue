<template>
  <div class="parallax-container">
    <div class="parallax-layer parallax-layer-1" ref="layer1"></div>
    <div class="parallax-layer parallax-layer-2" ref="layer2"></div>
    <div class="parallax-layer parallax-layer-3" ref="layer3"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const layer1 = ref(null);
const layer2 = ref(null);
const layer3 = ref(null);

let isEnabled = true;
let lastScrollY = 0;

function handleScroll() {
  if (!isEnabled) return;
  
  const scrollY = window.scrollY;
  
  // Only update if we've scrolled a meaningful amount
  if (Math.abs(scrollY - lastScrollY) < 5) return;
  
  // Apply different translation factors to each layer
  if (layer1.value) {
    layer1.value.style.transform = `translateY(${scrollY * 0.1}px)`;
  }
  
  if (layer2.value) {
    layer2.value.style.transform = `translateY(${scrollY * 0.05}px)`;
  }
  
  if (layer3.value) {
    layer3.value.style.transform = `translateY(${scrollY * 0.02}px)`;
  }
  
  lastScrollY = scrollY;
}

// Throttle scroll events to improve performance
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
  // Check if device is capable of smooth parallax (desktop/laptop)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  isEnabled = !isMobile && window.innerWidth > 768;
  
  // Only add scroll listener if parallax is enabled
  if (isEnabled) {
    window.addEventListener('scroll', throttledScroll, { passive: true });
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', throttledScroll);
});
</script>

<style scoped>
.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Higher z-index to ensure visibility */
  pointer-events: none;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  will-change: transform;
}

.parallax-layer-1 {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="1" fill="rgba(74, 144, 226, 0.1)"/></svg>');
  opacity: 0.7;
}

.parallax-layer-2 {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="1.5" fill="rgba(133, 87, 217, 0.1)"/></svg>');
  opacity: 0.5;
}

.parallax-layer-3 {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="2" fill="rgba(66, 184, 131, 0.1)"/></svg>');
  opacity: 0.3;
}
</style>
