<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-10 overflow-hidden ">
      <!-- Dynamic background -->
      <div class="absolute inset-0 bg-gradient-to-br from-accent1/5 via-transparent to-primary/5"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-6xl mx-auto">
          <div class="space-y-4">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent1/10 to-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent1/20">
              <div class="w-2 h-2 bg-accent1 rounded-full animate-float"></div>
              <span class="text-accent1 font-semibold text-sm tracking-wide uppercase">AI Applications</span>
            </div>
            
            <!-- Main heading -->
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-heading font-black leading-[0.9]">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent1 via-accent1 to-primary">Intelligent</span><br/>
              <span class="text-gray-900">Solutions for</span><br/>
              <span class="text-primary">Modern Business</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Transforming operations with <span class="text-accent1 font-semibold">advanced AI-powered applications</span> including <span class="text-primary font-semibold">Traquiva learning platform</span>, Checkmet attendance management, and facial recognition.
            </p>
            
            <!-- Featured Products Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">95%</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Traquiva Success Rate</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-primary mb-2">24/7</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Checkmet Monitoring</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-black text-accent1 mb-2">AI</div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">Powered Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why AI Applications Section -->
    <section class="py-12 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-8">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">Why Choose Us</span>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">Why Choose Our</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-primary">AI Applications?</span>
          </h2>
          
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Our <span class="text-accent1 font-semibold">intelligent solutions</span> combine cutting-edge AI technologies with <span class="text-primary font-semibold">practical business applications</span>, creating systems that increase efficiency, reduce costs, and enhance security.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Left Column -->
          <div>
            <div class="mb-8 relative">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-xl transform -rotate-3"></div>
              <img src="https://checkmet.eu/images/checkmet_dash.JPG" alt="AI Concept" class="relative z-10 rounded-xl shadow-lg w-full object-cover aspect-video" />
            </div>
            
            <div class="p-6 bg-white rounded-xl border border-primary/10 shadow-sm">
              <h3 class="text-xl font-semibold mb-2">Custom AI Solutions</h3>
              <p class="text-gray-600 mb-4">
                Tailored AI applications designed to address your specific business challenges, from predictive analytics to process automation.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Automated attendance tracking with facial recognition</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Seamless integration with existing HR systems</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Real-time reporting and analytics dashboard</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Mobile application for remote check-ins</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Right Column -->
          <div class="flex flex-col justify-center">
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">AI-Powered Automation</h3>
                  <p class="text-gray-600">
                    Our AI solutions automate repetitive tasks, freeing up your team to focus on high-value tasks.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="w-14 h-14 bg-accent1/10 flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg class="w-8 h-8 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Predictive Analytics</h3>
                  <p class="text-gray-600">
                    Our AI-powered predictive analytics help you make data-driven decisions and stay ahead of the competition.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="w-14 h-14 bg-accent2/10 flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg class="w-8 h-8 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Facial Recognition</h3>
                  <p class="text-gray-600">
                    Our facial recognition technology provides secure and efficient identity verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-8">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent1/10 to-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent1/20 mb-6">
            <div class="w-2 h-2 bg-accent1 rounded-full animate-float"></div>
            <span class="text-accent1 font-semibold text-sm tracking-wide uppercase">Our Applications</span>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">Our</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-primary">AI Applications</span>
          </h3>
          
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Explore our suite of <span class="text-accent1 font-semibold">intelligent applications</span> that solve <span class="text-primary font-semibold">real business challenges</span>.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Facial Recognition Card -->
          <div class="glass-card interactive-card hover-lift rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105 border border-primary/30 bg-white relative overflow-hidden particles-bg">
            <div class="absolute top-0 right-0 bg-gradient-to-l from-primary/10 to-transparent w-32 h-32 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Facial Recognition Agents</h3>
              <p class="text-gray-600 mb-4">
                Custom facial recognition solutions for security, access control, and customer analytics with real-time monitoring capabilities.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Real-time monitoring and alerts</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Advanced security features</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Customizable solutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Traquiva Card -->
          <div class="glass-card interactive-card hover-lift rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105 border border-accent1/30 bg-white relative overflow-hidden particles-bg">
            <div class="absolute top-0 right-0 bg-gradient-to-l from-accent1/10 to-transparent w-32 h-32 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-accent1/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-xl font-semibold">Traquiva</h3>
                <span class="bg-accent1/10 text-accent1 text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
              </div>
              <p class="text-gray-600 mb-4">
                Revolutionary AI-powered learning platform that transforms how people master tech skills with 24/7 AI mentorship and real-world projects. <a href="https://www.traquiva.com/" class="text-accent1 hover:underline font-medium" target="_blank">Visit Traquiva →</a>
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>AI-powered personalized learning</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Real-world project portfolio</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>95% job placement success rate</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Checkmet Card -->
          <div class="glass-card interactive-card hover-lift rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105 border border-primary/30 bg-white relative overflow-hidden particles-bg">
            <div class="absolute top-0 right-0 bg-gradient-to-l from-primary/10 to-transparent w-32 h-32 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0113 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Checkmet</h3>
              <p class="text-gray-600 mb-4">
                Our AI-enabled attendance management system automates employee check-ins using advanced facial recognition technology. <a href="https://checkmet.eu/" class="text-primary hover:underline font-medium" target="_blank">Visit Checkmet →</a>
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Automated attendance tracking</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Real-time reporting and analytics</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Mobile application for remote check-ins</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- AI-Powered Automation Card -->
          <div class="glass-card interactive-card hover-lift rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-glow transform hover:-translate-y-2 hover:scale-105 border border-accent2/30 bg-white relative overflow-hidden particles-bg">
            <div class="absolute top-0 right-0 bg-gradient-to-l from-accent2/10 to-transparent w-32 h-32 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-accent2/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">AI-Powered Automation</h3>
              <p class="text-gray-600 mb-4">
                Our AI solutions automate repetitive tasks, freeing up your team to focus on high-value tasks.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Automated workflows</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Real-time monitoring and alerts</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Advanced analytics and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto mb-8">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">Technology Stack</span>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-heading font-black mb-6">
            <span class="text-gray-900">AI</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Technology Stack</span>
          </h2>
          
          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Our <span class="text-primary font-semibold">comprehensive technology stack</span> combines cutting-edge AI frameworks with <span class="text-accent1 font-semibold">scalable cloud infrastructure</span>.
          </p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <!-- Stack Level 1 -->
          <div class="relative mb-6">
            <div class="h-20 bg-primary/10 rounded-xl flex items-center justify-center">
              <h3 class="text-xl font-semibold text-primary">Enterprise Applications</h3>
            </div>
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <svg class="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <!-- Stack Level 2 -->
          <div class="relative mb-6">
            <div class="h-20 bg-accent1/10 rounded-xl flex items-center justify-center">
              <h3 class="text-xl font-semibold text-accent1"> AI Models and Algorithms</h3>
            </div>
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <svg class="w-8 h-8 text-accent1/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <!-- Stack Level 3 -->
          <div class="relative mb-6">
            <div class="h-20 bg-accent2/10 rounded-xl flex items-center justify-center">
              <h3 class="text-xl font-semibold text-accent2">Agentic Software Development Kit</h3>
            </div>
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <svg class="w-8 h-8 text-accent2/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <!-- Stack Level 4
          <div class="relative mb-6">
            <div class="h-20 bg-primary/10 rounded-xl flex items-center justify-center">
              <h3 class="text-xl font-semibold text-primary">Quantum Processing Units</h3>
            </div>
          </div> -->
          
          <div class="mt-12 text-center">
            <p class="text-gray-700 mb-6">
              Our full-stack approach ensures seamless integration from quantum hardware to enterprise applications.
            </p>
            <router-link to="/software-solutions" class="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              Explore Our Technology
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Experience Our AI Solutions ?</h2>
          <p class="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Discover how our Quantum AI solutions can transform your business with unprecedented computational power.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/consultation" class="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              Request a Demonstration
            </router-link>
            <router-link to="/software-solutions" class="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg ripple hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              Explore Our Solutions
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
</style>
