import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import background from "./assets/background.png";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const workExp = [
    {
      company: "Gentex Corporation",
      position: "Software Engineer Intern",
      date: "APRIL 2025 – PRESENT",
      description:
        "Collaborated with the Product Lifecycle Management (PLM) team to enhance and maintain internal applications supporting production and engineering workflows.",
      achievements: [
        {
          description:
            "Built a full-featured internal Skills Finder module in an ASP.NET Core MVC SSR application, supporting complete CRUD operations. Designed controller logic to dynamically generate parameterized SQL queries with secure input handling, enabling advanced skill filtering, rating, and persistent state management backed by MSSQL.",
        },
        {
          description:
            "Implemented a hybrid frontend build system using Webpack with live reload and Hot Module Replacement (HMR), running on a local proxy. Served assets from memory to reduce full page reloads and disk writes, improving UI development speed and productivity by 50–70%.",
        },
        {
          description:
            "Developed full CRUD functionality backed by RESTful C# controllers and integrated AML (Aras Markup Language) to interact with PLM data models for managing engineering artifacts.",
        },
        {
          description:
            "Created SQL-based server-side methods and scheduled automated jobs using Quartz.NET and Cron expressions to run server maintenance and send weekly email digests.",
        },
        {
          description:
            "Worked across a diverse tech stack including: TypeScript, JavaScript, jQuery, HTML, CSS, Kendo UI, ASP.NET Core, C#, AML, Aras Innovator, REST APIs, JSON, AJAX, SQL, XML, Visual Basic, Visual Studio, Azure DevOps, Postman, and Git.",
        },
      ],
    },
    {
      company: "Owl Computing Development",
      position: "Software Engineer Intern",
      date: "MARCH 2024 - MARCH 2025",
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
      githubLink: "https://github.com/Wruqe",
      demoLink: "https://github.com/Wruqe",
    },
    {
      title: "GO RATE LIMITER",
      type: "PROXY SERVER",
      description:
        " Designed a project that leverages the power of Go's concurrency primitives, specifically goroutines and channels, to implement a highly efficient IP rate limiter and redirector. The primary goal is to mitigate potential abuse and DDoS attacks by controlling the rate at which IP addresses can access a server.",
      date: " DEC 2024",
      tech: "Go, Goroutines, Concurrent Data Structures, Networking Libraries",
      githubLink: "https://github.com/Wruqe",
      demoLink: "https://github.com/Wruqe",
    },
    {
      title: "TECHLINES",
      type: "FULLSTACK APPLICATION",
      description:
        "Development of a comprehensive blogging platform using Node.js as the backend framework. I implemented RESTful APIs to handle user authentication, blog post creation, and comment management. Sequelize was utilized as an ORM to interact with a MySQL database, ensuring efficient data storage and retrieval. To enhance security, custom authentication middleware was developed to protect sensitive routes and user data. On the frontend, Handlebars templating engine was employed to create dynamic and user-friendly interfaces, enabling features like user registration, login, logout, profile viewing, blog post creation, commenting, and search functionality.",
      date: " DEC 2023",
      tech: "Node.js, JavaScript, Sequelize, Handlebars, MySQL",
      githubLink: "https://github.com/Wruqe",
      demoLink: "https://github.com/Wruqe",
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

  NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  const PageLink = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className="px-4 py-2 rounded-full border-2 border-white text-white text-center hover:bg-white hover:text-black transition-colors cursor-pointer"
    >
      {children}
    </button>
  );

  PageLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="min-h-screen text-white">
      <img
        src={background}
        alt="Background"
        className="fixed inset-0 w-screen h-screen object-cover -z-10 scale-110"
        style={{ transform: "scale(1.1)" }}
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center p-4 md:p-6 w-full z-50">
        <div className="flex gap-4 md:gap-8">
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
          className="flex flex-col w-full max-w-7xl px-4 md:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-32 md:mb-0">
            <h1 className="tracking-tighter font-custom text-left text-white text-[80px] md:text-[180px] pb-2">
              ERNEST
            </h1>
            <div className="absolute -bottom-24 md:-bottom-4 left-2 flex flex-row gap-2 md:gap-4">
              <PageLink to="projects">projects →</PageLink>
              <PageLink to="contact">contact →</PageLink>
              <PageLink to="work-exp">work exp →</PageLink>
            </div>
          </div>
          <div className="flex justify-end mt-8 md:mt-1">
            <div className="max-w-xl relative">
              <h1 className="tracking-tighter font-custom text-white text-[80px] md:text-[180px]">
                JONES
              </h1>
              <p className="relative md:absolute md:-bottom-10 text-white text-sm md:text-lg leading-relaxed font-custom md:text-[16px] max-w-[300px] md:max-w-none mt-4 md:mt-0">
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
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8"
      >
        <h2 className="text-4xl md:text-6xl font-custom mb-12 text-white">
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 w-full max-w-5xl">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-4 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-custom">
                        {project.title}
                      </h3>
                      <span className="text-sm font-custom px-3 py-1 bg-white/10 rounded-full text-gray-300 w-fit">
                        {project.date}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-custom mt-2 block">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 z-10">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                      title="View Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
                      title="View GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gradient border effect on hover */}
              <div
                className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                style={{
                  background: `linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0)) border-box`,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="work-exp"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8"
      >
        <h2 className="text-4xl md:text-6xl font-custom mb-12">
          Work Experience
        </h2>
        <div className="space-y-12 w-full max-w-5xl relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>

          {workExp.map((job) => (
            <div key={job} className="relative pl-8">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-white"></div>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <h3 className="text-3xl font-custom text-white">
                    {job.company}
                  </h3>
                  <span className="text-sm font-custom px-3 py-1 bg-white/10 rounded-full text-gray-300">
                    {job.date}
                  </span>
                </div>
                <h4 className="text-xl mt-2 text-gray-300 font-custom">
                  {job.position}
                </h4>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {job.description}
              </p>

              <div className="space-y-6">
                <h4 className="text-xl font-custom text-white">
                  Key Achievements
                </h4>
                <div className="grid gap-4">
                  {job.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="group relative pl-6 transition-all hover:translate-x-2"
                    >
                      <div className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-white/50 group-hover:bg-white"></div>
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8"
      >
        <h2 className="text-4xl md:text-6xl font-custom mb-12">Contact</h2>
        <div className="space-y-6 w-full max-w-5xl flex flex-col items-center">
          <p className="text-lg md:text-xl mb-8 text-center">
            Feel free to reach out to me at:
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
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
