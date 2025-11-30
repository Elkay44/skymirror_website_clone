<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-32 overflow-hidden min-h-screen flex items-center">
      <!-- Dynamic background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent2/5"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent2/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent2/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-6xl mx-auto">
          <div class="space-y-8">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent2/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span class="text-primary font-semibold text-sm tracking-wide uppercase">Success Stories</span>
            </div>
            
            <!-- Main heading -->
            <h1 class="text-5xl md:text-7xl xl:text-8xl font-heading font-black leading-[0.9]">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent2">Software Solutions</span><br/>
              <span class="text-gray-900">in</span><br/>
              <span class="text-accent2">Action</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Explore how our <span class="text-primary font-semibold">innovative software development</span> and <span class="text-accent2 font-semibold">AI applications</span> have transformed business operations across industries.
            </p>
            
            <!-- Success Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-5xl mx-auto">
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-black text-primary mb-2">50+</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-black text-accent2 mb-2">95%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Success Rate</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-black text-primary mb-2">Global</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Reach</div>
              </div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-black text-accent2 mb-2">∞</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Featured Case Study -->
        <div class="glass-card rounded-2xl overflow-hidden mb-16">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <span class="text-primary font-semibold inline-block mb-2">Featured Case Study</span>
              <h2 class="text-3xl font-heading font-bold mb-4">Software Development for a Fintech Startup</h2>
              <p class="text-gray-700 mb-6">
                How a fintech startup launched their platform in record time with our full-stack development expertise.
              </p>
              <div class="flex flex-wrap gap-3 mb-6">
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Software Development</span>
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">AI Applications</span>
                <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Technology Transfer</span>
              </div>
              <div class="mt-2">
                <router-link to="/case-studies/fintech-startup" class="inline-flex items-center text-primary font-medium">
                  Read Case Study
                  <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
            </div>
            <div class="bg-gradient-to-br from-primary/90 to-primary-dark/90 relative">
              <div class="aspect-video w-full h-full flex items-center justify-center p-8">
                <img src="https://via.placeholder.com/300x200.png?text=fintech-startup-case-study.jpg" alt="Fintech Startup" class="rounded-lg shadow-lg max-h-full object-cover" />
              </div>
              <div class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>200x Performance Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Case Studies Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Case Study 1 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="aspect-video w-full bg-gradient-to-br from-accent1/90 to-accent1-dark/90 relative">
              <img src="https://via.placeholder.com/300x200.png?text=case-study-pharma.jpg" alt="Pharmaceutical Research" class="w-full h-full object-cover mix-blend-overlay" />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Technology Transfer
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-1">Technology Transfer Implementation</h3>
              <p class="text-gray-600 mb-4">
                How we helped a European manufacturer successfully transfer production technology to a new facility.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">Manufacturing</span>
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">Technology Transfer</span>
              </div>
              <router-link to="/case-studies/technology-transfer" class="inline-flex items-center text-accent1 font-medium">
                Read Case Study
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- Case Study 2 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="aspect-video w-full bg-gradient-to-br from-accent2/90 to-accent2-dark/90 relative">
              <img src="https://via.placeholder.com/300x200.png?text=case-study-logistics.jpg" alt="Logistics Optimization" class="w-full h-full object-cover mix-blend-overlay" />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  AI-Powered Process Automation
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-1">AI-Powered Process Automation</h3>
              <p class="text-gray-600 mb-4">
                How a manufacturing company increased productivity by 45% using our custom AI-powered workflow automation.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-2 py-1 rounded-full">Manufacturing</span>
                <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-2 py-1 rounded-full">AI Automation</span>
              </div>
              <router-link to="/case-studies/process-automation" class="inline-flex items-center text-accent2 font-medium">
                Read Case Study
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- Case Study 3 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="aspect-video w-full bg-gradient-to-br from-primary/90 to-primary-dark/90 relative">
              <img src="https://via.placeholder.com/300x200.png?text=case-study-cybersecurity.jpg" alt="Cybersecurity" class="w-full h-full object-cover mix-blend-overlay" />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Cybersecurity Training
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-1">Cybersecurity Training and Implementation</h3>
              <p class="text-gray-600 mb-4">
                How we helped a financial services firm implement quantum-resistant security protocols to protect against future threats.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Cybersecurity</span>
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Finance</span>
              </div>
              <router-link to="/case-studies/cybersecurity-training" class="inline-flex items-center text-primary font-medium">
                Read Case Study
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-heading font-bold mb-4">What Our Clients Say</h2>
          <p class="text-gray-700">
            Hear from enterprise leaders who have transformed their operations with our quantum solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Testimonial 1 -->
          <div class="glass-card rounded-xl p-6">
            <div class="flex flex-col h-full">
              <div class="mb-4 text-primary">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 2.75zm0 5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 7.75zm0 5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm-4-10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 2.75zm0 5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 7.75zm0 5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"></path>
                </svg>
              </div>
              <blockquote class="flex-1 mb-6">
                <p class="text-gray-700 italic">
                  "Skymirror's quantum computing solutions have revolutionized our risk modeling capabilities. What used to take days now takes minutes, allowing us to make more informed decisions in real-time."
                </p>
              </blockquote>
              <div class="flex items-center">
                <img src="https://via.placeholder.com/48x48.png?text=Client1" alt="Client" class="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 class="font-semibold">Dr. Elena Müller</h4>
                  <p class="text-sm text-gray-600">Chief Risk Officer, European Banking Group</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="glass-card rounded-xl p-6">
            <div class="flex flex-col h-full">
              <div class="mb-4 text-accent1">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 2.75zm0 5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 7.75zm0 5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm-4-10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 2.75zm0 5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 7.75zm0 5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"></path>
                </svg>
              </div>
              <blockquote class="flex-1 mb-6">
                <p class="text-gray-700 italic">
                  "Implementing Skymirror's quantum AI platform accelerated our drug discovery process beyond expectations. The ability to simulate molecular interactions at previously impossible scales has been transformative."
                </p>
              </blockquote>
              <div class="flex items-center">
                <img src="https://via.placeholder.com/48x48.png?text=Client2" alt="Client" class="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 class="font-semibold">Prof. James Chen</h4>
                  <p class="text-sm text-gray-600">Head of Research, Global Pharmaceuticals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Enterprise?</h2>
          <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our quantum experts to discover how Skymirror's solutions can drive your business forward.
          </p>
          <router-link to="/consultation" class="px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
/* Using global backgrounds instead */</style>
