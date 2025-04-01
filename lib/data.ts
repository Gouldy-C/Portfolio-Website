import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGamepad } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weatherImg from "@/public/images/weather-app.png";
import omniLingual from "@/public/images/Omni-Lingual.gif";
import doumi from "@/public/images/Doumi.png";

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
    title: "WebCraft - Ongoing Personal Project",
    location: "Davis, CA",
    description:
      "WebCraft, a high-performance, procedurally generated voxel game engine meticulously crafted with TypeScript and Three.js. This project showcases innovative solutions for efficient chunk management, leveraging Web Workers for seamless, non-blocking world generation. Explore a dynamic and visually engaging 3D environment optimized for smooth gameplay, demonstrating advanced techniques in game engine architecture and graphics rendering.",
    icon: React.createElement(FaGamepad),
    date: "2024-2025",
  },
  {
    title: "Frontend Software Engineer",
    location: "Ziteo Medical - Pleasant Hill, CA",
    description:
      "During my time as a Front End Software Engineer at Ziteo Medical from March 2024 to September 2024, I spearheaded the design and development of a comprehensive UI/UX using PySide6 and VTK. This project significantly enhanced user interaction and operational efficiency. I led the entire development life-cycle, from initial concept and wire-framing to implementation and deployment, ensuring that the final product met both user needs and technical requirements. Collaborating closely with robotics engineers, I gained deep insights into medical robotics and startup dynamics, which was crucial for integrating software and hardware components seamlessly. Additionally, I implemented a modular and scalable codebase, facilitating future enhancements, simplifying maintenance, and reducing technical debt.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2024",
  },
  {
    title: "Software Engineer",
    location: "Co.Lab - Davis, CA",
    description:
      "Software Engineer internship at Co.Lab. I worked in a cross functional team to develop a mobile app called Doumi.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Software Engineering Certificate",
    location: "Coding Temple - Davis, CA",
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
    title: "Doumi Mobile App",
    description:
      "Doumi envisions a future where caregivers caring for patients find support in a judge-free community and expert guidance on how to redirect agitated patients.",
    learned:
      "I worked full stack on this project. Working extensively on backend data structure and security. As well as do a lot with look and feel of the app on the frontend. We optimized the app for scale knowing that this app could be used by 25% of the US population.",
    tags: ["React Native", "Expo", "OAuth", "Firebase", "Collaborative Design"],
    imageUrl: doumi,
    link: "https://www.joincolab.io/product/doumi",
  },
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
    link: "https://omni-lingual-chat.vercel.app/",
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
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "React Native",
  "Git",
  "GitHub",
  "MongoDB",
  "PostgreSQL",
  "SQL",
  "NoSQL",
  "Express",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Flask",
  "Framer Motion",
  "SASS",
  "Bootstrap",
  "Restful API",
  "User Auth",
] as const;

// "dependencies": {
//   "@react-email/components": "^0.0.7",
//   "@react-email/tailwind": "^0.0.8",
//   "@types/node": "20.3.2",
//   "@types/react": "18.2.14",
//   "@types/react-dom": "18.2.6",
//   "@vercel/analytics": "^1.2.2",
//   "@vercel/speed-insights": "^1.0.10",
//   "autoprefixer": "10.4.14",
//   "clsx": "^1.2.1",
//   "eslint": "8.43.0",
//   "eslint-config-next": "13.4.7",
//   "framer-motion": "^10.12.17",
//   "next": "13.4.8",
//   "postcss": "8.4.24",
//   "react": "18.2.0",
//   "react-dom": "18.2.0",
//   "react-hot-toast": "^2.4.1",
//   "react-icons": "^4.10.1",
//   "react-intersection-observer": "^9.5.2",
//   "react-spinners": "^0.13.8",
//   "react-vertical-timeline-component": "^3.6.0",
//   "resend": "^0.16.0",
//   "sharp": "^0.32.6",
//   "tailwindcss": "3.3.2",
//   "typescript": "5.1.5"
// },
// "devDependencies": {
//   "@types/react-vertical-timeline-component": "^3.3.3"
// }