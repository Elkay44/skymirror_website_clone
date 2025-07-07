<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-3 overflow-hidden">
        <!-- Global background applied here -->
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <span class="text-primary-dark font-semibold inline-block mb-2">Talk to an expert</span>
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Guidance for Your Business</h1>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how Skymirror's solutions can address your most complex business challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Form Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-heading font-bold mb-4">Request a Consultation</h2>
              <p class="text-gray-700 mb-6">
                Fill out the form to schedule a consultation with our experts. We'll analyze your business needs and recommend the most suitable solutions.
              </p>
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">+36 205 3115 74</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700">info@skymirror.eu</span>
                </div>
              </div>
              <div class="p-6 bg-neutral-50 rounded-xl">
                <h3 class="text-xl font-semibold mb-3">What to Expect</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Response within 24 hours</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Initial consultation free of charge</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Tailored strategic recommendations</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>NDA protection for all discussions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="glass-card rounded-xl p-8">
              <form class="space-y-6" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      id="firstName"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      id="lastName"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    v-model="form.company"
                    type="text"
                    id="company"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label for="industry" class="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select
                    v-model="form.industry"
                    id="industry"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare & Pharmaceuticals</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="energy">Energy & Utilities</option>
                    <option value="tech">Technology</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Business Challenge</label>
                  <textarea
                    v-model="form.message"
                    id="message"
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Briefly describe the business challenge you're looking to solve"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'Submitting...' : 'Submit Request' }}
                  </button>
                  <p class="text-xs text-gray-500 mt-3">
                    By submitting this form, you agree to our
                    <router-link to="/privacy-policy" class="text-primary hover:underline">Privacy Policy</router-link>.
                  </p>
                </div>
              </form>
              <p v-if="responseMessage" :class="responseMessage.includes('Error') ? 'text-red-600' : 'text-green-600'" class="mt-4 text-center">
                {{ responseMessage }}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Process Section -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-heading font-bold mb-4">Our Consultation Process</h2>
          <p class="text-gray-700">
            A tailored approach to understanding your needs and delivering solutions.
          </p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Step 1 -->
            <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span class="text-primary font-bold text-xl">01</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Discovery</h3>
              <p class="text-gray-600">
                We'll explore your business challenges and identify where solutions can provide the most value.
              </p>
            </div>
            
            <!-- Step 2 -->
            <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span class="text-primary font-bold text-xl">02</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Strategy</h3>
              <p class="text-gray-600">
                Our experts will develop a tailored strategy aligned with your business objectives and technical requirements.
              </p>
            </div>
            
            <!-- Step 3 -->
            <div class="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div class="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <span class="text-primary font-bold text-xl">03</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Implementation</h3>
              <p class="text-gray-600">
                We'll guide you through the implementation of solutions, ensuring minimal disruption to your operations.
              </p>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <p class="text-gray-700">
              Our consultation process is designed to be collaborative, transparent, and focused on delivering measurable business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        industry: '',
        message: ''
      },
      responseMessage: '',
      isSubmitting: false
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.responseMessage = '';
      try {
        // Simple form submission without Google Apps Script
        console.log('Form data:', this.form);
        
        // Show success message
        this.responseMessage = 'Thank you for your submission! We will get back to you soon.';
        
        // Reset the form
        this.form = { 
          firstName: '', 
          lastName: '', 
          email: '', 
          company: '', 
          industry: '', 
          message: '' 
        };

        // Show alert
        alert('Thank you for your submission! Our team will contact you shortly.');

      } catch (error) {
        console.error('Error submitting form:', error);
        this.responseMessage = 'There was an error submitting your form. Please try again or contact us directly at info@skymirror.eu';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
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
