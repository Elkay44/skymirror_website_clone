<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 transition-all duration-300"
    :class="{ 'py-3': isScrolled, 'py-5': !isScrolled }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <router-link
        to="/"
        class="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        aria-label="Skymirror Home"
      >
        <div class="relative">
          <img src="/images/logo.png" alt="Skymirror Logo" class="w-8 h-10 relative z-10 transition-all duration-300 group-hover:brightness-110" />
          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent1/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-110"></div>
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-primary font-bold text-lg md:text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent1 transition-all duration-300">Skymirror</span>
          <p class="text-gray-600 text-[10px] md:text-xs font-medium group-hover:text-gray-700 transition-colors duration-300">Skyrocketing Global Innovation</p>
        </div>
      </router-link>

      <div
        class="hidden md:flex items-center gap-1"
        role="menubar"
        id="navbar-links"
        aria-label="Main menu"
      >
        <router-link
          to="/software-solutions"
          class="group font-semibold text-gray-700 hover:text-primary relative transition-all duration-300 ease-in-out px-2 py-1.5 rounded-lg hover:bg-primary/5"
          role="menuitem"
          tabindex="0"
        >
          <span class="relative z-10">Our Solutions</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent1 group-hover:w-full transition-all duration-300"></div>
        </router-link>

        <router-link
          to="/ai-applications"
          class="group font-semibold text-gray-700 hover:text-accent1 relative transition-all duration-300 ease-in-out px-2 py-1.5 rounded-lg hover:bg-accent1/5"
          role="menuitem"
          tabindex="0"
        >
          <span class="relative z-10">AI Applications</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent1 to-primary group-hover:w-full transition-all duration-300"></div>
        </router-link>

        <router-link
          to="/full-stack-development"
          class="group font-semibold text-gray-700 hover:text-primary relative transition-all duration-300 ease-in-out px-2 py-1.5 rounded-lg hover:bg-primary/5"
          role="menuitem"
          tabindex="0"
        >
          <span class="relative z-10">Software Development</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent2 group-hover:w-full transition-all duration-300"></div>
        </router-link>

        <router-link
          to="/technology-transfer"
          class="group font-semibold text-gray-700 hover:text-accent2 relative transition-all duration-300 ease-in-out px-2 py-1.5 rounded-lg hover:bg-accent2/5"
          role="menuitem"
          tabindex="0"
        >
          <span class="relative z-10">Technology Transfer</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent2 to-primary group-hover:w-full transition-all duration-300"></div>
        </router-link>

        <router-link
          to="/training"
          class="group font-semibold text-gray-700 hover:text-primary relative transition-all duration-300 ease-in-out px-2 py-1.5 rounded-lg hover:bg-primary/5"
          role="menuitem"
          tabindex="0"
        >
          <span class="relative z-10">Training</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent1 group-hover:w-full transition-all duration-300"></div>
        </router-link>
        <!-- Premium CTA Button -->
        <router-link
          to="/consultation"
          class="group relative px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-primary/20"
          role="menuitem"
          tabindex="0"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-accent1/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span class="relative z-10 flex items-center gap-2">
            Request Consultation
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </router-link>
      </div>

      <!-- Enhanced Mobile Menu Button -->
      <button
        class="md:hidden group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-accent1/10 hover:from-primary/20 hover:to-accent1/20 rounded-xl border border-primary/20 transition-all duration-300 transform hover:scale-105"
        :class="{ 'bg-gradient-to-br from-primary/20 to-accent1/20': isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        tabindex="0"
      >
        <div class="relative w-6 h-6 flex flex-col justify-center items-center">
          <span class="block w-5 h-0.5 bg-primary transition-all duration-300 transform group-hover:bg-accent1" :class="{ 'rotate-45 translate-y-1': isMenuOpen }"></span>
          <span class="block w-5 h-0.5 bg-primary mt-1 transition-all duration-300 group-hover:bg-accent1" :class="{ 'opacity-0': isMenuOpen }"></span>
          <span class="block w-5 h-0.5 bg-primary mt-1 transition-all duration-300 transform group-hover:bg-accent1" :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></span>
        </div>
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-t border-white/20 py-4"
    >
      <div class="container mx-auto px-4 flex flex-col gap-4">
        <router-link
          to="/software-solutions"
          class="font-medium text-primary hover:text-primary-dark py-2"
          @click="closeMenu"
          role="menuitem"
        >
          Our Solutions
        </router-link>
        <router-link
          to="/ai-applications"
          class="font-medium text-primary hover:text-primary-dark py-2"
          @click="closeMenu"
          role="menuitem"
        >
          AI Applications
        </router-link>
        <router-link
          to="/full-stack-development"
          class="font-medium text-primary hover:text-primary-dark py-2"
          @click="closeMenu"
          role="menuitem"
        >
          Software Development
        </router-link>
        <router-link
          to="/technology-transfer"
          class="font-medium text-primary hover:text-primary-dark py-2"
          @click="closeMenu"
          role="menuitem"
        >
          Technology Transfer
        </router-link>
        <router-link
          to="/training"
          class="font-medium text-primary hover:text-primary-dark py-2"
          @click="closeMenu"
          role="menuitem"
        >
          Training
        </router-link>
        <router-link
          to="/consultation"
          class="px-6 py-3 bg-primary text-white font-semibold rounded-full text-center mt-2"
          @click="closeMenu"
          role="menuitem"
        >
          Request Consultation
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    !event.target.closest("#navbar-links") &&
    !event.target.closest("#mobile-menu") &&
    !event.target.closest("button")
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>
