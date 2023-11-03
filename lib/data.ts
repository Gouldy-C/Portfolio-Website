import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import weatherImg from "@/public/weather-app.png";

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
    title: "Head Of Operations and Development",
    location: "DolphinScuba.com - Sacramento, CA",
    description:
    "I worked as a product manager and data scientist and was quickly promoted to head of operations and development. ",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
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
    title: "Graduated Coding Temple",
    location: "Davis, CA",
    description:
      "I graduated after 4 months of studying. I continued my educational journey learning several new and essential frameworks and libraries over the following months.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Weather App",
    description:
      "A public web app for quick weather updates by zip-code. It shows current weather, forecasted weather by day and by hour, winds and more.",
    tags: [ "HTML", "CSS", "Bootstrap", "Restful API", "Fetch", "JSON"],
    imageUrl: weatherImg,
    link: "/#home"
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
