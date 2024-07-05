import {
  mobile,
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
  meta,
  leetcode,
  codechef,
  linkedin,
  starbucks,
  tesla,
  hotel,
  chatbuddy,
  lingio,
  github,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  deeplearning
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "Deep-Fi",
    company_name: "A comparative study of deep learning techniques in Wifi Sensing ",
    icon: github,
    iconBg: "#383E56",
    date: "Feb 2024 - April 2024",
    points: [
      "Research Internship at NIT Kurukshetra: Collaborated with my batch mate, Sakshi Saxena, under the mentorship of Dr. Pankaj Verma, a distinguished professor at NIT Kurukshetra, to undertake a research internship focused on deep learning applications.",
      "Implementation of State-of-the-Art Algorithms: Implemented cutting-edge deep learning algorithms including VGG16, VGG64, DenseNet, and GoogleNet on the UT-HAR (University of Twente Human Activity Recognition) dataset. These algorithms are renowned for their effectiveness in image recognition and classification tasks.",
      "Performance Evaluation and Comparison: Conducted rigorous evaluations by comparing the validation accuracies and loss results of our implementations with those of existing models. This comprehensive analysis provided insights into the efficacy of our implementations and their potential for real-world applications.",
      
    ],
  },
  
];

const testimonials = [
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

const projects = [
  {
    name: "Holiday Harbour",
    description:
    "Transform your hotel booking experience with our web-based platform, offering seamless search, booking, and management of accommodations from diverse providers. Enjoy the convenience and efficiency of our solution for all your travel needs.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/AroraDeepak13/mern-booking-app",
  },
  {
    name: "Chatbuddy",
    description:
      "Web application that allows users to login and chat with other existing users in real time with cool features such as visible online status, message notification sounds and lot more. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    image: chatbuddy,
    source_code_link: "https://github.com/AroraDeepak13/chat-buddy",
  },
  {
    name: "Lingio-Connect",
    description:
      "Web application that allows users to learn any language by finding a tutuor online. Users can search, sort and apply filters to tutors and book live sessions with respective tutors. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "auth0",
        color: "orange-text-gradient",
      },
    ],
    image: lingio,
    source_code_link: "https://github.com/AroraDeepak13/lingio_connect",
  },
];
const profiles = [
  {
    name: "Leetcode",
    description:
    "Knight badge holder with highest contest rating of 1890. Currently among the top 5% coders globally with a global rank of 30,695 out of 531,823 coders.Solved over 700 problems on Leetcode.",

    image: leetcode,
    profile_link: "https://leetcode.com/u/Deepak_Arora_/",
  },
  {
    name: "Codechef",
    description:
      "3⭐ coder at Codechef with a highest contest rating of 1689. Solved over 200 competitve programming problems on Codechef.",
    image: codechef,
    profile_link: "https://www.codechef.com/users/deepak_0817",
  },
  {
    name: "LinkedIn",
    description:
      "Let's connect and grow our professional networks on LinkedIn! Find me here ",
    image: linkedin,
    profile_link: "www.linkedin.com/in/deepak-arora-1a855b27a",
  },
];

export { services, technologies, experiences, testimonials, projects, profiles };
