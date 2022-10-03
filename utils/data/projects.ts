import { getProjectLink } from "../helpers";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A dive into my experience within Software Development. To see what i have done and what my interests and aspirations are.",
    techniques: ["Next", "TypeScript", "Vercel"],
    links: {
      github: "https://github.com/EmilPedersenDev/personal-portfolio-next",
      website: "https://emilpedersen.tech/",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 2,
    title: "Layout Editor",
    description:
      "With this tool, all the Refined customers can create their own unique sites in Jira or Confluence. Lives within Refined for Cloud.",
    techniques: ["Vue", "Node", "Express", "Heroku"],
    links: {
      github: "",
      website: "https://marketplace.atlassian.com/apps/1218481/refined-for-jira-cloud?hosting=cloud&tab=overview",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 3,
    title: "Url Shortener",
    description:
      "Providing an option for the Oatly employees to shorten all of their links and offering the possibility to export their links as QR codes.",
    techniques: ["Next", "Node", "TypeScript", "SQL"],
    links: {
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 4,
    title: "Personal Website",
    description: "My old website for displaying projects and experiences i have had.",
    techniques: ["JavaScript", "Vue", "Heroku"],
    links: {
      github: "https://github.com/EmilPedersenDev/personal-portfolio",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 5,
    title: "Skanetrafiken.se",
    description: "An app for buying tickets digitally for public transport. Used by travellers within Skane county.",
    techniques: ["Vue", "c#", "JavaScript", "Azure"],
    links: {
      github: "",
      website: "https://www.skanetrafiken.se/",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 6,
    title: "Google Oauth2",
    description:
      "Google authentication for internal Refined products. Implementing Google Oauth in Node/Express and providing the employees to sign in with their Google accounts.",
    techniques: ["Node", "Express", "Oauth2"],
    links: {
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 7,
    title: "Theme Editor",
    description: "An app integrated in all Refined products to change the theme of your Jira or Confluence site.",
    techniques: ["Vue", "Vuex", "SASS"],
    links: {
      github: "",
      website: "https://marketplace.atlassian.com/apps/1218481/refined-for-jira-cloud?hosting=cloud&tab=overview",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },

  {
    id: 8,
    title: "DevQnect",
    description: "Connect with developers for collaboration or to exchange ideas of various software related topics.",
    techniques: ["Vue", "MySql", "Node", "Express"],
    links: {
      github: "https://github.com/EmilPedersenDev/search-developer-fe",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },

  {
    id: 9,
    title: "Redirect Service",
    description:
      "Simple Node service for redirecting a shortened link to its target. Used by Oatly employees to facilitating sharing of links.",
    techniques: ["Node", "TypeScript", "React", "Azure"],
    links: {
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 10,
    title: "Refined Library",
    description:
      "Component library for all the common components used by Refined. This library is integrated in all Refined related products.",
    techniques: ["Vue", "Npm", "SASS", "Heroku"],
    links: {
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 11,
    title: "Web Bureau",
    description: "Mock site showcasing the assignments and the projects the company has helped their customers with.",
    techniques: ["JavaScript", "Vue", "Vuex"],
    links: {
      github: "https://github.com/EmilPedersenDev/web-bureau",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 12,
    title: "Skiing Game",
    description: "Game released just before christmas to offer the clients a chance to win a small prize.",
    techniques: ["Phaser", "Node", "MongoDB", "WebSocket"],
    links: {
      github: "",
      website: "https://github.com/EmilPedersenDev/Christmas-Game",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 13,
    title: "Giphy App",
    description: "Giphy randomizer made for Cdon.",
    techniques: ["JavaScript", "HTML", "SASS"],
    links: {
      github: "https://github.com/EmilPedersenDev/giphy-app",
      website: "https://emilpedersendev.github.io/giphy-app/",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 14,
    title: "Skanetrafiken Companies",
    description: "For companies to buy and manage public transport tickets used by their employees.",
    techniques: ["Vue", "c#", "JavaScript", "Azure"],
    links: {
      github: "",
      website: "https://foretag.skanetrafiken.se/",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 15,
    title: "Skanetrafiken School",
    description: "For school administrators to buy and manage public transport tickets used by their students.",
    techniques: ["Vue", "c#", "JavaScript", "Azure"],
    links: {
      github: "",
      website: "https://skola.skanetrafiken.se/#/",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 16,
    title: "ImageBank",
    description: "A simple app for managing images across all Refined related products.",
    techniques: ["Vue", "Vuex", "JavaScript"],
    links: {
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
];
