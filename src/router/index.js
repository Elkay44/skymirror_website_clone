import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Solutions from '../views/Solutions.vue'
import CaseStudies from '../views/CaseStudies.vue'
// Renamed components to match new business focus
import QuantumComputing from '../views/QuantumComputing.vue' // Used for Full-Stack Development
import QuantumAI from '../views/QuantumAI.vue' // Used for AI Applications
import QuantumBlockchain from '../views/QuantumBlockchain.vue' // Used for Technology Transfer
import Technology from '../views/Technology.vue' // Used for Technology Transfer detail
import Enterprise from '../views/Enterprise.vue' // Used for Industry Solutions
import QuantumAIAutomation from '../views/QuantumAIAutomation.vue' // Used for Checkmet product
import About from '../views/About.vue'
import Careers from '../views/Careers.vue'
import Partners from '../views/Partners.vue'
import FAQ from '../views/FAQ.vue'
import Consultation from '../views/Consultation.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Software Solutions Section
  {
    path: '/software-solutions',
    name: 'SoftwareSolutions',
    component: Solutions
  },
  {
    path: '/full-stack-development',
    name: 'FullStackDevelopment',
    component: QuantumComputing
  },
  {
    path: '/ai-applications',
    name: 'AIApplications',
    component: QuantumAI
  },
  {
    path: '/checkmet',
    name: 'Checkmet',
    component: QuantumAIAutomation
  },
  {
    path: '/technology-transfer',
    name: 'TechnologyTransfer',
    component: QuantumBlockchain
  },
  
  // Training Section
  {
    path: '/training',
    name: 'Training',
    component: Technology
  },
  
  // Industry Solutions
  {
    path: '/industry-solutions',
    name: 'IndustrySolutions',
    component: Enterprise
  },
  
  // Case Studies & Proof of Work
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies
  },
  
  // Company Information
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  
  // Contact & Support
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  },
  
  // Legal Pages
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component:  CookiePolicy
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// Add this as the last route in your routes array


const router = createRouter({
  history: createWebHistory(),  // Remove the 'm' parameter
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Accounting for fixed header
      }
    }
    return savedPosition || { top: 0 }
  }
})

export default router