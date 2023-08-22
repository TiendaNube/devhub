// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevHub Nuvemshop",
  tagline: "DevHub Nuvemshop",
  favicon: "img/favicon.ico",
  deploymentBranch: "gh-pages",
  // Set the production url of your site here
  url: "https://tiendanube.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/devhub-apps/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TiendaNube", // Usually your GitHub org/user name.
  projectName: "devhub-apps", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/TiendaNube/app-templates-hub/tree/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      colorMode: {
        defaultMode: "light",
      },
      navbar: {
        logo: {
          alt: "DevHub Nuvemshop",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          height: 24,
          width: 140,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "right",
            label: "Docs",
          },
          {
            type: "dropdown",
            label: "Dev tools",
            position: "right",
            items: [
              {
                to: "docs/developer-tools/templates",
                label: "App Templates",
              },
              {
                to: "docs/developer-tools/nimbus",
                label: "Nimbus",
              },
              {
                to: "docs/developer-tools/nexo",
                label: "Nexo",
              },
              {
                to: "docs/developer-tools/nuvemshop-api",
                label: "Nuvemshop API",
              },
            ],
          },
        ],
      },
      footer: {
        logo: {
          alt: "DevHub Nuvemshop",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          height: 24,
          width: 140,
        },
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Getting started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
