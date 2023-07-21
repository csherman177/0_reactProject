import React, { useState } from "react";
import "./css.css";
import image from "./csphoto.jpg";
import jateimg from "./jate_screenshot.png";

const AboutMeSection = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container">
        <div className="image">
          <img src={image} alt="Courtney" />
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: jateimg,
    link: "https://project1-link.com",
  },
  {
    id: 2,
    title: "NoSQL Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image2.jpg",
    link: "https://project2-link.com",
  },
  {
    id: 3,
    title: "MVC Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image3.jpg",
    link: "https://project3-link.com",
  },
  {
    id: 4,
    title: "Logo Craft",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image4.jpg",
    link: "https://project4-link.com",
  },
  {
    id: 5,
    title: "Weather Dashboard Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image5.jpg",
    link: "https://project5-link.com",
  },
  {
    id: 6,
    title: "Password Generator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image6.jpg",
    link: "https://project6-link.com",
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
                <img src={project.imageUrl} alt={project.title} />
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
                <img src={project.imageUrl} alt={project.title} />
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
  // Replace this URL with the actual URL of your downloadable resume
  const resumeUrl = "https://example.com/your_resume.pdf";

  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "Git",
    "RESTful APIs",
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
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
    // Simple email validation regex pattern
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
    // Perform form submission or other actions here
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
