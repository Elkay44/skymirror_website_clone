<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-10 overflow-hidden particles-bg">
      <!-- Dynamic background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 animate-gradient"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-5xl mx-auto">
          <div class="space-y-4">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
              <span class="text-primary font-semibold text-sm tracking-wide uppercase">Our Solutions</span>
            </div>
            
            <!-- Main heading -->
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-heading font-black leading-[0.9]">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent1">Solutions</span><br/>
              <span class="text-gray-900">for Modern</span><br/>
              <span class="text-accent1">Business</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive suite of <span class="text-primary font-semibold">software development</span> and <span class="text-accent1 font-semibold">AI-powered solutions</span> designed to transform your business.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-primary mb-2">100%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Custom Built</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">24/7</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Support</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-primary mb-2">4</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Products</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">∞</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-12 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">Our</span> <span class="text-primary">Expertise</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            World-class solutions crafted with precision and innovation
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Full-Stack Development Card -->
          <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 hover:border-primary/30">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Floating element -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"></div>
            
            <div class="p-8 relative z-10">
              <div class="flex justify-between items-start mb-6">
                <div class="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-xl text-primary shadow-sm group-hover:shadow-md transition-shadow">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20">Development</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">Full-Stack Development</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">End-to-end software development services from frontend innovation to robust backend architecture.</p>
              
              <!-- Features list -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>React, Vue, Angular</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Node.js, Python, Java</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Cloud & DevOps</span>
                </div>
              </div>
              
              <router-link to="/full-stack-development" class="group/link inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                Explore Solutions
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- AI Applications Card -->
          <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 hover:border-accent1/30">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Floating element -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-accent1/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"></div>
            
            <div class="p-8 relative z-10">
              <div class="flex justify-between items-start mb-6">
                <div class="bg-gradient-to-br from-accent1/10 to-accent1/20 p-4 rounded-xl text-accent1 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-gradient-to-r from-accent1/10 to-accent1/20 text-accent1 text-xs font-bold px-3 py-1.5 rounded-full border border-accent1/20">AI Powered</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-accent1 transition-colors">AI Applications</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Intelligent solutions powered by machine learning and computer vision including facial recognition technology.</p>
              
              <!-- Features list -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent1 rounded-full"></div>
                  <span>Traquiva Learning Platform</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent1 rounded-full"></div>
                  <span>Checkmet Attendance System</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent1 rounded-full"></div>
                  <span>Facial Recognition</span>
                </div>
              </div>
              
              <router-link to="/ai-applications" class="group/link inline-flex items-center text-accent1 font-semibold hover:text-accent1-dark transition-colors">
                Explore AI Solutions
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- Technology Transfer Card -->
          <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 hover:border-accent2/30">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Floating element -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-accent2/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"></div>
            
            <div class="p-8 relative z-10">
              <div class="flex justify-between items-start mb-6">
                <div class="bg-gradient-to-br from-accent2/10 to-accent2/20 p-4 rounded-xl text-accent2 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-gradient-to-r from-accent2/10 to-accent2/20 text-accent2 text-xs font-bold px-3 py-1.5 rounded-full border border-accent2/20">Global Transfer</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-accent2 transition-colors">Technology Transfer</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Comprehensive services for product replication, machinery transfer, and franchising solutions.</p>
              
              <!-- Features list -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent2 rounded-full"></div>
                  <span>Product Replication</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent2 rounded-full"></div>
                  <span>Machinery Transfer</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-accent2 rounded-full"></div>
                  <span>Franchising Models</span>
                </div>
              </div>
              
              <router-link to="/technology-transfer" class="group/link inline-flex items-center text-accent2 font-semibold hover:text-accent2-dark transition-colors">
                Explore Transfer Solutions
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>


          <!-- Training Card -->
          <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 hover:border-primary/30">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Floating element -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"></div>
            
            <div class="p-8 relative z-10">
              <div class="flex justify-between items-start mb-6">
                <div class="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-xl text-primary shadow-sm group-hover:shadow-md transition-shadow">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <span class="bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20">Education</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">Skymirror Bootcamps</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Professional technology bootcamps for AI/ML Engineering, Full-Stack Development, and Data Analytics.</p>
              
              <!-- Features list -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>AI/ML Engineering</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Full-Stack Development</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Data Analytics</span>
                </div>
              </div>
              
              <router-link to="/training" class="group/link inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                Explore Training
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-12 bg-gradient-to-br from-primary/5 to-accent1/5 relative overflow-hidden particles-bg">
      <!-- Background elements -->
      <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">Ready to Start?</span>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">Ready to</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Elevate Your Business?</span>
          </h2>
          
          <p class="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with our <span class="text-primary font-semibold">software experts</span> to discover how Skymirror's solutions can <span class="text-accent1 font-semibold">drive your business forward</span>.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <router-link to="/consultation" class="group px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-xl ripple hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3">
              Request a Consultation
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
            
            <router-link to="/ai-applications" class="group px-10 py-5 bg-white hover:bg-gray-50 text-primary font-bold rounded-full border-2 border-primary shadow-lg hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3">
              View Our Work
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
          </div>
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
