// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from "./plugins/tailwind-config.js";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "REALISE Lab",
  tagline: "Research on Analytics and Intelligence for Software Engineering",
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://REALISELab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'REALISELab', // Usually your GitHub org/user name.
  projectName: 'REALISELab.github.io', // Usually your repo name.
  trailingSlash: false, // GitHub Pages adds a trailing slash to Docusaurus URLs by default. It is recommended to set a trailingSlash config (true or false, not undefined).
  deploymentBranch: 'gh-pages', // The branch your GitHub pages site is deployed from.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [tailwindPlugin],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.png',
         
        },
        items: [
          {
           to: "/team",
            label: "Team",
            position: "left",
          },
          {
            to: "/publications",
             label: "Publications",
             position: "left",
           },
          {
            to: "/contact",
             label: "Contact Us",
             position: "right",
           },
           {
            to: "/projects",
             label: "Projects",
             position: "left",
           },
          //  {
          //   to: "/partners",
          //    label: "Partners",
          //    position: "left",
          //  },
           {
            to: "/blog",
             label: "News",
             position: "left",
           },
           {
            to: "/events",
             label: "Events",
             position: "left",
           },
          //  {
          //   to: "/apply",
          //   label: "Apply",
          //   position: "left",
          // },
        
         
        ],
      },
      footer: {
        style: "dark",
      
        links: [
          {
            title: "About Us",
            items: [
              {
                label: "Team",
                to: "/team",
              },
              {
                label: "Partners",
                to: "/partners",
              },
              {
                label: "Publications",
                to: "/publications",
              },
              
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Apply",
                to: "/apply",
              },
             
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/diegoeliascosta?lang=en",
              },
            ],
          },
          
          {
            title: "Contact Us",
            items: [
              {
                to: "/contact",
                 label: "Contact Us",
                 position: "right",
               },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} REALISE Lab`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
