<template>
  <div class="text-neutral-800">

    <!-- ===================== HERO ===================== -->
    <section id="main-content" aria-label="Introduction" class="relative pt-28 pb-12 overflow-hidden particles-bg">
      <!-- Dynamic background (matches the rest of the site) -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 animate-gradient"></div>
      <div class="absolute top-20 right-16 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-16 left-16 w-72 h-72 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <!-- Left: message -->
          <div class="lg:w-1/2 space-y-6" data-reveal>
            <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
              <span class="text-primary font-semibold text-xs sm:text-sm tracking-wide uppercase">Skyrocketing Global Innovation</span>
            </div>

            <h1 class="font-heading font-black leading-[1.02] text-[2.4rem] sm:text-5xl xl:text-6xl">
              <span class="text-gray-900">Your idea.</span><br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">Built, shipped,</span><br />
              <span class="text-accent1">working.</span>
            </h1>

            <p class="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
              Skymirror is a software studio. We turn ambitious ideas into live
              products — our own, our clients', and our partners' — running across
              Europe and Africa.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/consultation"
                class="group ripple inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Start your project
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
              <router-link
                to="/case-studies"
                class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-primary/5 text-primary font-bold rounded-full border-2 border-primary shadow-lg hover:shadow-xl hover-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                See what we've shipped
              </router-link>
            </div>

            <p class="text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span v-for="item in proof" :key="item" class="inline-flex items-center gap-1.5">
                <svg class="w-4 h-4 text-accent1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ item }}
              </span>
            </p>
          </div>

          <!-- Right: live visual -->
          <div class="lg:w-1/2 w-full" data-reveal>
            <div class="relative animate-float">
              <div class="relative group">
                <div class="glass-card interactive-card hover-lift p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-accent1/10 transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,163,157,0.2)] group-hover:border-primary/40">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent1/20 to-primary/20 rounded-full blur-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent1/20 rounded-full blur-xl"></div>

                  <div class="relative z-10 space-y-4">
                    <!-- Header -->
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-accent1 rounded-full animate-float"></div>
                        <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Live Innovation</span>
                      </div>
                      <div class="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Real-time</div>
                    </div>

                    <!-- Featured Projects Grid -->
                    <div class="grid grid-cols-2 gap-4">
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
                        <div class="bg-gradient-to-r from-primary to-accent1 h-2 rounded-full w-4/5"></div>
                      </div>
                      <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>6 Products</span>
                        <span>Global Reach</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Floating accents -->
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent1 rounded-full opacity-20 animate-float"></div>
                <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full opacity-30 animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- in production now -->
        <div class="mt-16 max-w-4xl mx-auto" data-reveal>
          <div class="glass-card float-gentle px-6 py-8 sm:px-12 relative">
            <div class="hidden lg:block pointer-events-none absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent1/25 animate-float"></div>
            <p class="text-center text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-6">
              In production now
            </p>
            <div class="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
              <a
                v-for="p in shipped"
                :key="p.name"
                :href="p.url"
                target="_blank"
                rel="noopener"
                class="font-heading font-bold text-base sm:text-lg text-gray-500 hover:text-accent1 transition-colors"
              >
                {{ p.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== MANIFESTO ===================== -->
    <section class="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-accent1/5 to-primary/5">
      <div class="absolute top-10 -right-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center" data-reveal>
          <h2 class="font-heading font-black leading-[1.1] text-2xl sm:text-3xl lg:text-4xl">
            <span class="text-gray-900">Anyone can hand you a roadmap.</span><br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">We hand you the running app.</span>
          </h2>
          <p class="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            No slideware, no theatre. A working build in your hands from week one —
            and software that's still running years later.
          </p>

          <div class="mt-12 grid sm:grid-cols-3 gap-x-6 gap-y-8 max-w-3xl mx-auto text-left sm:text-center">
            <div v-for="pt in manifestoPoints" :key="pt" class="flex sm:block items-start gap-3">
              <svg class="w-5 h-5 text-accent1 mt-0.5 sm:mx-auto sm:mb-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 font-medium">{{ pt }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FEATURED: TRAQUIVA ===================== -->
    <section class="relative overflow-hidden py-16 sm:py-24">
      <div class="absolute top-10 right-0 w-96 h-96 bg-gradient-to-br from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-reveal>
            <div class="inline-flex items-center gap-2 bg-accent1/10 text-accent1 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              Featured product
            </div>
            <h2 class="font-heading font-black text-3xl sm:text-4xl leading-[1.05]">
              Meet <span class="text-accent1">Traquiva</span>
            </h2>
            <p class="mt-6 text-lg text-gray-700 leading-relaxed">
              An AI mentor that teaches you to build software. A path shaped around
              how you learn, real projects instead of lectures, and feedback the
              moment you're stuck.
            </p>

            <ul class="mt-8 space-y-3">
              <li v-for="f in traquivaPoints" :key="f" class="flex items-start gap-3">
                <div class="w-8 h-8 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700 font-medium mt-1">{{ f }}</span>
              </li>
            </ul>

            <div class="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.traquiva.com"
                target="_blank"
                rel="noopener"
                class="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent1 hover:bg-accent1-dark text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Explore Traquiva
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div data-reveal class="relative">
            <div class="hidden lg:block pointer-events-none absolute -top-4 -right-4 w-7 h-7 rounded-full bg-accent1/30 animate-float"></div>
            <div class="glass-card animate-float p-8">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-semibold text-accent1 mb-1">Learning journey</h3>
                <p class="text-gray-600">From beginner to job-ready developer</p>
              </div>
              <ol class="space-y-4">
                <li v-for="(step, i) in traquivaPath" :key="step.title" class="flex items-start gap-4 p-4 rounded-lg" :class="i === 1 ? 'bg-primary/5' : 'bg-accent1/5'">
                  <span class="shrink-0 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center" :class="i === 1 ? 'bg-primary' : 'bg-accent1'">{{ i + 1 }}</span>
                  <div>
                    <p class="font-semibold text-gray-900">{{ step.title }}</p>
                    <p class="text-sm text-gray-600">{{ step.text }}</p>
                  </div>
                </li>
              </ol>
              <div class="mt-6 p-4 bg-gradient-to-r from-accent1/10 to-primary/10 rounded-lg text-center">
                <div class="text-2xl font-bold text-accent1">3–6 months</div>
                <div class="text-sm text-gray-600">a typical run to job placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== SELECTED WORK ===================== -->
    <section class="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="absolute -top-10 left-1/3 w-80 h-80 bg-accent1/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mb-12" data-reveal>
          <div class="inline-flex items-center gap-2 bg-accent1/10 text-accent1 px-4 py-2 rounded-full text-sm font-semibold mb-4">Selected work</div>
          <h2 class="font-heading font-black text-3xl sm:text-4xl leading-[1.1]">
            Products people <span class="text-accent1">use every day.</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <a
            v-for="w in work"
            :key="w.name"
            :href="w.url"
            target="_blank"
            rel="noopener"
            class="group glass-card interactive-card hover-lift flex flex-col p-7"
            data-reveal
          >
            <span class="text-xs font-semibold uppercase tracking-wide text-gray-400">{{ w.tag }}</span>
            <h3 class="mt-3 font-heading font-bold text-xl text-gray-900">{{ w.name }}</h3>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">{{ w.blurb }}</p>
            <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent1">
              Visit
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>
        </div>

        <div class="mt-12" data-reveal>
          <router-link to="/case-studies" class="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent1 transition-colors">
            Read the case studies
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ===================== CAPABILITIES ===================== -->
    <section class="relative overflow-hidden py-16 sm:py-24">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mb-12" data-reveal>
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">What we do</div>
          <h2 class="font-heading font-black text-3xl sm:text-4xl leading-[1.1]">
            Whatever it takes to <span class="text-primary">get you live.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl">
          <router-link
            v-for="c in capabilities"
            :key="c.title"
            :to="c.to"
            class="group glass-card interactive-card hover-lift p-8"
            data-reveal
          >
            <h3 class="font-heading font-bold text-xl text-gray-900">{{ c.title }}</h3>
            <p class="mt-3 text-gray-600 leading-relaxed">{{ c.text }}</p>
            <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent1">
              Learn more
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </router-link>
        </div>

        <p class="mt-10 text-gray-700 max-w-2xl" data-reveal>
          Plus <span class="font-semibold text-gray-900">Skymirror Academy</span> — a
          training arm that turns local talent into engineers who ship.
          <router-link to="/training" class="font-semibold text-accent1 hover:underline">Explore training →</router-link>
        </p>
      </div>
    </section>

    <!-- ===================== HOW WE WORK ===================== -->
    <section class="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mb-12" data-reveal>
          <div class="inline-flex items-center gap-2 bg-accent1/10 text-accent1 px-4 py-2 rounded-full text-sm font-semibold mb-4">How we work</div>
          <h2 class="font-heading font-black text-3xl sm:text-4xl leading-[1.1]">
            Three steps. <span class="text-accent1">No black box.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div v-for="step in steps" :key="step.n" data-reveal class="glass-card interactive-card p-7">
            <div class="font-heading font-black text-3xl text-accent1">{{ step.n }}</div>
            <h3 class="mt-3 font-heading font-bold text-xl text-gray-900">{{ step.title }}</h3>
            <p class="mt-3 text-gray-600 leading-relaxed">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FINAL CTA ===================== -->
    <section class="relative overflow-hidden py-16 sm:py-24 particles-bg">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5 animate-gradient"></div>
      <div class="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent1/10 to-primary/10 rounded-full blur-2xl animate-float-delayed"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto" data-reveal>
          <div class="glass-card p-10 sm:p-12 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent1/5"></div>
            <div class="relative z-10 space-y-5">
              <div class="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent1/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                <div class="w-2 h-2 bg-primary rounded-full animate-float"></div>
                <span class="text-primary font-semibold text-sm tracking-wide uppercase">Get started</span>
              </div>

              <h2 class="font-heading font-black leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
                <span class="text-gray-900">You've got the idea.</span><br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent1">We've got the team.</span>
              </h2>
              <p class="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
                Book a free consultation. We'll reply within 24 hours.
              </p>

              <div class="pt-2">
                <router-link
                  to="/consultation"
                  class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Start your project
                  <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </router-link>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto">
                <div v-for="item in proof" :key="item" class="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-accent1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-medium">{{ item }}</span>
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
import { onMounted, onBeforeUnmount } from 'vue'

const proof = ['Free consultation', 'Reply within 24 hours', 'NDA on request']

const shipped = [
  { name: 'Traquiva', url: 'https://www.traquiva.com' },
  { name: 'Checkmet', url: 'https://checkmet.eu/' },
  { name: 'Maplens', url: 'https://maplens.io/' },
  { name: 'Polmirror', url: 'https://polmirror.com/' },
  { name: 'AskMeso', url: 'https://askmeso.io/' },
  { name: 'Nigerian Embassy Budapest', url: 'https://nigerianembassy.hu/' },
]

const manifestoPoints = [
  'Live for a national embassy',
  'Serving citizens across five countries',
  'Built for clients on two continents',
]

const traquivaPoints = [
  'Personalised curriculum, set by AI',
  'Portfolio projects, not toy exercises',
  '24/7 mentorship that never sleeps',
]

const traquivaPath = [
  { title: 'Pick a goal', text: 'The AI builds a learning path around it.' },
  { title: 'Build real projects', text: 'Ship portfolio-ready applications as you go.' },
  { title: 'Get hired', text: 'Walk into interviews with proof, not promises.' },
]

const work = [
  {
    name: 'Checkmet',
    tag: 'Computer vision',
    url: 'https://checkmet.eu/',
    blurb: 'Facial-recognition attendance with contactless, sub-second check-in — built for teams working across many locations.',
  },
  {
    name: 'Maplens',
    tag: 'AI marketplace',
    url: 'https://maplens.io/',
    blurb: 'An AI property marketplace for Nigeria. Every listing human-verified, every price checked against its street in real time.',
  },
  {
    name: 'Polmirror',
    tag: 'Intelligence platform',
    url: 'https://polmirror.com/',
    blurb: 'Real-time political intelligence and field operations — mapping, analytics and mobilisation for campaigns and organisations.',
  },
  {
    name: 'AskMeso',
    tag: 'AI mentor',
    url: 'https://askmeso.io/',
    blurb: 'An AI mentor for Mathematics Olympiad competitors, built to widen access to advanced STEM — especially for women and girls.',
  },
  {
    name: 'Nigerian Embassy Budapest',
    tag: 'Government portal',
    url: 'https://nigerianembassy.hu/',
    blurb: 'The official embassy website and citizen portal, digitising consular services for Nigerians across five countries.',
  },
  {
    name: 'Traquiva',
    tag: 'AI learning platform',
    url: 'https://www.traquiva.com',
    blurb: 'An AI mentor that takes people from their first line of code to a job in tech, with a path shaped around how they learn.',
  },
]

const capabilities = [
  {
    title: 'Software development',
    to: '/full-stack-development',
    text: 'Web, mobile, cloud. Design through deployment, one team the whole way.',
  },
  {
    title: 'AI applications',
    to: '/ai-applications',
    text: 'Computer vision, language models, automation — running in production, not stuck in a demo.',
  },
  {
    title: 'Technology transfer',
    to: '/technology-transfer',
    text: 'We build it, then hand you the code, the docs and the know-how to run it yourself.',
  },
]

const steps = [
  { n: '01', title: 'Talk it through', text: 'A free consultation where we pressure-test the idea and map the shortest path to live.' },
  { n: '02', title: 'Build in the open', text: 'A working build every week. No black box, no surprises at the end.' },
  { n: '03', title: 'Ship and support', text: 'Your product goes live in production — and stays there, with us or your own team at the wheel.' },
]

let observer = null

onMounted(() => {
  const els = document.querySelectorAll('[data-reveal]')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('reveal-in'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
  )

  els.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

[data-reveal].reveal-in {
  opacity: 1;
  transform: none;
}

/* frosted surfaces on this page share one radius */
.glass-card {
  border-radius: 1.5rem;
}

/* a calmer drift than the global 6s / 20px float, for interactive cards */
.float-gentle {
  animation: floatGentle 7s ease-in-out infinite;
}

@keyframes floatGentle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .animate-float,
  .animate-float-delayed,
  .float-gentle {
    animation: none;
  }
}
</style>
