<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-36 pb-24 overflow-hidden">
        <!-- Global background applied here -->
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <span class="text-primary font-semibold inline-block mb-3 text-lg">Full-Stack Development</span>
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">End-to-End Software Solutions</h1>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              Skymirror delivers comprehensive full-stack development services from frontend innovation to robust backend architecture.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Full-Stack Advantage Section -->
    <section class="py-20 bg-white border-t border-primary/5">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-heading font-bold mb-4">The Full-Stack Advantage</h2>
          <p class="text-gray-700">
            Our comprehensive approach to software development ensures seamless integration between frontend and backend systems, delivering superior user experiences and business outcomes.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Left Column - Diagram -->
          <div class="flex items-center justify-center">
            <div class="relative w-full max-w-md">
              <div class="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent1/20 flex items-center justify-center p-12">
                <div class="aspect-square rounded-full bg-gradient-to-tr from-primary/30 to-accent2/30 flex items-center justify-center p-8">
                  <div class="aspect-square rounded-full bg-primary/10 flex items-center justify-center p-4">
                    <div class="text-primary font-bold text-6xl">FS</div>
                  </div>
                </div>
                
                <!-- Orbiting Electrons -->
                <div class="absolute inset-0 w-full h-full">
                  <div class="absolute w-6 h-6 bg-primary rounded-full animate-orbit-1"></div>
                  <div class="absolute w-4 h-4 bg-accent1 rounded-full animate-orbit-2"></div>
                  <div class="absolute w-5 h-5 bg-accent2 rounded-full animate-orbit-3"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Content -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold mb-2">Why Full-Stack Development?</h3>
            <p class="text-gray-700">
              Our full-stack approach ensures end-to-end ownership of your software solution, from user interface design to database architecture, providing a cohesive and optimized user experience.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Frontend Excellence</h4>
                  <p class="text-gray-600">Our developers craft responsive, intuitive interfaces using modern frameworks like React, Vue, and Angular.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Robust Backend Systems</h4>
                  <p class="text-gray-600">We build scalable server infrastructure using Node.js, Python, Java, and other industry-leading technologies.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">DevOps Integration</h4>
                  <p class="text-gray-600">Our CI/CD pipelines and cloud deployment expertise ensure your application is always available, scalable, and secure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-heading font-bold mb-4">Our Expertise</h2>
          <p class="text-gray-700">
            Explore how our full-stack development expertise enables transformative solutions across industries.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Application Card 1 -->
          <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">AI-Integrated Applications</h3>
            <p class="text-gray-600 mb-4">
              Intelligent applications with integrated machine learning and data analytics capabilities that evolve with user interactions.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Supply chain optimization</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Traffic flow management</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Resource allocation</span>
              </li>
            </ul>
          </div>
          
          <!-- Application Card 2 -->
          <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="w-14 h-14 bg-accent1/10 flex items-center justify-center rounded-lg mb-4">
              <svg class="w-8 h-8 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Enterprise Web Applications</h3>
            <p class="text-gray-600 mb-4">
              Custom web applications built with scalable architecture for businesses of all sizes, from startups to large enterprises.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Quantum key distribution</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Post-quantum algorithms</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Secure communications</span>
              </li>
            </ul>
          </div>
          
          <!-- Application Card 3 -->
          <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="w-14 h-14 bg-accent2/10 flex items-center justify-center rounded-lg mb-4">
              <svg class="w-8 h-8 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7H7v6h6V7z"></path>
                <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p class="text-gray-600 mb-4">
              Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Material science</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Molecular modeling</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Chemical reactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="py-20 bg-white border-t border-primary/5">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-heading font-bold mb-4">Our Technology Stack</h2>
          <p class="text-gray-700">
            We leverage modern technologies and best practices to deliver high-quality, maintainable, and scalable software solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <div class="space-y-8">
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-primary font-semibold">React & Vue.js</span>
                  </div>
                  <h3 class="text-xl font-semibold">Frontend Frameworks</h3>
                </div>
                <div class="ml-6 mt-4 pl-10 border-l-2 border-dashed border-primary/30 pb-8">
                  <p class="text-gray-600">
                    Our custom-designed frontend frameworks harness modern web technologies with industry-leading performance and scalability.
                  </p>
                </div>
              </div>
              
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-primary font-semibold">Node.js & Python</span>
                  </div>
                  <h3 class="text-xl font-semibold">Backend Technologies</h3>
                </div>
                <div class="ml-6 mt-4 pl-10 border-l-2 border-dashed border-primary/30 pb-8">
                  <p class="text-gray-600">
                    Our comprehensive backend technologies include Node.js and Python, ensuring scalable server infrastructure and robust data management.
                  </p>
                </div>
              </div>
              
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-primary font-semibold">SQL & NoSQL Databases</span>
                  </div>
                  <h3 class="text-xl font-semibold">Database Management</h3>
                </div>
                <div class="ml-6 mt-4 pl-10">
                  <p class="text-gray-600">
                    Our database management solutions include SQL and NoSQL databases, providing flexible data storage and retrieval capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="space-y-8">
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-accent1/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-accent1 font-semibold">Cloud Deployment</span>
                  </div>
                  <h3 class="text-xl font-semibold">Cloud Infrastructure</h3>
                </div>
                <div class="ml-6 mt-4 pl-10 border-l-2 border-dashed border-accent1/30 pb-8">
                  <p class="text-gray-600">
                    Our cloud deployment expertise ensures secure, scalable, and highly available infrastructure for your applications.
                  </p>
                </div>
              </div>
              
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-accent1/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-accent1 font-semibold">CI/CD Pipelines</span>
                  </div>
                  <h3 class="text-xl font-semibold">DevOps Integration</h3>
                </div>
                <div class="ml-6 mt-4 pl-10 border-l-2 border-dashed border-accent1/30 pb-8">
                  <p class="text-gray-600">
                    Our CI/CD pipelines and DevOps integration ensure seamless deployment, monitoring, and maintenance of your applications.
                  </p>
                </div>
              </div>
              
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-accent1/10 flex items-center justify-center rounded-full flex-shrink-0 z-10">
                    <span class="text-accent1 font-semibold">Security & Compliance</span>
                  </div>
                  <h3 class="text-xl font-semibold">Security and Compliance</h3>
                </div>
                <div class="ml-6 mt-4 pl-10">
                  <p class="text-gray-600">
                    Our security and compliance solutions ensure the integrity and confidentiality of your data, meeting industry standards and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-white border-t border-b border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Ready to Build Your Next Digital Solution?</h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact our team of full-stack experts to discuss how our development services can transform your business.
          </p>
          <router-link to="/consultation" class="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-dark">
            Start Your Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Client-side initialization code
})
</script>

<style scoped>
/* Using global backgrounds instead */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Orbit animations */
@keyframes orbit1 {
  from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
}

@keyframes orbit2 {
  from { transform: rotate(120deg) translateX(100px) rotate(-120deg); }
  to { transform: rotate(480deg) translateX(100px) rotate(-480deg); }
}

@keyframes orbit3 {
  from { transform: rotate(240deg) translateX(140px) rotate(-240deg); }
  to { transform: rotate(600deg) translateX(140px) rotate(-600deg); }
}

.animate-orbit-1 {
  animation: orbit1 8s linear infinite;
}

.animate-orbit-2 {
  animation: orbit2 12s linear infinite;
}

.animate-orbit-3 {
  animation: orbit3 15s linear infinite;
}
</style>
