import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skymirror Business Plan',
  tagline: 'Software, AI, and Education for a Connected, Sustainable World',
  favicon: 'img/favicon.ico',

  url: 'https://internal.skymirror.eu',
  baseUrl: '/',

  organizationName: 'skymirror',
  projectName: 'internal-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Skymirror',
      logo: {
        alt: 'Skymirror Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'businessPlanSidebar',
          position: 'left',
          label: 'Business Plan',
        },
        {
          href: 'https://www.skymirror.eu',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://www.traquiva.com',
          label: 'Traquiva',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Business Plan',
          items: [
            {
              label: 'Executive Summary',
              to: '/docs/core/executive-summary',
            },
            {
              label: 'Products & Services',
              to: '/docs/core/products-and-services',
            },
            {
              label: 'Financial Plan',
              to: '/docs/core/financial-plan',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Checkmet',
              href: 'https://checkmet.eu',
            },
            {
              label: 'Traquiva',
              href: 'https://www.traquiva.com',
            },
            {
              label: 'Skymirror Academy',
              href: 'https://skymirror.academy',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Website',
              href: 'https://www.skymirror.eu',
            },
            {
              label: 'Contact',
              href: 'mailto:info@skymirror.eu',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skymirror. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
