<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-12 bg-gradient-to-br from-accent2/5 via-transparent to-primary/5 relative overflow-hidden particles-bg">
      <!-- Animated background elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent2/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-primary/10 to-accent2/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent2/10 to-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent2/20 mb-6">
            <div class="w-2 h-2 bg-accent2 rounded-full animate-float"></div>
            <span class="text-accent2 font-semibold text-sm tracking-wide uppercase">Case Study</span>
          </div>
          
          <!-- Main heading -->
          <h1 class="text-2xl md:text-3xl font-heading font-black leading-tight mb-6">
            <span class="text-gray-900">AI-Powered Process</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent2 to-primary">Automation</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
            How a manufacturing company <span class="text-accent2 font-semibold">increased productivity by 45%</span> using our custom <span class="text-primary font-semibold">AI-powered workflow automation</span> solutions.
          </p>
          
          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span class="bg-accent2/10 text-accent2 text-sm font-semibold px-4 py-2 rounded-full">Manufacturing</span>
            <span class="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">AI Automation</span>
            <span class="bg-accent1/10 text-accent1 text-sm font-semibold px-4 py-2 rounded-full">Process Optimization</span>
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
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent2">Project Overview</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">Challenge</h3>
                  <p class="text-gray-700 leading-relaxed">
                    A mid-sized manufacturing company was struggling with manual processes that were time-consuming, error-prone, and limiting their ability to scale operations efficiently.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Solution</h3>
                  <p class="text-gray-700 leading-relaxed">
                    We implemented a comprehensive AI-powered automation system that streamlined workflows, reduced manual intervention, and provided real-time insights for better decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Results -->
          <div class="mb-16">
            <h2 class="text-3xl font-heading font-bold mb-6 text-center">Key Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center bg-gradient-to-br from-accent2/5 to-accent2/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent2 mb-2">45%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Productivity Increase</div>
              </div>
              <div class="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-primary mb-2">80%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Error Reduction</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent1/5 to-accent1/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent1 mb-2">€2M</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Annual Savings</div>
              </div>
            </div>
          </div>

          <!-- AI Implementation -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-primary">AI Implementation</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Implemented machine learning algorithms to predict equipment failures before they occur, reducing unplanned downtime by 70% and maintenance costs by 30%.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Machine Learning</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">IoT Sensors</span>
                    <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-3 py-1 rounded-full">Predictive Analytics</span>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-semibold mb-3">Quality Control Automation</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Deployed computer vision systems for automated quality inspection, achieving 99.5% accuracy while reducing inspection time by 60%.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Computer Vision</span>
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Deep Learning</span>
                    <span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Real-time Processing</span>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-semibold mb-3">Workflow Optimization</h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Created intelligent workflow management system that automatically routes tasks, optimizes resource allocation, and provides real-time performance analytics.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Process Mining</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Resource Optimization</span>
                    <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-full">Real-time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Architecture -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent1">Technical Architecture</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">AI/ML Platform</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>TensorFlow & PyTorch models</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Real-time data processing</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Cloud-native deployment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Integration Layer</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>ERP system integration</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>IoT device connectivity</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>API-first architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Client Testimonial -->
          <div class="mb-16">
            <div class="bg-gradient-to-br from-accent2/5 to-primary/5 rounded-2xl p-8">
              <div class="text-center">
                <svg class="w-12 h-12 text-accent2 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <blockquote class="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "The AI automation system Skymirror implemented has transformed our operations. We're now more efficient, make fewer errors, and can focus our team on higher-value activities. The ROI exceeded our expectations within the first year."
                </blockquote>
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-accent2/20 to-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span class="text-accent2 font-bold text-xl">RB</span>
                  </div>
                  <div class="text-left">
                    <h4 class="font-bold text-gray-900">Robert Brown</h4>
                    <p class="text-sm text-gray-600 font-medium">Manufacturing Director, IndustrialTech Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 class="text-2xl font-heading font-bold mb-4">Ready to Automate Your Processes?</h3>
              <p class="text-gray-700 mb-6">
                Let's discuss how AI-powered automation can transform your operations and boost productivity.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent2 to-primary text-white font-bold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Schedule Consultation
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
                <router-link to="/case-studies" class="inline-flex items-center gap-3 px-6 py-3 bg-white text-accent2 font-bold rounded-full border-2 border-accent2 hover:bg-accent2 hover:text-white transition-all duration-300">
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
  document.title = 'AI-Powered Process Automation - Case Study | Skymirror'
})
</script>
