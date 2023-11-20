import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import weatherImg from "@/public/images/weather-app.png";
import omniLingual from "@/public/images/Omni-Lingual.gif";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Coding Temple",
    location: "Davis, CA",
    description:
      "I graduated after 4 months of studying. I continued my educational journey learning several new and essential frameworks and libraries over the following months.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Supervisor of Sales",
    location: "Ace Hardware - Davis, CA",
    description:
      "As a supervisor of sales I helped lead and motivated a team of sales associates to achieve sales targets and provide exceptional customer service.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Head Of Operations and Development",
    location: "DolphinScuba.com - Sacramento, CA",
    description:
      "I worked as a product manager and data scientist and was quickly promoted to head of operations and development. ",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Omni-Lingual Chat",
    description:
      "Breaking language barriers in real-time: Connect seamlessly with anyone, anywhere, through my dynamic translating messaging web app. App is still in development.",
    learned:
      "I gained extensive knowledge in Next.js, React's component system, and higher-order components while developing a comprehensive top-to-bottom SaaS application with full google auth and payment processing.",
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Stripe",
      "OAuth",
      "NextAuth",
      "Firebase",
      "React Query",
      "Modern Design",
    ],
    imageUrl: omniLingual,
    link: "https://omni-lingual-chat.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "A public web app for quick weather updates by zip-code. It shows current weather, forecasted weather by day and by hour, winds and more.",
    learned:
      "I learned about using an API to fetch data and parse that data. As well as how to effectively relay that data to the end user in user friendly and stylish way.",
    tags: ["HTML", "CSS", "Bootstrap", "Restful API", "Fetch", "JSON"],
    imageUrl: weatherImg,
    link: "/weather-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
  "SASS",
  "Bootstrap",
  "Restful API",
  "User Auth",
  "GitHub",
] as const;
