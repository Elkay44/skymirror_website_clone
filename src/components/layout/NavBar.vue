<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-300"
    :class="{ 'py-2': isScrolled, 'py-4': !isScrolled }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center gap-2"
        aria-label="Skymirror Home"
      >
        <img src="/images/logo.png" alt="Skymirror Logo" class="w-7 h-8" />
        <div class="flex flex-col justify-center">
          <span class="text-primary font-medium text-lg md:text-xl leading-tight">Skymirror</span>
          <p class="text-gray-600 text-[10px] md:text-xs">Skyrocketing Global Innovation</p>
        </div>
      </router-link>

      <div
        class="hidden md:flex items-center gap-6"
        role="menubar"
        id="navbar-links"
        aria-label="Main menu"
      >
        <router-link
          to="/software-solutions"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          Our Solutions
        </router-link>

        <router-link
          to="/ai-applications"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          AI Applications
        </router-link>

        <router-link
          to="/full-stack-development"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          Software Development
        </router-link>

        <router-link
          to="/technology-transfer"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          Technology Transfer
        </router-link>
        <!-- <router-link
          to="/case-studies"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          Case Studies
        </router-link> -->

        <router-link
          to="/training"
          class="font-medium text-primary hover:text-primary-dark relative transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-width after:duration-300 hover:after:w-full"
          role="menuitem"
          tabindex="0"
        >
          Training
        </router-link>
        <router-link
          to="/consultation"
          class="px-6 py-3 bg-primary text-white hover:bg-primary-dark font-semibold rounded-full border-2 border-primary hover:bg-primary transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          role="menuitem"
          tabindex="0"
        >
          <span>Request Consultation</span>
        </router-link>
      </div>

      <button
        class="md:hidden flex items-center justify-center w-10 h-10 text-primary"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        tabindex="0"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
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
