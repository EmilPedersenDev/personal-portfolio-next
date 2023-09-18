import { Employment, MenuIndicator, MenuIndicatorStyle } from "../interfaces";

export const work: Array<Employment> = [
  {
    id: 1,
    title: "Fullstack Engineer",
    company: "Refined",
    duration: "apr. 2023–now",
    summary: `Refined turns Confluence, Jira and 
          Jira Service Management into themed,
          easy-to-use intranets, service desks,
          issue trackers, knowledge bases and more.
          Our 4,000+ customers are leading companies
          like Apple, Spotify, Facebook, Oxfam,
          Sony—plus thousands of small- and medium-size 
          businesses from more than 100 countries around the world.`,
    techniques: ["Java", "Spring", "Vue", "Cypress", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Refined",
    duration: "sep. 2021–apr. 2023",
    summary: `Refined turns Confluence, Jira and 
          Jira Service Management into themed,
          easy-to-use intranets, service desks,
          issue trackers, knowledge bases and more.
          Our 4,000+ customers are leading companies
          like Apple, Spotify, Facebook, Oxfam,
          Sony—plus thousands of small- and medium-size 
          businesses from more than 100 countries around the world.`,
    techniques: ["Atlassian", "JavaScript", "Vue", "Node", "Jest", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Stretch",
    duration: "apr. 2019–sep. 2021",
    summary: `Consulting company that specializes in 
          SaaS. My scope has primarily been front end and
          to work on web applications for Stretch's customers.
          Our development teams have created numerous enterprised 
          ready applications. `,
    techniques: ["Azure", "JavaScript", "Vue", "React", "Node", "MongoDB"],
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Oatly",
    duration: "apr. 2021–maj. 2021",
    summary: `In this role i had two main focus areas. The 
        first focus area was to create a url shortener application 
        and a redirect service which facilitated the internal links.
        The second focus area was to maintain the DevOps work within
        the Web team. The work consisted of setting up CI/CD 
        pipelines for the oatly.com site and to manage the infrastructure. `,
    techniques: ["Azure", "Express", "JavaScript", "React", "Node", "Next", "MongoDB"],
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Skanetrafiken",
    duration: "apr. 2019–mar. 2021",
    summary: `I worked within the development team that managed 
        the company portal site, the school portal site, vouchers, 
        the "Buy Tickets" section on skanetrafiken.se and the 
        "My Account" service. `,
    techniques: ["Azure", "JavaScript", "Vue", ".Net", "SQL"],
  },
  {
    id: 6,
    title: "IT Consultant",
    company: "Academic Work",
    duration: "jan. 2019–jun. 2020",
    summary: `This role started with a 3 month bootcamp where
        we learned the foundation of web development with focus 
        on JavaScript. This introduction gave us the ability to
        work as a It consultant at one of Academic Work's customers.
        My first assignment was a role as a frontend developer at Stretch.`,
    techniques: ["JavaScript", "React", "Node", "MongoDb"],
  },
];

export const defaultMenuState: Employment = {
  id: 1,
  title: "",
  company: "",
  duration: "",
  summary: "",
  techniques: [],
};

export const techniques: Array<string> = [
  "TypeScript",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Java",
  "PostgreSQL",
  "Spring",
  "Svelte",
];

export const menuIndicatorStyle: MenuIndicatorStyle = {
  translateY: "translateY",
  translateX: "translateX",
  desktopSize: "42px",
  mobileSize: "120px",
};

export const defaultMenuIndicator: MenuIndicator = {
  transform: menuIndicatorStyle.translateY,
  size: menuIndicatorStyle.desktopSize,
};
