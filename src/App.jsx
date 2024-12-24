import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import background from "./assets/background.png";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const controls = useAnimation();

  const workExp = [
    {
      company: "Owl Computing Development",
      position: "Software Engineer Intern",
      date: "MARCH 2024 - PRESENT",
      description:
        "Developed and maintained scalable web applications, worked React, Next.js, Angular, Tailwind, Node.js, TypeScript, Python. Maintained and building databases with PostgreSQL, MySQL, and Firebase.",

      achievements: [
        {
          description:
            "Improved SaaS platform efficiency by 30% Developed a garment creation product using Next.js, Prisma ORM, and Supabase, optimizing React.js cache to maintain smooth 60Hz operation, reducing re-renders and improving overall application responsiveness.",
        },
        {
          description:
            "Increased product upload efficiency by 50%. Offloaded resource-intensive image construction to cloud functions, streamlining the process and enabling faster product uploads to Shopify, which improved overall e-commerce operations and user experience.",
        },
        {
          description:
            "Improved facial recognition efficiency by 90%. Utilized multiprocessing on a Raspberry Pi to parallelize operations, significantly speeding up recognition processes and enhancing overall system performance.",
        },
        {
          description:
            "Engineered a sophisticated Customer Dashboard, improving communications and logistics management across multiple locations by 30%, and supporting partnerships with suppliers such as FORD and GM.",
        },
        {
          description:
            "Leveraged PostgreSQL's powerful notification system and React Hooks to create a seamless real-time experience. By establishing a persistent connection to the database, the application efficiently monitors for changes in specific tables. Upon detecting updates, the system triggers immediate notifications, providing users with real-time information and significantly enhancing user engagement",
        },
      ],
    },
  ];
  const projects = [
    {
      title: "POST WORKOUT",
      type: "FULLSTACK APPLICATION",
      description:
        "This project was a fantastic opportunity to dive deep into full-stack development, combining the power of TypeScript and Angular. I designed and implemented a REST API with custom authentication middleware to ensure secure data access. To streamline data fetching and enhance user experience, I created reusable services and a frontend interceptor for token verification. By incorporating Row Level Security, I prioritized data privacy and protected sensitive information, ensuring that only authorized users can access relevant data.",
      date: " OCT 2024",
      tech: "TypeScript, Angular, Node.js, Express, PostgreSQL, Tailwind, Supabase",
    },
    {
      title: "GO RATE LIMITER",
      type: "PROXY SERVER",
      description:
        " Designed a project that leverages the power of Go's concurrency primitives, specifically goroutines and channels, to implement a highly efficient IP rate limiter and redirector. The primary goal is to mitigate potential abuse and DDoS attacks by controlling the rate at which IP addresses can access a server.",
      date: " DEC 2024",
      tech: "Go, Goroutines, Concurrent Data Structures, Networking Libraries",
    },
    {
      title: "TECHLINES",
      type: "FULLSTACK APPLICATION",
      description:
        "Development of a comprehensive blogging platform using Node.js as the backend framework. I implemented RESTful APIs to handle user authentication, blog post creation, and comment management. Sequelize was utilized as an ORM to interact with a MySQL database, ensuring efficient data storage and retrieval. To enhance security, custom authentication middleware was developed to protect sensitive routes and user data. On the frontend, Handlebars templating engine was employed to create dynamic and user-friendly interfaces, enabling features like user registration, login, logout, profile viewing, blog post creation, commenting, and search functionality.",
      date: " DEC 2023",
      tech: "Node.js, JavaScript, Sequelize, Handlebars, MySQL",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "work-exp", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLink = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className={`text-[14px] font-customBold transition-colors cursor-pointer ${
        activeSection === to ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );

  const PageLink = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className="px-4 py-2 rounded-full border-2 border-white text-white text-center hover:bg-white hover:text-black transition-colors cursor-pointer"
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen text-white">
      <img
        src={background}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover  -z-10"
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center p-6 w-full z-50 ">
        <div className="flex gap-8">
          <NavLink to="home">HOME</NavLink>
          <NavLink to="projects">PROJECTS</NavLink>
          <NavLink to="work-exp">WORK EXP</NavLink>
          <NavLink to="contact">CONTACT</NavLink>
        </div>
      </nav>

      {/* Content */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <motion.div
          className="flex flex-col w-full max-w-7xl px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <h1 className="tracking-tighter font-custom text-left text-white text-[180px] pb-2">
              ERNEST
            </h1>
            <div className="absolute -bottom-4 left-2 flex flex-row gap-4">
              <PageLink to="projects">projects →</PageLink>
              <PageLink to="contact">contact →</PageLink>
              <PageLink to="work-exp">work exp →</PageLink>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <div className="max-w-xl relative">
              <h1 className="tracking-tighter font-custom text-white text-[180px]">
                JONES
              </h1>
              <p className="absolute -bottom-10 text-white text-lg leading-relaxed font-custom text-[16px]">
                specialized in scaling full-stack applications with a focus on
                performance optimization, secure integrations, and intuitive
                design.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-20"
      >
        <h2 className="text-6xl font-custom mb-12 text-white">
          {" "}
          Personal Projects
        </h2>

        <div className="flex-row flex max-w-5xl min-h-[500px]">
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <div className="flex flex-col  items-start w-full">
                  <div className="flex flex-row  justify-between w-full">
                    <h3 className="text-2xl font-custom">{project.title}</h3>
                    <div className=" flex flex-row gap-4 justify-center items-center text-[24px] font-custom text-gray-300">
                      {project.date}
                      <svg
                        width="1024"
                        height="1024"
                        viewBox="0 0 1024 1024"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 sm:size-8"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                          transform="scale(64)"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-custom mb-4 text-gray-300">
                    {project.type}
                  </h3>

                  <img src={project.image} alt="" />
                </div>
                <div></div>
                <li className="text-gray-300 w-full">{project.description}</li>
                <p className="text-gray-300 w-full mt-2">
                  Technologies: {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work-exp"
        className="min-h-screen flex flex-col items-center justify-center py-20 "
      >
        <h2 className="text-6xl font-custom mb-12">Work Experience</h2>
        <div className="space-y-6 w-full max-w-5xl">
          {workExp.map((job) => (
            <div key={job} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="flex flex-row justify-between w-full">
                <h3 className="text-2xl font-custom mb-2">{job.company}</h3>
                <h3 className="text-lg font-custom mb-2 text-gray-300">
                  {job.date}
                </h3>
              </div>
              <h4 className="text-xl mb-4 text-gray-300">{job.position}</h4>
              <li className="text-gray-300">{job.description}</li>
              <h4 className="text-xl mb-4 mt-4  text-gray-300">Achievements</h4>
              <ul className="list-disc list-inside text-gray-300">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement.description}
                    className="text-gray-300 mb-4"
                  >
                    {achievement.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center py-20"
      >
        <h2 className="text-6xl font-custom mb-12">Contact</h2>
        <div className="space-y-6 w-full max-w-5xl flex flex-col items-center">
          <p className="text-xl mb-8 text-center">
            Feel free to reach out to me at:
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:ernest.jones30@yahoo.com"
              className="px-6 py-3 bg-white text-black rounded hover:bg-opacity-90 transition-colors text-xl flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Email
            </a>
            <a
              href="https://github.com/wruqe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded hover:bg-opacity-90 transition-colors text-xl flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ernest-jones-6259a128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded hover:bg-opacity-90 transition-colors text-xl flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;