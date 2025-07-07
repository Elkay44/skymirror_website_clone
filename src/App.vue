<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import Footer from './components/layout/Footer.vue'
import BackgroundManager from './components/layout/BackgroundManager.vue'
import ScrollAnimationManager from './components/layout/ScrollAnimationManager.vue'

const route = useRoute()
const isLoaded = ref(false)

// Reset scroll position on route change
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
    // Add small delay to ensure content is loaded before animations start
    setTimeout(() => {
      isLoaded.value = true
    }, 200)
  }
)

// Set loaded state after initial load
setTimeout(() => {
  isLoaded.value = true
}, 500)
</script>

<template>
  <div class="app min-h-screen flex flex-col bg-neutral-50" :class="{ 'loaded': isLoaded }">
    <BackgroundManager />
    <ScrollAnimationManager />
    <NavBar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global background styles */
:root {
  --primary-rgb: 74, 144, 226;
  --accent1-rgb: 133, 87, 217;
  --accent2-rgb: 66, 184, 131;
}

.app {
  background-color: rgba(250, 250, 255, 0.8);
  position: relative;
  z-index: 1;
}

/* Apply a subtle glass effect to cards and containers */
.glass-card {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(var(--primary-rgb), 0.2);
}
</style>
