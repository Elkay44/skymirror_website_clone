<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-12 bg-gradient-to-br from-primary/5 via-transparent to-accent2/5 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent2/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent2/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent2/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">Case Study</span>
          </div>
          
          <!-- Main heading -->
          <h1 class="text-4xl md:text-6xl font-heading font-black leading-tight mb-6">
            <span class="text-gray-900">Cybersecurity Training</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent2">& Implementation</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
            How we helped a financial services firm implement <span class="text-primary font-semibold">advanced security protocols</span> and train their team to <span class="text-accent2 font-semibold">protect against modern cyber threats</span>.
          </p>
          
          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span class="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">Cybersecurity</span>
            <span class="bg-accent2/10 text-accent2 text-sm font-semibold px-4 py-2 rounded-full">Finance</span>
            <span class="bg-accent1/10 text-accent1 text-sm font-semibold px-4 py-2 rounded-full">Training</span>
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
                    A regional financial services firm needed to strengthen their cybersecurity posture and ensure their 200+ employees were equipped to identify and respond to modern cyber threats including phishing, ransomware, and social engineering attacks.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Solution</h3>
                  <p class="text-gray-700 leading-relaxed">
                    We developed a comprehensive cybersecurity training program combined with implementation of advanced security protocols, creating a multi-layered defense system and security-aware workforce.
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
                <div class="text-4xl font-black text-primary mb-2">95%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Threat Detection Rate</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent2/5 to-accent2/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent2 mb-2">Zero</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Security Incidents</div>
              </div>
              <div class="text-center bg-gradient-to-br from-accent1/5 to-accent1/10 rounded-2xl p-8">
                <div class="text-4xl font-black text-accent1 mb-2">100%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Staff Certified</div>
              </div>
            </div>
          </div>

          <!-- Training Program -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent2">Training Program</h2>
              <div class="space-y-4">
                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Security Awareness Foundation</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Comprehensive training covering threat landscape, attack vectors, and basic security principles tailored to financial services industry requirements.
                    </p>
                  </div>
                </div>
                
                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent2/10 to-accent2/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-accent2 font-bold">2</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Phishing Simulation & Response</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Interactive phishing simulations with real-time feedback and response training to build muscle memory for threat identification.
                    </p>
                  </div>
                </div>

                <div class="flex gap-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent1/10 to-accent1/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-accent1 font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Incident Response Procedures</h3>
                    <p class="text-gray-700 leading-relaxed">
                      Hands-on training for incident detection, reporting, and response procedures specific to financial services regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Security Implementation -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-accent1">Security Implementation</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">Technical Controls</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Multi-factor authentication</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Advanced endpoint protection</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Network segmentation</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Email security gateway</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4">Compliance & Monitoring</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>24/7 security monitoring</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Regulatory compliance reporting</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Incident response automation</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Vulnerability assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-3xl font-heading font-bold mb-6 text-primary">Technologies & Tools</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-primary/5 rounded-lg">
                  <div class="text-sm font-semibold text-primary">Security Training</div>
                  <div class="text-xs text-gray-600 mt-1">Interactive Modules</div>
                </div>
                <div class="text-center p-4 bg-accent1/5 rounded-lg">
                  <div class="text-sm font-semibold text-accent1">SIEM Platform</div>
                  <div class="text-xs text-gray-600 mt-1">Real-time Monitoring</div>
                </div>
                <div class="text-center p-4 bg-accent2/5 rounded-lg">
                  <div class="text-sm font-semibold text-accent2">Endpoint Protection</div>
                  <div class="text-xs text-gray-600 mt-1">Advanced Threat Detection</div>
                </div>
                <div class="text-center p-4 bg-primary/5 rounded-lg">
                  <div class="text-sm font-semibold text-primary">Compliance Tools</div>
                  <div class="text-xs text-gray-600 mt-1">Automated Reporting</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Client Testimonial -->
          <div class="mb-16">
            <div class="bg-gradient-to-br from-primary/5 to-accent2/5 rounded-2xl p-8">
              <div class="text-center">
                <svg class="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <blockquote class="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "Skymirror's cybersecurity training transformed our security culture. Our employees are now our first line of defense, and the technical implementations have given us confidence in our security posture. We've had zero incidents since implementation."
                </blockquote>
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent2/20 rounded-full flex items-center justify-center mr-4">
                    <span class="text-primary font-bold text-xl">JD</span>
                  </div>
                  <div class="text-left">
                    <h4 class="font-bold text-gray-900">Jennifer Davis</h4>
                    <p class="text-sm text-gray-600 font-medium">CISO, Regional Financial Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 class="text-2xl font-heading font-bold mb-4">Strengthen Your Cybersecurity Posture?</h3>
              <p class="text-gray-700 mb-6">
                Let's discuss how we can help you build a comprehensive cybersecurity program for your organization.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent2 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Schedule Consultation
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
                <router-link to="/case-studies" class="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
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
  document.title = 'Cybersecurity Training & Implementation - Case Study | Skymirror'
})
</script>
