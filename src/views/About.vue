<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-10 overflow-hidden ">
      <!-- Dynamic background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 animate-gradient"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-4">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
              <span class="text-primary font-semibold text-sm tracking-wide uppercase">About Skymirror</span>
            </div>
            
            <!-- Main heading -->
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-heading font-black leading-[0.9]">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent1">Skyrocketing</span><br/>
              <span class="text-gray-900">Global</span><br/>
              <span class="text-accent1">Innovation</span>
            </h1>
            
            <!-- Mission statement -->
            <p class="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Welcome to <span class="text-primary font-semibold">Skymirror</span>, where we propel global innovation to new heights. Founded with a vision to <span class="text-accent1 font-semibold">connect and sustain the world</span> through technology.
            </p>
            
            <!-- Key stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-5xl mx-auto">
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-primary mb-2">2024</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Founded</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">Global</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Reach</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-primary mb-2">4</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Products</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">∞</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-12 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
              <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
              <span class="text-primary font-semibold text-sm tracking-wide uppercase">Our Journey</span>
            </div>
            
            <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
              <span class="text-gray-900">Our</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Story</span>
            </h2>
          </div>
          
          <!-- Story Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Left: Story Text -->
            <div class="space-y-4">
              <div class="glass-card interactive-card hover-lift rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent1/20 rounded-full flex items-center justify-center">
                    <div class="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-primary">2024</h3>
                    <p class="text-sm text-gray-600 uppercase tracking-wide">The Beginning</p>
                  </div>
                </div>
                
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                  Born from a passion for <span class="text-primary font-semibold">technological advancement</span>, Skymirror emerged as a beacon of progress. What started as a small team of tech enthusiasts has grown into a <span class="text-accent1 font-semibold">global force</span>.
                </p>
                
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-white/50 rounded-xl">
                    <div class="text-2xl font-black text-primary mb-1">AI</div>
                    <div class="text-xs text-gray-600 uppercase">Innovation</div>
                  </div>
                  <div class="text-center p-4 bg-white/50 rounded-xl">
                    <div class="text-2xl font-black text-accent1 mb-1">Global</div>
                    <div class="text-xs text-gray-600 uppercase">Impact</div>
                  </div>
                </div>
              </div>
              
              <div class="glass-card interactive-card hover-lift rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-accent1/5 border border-accent1/10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-accent1/20 to-primary/20 rounded-full flex items-center justify-center">
                    <div class="w-6 h-6 bg-accent1 rounded-full"></div>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-accent1">Today</h3>
                    <p class="text-sm text-gray-600 uppercase tracking-wide">Global Presence</p>
                  </div>
                </div>
                
                <p class="text-lg text-gray-700 leading-relaxed">
                  Today, we proudly serve clients and learners across continents, delivering <span class="text-accent1 font-semibold">innovative software</span>, <span class="text-primary font-semibold">AI-driven tools like Traquiva and Checkmet</span>, and educational programs that shape a sustainable future.
                </p>
              </div>
            </div>
            
            <!-- Right: Visual Elements -->
            <div class="relative">
              <div class="glass-card interactive-card hover-lift rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-white via-primary/5 to-accent1/10 relative overflow-hidden particles-bg">
                <!-- Background pattern -->
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent1 rounded-full blur-2xl"></div>
                  <div class="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-accent1 to-primary rounded-full blur-xl"></div>
                </div>
                
                <div class="relative z-10 space-y-4">
                  <div class="text-center">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">Mission Driven</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Empowering emerging economies, businesses, and communities with cutting-edge solutions and knowledge.
                    </p>
                  </div>
                  
                  <!-- Mission pillars -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-white/70 rounded-xl border border-primary/20">
                      <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 class="font-bold text-primary mb-1">Innovation</h4>
                      <p class="text-xs text-gray-600">Cutting-edge tech</p>
                    </div>
                    
                    <div class="text-center p-4 bg-white/70 rounded-xl border border-accent1/20">
                      <div class="w-12 h-12 bg-accent1/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-6 h-6 text-accent1" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 class="font-bold text-accent1 mb-1">Global</h4>
                      <p class="text-xs text-gray-600">Worldwide impact</p>
                    </div>
                    
                    <div class="text-center p-4 bg-white/70 rounded-xl border border-primary/20">
                      <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                        </svg>
                      </div>
                      <h4 class="font-bold text-primary mb-1">Education</h4>
                      <p class="text-xs text-gray-600">Knowledge transfer</p>
                    </div>
                    
                    <div class="text-center p-4 bg-white/70 rounded-xl border border-accent1/20">
                      <div class="w-12 h-12 bg-accent1/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-6 h-6 text-accent1" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 class="font-bold text-accent1 mb-1">Excellence</h4>
                      <p class="text-xs text-gray-600">Quality driven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-8">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent2/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">What We Do</span>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">What</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent2">We Do</span>
          </h2>
          
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Our <span class="text-primary font-semibold">comprehensive suite of services</span> addresses modern business challenges through <span class="text-accent2 font-semibold">innovation and expertise</span>.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Service 1 -->
            <div class="glass-card interactive-card hover-lift rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105">
              <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">Software Excellence</h3>
              <p class="text-gray-700">
                We craft tailored, full-stack software solutions using the latest technologies to accelerate business growth.
              </p>
            </div>
            
            <!-- Service 2 -->
            <div class="glass-card interactive-card hover-lift rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105">
              <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">AI Innovation</h3>
              <p class="text-gray-700">
                Our advanced AI applications, like Traquiva learning platform, Checkmet, and facial recognition systems, solve real-world challenges with sustainable outcomes.
              </p>
            </div>
            
            <!-- Service 3 -->
            <div class="glass-card interactive-card hover-lift rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105">
              <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">Technology Transfer</h3>
              <p class="text-gray-700">
                We bridge gaps by sharing expertise, machinery, and processes to empower emerging markets.
              </p>
            </div>
            
            <!-- Service 4 -->
            <div class="glass-card interactive-card hover-lift rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105">
              <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">Global Education</h3>
              <p class="text-gray-700">
                Through boot camps and short courses, we train the next generation in software development, AI, data science, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Impact Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <div class="glass-card interactive-card hover-lift rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-xl hover-glow">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                    <span class="text-primary font-bold text-xl">95%</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-primary">Faster Performance</h4>
                    <p class="text-gray-600">Our solutions deliver lightning-fast results</p>
                  </div>
                </div>
              </div>
              
              <div class="glass-card interactive-card hover-lift rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-xl hover-glow">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                    <span class="text-primary font-bold text-xl">200%</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-primary">Scalability</h4>
                    <p class="text-gray-600">Growing with your business needs</p>
                  </div>
                </div>
              </div>
              
              <div class="glass-card interactive-card hover-lift rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-glow">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                    <span class="text-primary font-bold text-xl">100%</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-primary">Reliability</h4>
                    <p class="text-gray-600">Systems you can depend on</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="order-1 lg:order-2">
              <h2 class="text-3xl font-heading font-bold mb-6 text-primary">Our Impact</h2>
              <p class="text-gray-700 mb-6">
                With a footprint in over 20 countries, Skymirror has transformed enterprises with technology and uplifted communities through education.
              </p>
              <p class="text-gray-700">
                Our solutions deliver industry-leading performance, scalability, and reliability, setting new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Call to Action Section -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-heading font-bold mb-6 text-primary">Our Vision</h2>
            <p class="text-gray-700 text-lg max-w-3xl mx-auto">
              To skyrocket global innovation by connecting people, businesses, and ideas through technology and education. We envision a world where sustainability and progress go hand in hand, and we're committed to making it a reality—today and tomorrow.
            </p>
          </div>
          
          <div class="glass-card interactive-card hover-lift rounded-xl p-8 text-center shadow-xl bg-white">
            <h3 class="text-2xl font-semibold mb-4 text-primary">Join Us</h3>
            <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ready to soar with us? Whether you're a business seeking transformation or an individual eager to learn, Skymirror is your partner in innovation. Contact us to explore how we can shape your future.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link to="/consultation" class="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg ripple hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                Request Consultation
              </router-link>
              <router-link to="/case-studies" class="px-8 py-3 bg-white text-primary font-semibold rounded-full border-2 border-primary shadow-lg hover:bg-neutral-50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                View Our Work
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script logic needed for this static page
</script>

<style scoped>
/* Using global glass-card styling */
</style>
