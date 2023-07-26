// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OIP Team 1B",
  tagline: "Grove Quest",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oipteam1b2023", // Usually your GitHub org/user name.
  projectName: "oipteam1b2023", // Usually your repo name.

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
        title: "OIP Team 1B",
        logo: {
          alt: "OIP Team 1B Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "ideationSidebar", //verify in sidebar.js (it automatically generates the sidebar from docs markdown :D)
            position: "left",
            label: "Ideation Process",
          },
          //Prototypes etc.
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Proud Achievements",
          },
          //Proud Achievements
          { to: "/blog", label: "Blog", position: "left" },
          //Dailies
          {
            href: "https://github.com/dthx2710/oipteam1b2023",
            label: "GitHub",
            position: "right",
          },
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
                to: "/docs/process",
              },
              {
                label: "Proud Achievements",
                to: "/docs/proud",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Project",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dthx2710/oipteam1b2023",
              },
            ],
          },
          {
            title: "Connect",
            items: [
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
