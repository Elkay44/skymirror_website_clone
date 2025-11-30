<template>
  <div>
    <!-- Hero Section -->
    <section id="main-content" class="relative pt-28 pb-12 overflow-hidden" role="main" aria-label="Main content">
      <!-- Animated background elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5"></div>
      <div class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="lg:w-1/2 space-y-4">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                <div class="w-2 h-2 bg-accent1 rounded-full animate-pulse"></div>
                <span class="text-primary font-semibold text-sm tracking-wide uppercase">Skyrocketing Global Innovation</span>
              </div>
              
              <h1 class="text-4xl md:text-6xl xl:text-7xl font-heading font-black leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent1">
                Software, AI,<br/>
                <span class="text-accent1">& Education</span><br/>
                <span class="text-gray-900">for Tomorrow</span>
              </h1>
              
              <p class="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed font-medium">
                Accelerate your business growth with <span class="text-primary font-semibold">cutting-edge software development</span>, <span class="text-accent1 font-semibold">AI applications</span>, and expert technology transfer
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/ai-applications" class="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                Explore Our AI Solutions
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
              
              <router-link to="/software-solutions" class="group px-8 py-4 bg-white hover:bg-gray-50 text-primary font-bold rounded-full border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                View Our Work
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>

            <!-- Success Metrics -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-black text-primary mb-2">50+</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-black text-accent1 mb-2">95%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-black text-primary mb-2">24/7</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">AI Support</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-black text-accent1 mb-2">Global</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Reach</div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2">
            <div class="relative">
              <!-- Modern Hero Visual -->
              <div class="relative">
                <!-- Main showcase card -->
                <div class="glass-card p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-accent1/10">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent1/20 to-primary/20 rounded-full blur-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent1/20 rounded-full blur-xl"></div>
                  
                  <div class="relative z-10 space-y-4">
                    <!-- Header -->
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-accent1 rounded-full animate-pulse"></div>
                        <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Live Innovation</span>
                      </div>
                      <div class="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Real-time</div>
                    </div>
                    
                    <!-- Featured Projects Grid -->
                    <div class="grid grid-cols-2 gap-4">
                      <!-- Traquiva Card -->
                      <div class="bg-gradient-to-br from-accent1/10 to-accent1/20 p-4 rounded-xl border border-accent1/30">
                        <div class="flex items-center gap-2 mb-2">
                          <div class="w-2 h-2 bg-accent1 rounded-full"></div>
                          <span class="text-sm font-bold text-accent1">Traquiva</span>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">AI Learning Platform</div>
                        <div class="flex items-center gap-2">
                          <div class="text-lg font-black text-accent1">95%</div>
                          <div class="text-xs text-gray-500">Success Rate</div>
                        </div>
                      </div>
                      
                      <!-- Checkmet Card -->
                      <div class="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-xl border border-primary/30">
                        <div class="flex items-center gap-2 mb-2">
                          <div class="w-2 h-2 bg-primary rounded-full"></div>
                          <span class="text-sm font-bold text-primary">Checkmet</span>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">AI Attendance</div>
                        <div class="flex items-center gap-2">
                          <div class="text-lg font-black text-primary">24/7</div>
                          <div class="text-xs text-gray-500">Monitoring</div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Performance Indicator -->
                    <div class="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-gray-700">Global Impact</span>
                        <span class="text-xs text-green-600 font-medium">↗ +127%</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-gradient-to-r from-primary to-accent1 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                      <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>50+ Projects</span>
                        <span>Global Reach</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Floating elements -->
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent1 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full opacity-30 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Traquiva Highlight Section -->
    <section class="py-20 bg-gradient-to-br from-accent1/5 to-primary/5">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="lg:w-1/2">
              <div class="inline-flex items-center gap-2 bg-accent1/10 text-accent1 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
                Featured Product
              </div>
              <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">
                Meet <span class="text-accent1">Traquiva</span>
              </h2>
              <p class="text-xl text-gray-700 mb-6">
                Our revolutionary AI-powered learning platform that transforms how people learn to code. From zero to industry-ready in months, not years.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">AI Mentorship 24/7</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">Real-World Projects</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">95% Success Rate</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="font-medium">Expert Mentors</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-4">
                <a href="https://www.traquiva.com" target="_blank" class="px-6 py-3 bg-accent1 hover:bg-accent1-dark text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                  Explore Traquiva
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.traquiva.com" target="_blank" class="px-6 py-3 bg-white hover:bg-gray-50 text-accent1 font-semibold rounded-full border-2 border-accent1 shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  Start Learning Free
                </a>
              </div>
            </div>
            
            <div class="lg:w-1/2">
              <div class="glass-card p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-semibold text-accent1 mb-2">Learning Journey</h3>
                  <p class="text-gray-600">From Beginner to Job-Ready Developer</p>
                </div>
                
                <!-- Learning Path Visualization -->
                <div class="space-y-4">
                  <div class="flex items-center gap-4 p-4 bg-accent1/5 rounded-lg">
                    <div class="w-8 h-8 bg-accent1 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <div>
                      <div class="font-medium">Choose Your Path</div>
                      <div class="text-sm text-gray-600">AI creates personalized curriculum</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <div class="font-medium">Build Real Projects</div>
                      <div class="text-sm text-gray-600">Portfolio-ready applications</div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4 p-4 bg-accent2/5 rounded-lg">
                    <div class="w-8 h-8 bg-accent2 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <div class="font-medium">Get Hired</div>
                      <div class="text-sm text-gray-600">Land your dream tech job</div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6 p-4 bg-gradient-to-r from-accent1/10 to-primary/10 rounded-lg text-center">
                  <div class="text-2xl font-bold text-accent1">3-6 Months</div>
                  <div class="text-sm text-gray-600">Average time to job placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="text-primary-dark font-semibold inline-block mb-2">Software Solutions</span>
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            Transform Your Business with <span class="text-primary">Software Solutions</span>
          </h2>
          <p class="text-lg text-gray-700">
            Experience cutting-edge software development and AI applications with our comprehensive suite of solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <!-- Solution Card 1 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-accent1/30 bg-white">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Software</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Software Solutions</h3>
              <p class="text-gray-600 mb-4">
                End-to-end software solutions from UI/UX design to backend infrastructure and deployment.
              </p>
              <router-link to="/full-stack-development" class="inline-flex items-center text-primary font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>




























          
          
          <!-- Solution Card 2 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-accent1/30 bg-white">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-accent1/10 p-3 rounded-lg text-accent1">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">AI</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">AI Applications</h3>
              <p class="text-gray-600 mb-4">
                Integrated AI solutions like Traquiva learning platform, Checkmet attendance system, and facial recognition.
              </p>
              <router-link to="/ai-applications" class="inline-flex items-center text-accent1 font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- Solution Card 3 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-accent1/30 bg-white">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div class="bg-accent2/10 p-3 rounded-lg text-accent2">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="bg-accent2/10 text-accent2 text-xs font-semibold px-2 py-1 rounded-full">Blockchain</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Technology Transfer</h3>
              <p class="text-gray-600 mb-4">
                Complete transfer solutions including product replication, machinery transfer, and franchising models.
              </p>
              <router-link to="/technology-transfer" class="inline-flex items-center text-accent2 font-medium">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>





            
          </div>
        </div>
      </div>
    </section>

    <!-- Project Showcase Gallery -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent1/10 to-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent1/20 mb-6">
            <div class="w-2 h-2 bg-accent1 rounded-full animate-pulse"></div>
            <span class="text-accent1 font-semibold text-sm tracking-wide uppercase">Project Showcase</span>
          </div>
          
          <h2 class="text-4xl md:text-6xl font-heading font-black mb-6">
            <span class="text-gray-900">Innovation</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Gallery</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            From cutting-edge AI platforms to enterprise solutions, explore our world-class projects
          </p>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Traquiva Project -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-accent1/20 to-accent1/40 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="bg-accent1 text-white text-xs font-bold px-3 py-1 rounded-full">AI Platform</span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-white font-bold text-xl mb-1">Traquiva</h3>
                <p class="text-white/80 text-sm">AI-Powered Learning Platform</p>
              </div>
              <!-- Floating elements -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                <div class="w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-2xl font-black text-accent1">95%</div>
                <div class="text-sm text-gray-600">Success Rate</div>
              </div>
              <a href="https://www.traquiva.com" target="_blank" class="group/link inline-flex items-center text-accent1 font-semibold hover:text-accent1-dark transition-colors">
                Explore Platform
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"></path>
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Checkmet Project -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">AI System</span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-white font-bold text-xl mb-1">Checkmet</h3>
                <p class="text-white/80 text-sm">Smart Attendance Management</p>
              </div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                <div class="w-12 h-12 border-2 border-white rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-2xl font-black text-primary">24/7</div>
                <div class="text-sm text-gray-600">Monitoring</div>
              </div>
              <a href="https://checkmet.eu/" target="_blank" class="group/link inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                View System
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"></path>
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Enterprise Solutions -->
          <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-accent2/20 to-accent2/40 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="bg-accent2 text-white text-xs font-bold px-3 py-1 rounded-full">Enterprise</span>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-white font-bold text-xl mb-1">Custom Solutions</h3>
                <p class="text-white/80 text-sm">Tailored Business Applications</p>
              </div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                <div class="w-20 h-12 border-2 border-white rounded-md animate-pulse"></div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-2xl font-black text-accent2">50+</div>
                <div class="text-sm text-gray-600">Projects</div>
              </div>
              <router-link to="/software-solutions" class="group/link inline-flex items-center text-accent2 font-semibold hover:text-accent2-dark transition-colors">
                View Portfolio
                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-12 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Premium CTA Card -->
          <div class="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent1/5 rounded-3xl"></div>
            
            <div class="relative z-10 space-y-4">
              <!-- Badge -->
              <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span class="text-primary font-semibold text-sm tracking-wide uppercase">Get Started</span>
              </div>
              
              <!-- Main heading -->
              <h2 class="text-4xl md:text-6xl font-heading font-black leading-tight">
                <span class="text-gray-900">Ready to</span><br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Transform Your Business?</span>
              </h2>
              
              <!-- Subtitle -->
              <p class="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                Schedule a consultation with our <span class="text-primary font-semibold">software and technology experts</span> to discover how Skymirror's solutions can <span class="text-accent1 font-semibold">drive your business forward</span>.
              </p>
              
              <!-- Enhanced CTA Button -->
              <div class="pt-4">
                <router-link to="/consultation" class="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Request a Consultation
                  <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
              
              <!-- Trust indicators -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="font-medium">Free Consultation</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="font-medium">24h Response</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="font-medium">Expert Team</span>
                </div>
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
  // Any client-side initialization can go here
  // This is where you would set up animations or interactions
})
</script>

<style scoped>
/* Using global backgrounds instead */</style>
