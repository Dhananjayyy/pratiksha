import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as HomeContent } from "../../content/home.md";

export default function Home() {
  const { title, introduction, skills } = attributes;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={introduction} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      
      <div className="portfolio-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/music" className="nav-link">Music</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="hero-section">
          <h1>{title}</h1>
          <p>{introduction}</p>
        </div>

        <div className="section">
          <h2 className="section-title">About Me</h2>
          <div className="content-section">
            <HomeContent />
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {mounted && skills && skills.map((skill: { name: string; description: string }, k: number) => (
              <div className="skill-card" key={k}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  }

