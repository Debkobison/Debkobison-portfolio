/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/code-bg.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Java Password Generator Software",
    description: "A password generator desktop software built using java that gives you a random password with characters,string, and numbers.",
    url: "https://github.com/Debkobison/password_generator",
  },
  {
    title: "A Student Database Management System",
    description:
      "Using Java and MySQL to create an automated studet database system for tetiary institution in mind.",
    url: "https://github.com/Debkobison/student_DBMS",
  },
  {
    title: "My Resume Site",
    description:
      "My Microsoft Resume Site built using React.js to showcase my work and information about my self.",
    url: "https://github.com/Debkobison/Debkobison-portfolio",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
