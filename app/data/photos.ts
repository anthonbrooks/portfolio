import { Photo } from "../page";

export const photos: Photo[] = [
  {
    id: "p1",
    image: "/images/amber-wisteria_landing.png",
    title: "Amber Wisteria",
    description:
      "A meal delivery app for sick and bedridden patients created with Django, React, TailwindCSS. Designed in Figma. Users can request a meal or create a meal train for someone in need. (For the demo use credentials username: test password: Testpass1 or create a new account.)",
    link: "https://amber-wisteria.vercel.app/",
    source: "https://github.com/anthonbrooks/amber-wisteria",
  },
  {
    id: "p2",
    image: "/images/phonebook-app.png",
    title: "Phonebook",
    description:
      "A phonebook app that allows you to store contact information, search, and edit contacts. For this project I used Vite, React, TailwindCSS, JSON-Server.",
    link: "https://phonebook-cyan.vercel.app/",
    source: "https://github.com/anthonbrooks/phonebook",
  },
  {
    id: "p3",
    image: "/images/node-blog-demo.png",
    title: "Blog",
    description: "A blog created with Node, Express, MongoDB Atlas.",
    link: "",
    source: "https://github.com/anthonbrooks/node-blog",
  },
  {
    id: "p4",
    image: "/images/calculator-demo.png",
    title: "Calculator",
    description: "A calculator made with Vanilla JavaScript, HTML, and CSS.",
    link: "https://anthonbrooks.github.io/calculator/",
    source: "https://github.com/anthonbrooks/calculator",
  },
  // add more as needed
];
