// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lab Wiki',
  tagline: 'Internal Docs',
  url: 'https://CEGRcode.github.io',
  baseUrl: '/labtutorial/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CEGRcode', // Usually your GitHub org/user name.
  projectName: 'labtutorial', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /* Below is example code for adding an announcement banner if needed */
      /*
      announcementBar: {
        id: 'sitewide-banner',
        content:
          'Some message blah blah blah <a target="_blank" rel="noopener noreferrer" href="https://github.com/CEGRcode/labtutorial"> Some link blah blah blah</a>.',
        backgroundColor: '#000000',
        textColor: '#fff',
        isCloseable: false,
      },
      */
      navbar: {
        logo: {
          alt: 'Lab logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'http://pughlab.mbg.cornell.edu/',
        },
        items: [
          {
            type: 'doc',
            docId: 'General/FigureMaking/index',
            position: 'left',
            label: 'General',
          },
          {
            type: 'doc',
            docId: 'Software/index',
            position: 'left',
            label: 'Software',
          },
          {
            type: 'doc',
            docId: 'WetBench/index',
            position: 'left',
            label: 'Wet Bench',
          },
          {
            href: 'https://github.com/CEGRcode',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Pugh Lab Logo',
          src: 'img/pughlab_logo.svg',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki Home',
                to: 'General',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pugh Lab',
                href: 'https://pughlab.mbg.cornell.edu',
              },
              {
                label: 'Lai Lab',
                href: 'https://williamkmlai.github.io',
              },
            ],
          },
          {
            title: 'Other Tools We Develop',
            items: [
              {
                label: 'ScriptManager',
                href: 'http://pughlab.mbg.cornell.edu/scriptmanager-docs',
              },
              {
                label: 'PEGR',
                href: 'https://github.com/seqcode/pegr',
              },
              {
                label: 'STENCIL',
                href: 'http://pughlab.mbg.cornell.edu/stencil',
              },
              {
                label: 'GenoPipe',
                href: 'http://pughlab.mbg.cornell.edu/GenoPipe-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} labtutorial. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css',
      type: 'text/css',
      integrity: 'sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==',
      crossorigin: 'anonymous',
    }
  ],
};

module.exports = config;
