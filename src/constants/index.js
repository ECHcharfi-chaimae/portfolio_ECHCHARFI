import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  spring,
  tailwind,
  nodejs,
  git,
  java,
  angular,
  php,
} from "../assets";

import carrentVid from "../videos/carrent.mp4";
import clean from "../videos/cleanX-Video.mp4";
import linedata from "../assets/linedata.png";
import nttdata from "../assets/nttdata.png";
import host from "../assets/host.png";
import sweetCake from "../videos/sweetCake.mp4"; 
import designer from "../assets/designer.png"; 
import laravel from "../assets/tech/laravel.png"; 

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
    {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
{
  title: "Front-end Developer",
  icon: web,
  details: [
    "Craft dynamic and scalable web applications with modern frameworks.",
    "Optimize performance for seamless user experiences.",
    "Ensure responsive designs across all devices.",
  ],
},
{
    title: "Back-end Developer",
    icon: backend,
    details: [
      "Develop RESTful APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Integrate APIs with Frontend Apps",
    ],
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    details: [
      "Build Cross-Platform Apps with React Native",
      "Create Smooth and Responsive UIs",
      "Integrate APIs and Local Databases",
    ],
  },
{
  title: "UI/UX Designer",
  icon: designer,
  details: [
    "Create visually stunning and user-centered designs.",
    "Prototype interactive experiences using Figma, Adobe XD and adobe Illustrator",
    "Transform concepts into intuitive digital products.",
  ],
},

];


const technologies = [
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
    name: "spring",
    icon: spring,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Linedata",
    icon: linedata,
    iconBg: "#ffffffff",
    date: "January 2023 - January 2024",
    points: [
      "Contributed to the design and development of product enhancements and new functional modules within the Linedata platform.",
      "Built and optimized front-end components using Angular, ensuring responsive and user-friendly interfaces.",
      "Developed and maintained back-end services with Java and Hibernate, focusing on scalability and performance.",
      "Collaborated with cross-functional teams to analyze requirements, implement solutions, and ensure timely delivery.",
      "Ensured code quality and maintainability by following best practices and participating in code reviews.",
    ],
  },
  {
    title: "web Developer",
    company_name: "NTT DATA",
    icon: nttdata,
    iconBg: "#ffffffff",
    date: "January 2022 - December 2022",
    points: [
      "Completed a pre-hire internship at NTT DATA, designing and developing a recruitment web application with integrated candidate tracking and HR data analytics modules.",
      "Built an interactive dashboard to visualize key recruitment indicators, enabling HR teams to access both summary and detailed insights.",
      "Leveraged Angular for front-end development and Spring Boot + Hibernate for back-end services and data persistence.",
    ],
  },
  {
    title: "Web Developer - Intern",
    company_name: "Naja7Host",
    icon: host,
    iconBg: "#383E56",
    date: "Mai 2021 - August 2021",
    points: [
      "Developed a web application for COVID-19 vaccination management using Laravel and Tailwind CSS.",
      "Designed modules for appointment scheduling, patient management, and vaccination tracking.",
      "Built a modern, responsive UI with Tailwind to enhance user accessibility and usability.",
      "Ensured data security and reliability by applying industry best practices.",
    ],
  },

];

const projects = [
    {
    name: "Cake Design",
    description:
      "This project showcases a cake design platform built with React.js and Spring Boot. It allows users to personalize cakes by choosing flavors, shapes, colors, and decorations. The platform ensures seamless interaction between clients and bakers, simplifying the entire ordering process from customization to delivery.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: sweetCake,
    source_code_link: "https://github.com/ECHcharfi-chaimae/sweetCakes",
  },
  {
    name: "Car Rent",
    description: "This web platform enables peer-to-peer car rentals between private owners and drivers. Vehicle owners can publish their cars availability when unused, allowing others to rent them during specific times. Built for convenience and trust, the system manages listings, reservations, and secure communication between car owners and renters.",
    tags: [
      { name: "Laravel", color: "green-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "Livewire", color: "pink-text-gradient" },
    ],
    image: carrentVid,
    source_code_link: "https://github.com/ECHcharfi-chaimae/CarLocation",
  },
  {
    name: "Cleaning services",
    description:
      "A mobile application for managing on-demand cleaning services such as car washes, carpet cleaning, and house maintenance. It supports clients, workers, and admins, improving coordination and communication. The app automates messaging, connects users through WhatsApp, and offers several smart features to enhance user experience and operational efficiency.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: clean,
    source_code_link: "https://github.com/ECHcharfi-chaimae/CleanAppMobile_FrontEnd",
  },
];


export { services, technologies, experiences, projects };
