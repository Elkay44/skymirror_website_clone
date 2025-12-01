<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-12 bg-gradient-to-br from-accent1/5 via-transparent to-accent2/5 relative overflow-hidden particles-bg">
      <!-- Animated background elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent1/10 to-accent2/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent2/10 to-accent1/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent1/10 to-accent2/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent1/20 mb-6">
            <div class="w-2 h-2 bg-accent1 rounded-full animate-float"></div>
            <span class="text-accent1 font-semibold text-sm tracking-wide uppercase">Case Study</span>
          </div>
          
          <!-- Main heading -->
          <h1 class="text-2xl md:text-3xl font-heading font-black leading-tight mb-6">
            <span class="text-gray-900">Technology Transfer</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Implementation</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
            How we helped a European manufacturer <span class="text-accent1 font-semibold">successfully transfer production technology</span> to a new facility, reducing setup time by <span class="text-accent2 font-semibold">60% and costs by 40%</span>.
          </p>
          
          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span class="bg-accent1/10 text-accent1 text-sm font-semibold px-4 py-2 rounded-full">Manufacturing</span>
            <span class="bg-accent2/10 text-accent2 text-sm font-semibold px-4 py-2 rounded-full">Technology Transfer</span>
            <span class="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">Process Optimization</span>
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
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent1">Project Overview</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">Challenge</h3>
                  <p class="text-gray-700 leading-relaxed">
                    A leading European automotive parts manufacturer needed to transfer their advanced production technology from Germany to a new facility in Eastern Europe while maintaining quality standards and minimizing downtime.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Solution</h3>
                  <p class="text-gray-700 leading-relaxed">
                    We developed a comprehensive technology transfer strategy, including digital documentation, staff training programs, and phased implementation to ensure seamless knowledge transfer and operational continuity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Results -->
          <div class="mb-16">
            <h2 class="text-3xl font-heading font-bold mb-6 text-center">Key Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center bg-gradient-to-br from-accent1/5 to-accent1/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent1 mb-2">60%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Setup Time Reduction</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent2/5 to-accent2/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent2 mb-2">40%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Cost Reduction</div>
              </div>
              <div class="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-primary mb-2">100%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Quality Maintained</div>
              </div>
            </div>
          </div>

          <!-- Implementation Process -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent2">Implementation Process</h2>
              <div class="space-y-4">
                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent1/10 to-accent1/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-accent1 font-bold">1</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Knowledge Documentation</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Created comprehensive digital documentation of all production processes, including video tutorials, technical specifications, and quality control procedures.
                    </p>
                  </div>
                </div>
                
                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent2/10 to-accent2/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-accent2 font-bold">2</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Staff Training Program</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Developed and delivered intensive training programs for local staff, including hands-on workshops and certification processes to ensure competency.
                    </p>
                  </div>
                </div>

                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Phased Implementation</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Executed a carefully planned phased rollout, starting with pilot production lines and gradually scaling to full capacity while monitoring quality metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-primary">Technologies & Methods</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">Digital Documentation</h3>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">3D Process Modeling</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Video Tutorials</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Interactive Manuals</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Quality Assurance</h3>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Statistical Process Control</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Real-time Monitoring</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Automated Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Client Testimonial -->
          <div class="mb-16">
            <div class="bg-gradient-to-br from-accent1/5 to-accent2/5 rounded-2xl p-8">
              <div class="text-center">
                <svg class="w-12 h-12 text-accent1 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <blockquote class="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "Skymirror's technology transfer expertise was exceptional. They not only helped us move our production efficiently but also improved our processes along the way. The new facility is now operating at 105% of our original capacity."
                </blockquote>
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-accent1/20 to-accent2/20 rounded-full flex items-center justify-center mr-4">
                    <span class="text-accent1 font-bold text-xl">MS</span>
                  </div>
                  <div class="text-left">
                    <h4 class="font-bold text-gray-900">Maria Schmidt</h4>
                    <p class="text-sm text-gray-600 font-medium">Operations Director, AutoParts Europe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 class="text-2xl font-heading font-bold mb-4">Need Technology Transfer Support?</h3>
              <p class="text-gray-700 mb-6">
                Let's discuss how we can help you successfully transfer and implement your technology solutions.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent1 to-accent2 text-white font-bold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Schedule Consultation
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
                <router-link to="/case-studies" class="inline-flex items-center gap-3 px-6 py-3 bg-white text-accent1 font-bold rounded-full border-2 border-accent1 hover:bg-accent1 hover:text-white transition-all duration-300">
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
  document.title = 'Technology Transfer Implementation - Case Study | Skymirror'
})
</script>
