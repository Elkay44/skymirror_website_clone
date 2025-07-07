<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-36 pb-24 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <span class="text-primary font-semibold inline-block mb-3 text-lg">Skymirror Training</span>
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">Professional Tech Bootcamps</h1>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              Accelerate your career with our intensive, industry-focused bootcamps designed to develop in-demand technology skills.
            </p>
          </div>
          
          <div class="flex flex-wrap gap-4 justify-center mt-8">
            <a href="https://www.skymirror.academy" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1">
              Explore Bootcamps
            </a>
            <router-link to="/case-studies" class="px-6 py-3 bg-white hover:bg-gray-100 text-primary font-semibold rounded-full border-2 border-primary shadow-md transition-all duration-300 transform hover:-translate-y-1">
              Student Success Stories
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Bootcamp Programs Section -->
    <section class="py-20 bg-white border-t border-primary/5">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-heading font-bold mb-4">Our Bootcamp Programs</h2>
          <p class="text-gray-700">
            Intensive, hands-on training programs designed to accelerate your career in technology.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <!-- Tech Stack Card 1 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">AI/ML Engineering Bootcamp</h3>
              <p class="text-gray-600 mb-4">
                Comprehensive training in machine learning, neural networks, computer vision, and natural language processing.
              </p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Machine learning fundamentals
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Deep learning with TensorFlow
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Natural language processing
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Tech Stack Card 2 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="w-14 h-14 bg-accent1/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-accent1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Full-Stack Development Bootcamp</h3>
              <p class="text-gray-600 mb-4">
                Master modern web development from frontend to backend, including React, Node.js, and cloud deployment.
              </p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Frontend development with React
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Backend development with Node.js
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Cloud deployment with AWS
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Tech Stack Card 3 -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div class="p-6">
              <div class="w-14 h-14 bg-accent2/10 flex items-center justify-center rounded-lg mb-4">
                <svg class="w-8 h-8 text-accent2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Data Analytics/Engineering Bootcamp</h3>
              <p class="text-gray-600 mb-4">
                Learn data engineering, visualization, statistical analysis, and business intelligence tools.
              </p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Data visualization with Tableau
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Statistical analysis with Python
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Business intelligence with Power BI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Bootcamp Features Section -->
    <section class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-heading font-bold mb-4">Bootcamp Features & Benefits</h2>
          <p class="text-gray-700">
            What sets Skymirror bootcamps apart from traditional education and other coding schools.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Flexible Learning Options</h3>
              <p class="text-gray-600">
                Choose from full-time, part-time, or weekend programs to fit your schedule and learning goals.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Career Support</h3>
              <p class="text-gray-600">
                Get dedicated career coaching, resume review, and job placement assistance to help you land your dream job.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Community Network</h3>
              <p class="text-gray-600">
                Join a community of like-minded professionals and alumni, and get access to exclusive networking events.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Lifetime Access</h3>
              <p class="text-gray-600">
                Get lifetime access to our curriculum, including updates and new content, to help you stay ahead in your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-white border-t border-b border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Ready to Advance Your Tech Career?</h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our upcoming cohorts and transform your career with in-demand technology skills that employers are actively seeking.
          </p>
          <a href="https://www.skymirror.academy" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-dark">
            Apply Now
          </a>
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
/* Using global backgrounds instead */
</style>
