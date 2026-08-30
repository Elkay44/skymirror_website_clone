<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent1/5"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent1/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-primary/10 to-accent1/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-accent1/10 to-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent1/20 mb-6">
            <div class="w-2 h-2 bg-accent1 rounded-full animate-float"></div>
            <span class="text-accent1 font-semibold text-sm tracking-wide uppercase">Partner With Us</span>
          </div>

          <h1 class="text-3xl md:text-4xl xl:text-5xl font-heading font-black leading-[0.95] mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent1">Grow Together,</span><br/>
            <span class="text-gray-900">Innovate Faster</span>
          </h1>

          <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Skymirror builds long-term partnerships that <span class="text-primary font-semibold">accelerate go-to-market</span>,
            <span class="text-accent1 font-semibold">deepen technical capability</span>, and deliver measurable value to
            shared customers across software, AI, and education.
          </p>
        </div>
      </div>
    </section>

    <!-- Partner Programs Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="text-primary font-semibold text-sm tracking-wide uppercase block mb-2">Partnership Models</span>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-gray-900">Choose How You Want to Work With Us</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Technology Partners -->
          <div class="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4">
              <i class="fa-solid fa-layer-group text-primary text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">Technology Partners</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Integrate or build on our platforms — Traquiva, Checkmet, PolMirror, AskMeso, and MapLens. Access APIs,
              sandbox environments, and joint solution blueprints.
            </p>
          </div>

          <!-- Reseller and Distribution -->
          <div class="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-accent1/15 to-accent1/5 rounded-xl flex items-center justify-center mb-4">
              <i class="fa-solid fa-handshake text-accent1 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-accent1 mb-2">Reseller &amp; Distribution</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Bring Skymirror solutions to your market. Competitive margins, territory protection, sales enablement,
              and technical pre-sales support included.
            </p>
          </div>

          <!-- Academic Partners -->
          <div class="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-accent2/15 to-accent2/5 rounded-xl flex items-center justify-center mb-4">
              <i class="fa-solid fa-graduation-cap text-accent2 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-accent2 mb-2">Academic Partners</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Co-develop curricula, host technology transfer programs, and give your students hands-on industry
              experience through internships and applied projects.
            </p>
          </div>

          <!-- Strategic and Venture -->
          <div class="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-gradient-to-br from-primary/15 to-accent1/10 rounded-xl flex items-center justify-center mb-4">
              <i class="fa-solid fa-rocket text-primary text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">Strategic &amp; Venture</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Joint ventures, technology licensing, and co-investment opportunities for organizations shaping the
              next generation of software and AI.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner Section -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-accent1 font-semibold text-sm tracking-wide uppercase block mb-2">Why Skymirror</span>
            <h2 class="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
              A Partner Invested in <span class="text-accent1">Your Success</span>
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              We treat partnerships as long-term commitments, not transactions. From dedicated partner managers to
              joint marketing and revenue-sharing models, we build ecosystems where every participant wins.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <span class="font-semibold text-gray-900">Dedicated partner manager</span>
                  <span class="text-gray-600 block text-sm">A single point of contact for onboarding, enablement, and escalations.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <span class="font-semibold text-gray-900">Joint go-to-market support</span>
                  <span class="text-gray-600 block text-sm">Co-branded materials, case studies, and shared campaign calendars.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <span class="font-semibold text-gray-900">Technical enablement</span>
                  <span class="text-gray-600 block text-sm">Sandbox access, architecture reviews, and priority engineering support.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <span class="font-semibold text-gray-900">Transparent revenue models</span>
                  <span class="text-gray-600 block text-sm">Clear margins, recurring revenue-sharing, and predictable deal registration.</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Partner metrics -->
          <div class="grid grid-cols-2 gap-4">
            <div class="glass-card rounded-2xl p-6 text-center hover-lift transition-all duration-300">
              <div class="text-3xl font-black text-primary mb-1">3</div>
              <div class="text-xs font-medium text-gray-600 uppercase tracking-wide">Core Continents Served</div>
            </div>
            <div class="glass-card rounded-2xl p-6 text-center hover-lift transition-all duration-300">
              <div class="text-3xl font-black text-accent1 mb-1">6</div>
              <div class="text-xs font-medium text-gray-600 uppercase tracking-wide">Products in Portfolio</div>
            </div>
            <div class="glass-card rounded-2xl p-6 text-center hover-lift transition-all duration-300">
              <div class="text-3xl font-black text-primary mb-1">95%</div>
              <div class="text-xs font-medium text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div class="glass-card rounded-2xl p-6 text-center hover-lift transition-all duration-300">
              <div class="text-3xl font-black text-accent1 mb-1">24/7</div>
              <div class="text-xs font-medium text-gray-600 uppercase tracking-wide">Partner Support</div>
            </div>
            <div class="col-span-2 glass-card rounded-2xl p-6 hover-lift transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent1/5">
              <div class="flex items-center gap-3 mb-2">
                <i class="fa-solid fa-globe text-primary"></i>
                <span class="font-bold text-gray-900">Global Reach, Local Presence</span>
              </div>
              <p class="text-sm text-gray-600">
                Headquartered in Europe with delivery capabilities and academic network connections across
                multiple regions — your customers get local responsiveness at global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Partner CTA -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="glass-card rounded-3xl p-8 md:p-12 shadow-xl bg-gradient-to-br from-primary/5 via-white to-accent1/5 border border-primary/10 text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent1/10 to-primary/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent1 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i class="fa-solid fa-envelope-open-text text-white text-2xl"></i>
              </div>

              <h2 class="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">Start the Conversation</h2>
              <p class="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
                Tell us about your organization and where you see mutual opportunity. Our partnerships team
                responds within <span class="text-primary font-semibold">two business days</span>.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/consultation" class="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover-glow transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                  <i class="fa-solid fa-comments"></i>
                  Request a Partnership Call
                </router-link>
                <a href="mailto:info@skymirror.eu?subject=Partnership%20Inquiry" class="px-8 py-3 bg-white text-primary font-bold rounded-full border-2 border-primary shadow-lg hover:bg-primary/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                  <i class="fa-solid fa-envelope"></i>
                  info@skymirror.eu
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
// Partners page — content-driven, no backend logic required
</script>
