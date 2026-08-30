<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5"></div>
      <div class="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div class="w-2 h-2 bg-accent1 rounded-full animate-float"></div>
            <span class="text-primary font-semibold text-sm tracking-wide uppercase">How Can We Help?</span>
          </div>

          <h1 class="text-3xl md:text-4xl xl:text-5xl font-heading font-black leading-[0.95] mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent1">Frequently Asked</span><br/>
            <span class="text-gray-900">Questions</span>
          </h1>

          <p class="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Everything you need to know about working with Skymirror. Can't find your answer?
            <router-link to="/consultation" class="text-primary font-semibold hover:underline">Get in touch</router-link> — we respond within two business days.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto space-y-10">
          <!-- General group -->
          <div v-for="group in faqGroups" :key="group.category">
            <h2 class="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-5 flex items-center gap-3">
              <span class="w-10 h-10 bg-gradient-to-br from-primary/15 to-accent1/10 rounded-xl flex items-center justify-center">
                <i :class="group.icon" class="text-primary"></i>
              </span>
              {{ group.category }}
            </h2>

            <div class="space-y-3">
              <div
                v-for="(item, index) in group.items"
                :key="index"
                class="glass-card rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary/5 transition-colors duration-200"
                  :aria-expanded="isOpen(group.category, index).toString()"
                  @click="toggle(group.category, index)"
                >
                  <span class="font-semibold text-gray-900">{{ item.q }}</span>
                  <i class="fa-solid flex-shrink-0 transition-transform duration-300"
                     :class="isOpen(group.category, index) ? 'fa-chevron-up rotate-180 text-accent1' : 'fa-chevron-down text-gray-400'"></i>
                </button>
                <div v-show="isOpen(group.category, index)" class="px-6 pb-5 -mt-1">
                  <p class="text-gray-700 leading-relaxed" v-html="item.a"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Still Have Questions CTA -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="glass-card rounded-3xl p-8 md:p-10 shadow-xl bg-gradient-to-br from-accent1/5 via-white to-primary/5 border border-accent1/10 text-center relative overflow-hidden">
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/10 to-accent1/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <div class="w-14 h-14 mx-auto bg-gradient-to-br from-accent1 to-primary rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                <i class="fa-solid fa-circle-question text-white text-xl"></i>
              </div>
              <h2 class="text-2xl font-heading font-bold text-gray-900 mb-3">Still Have Questions?</h2>
              <p class="text-gray-700 mb-7 max-w-xl mx-auto">
                Our team is happy to walk you through our services, products, or process in a free consultation.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover-glow transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                  <i class="fa-solid fa-calendar-check"></i>
                  Book a Free Consultation
                </router-link>
                <a href="mailto:info@skymirror.eu?subject=Questions%20About%20Skymirror" class="px-8 py-3 bg-white text-primary font-bold rounded-full border-2 border-primary shadow-lg hover:bg-primary/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                  <i class="fa-solid fa-envelope"></i>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const open = reactive({})

function isOpen (category, index) {
  return !!open[`${category}-${index}`]
}

function toggle (category, index) {
  const key = `${category}-${index}`
  open[key] = !open[key]
}

const faqGroups = [
  {
    category: 'Services & Engagement',
    icon: 'fa-solid fa-briefcase',
    items: [
      {
        q: 'What services does Skymirror offer?',
        a: 'We provide <strong class="text-primary">full-stack software development</strong>, <strong class="text-primary">AI application development</strong>, <strong class="text-primary">technology transfer</strong> programs, and <strong class="text-primary">industry-specific solutions</strong> across fintech, healthcare, logistics, education, and cybersecurity.'
      },
      {
        q: 'How does a typical project start?',
        a: 'Every engagement begins with a <strong class="text-primary">free consultation</strong> where we map your challenge to a solution approach. From there we agree on scope, timeline, and a delivery model — then move into structured discovery and iterative builds with regular demos.'
      },
      {
        q: 'Do you work with startups or only enterprises?',
        a: 'Both. We run <strong class="text-primary">MVP sprints for startups</strong> that need to validate fast, and <strong class="text-primary">enterprise-grade programs</strong> with compliance, security, and integration requirements.'
      },
      {
        q: 'Can you take over or rescue an existing project?',
        a: 'Yes. We start with a <strong class="text-primary">code and architecture audit</strong>, document risks and quick wins, then either stabilize the existing system or plan a pragmatic migration path.'
      }
    ]
  },
  {
    category: 'Products',
    icon: 'fa-solid fa-cubes',
    items: [
      {
        q: 'What products are in the Skymirror portfolio?',
        a: 'Our portfolio includes <strong class="text-primary">Traquiva</strong> (AI learning platform), <strong class="text-primary">Checkmet</strong> (AI attendance monitoring), <strong class="text-primary">PolMirror</strong>, <strong class="text-primary">AskMeso</strong>, <strong class="text-primary">MapLens</strong>, and the <strong class="text-primary">Nigerian Embassy Hungary</strong> portal.'
      },
      {
        q: 'Are your products available as white-label or licensed solutions?',
        a: 'Yes — several products support <strong class="text-primary">licensing and white-label deployment</strong>. Tell us which product fits your needs via the <a href="/consultation" class="text-primary underline">consultation form</a> and we will share options.'
      },
      {
        q: 'Can your products integrate with our existing systems?',
        a: 'Our platforms expose <strong class="text-primary">documented APIs</strong> and support common integration patterns (SSO, webhooks, data export). For complex landscapes we scope integration work during discovery.'
      }
    ]
  },
  {
    category: 'Training & Technology Transfer',
    icon: 'fa-solid fa-graduation-cap',
    items: [
      {
        q: 'What does your technology transfer program include?',
        a: 'Programs combine <strong class="text-primary">hands-on technical training</strong>, curriculum co-development, internship pipelines, and applied industry projects — designed to move knowledge from concept to production capability.'
      },
      {
        q: 'Do you offer internships?',
        a: 'Yes, we host <strong class="text-primary">internship cohorts</strong> in software engineering and AI. Check the <a href="/careers" class="text-primary underline">Careers page</a> for current openings.'
      }
    ]
  },
  {
    category: 'Pricing, Support & Security',
    icon: 'fa-solid fa-shield-halved',
    items: [
      {
        q: 'How is pricing structured?',
        a: 'We offer <strong class="text-primary">fixed-scope project pricing</strong> for well-defined work and <strong class="text-primary">dedicated-team subscriptions</strong> for ongoing product development. Product licensing is per-deployment. Every quote is transparent — no hidden line items.'
      },
      {
        q: 'What support do you provide after launch?',
        a: 'All projects include a <strong class="text-primary">warranty period</strong>. After that, SLA-backed maintenance plans cover monitoring, updates, security patches, and feature iterations.'
      },
      {
        q: 'How do you handle data privacy and security?',
        a: 'We follow <strong class="text-primary">GDPR-aligned practices</strong>, encrypt data in transit and at rest, and apply least-privilege access controls. Details are in our <a href="/privacy-policy" class="text-primary underline">Privacy Policy</a> and <a href="/terms-of-service" class="text-primary underline">Terms of Service</a>.'
      },
      {
        q: 'Where is Skymirror based, and do you work remotely?',
        a: 'We are headquartered in <strong class="text-primary">Europe</strong> and deliver remotely worldwide, with coverage across multiple time zones. Reach the team any time at <a href="mailto:info@skymirror.eu" class="text-primary underline">info@skymirror.eu</a>.'
      }
    ]
  }
]
</script>
