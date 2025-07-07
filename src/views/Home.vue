<template>
  <div>
    <!-- Hero Section -->
    <section id="main-content" class="relative pt-20 pb-24 overflow-hidden" role="main" aria-label="Main content">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="lg:w-1/2 space-y-8">
            <!-- <span class="text-primary font-semibold inline-block mb-3 text-2xl">Skyrocketing Global Innovation</span> -->
            <h1 class="text-2xl md:text-3xl xl:text-4xl font-heading font-bold leading-tight text-primary">
              Software, AI, and Education for a Connected, Sustainable World
            </h1>
            <p class="text-lg text-gray-800 max-w-xl leading-relaxed">
              Accelerate your business growth with cutting-edge software development, AI applications, and expert technology transfer
            </p>

            <!-- Value proposition items -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="flex items-start gap-4">
                <div class="text-primary p-3 bg-primary/5 rounded-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Tech Pioneers</h4>
                  <p class="text-gray-600">Leading-edge software solutions for a global future</p>
                </div>
              </div>


              <div class="flex items-start gap-4">
                <div class="text-primary p-3 bg-primary/5 rounded-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">AI Visionaries</h4>
                  <p class="text-gray-600">Advanced AI applications driving sustainable impact</p>
                </div>
              </div>





              
              <div class="flex items-start gap-4">
                <div class="text-accent1 p-3 bg-accent1/5 rounded-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Education Leaders</h4>
                  <p class="text-gray-600">Empowering communities with tech training worldwide</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="text-accent2 p-3 bg-accent2/5 rounded-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Transfer Innovators</h4>
                  <p class="text-gray-600">Bridging global gaps with impactful technology transfers</p>
                </div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4 mt-8">
              <router-link to="/software-solutions" class="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1">
                Explore Solutions
              </router-link>
              <router-link to="/consultation" class="px-6 py-3 bg-white hover:bg-gray-100 text-primary font-semibold rounded-full border-2 border-primary shadow-md transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </router-link>
            </div>
          </div>
          
          <div class="lg:w-1/2">
            <div class="relative">
              <!-- Hero Visualization - Bar Chart -->
              <div class="glass-card p-10 rounded-2xl shadow-xl relative overflow-hidden border border-primary/20">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent1/5 backdrop-blur-sm"></div>
                <div class="relative z-10">
                  <!-- <h3 class="text-2xl font-semibold mb-4 text-primary">Technology Performance Metrics</h3> -->
                  
                  <!-- SVG Bar Chart Visualization -->
                  <div class="aspect-video bg-white rounded-lg mb-6 p-6 shadow-inner border border-gray-100">
                    <div class="flex items-end justify-between h-full w-full relative">
                      <!-- Y-axis label -->
                      <div class="absolute -left-6 top-1/2 -rotate-90 text-gray-500 text-sm font-medium">Performance</div>
                      
                      <!-- X-axis -->
                      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"></div>
                      
                      <!-- Vertical grid lines -->
                      <div class="absolute bottom-0 left-1/4 w-[1px] h-full bg-gray-100"></div>
                      <div class="absolute bottom-0 left-1/2 w-[1px] h-full bg-gray-100"></div>
                      <div class="absolute bottom-0 left-3/4 w-[1px] h-full bg-gray-100"></div>
                      
                      <!-- Bar 1: Traditional Computing -->
                      <div class="flex flex-col items-center w-[60px] h-full">
                        <div class="h-[30%] w-full rounded-t-lg bg-gradient-to-t from-gray-400 to-gray-300 shadow-lg relative overflow-hidden group transition-all duration-500 hover:h-[32%]">
                          <div class="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                          <div class="absolute bottom-0 right-0 w-8 h-8 bg-white/10 rounded-full -m-4"></div>
                        </div>
                        <span class="mt-3 text-sm text-gray-600 font-medium">Traditional</span>
                      </div>
                      
                      <!-- Bar 2: Cloud Computing -->
                      <div class="flex flex-col items-center w-[60px] h-full">
                        <div class="h-[45%] w-full rounded-t-lg bg-gradient-to-t from-blue-400 to-blue-300 shadow-lg relative overflow-hidden group transition-all duration-500 hover:h-[47%]">
                          <div class="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                          <div class="absolute bottom-0 right-0 w-8 h-8 bg-white/10 rounded-full -m-4"></div>
                        </div>
                        <span class="mt-3 text-sm text-gray-600 font-medium">Cloud</span>
                      </div>
                      
                      <!-- Bar 3: Quantum AI -->
                      <div class="flex flex-col items-center w-[60px] h-full">
                        <div class="h-[80%] w-full rounded-t-lg bg-gradient-to-t from-accent1-dark to-accent1 shadow-lg relative overflow-hidden group transition-all duration-500 hover:h-[82%]">
                          <div class="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                          <div class="absolute bottom-0 right-0 w-8 h-8 bg-white/10 rounded-full -m-4"></div>
                          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz4KICA8L3BhdHRlcm4+Cjwvc3ZnPg==')]"></div>
                        </div>
                        <span class="mt-3 text-sm text-gray-600 font-medium">AI Solutions</span>
                      </div>
                      
                      <!-- Bar 4: Skymirror -->
                      <div class="flex flex-col items-center w-[60px] h-full">
                        <div class="h-[95%] w-full rounded-t-lg bg-gradient-to-t from-primary-dark to-primary shadow-lg relative overflow-hidden group transition-all duration-500 hover:h-[97%]">
                          <!-- Glowing effect -->
                          <div class="absolute inset-0 opacity-75 bg-white/10 animate-pulse"></div>
                          <div class="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                          <div class="absolute bottom-0 right-0 w-10 h-10 bg-white/10 rounded-full -m-4"></div>
                          <!-- Particle effect -->
                          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjIiLz4KICA8L3BhdHRlcm4+Cjwvc3ZnPg==')]"></div>
                        </div>
                        <span class="mt-3 text-sm text-gray-600 font-medium">Skymirror</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex gap-4 flex-wrap">
                    <div class="bg-primary/5 p-3 rounded-lg flex items-center gap-2 border border-primary/10">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="font-medium">95% Faster</span>
                    </div>
                    <div class="bg-accent1/5 p-3 rounded-lg flex items-center gap-2 border border-accent1/10">
                      <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="font-medium">200x Scaling</span>
                    </div>
                    <div class="bg-accent2/5 p-3 rounded-lg flex items-center gap-2 border border-accent2/10">
                      <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="font-medium">100% Secure</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Feature Cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="glass-card p-4 rounded-xl">
                  <div class="flex items-start gap-3">
                    <div class="bg-white/10 p-2 rounded-lg text-primary">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7H7v6h6V7z"></path>
                        <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold">AI Applications</h3>
                      <p class="text-sm text-gray-600">Custom AI solutions like Checkmet and facial recognition</p>
                    </div>
                  </div>
                </div>
                
                <div class="glass-card p-4 rounded-xl">
                  <div class="flex items-start gap-3">
                    <div class="bg-white/10 p-2 rounded-lg text-accent1">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold">Technology Transfer</h3>
                      <p class="text-sm text-gray-600">Product replication, machinery transfer, and franchising</p>
                    </div>
                  </div>
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
        <div class="text-center max-w-3xl mx-auto mb-12">
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
                Integrated AI solutions like Checkmet attendance system and facial recognition.
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
    
    <!-- CTA Section -->
    <section class="py-20 border-t border-b border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Ready to Transform Your Business?</h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our software and technology experts to discover how Skymirror's solutions can drive your business forward.
          </p>
          <router-link to="/consultation" class="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-dark inline-block">
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
  // Any client-side initialization can go here
  // This is where you would set up animations or interactions
})
</script>

<style scoped>
/* Using global backgrounds instead */</style>
