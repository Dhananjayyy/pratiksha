import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as ProjectsContent } from "../../content/projects.md";

export default function Projects() {
  const { title, subtitle, projectList } = attributes;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Pratiksha's Portfolio</title>
        <meta name="description" content={subtitle} />
      </Head>
      
      <div className="portfolio-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link active">Projects</Link>
          <Link href="/music" className="nav-link">Music</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="hero-section">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="section">
          <div className="content-section">
            <ProjectsContent />
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="skills-grid">
            {mounted && projectList && projectList.map((project: { title: string; description: string; image?: string; link?: string }, k: number) => (
              <div className="skill-card" key={k}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.image && (
                  <div style={{ marginTop: "1rem" }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: "100%", 
                        height: "200px", 
                        objectFit: "cover", 
                        borderRadius: "4px" 
                      }} 
                    />
                  </div>
                )}
                {project.link && (
                  <div style={{ marginTop: "1rem" }}>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#5e35b1",
                        color: "white",
                        borderRadius: "4px",
                        textDecoration: "none"
                      }}
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
