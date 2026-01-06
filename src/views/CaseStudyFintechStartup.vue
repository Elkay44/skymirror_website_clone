<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-12 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 relative overflow-hidden particles-bg">
      <!-- Animated background elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">Case Study</span>
          </div>
          
          <!-- Main heading -->
          <h1 class="text-2xl md:text-3xl font-heading font-black leading-tight mb-6">
            <span class="text-gray-900">Fintech Startup</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Platform Launch</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
            How we helped a fintech startup launch their <span class="text-primary font-semibold">revolutionary payment platform</span> in record time with our <span class="text-accent1 font-semibold">full-stack development expertise</span>.
          </p>
          
          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span class="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">Software Development</span>
            <span class="bg-accent1/10 text-accent1 text-sm font-semibold px-4 py-2 rounded-full">AI Applications</span>
            <span class="bg-accent2/10 text-accent2 text-sm font-semibold px-4 py-2 rounded-full">Technology Transfer</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Content -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Project Overview -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-primary">Project Overview</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">Challenge</h3>
                  <p class="text-gray-700 leading-relaxed">
                    A European fintech startup needed to launch their innovative payment platform within 6 months to secure Series A funding. They required a secure, scalable solution that could handle high transaction volumes while maintaining regulatory compliance.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Solution</h3>
                  <p class="text-gray-700 leading-relaxed">
                    We delivered a complete full-stack solution using modern technologies, implemented AI-powered fraud detection, and ensured PCI DSS compliance while maintaining exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Results -->
          <div class="mb-16">
            <h2 class="text-3xl font-heading font-bold mb-6 text-center">Key Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-primary mb-2">200x</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Performance Increase</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent1/5 to-accent1/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent1 mb-2">3 Months</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Ahead of Schedule</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent2/5 to-accent2/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent2 mb-2">99.9%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Uptime Achieved</div>
              </div>
            </div>
          </div>

          <!-- Technical Implementation -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent1">Technical Implementation</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-semibold mb-3">Frontend Development</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Built a responsive, intuitive user interface using Vue.js 3 with TypeScript, ensuring seamless user experience across all devices and platforms.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Vue.js 3</span>
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">TailwindCSS</span>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-semibold mb-3">Backend Architecture</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Developed a robust microservices architecture using Node.js and Express, with PostgreSQL database and Redis caching for optimal performance.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Node.js</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Express</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Redis</span>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-semibold mb-3">AI Integration</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Implemented AI-powered fraud detection and risk assessment algorithms that reduced fraudulent transactions by 95% while maintaining user experience.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Machine Learning</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Fraud Detection</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Risk Assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Client Testimonial -->
          <div class="mb-16">
            <div class="bg-gradient-to-br from-primary/5 to-accent1/5 rounded-2xl p-8">
              <div class="text-center">
                <svg class="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <blockquote class="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "Skymirror delivered beyond our expectations. Their technical expertise and commitment to deadlines were instrumental in securing our Series A funding. The platform they built scales beautifully and handles our growing user base effortlessly."
                </blockquote>
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent1/20 rounded-full flex items-center justify-center mr-4">
                    <span class="text-primary font-bold text-xl">AK</span>
                  </div>
                  <div class="text-left">
                    <h4 class="font-bold text-gray-900">Alex Kowalski</h4>
                    <p class="text-sm text-gray-600 font-medium">CTO, FinPay Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 class="text-2xl font-heading font-bold mb-4">Ready to Transform Your Business?</h3>
              <p class="text-gray-700 mb-6">
                Let's discuss how we can help you achieve similar results with our proven development expertise.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Schedule Consultation
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
                <router-link to="/case-studies" class="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary font-bold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                  View More Case Studies
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Set page title
  document.title = 'Fintech Startup Platform Launch - Case Study | Skymirror'
})
</script>
