import React, { useState } from "react";
import "./css.css";
import jateimg from "./jate_screenshot.png";
import nosqlimg from "./nosql_screenshot.png";
import mvcimg from "./mvc.png";
import logoCraftimg from "./logoCraft.png";
import weatherDashimg from "./weatherDash.png";
import passwordGeneratorimg from "./passwordGenerator.png";
import csphoto from "./csphoto.jpg";
import yourResume from "./CSYardi.pdf";

const AboutMeSection = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container">
        <div className="image">
          <img src={csphoto} alt="Courtney" />
        </div>
        <div className="text">
          <p>
            Hi there! I'm Courtney, a passionate full stack developer with a
            focus on web development. I embarked on this exciting journey with a
            deep curiosity for technology and a strong desire to create
            meaningful digital experiences.
          </p>
          <p>
            As a full stack developer, I enjoy working with both the front-end
            and back-end technologies. From crafting beautiful and responsive
            user interfaces using modern frameworks like React, to designing
            robust server-side architecture and APIs, I love the entire spectrum
            of web development.
          </p>
          <p>
            In addition to my full stack skills, I currently write raw SQL
            queries for my day job. I have extensive experience in managing
            databases, writing complex SQL queries, and optimizing database
            performance. My proficiency in SQL allows me to build efficient and
            scalable applications that leverage the power of data.
          </p>
          <p>
            I'm constantly learning and exploring new technologies to stay
            up-to-date with the latest trends in the industry. I believe in the
            power of continuous improvement and strive to deliver high-quality
            solutions that meet the needs of users and businesses alike.
          </p>
          <p>
            When I'm not coding, you can find me enjoying outdoor activities,
            experimenting with new recipes in the kitchen, or immersing myself
            in a good book. Feel free to connect with me on LinkedIn or drop me
            a message through the contact form below. I'm always excited to
            collaborate on new projects and connect with fellow developers!
          </p>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    id: 1,
    title: "Progressive Web Application",
    description:
      "AS A developerI WANT to create notes or code snippets with or without an internet connection SO THAT I can reliably retrieve them for later use",
    imageUrl: jateimg,
    link: "https://pwacourtney-26f45159e4af.herokuapp.com/",
  },
  {
    id: 2,
    title: "NoSQL Project",
    description:
      "AS A social media startup I WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data",
    imageUrl: nosqlimg,
    link: "https://csherman177.github.io/nosql/",
  },
  {
    id: 3,
    title: "MVC Project",
    description:
      "AS A developer who writes about tech I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions",
    imageUrl: mvcimg,
    link: "https://csherman177.github.io/mvc_Project/",
  },
  {
    id: 4,
    title: "Logo Craft",
    description:
      "AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I don't have to pay a graphic designer",
    imageUrl: logoCraftimg,
    link: "https://csherman177.github.io/logoCraft/",
  },
  {
    id: 5,
    title: "Weather Dashboard Project",
    description:
      "AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly",
    imageUrl: weatherDashimg,
    link: "https://csherman177.github.io/weatherApp/#",
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security",
    imageUrl: passwordGeneratorimg,
    link: "https://csherman177.github.io/PasswordGenerator/",
  },
];

function PortfolioSection() {
  // Separate the projects into topProjects and bottomProjects
  const topProjects = projects.slice(0, 3);
  const bottomProjects = projects.slice(3);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-cards">
        <div className="top-projects">
          {topProjects.map((project) => (
            <div key={project.id} className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
                <div className="card-img-container">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
              </a>
              <div className="card-body">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-projects">
          {bottomProjects.map((project) => (
            <div key={project.id} className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
                <div className="card-img-container">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
              </a>
              <div className="card-body">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ResumeSection = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href={yourResume} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </p>
    </section>
  );
};

const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };

  const handleBlur = (field) => {
    if (field === "name" && name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (field === "email" && email.trim() === "") {
      setEmailError("Email is required");
    } else if (field === "email" && !validateEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, message });
  };

  return (
    <div className="contact-card">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur("name")}
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
function Content() {
  return (
    <div>
      <AboutMeSection />
      <PortfolioSection />
      <ContactCard />
      <ResumeSection />
    </div>
  );
}
export default Content;
