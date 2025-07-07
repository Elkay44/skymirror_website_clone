<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-36 pb-24 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-primary font-semibold inline-block mb-3 text-lg">Our Solutions</span>
          <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"> Solutions for Modern Business</h1>
          <p class="text-lg text-gray-700">
            Discover our comprehensive suite of software development and AI-powered solutions designed to transform your business.
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Full-Stack Development Card -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Development</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p class="text-gray-600 mb-4">End-to-end software development services from frontend innovation to robust backend architecture.</p>
              <router-link to="/full-stack-development" class="inline-flex items-center text-primary font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- AI Applications Card -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-accent1/10 p-3 rounded-lg text-accent1">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">AI</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">AI Applications</h3>
              <p class="text-gray-600 mb-4">Intelligent solutions powered by machine learning and computer vision including facial recognition technology.</p>
              <router-link to="/ai-applications" class="inline-flex items-center text-accent1 font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- Technology Transfer Card -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-accent2/10 p-3 rounded-lg text-accent2">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-2 py-1 rounded-full">Transfer</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Technology Transfer</h3>
              <p class="text-gray-600 mb-4">Comprehensive services for product replication, machinery transfer, and franchising solutions.</p>
              <router-link to="/technology-transfer" class="inline-flex items-center text-accent2 font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Training Card -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Training</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Skymirror Bootcamps</h3>
              <p class="text-gray-600 mb-4">Professional technology bootcamps for AI/ML Engineering, Full-Stack Development, and Data Analytics.</p>
              <router-link to="/training" class="inline-flex items-center text-primary font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-white border-t border-b border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Ready to Elevate Your Business?</h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our software experts to discover how Skymirror's solutions can drive your business forward.
          </p>
          <router-link to="/consultation" class="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-dark">
            Request a Consultation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Any client-side initialization goes here
})
</script>

<style scoped>
/* Using global backgrounds instead */
</style>
