// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grove Quest",
  tagline: "Where History and Fun Unite!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://oipteam1b2023.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oipteam1b2023", // Usually your GitHub org/user name.
  projectName: "grovequest", // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/dailies",
          blogTitle: "Dailies",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Dailies",
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
      image: "img/logo.jpg",
      navbar: {
        title: "Grove Quest",
        logo: {
          alt: "Grove Quest Logo",
          src: "img/logo.png",
        },
        items: [
          //Prototypes etc.
          {
            type: "docSidebar",
            sidebarId: "ideationSidebar", //verify in sidebar.js (it automatically generates the sidebar from docs markdown :D)
            position: "left",
            label: "Ideation Process",
          },
          //Proud Achievements
          {
            type: "docSidebar",
            sidebarId: "proudSidebar",
            position: "left",
            label: "Proud Achievements",
          },
          //Demo
          { to: "/demo", label: "Demo", position: "left" },
          //Reflections
          {
            to: "/reflection",
            label: "Reflection",
            position: "left",
          },
          //Dailies
          { to: "/dailies", label: "Dailies", position: "left" },

          //About
          { to: "/our-team", label: "Our Team", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Explore",
            items: [
              {
                label: "Ideation Process",
                to: "/docs/ideation-process/background",
              },
              {
                label: "Proud Achievements",
                to: "/docs/proud-achievements/proud",
              },
              {
                label: "Demo",
                to: "/demo",
              },
              {
                label: "Reflection",
                to: "/reflection",
              },
              {
                label: "Dailies",
                to: "/dailies",
              },
            ],
          },
          {
            title: "Project",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Design-and-Innovation-2023/Grove-Quest-Interactive-Adventure",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "Our Team",
                to: "/our-team",
              },
              {
                label: "Email",
                href: "mailto:oipteam1b@gmail.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OIP Team 1B. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
