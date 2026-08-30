<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <span class="text-primary-dark font-semibold inline-block mb-2">Data Protection</span>
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">Cookie Policy</h1>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              How Skymirror uses cookies and similar technologies to keep our website working and improving.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cookie Policy Content Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="glass-card rounded-xl p-8 shadow-xl">
            <div class="space-y-8">
              <!-- Section 1: What Are Cookies -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">What Are Cookies?</h2>
                <p class="text-gray-700">
                  Cookies are small text files placed on your device when you visit a website. They help the site
                  function, remember preferences, and provide analytics about usage. Similar technologies — such as
                  localStorage — perform comparable functions.
                </p>
              </div>

              <!-- Section 2: What We Use -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Cookies We Use</h2>
                <div class="space-y-4 mt-4">
                  <div class="border-l-4 border-accent1 pl-4">
                    <h3 class="font-bold text-gray-900 mb-1">Essential</h3>
                    <p class="text-gray-700 text-sm">
                      Required for core functionality such as page navigation and security. The website cannot
                      function properly without them. Preferences such as cookie consent are also stored
                      functionally.
                    </p>
                  </div>
                  <div class="border-l-4 border-primary pl-4">
                    <h3 class="font-bold text-gray-900 mb-1">Analytics (Optional)</h3>
                    <p class="text-gray-700 text-sm">
                      Help us understand how visitors use the site — which pages are popular, where visitors come
                      from, and what devices they use — so we can improve the experience. These are only set with
                      your consent, where required.
                    </p>
                  </div>
                  <div class="border-l-4 border-accent2 pl-4">
                    <h3 class="font-bold text-gray-900 mb-1">Functional (Optional)</h3>
                    <p class="text-gray-700 text-sm">
                      Remember choices such as language or region to provide a more personalized experience. If
                      you contact us through forms, these help the forms work smoothly.
                    </p>
                  </div>
              </div>
              </div>

              <!-- Section 3: Third-Party -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Third-Party Services</h2>
                <p class="text-gray-700">
                  We use a small number of trusted third-party services (for example, form processing and
                  analytics). These services may set their own cookies under their own policies once activated.
                  We only work with providers who can process data on a GDPR-compliant basis.
                </p>
              </div>

              <!-- Section 4: Managing Cookies -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Managing Your Preferences</h2>
                <p class="text-gray-700">
                  You can control and delete cookies through your browser settings at any time — including
                  blocking all cookies or clearing those already set. Note that blocking essential cookies may
                  affect how parts of the website work.
                </p>
              </div>

              <!-- Section 5: Changes -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Changes to This Policy</h2>
                <p class="text-gray-700">
                  We may update this policy from time to time. The latest version is always available on this
                  page. Last updated: May 16, 2025.
                </p>
              </div>

              <!-- Section 6: Contact -->
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4 text-primary">Contact Us</h2>
                <p class="text-gray-700">
                  Questions about this policy or your data? Email us at
                  <a href="mailto:privacy@skymirror.eu" class="text-primary hover:underline">privacy@skymirror.eu</a>
                  or read our <router-link to="/privacy-policy" class="text-primary hover:underline">Privacy Policy</router-link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Cookie Policy — static content page
</script>
