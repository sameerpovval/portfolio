import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import Profile from '../assets/profile.jpg';
import ecommerce from '../assets/ecommerce.png';
import iris from '../assets/iris.png';
import stack from '../assets/stack logo w.png'


import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  logo,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MernStack Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "SELF EMPLOYED",
    companyName: "",
    icon: Profile,
    iconBg: "#383E56",
    date: "Jan 23 - Present",
    points: [
      "Code and build something in everyday.",
    ],
  },
  {
    title: "MERN Stack Intern",
    companyName: "Stack Centre",
    icon: logo,
    iconBg: "#E6DEDD",
    date: " Oct 2023 - Jan 2024",
    points: [
   
    ],
  },
  {
    title: "MERN Stack Developer",
    companyName: "Stack Centre (Freelance)",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
   
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "E-Commerce",
    description:
      " I developed a full-stack e-commerce application using Node.js, Express, MongoDB, React.js, Bootstrap, and CSS. The backend ensures fast and scalable performance, while MongoDB manages product data and orders. React.js creates a dynamic, responsive frontend, providing a smooth shopping experience. Bootstrap and custom CSS enhance the mobile-friendliness and design. Key features include user authentication, product search, shopping cart, and payment integration. This project refined my full-stack skills and strengthened my ability to create efficient, user-friendly applications.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    sourceCodeLink: "https://github.com/sameerpovval",
  },
  {
    name: "Iris-Institute",
    description:
      " Iris Institute is a comprehensive education platform I developed using the MERN stack (MongoDB, Express, React, and Node.js). The website provides a seamless user experience for students and educators, offering a dynamic interface for course registration, student management, and real-time updates. It features responsive design, secure authentication, and interactive dashboards. With a focus on accessibility and performance, the platform is optimized for both desktop and mobile devices, ensuring a smooth experience for all users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: iris,
    sourceCodeLink: "https://github.com/sameerpovval",
  },
  {
    name: "Stack-Centre",
    description:
      `I developed a full-stack website for Stack Centre Institute using the MERN stack (MongoDB, Express, React, Node.js). The website offers user-friendly navigation, secure authentication, dynamic course listings, and interactive features for students and staff. I integrated a modern, responsive design to ensure compatibility across devices, and used MongoDB for efficient data management. This project demonstrates my ability to create seamless, functional web applications that prioritize both performance and user experience`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:stack,
    sourceCodeLink: "https://github.com/sameerpovval",
  },
];

export { services, technologies, experiences, testimonials, projects };
