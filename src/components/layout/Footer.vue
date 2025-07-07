<template>
  <footer class="bg-gray-900 text-white py-16 relative" role="contentinfo" aria-label="Site footer">
    <!-- Quantum particle decorative elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 z-[-1]"></div>
    
    <div class="container mx-auto px-8 relative">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <router-link to="/" class="inline-block mb-6" aria-label="Skymirror Home">
            <div class="flex items-center gap-2">
            <img src="/images/logo.png" alt="Skymirror Logo" class="w-10 h-12 mb-2" />
            <div class="flex flex-col">
            <span class="text-xl font-medium text-white">Skymirror</span>
            <p class="text-gray-400 text-xs">Skyrocketing Global Innovation</p>
            </div>
            </div>
          </router-link>
          
          <div class="flex gap-4 mt-4">
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <!-- Solutions Column -->
        <div class="md:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Solutions</h3>
          <ul class="space-y-3">
            <li><router-link to="/software-solutions" class="text-gray-400 hover:text-white transition-colors duration-300">Software Development</router-link></li>
            <li><router-link to="/ai-applications" class="text-gray-400 hover:text-white transition-colors duration-300">AI Applications</router-link></li>
            <li><router-link to="/technology-transfer" class="text-gray-400 hover:text-white transition-colors duration-300">Technology Transfer</router-link></li>
            <li><router-link to="/consultation" class="text-gray-400 hover:text-white transition-colors duration-300">Consultation Services</router-link></li>
          </ul>
        </div>
        
        <!-- Company Column -->
        <div class="md:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Company</h3>
          <ul class="space-y-3">
            <li><router-link to="/case-studies" class="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</router-link></li>
            <li><router-link to="/software-solutions" class="text-gray-400 hover:text-white transition-colors duration-300">Our Technology</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white transition-colors duration-300">About Us</router-link></li>
            <li><router-link to="/careers" class="text-gray-400 hover:text-white transition-colors duration-300">Careers</router-link></li>
          </ul>
        </div>
        
        <!-- Contact Column -->
        <div class="md:col-span-1">
          <h3 class="text-lg font-semibold mb-6">Contact</h3>
          <div class="space-y-4">
            <a href="mailto:info@skymirror.eu" class="text-gray-400 hover:text-white transition-colors duration-300 block">info@skymirror.eu</a>
            <a href="tel:+41234567890" class="text-gray-400 hover:text-white transition-colors duration-300 block">+36 20 5311 574</a>
            <address class="text-gray-400">
              Kálmán Imre utca 1<br>
              Budapest President centre, 1054 <br/>
              Budapest, Hungary.
            </address>
            
            <router-link to="/consultation" class="inline-block mt-4 px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              Request Consultation
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm mb-4 md:mb-0"> {{ new Date().getFullYear() }} Skymirror. All rights reserved.</p>
        
        <div class="flex gap-6">
          <router-link to="/terms-of-service" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms</router-link>
          <router-link to="/privacy-policy" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy</router-link>
          <router-link to="/cookie-policy" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Cookies</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional scripts needed for the footer
</script>
