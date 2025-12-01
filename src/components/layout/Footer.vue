<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
    <!-- Premium background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 animate-gradient"></div>
    <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-float-delayed"></div>
    
    <div class="container mx-auto px-8 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
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
            <a href="https://www.linkedin.com/company/skymirror-inc" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/40 hover:to-accent1/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 border border-white/10" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-lg group-hover:text-primary transition-colors"></i>
            </a>
            <a href="https://www.youtube.com/@skymirror_inc" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/40 hover:to-accent1/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 border border-white/10" aria-label="YouTube">
              <i class="fab fa-youtube text-lg group-hover:text-accent1 transition-colors"></i>
            </a>
            <a href="https://www.instagram.com/skymirror.eu" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent1/20 hover:from-primary/40 hover:to-accent1/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 border border-white/10" aria-label="Instagram">
              <i class="fab fa-instagram text-lg group-hover:text-accent2 transition-colors"></i>
            </a>
          </div>
        </div>
        
        <!-- Solutions Column -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Solutions</h3>
          <ul class="space-y-4">
            <li><router-link to="/software-solutions" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Software Development
            </router-link></li>
            <li><router-link to="/ai-applications" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-accent1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              AI Applications
            </router-link></li>
            <li><router-link to="/technology-transfer" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-accent2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Technology Transfer
            </router-link></li>
            <li><router-link to="/training" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Training Programs
            </router-link></li>
          </ul>
        </div>
        
        <!-- Products Column -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-primary">Products</h3>
          <ul class="space-y-4">
            <li><a href="https://www.traquiva.com" target="_blank" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-accent1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Traquiva Learning Platform
              <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"></path>
              </svg>
            </a></li>
            <li><a href="https://checkmet.eu/" target="_blank" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Checkmet Attendance System
              <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"></path>
              </svg>
            </a></li>
            <li><router-link to="/about" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-accent2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              About Us
            </router-link></li>
            <li><router-link to="/case-studies" class="group flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">
              <div class="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Case Studies
            </router-link></li>
          </ul>
        </div>
        
        <!-- Contact Column -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent2 to-primary">Contact</h3>
          <div class="space-y-6">
            <div class="space-y-3">
              <a href="mailto:info@skymirror.eu" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent1/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent1/30 transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">info@skymirror.eu</div>
                  <div class="text-xs text-gray-500">Email us</div>
                </div>
              </a>
              
              <a href="tel:+36205311574" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-br from-accent1/20 to-primary/20 rounded-lg flex items-center justify-center group-hover:from-accent1/30 group-hover:to-primary/30 transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-medium">+36 20 5311 574</div>
                  <div class="text-xs text-gray-500">Call us</div>
                </div>
              </a>
            </div>
            
            <div class="p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
              <address class="text-gray-300 not-italic text-sm leading-relaxed">
                <div class="font-medium text-white mb-1">Budapest Office</div>
                Kálmán Imre utca 1<br>
                Budapest President centre, 1054<br>
                Budapest, Hungary
              </address>
            </div>
            
            <router-link to="/consultation" class="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent1/20 hover:from-primary/30 hover:to-accent1/30 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Request Consultation
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="mt-20 pt-8 border-t border-gradient-to-r from-transparent via-gray-700 to-transparent">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex flex-col md:flex-row items-center gap-4">
            <p class="text-gray-400 text-sm">© {{ new Date().getFullYear() }} <span class="font-semibold text-white">Skymirror</span>. All rights reserved.</p>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <svg class="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
              <span>in Budapest</span>
            </div>
          </div>
          
          <div class="flex items-center gap-8">
            <div class="flex gap-6">
              <router-link to="/legal/terms-conditions" class="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-1">
                <div class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Terms
              </router-link>
              <router-link to="/legal/privacy-policy" class="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-1">
                <div class="w-1 h-1 bg-accent1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Privacy
              </router-link>
              <router-link to="/legal/cookie-policy" class="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-1">
                <div class="w-1 h-1 bg-accent2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Cookies
              </router-link>
            </div>
            
            <!-- Status indicator -->
            <div class="flex items-center gap-2 text-xs">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-gray-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional scripts needed for the footer
</script>
