<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
    <!-- Premium background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5"></div>
    <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    
    <div class="container mx-auto px-8 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <router-link to="/" class="inline-block mb-8" aria-label="Skymirror Home">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img src="/images/logo.png" alt="Skymirror Logo" class="w-12 h-14 relative z-10" />
                <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent1/20 rounded-lg blur-sm"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-white">Skymirror</span>
                <p class="text-gray-300 text-sm font-medium">Skyrocketing Global Innovation</p>
              </div>
            </div>
          </router-link>
          
          <p class="text-gray-400 mb-6 leading-relaxed">
            Empowering businesses worldwide with cutting-edge AI solutions, software development, and technology transfer services.
          </p>
          
          <!-- Enhanced Social Links -->
          <div class="flex gap-3">
            <a href="#" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/30 hover:to-accent1/30 transition-all duration-300 transform hover:-translate-y-1 border border-white/10" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-lg group-hover:text-primary transition-colors"></i>
            </a>
            <a href="#" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/30 hover:to-accent1/30 transition-all duration-300 transform hover:-translate-y-1 border border-white/10" aria-label="Twitter">
              <i class="fab fa-twitter text-lg group-hover:text-accent1 transition-colors"></i>
            </a>
            <a href="#" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/30 hover:to-accent1/30 transition-all duration-300 transform hover:-translate-y-1 border border-white/10" aria-label="GitHub">
              <i class="fab fa-github text-lg group-hover:text-primary transition-colors"></i>
            </a>
            <a href="#" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/30 hover:to-accent1/30 transition-all duration-300 transform hover:-translate-y-1 border border-white/10" aria-label="YouTube">
              <i class="fab fa-youtube text-lg group-hover:text-accent1 transition-colors"></i>
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
