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
      website: "https://personal-portfolio-next-nk8vu26ff-emilpedersendev.vercel.app/",
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
      "With this tool, all the Refined customers can create their own unique sites in Jira or Confluence. Lives within Refined for Cloud",
    techniques: ["Vue", "Node", "Express"],
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
    id: 3,
    title: "Url Shortener",
    description:
      "Providing an option for the Oatly employees to shorten all of their links and offering exporting their links as QR codes",
    techniques: ["Next", "Node", "TypeScript"],
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
      github: "",
      website: "",
    },
    getMainLink() {
      const mainLink = getProjectLink.bind(this);
      return mainLink();
    },
  },
  {
    id: 5,
    title: "Skanetrafiken",
    description: "An app for buying tickets digatally for public transport. Used by travellers within Skane county.",
    techniques: ["Vue", "c#", "JavaScript"],
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
    description: "Google authentication for internal Refined products.",
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
    description: "Change theme to your Jira or Confluence site with this app. Lives within Refined for Cloud",
    techniques: ["Vue", "Vuex", "SASS"],
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
    id: 8,
    title: "DevQnect",
    description:
      "Connect with developers for collaborating on a open source project, or an opportunity for developers to exchange ideas.",
    techniques: ["Vue", "MySql", "Node"],
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
    id: 9,
    title: "Redirect Service",
    description: "Simple Node service for redirecting a shortened link to its target.",
    techniques: ["Node", "TypeScript", "React"],
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
    description: "Component library for all the common components used within the products.",
    techniques: ["Vue", "Npm", "SASS"],
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
      github: "",
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
    techniques: ["Phaser", "Node", "MongoDB"],
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
    id: 13,
    title: "Giphy App",
    description: "Giphy randomizer",
    techniques: ["JavaScript", "HTML", "SASS"],
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
