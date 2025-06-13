import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as MusicContent } from "../../content/music.md";

export default function Music() {
  const { title, subtitle, performances } = attributes;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <>
      <Head>
        <title>{title} | Pratiksha's Portfolio</title>
        <meta name="description" content={subtitle} />
      </Head>
      
      <div className="portfolio-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/music" className="nav-link active">Music</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="hero-section">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="section">
          <div className="content-section">
            <MusicContent />
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Recent Performances</h2>
          <div className="skills-grid">
            {mounted && performances && performances.map((performance: { venue: string; date: string; description: string; image?: string }, k: number) => (
              <div className="skill-card" key={k}>
                <h3>{performance.venue}</h3>
                <p><strong>Date:</strong> {formatDate(performance.date)}</p>
                <p>{performance.description}</p>
                {performance.image && (
                  <div style={{ marginTop: "1rem" }}>
                    <img 
                      src={performance.image} 
                      alt={performance.venue} 
                      style={{ 
                        width: "100%", 
                        height: "200px", 
                        objectFit: "cover", 
                        borderRadius: "4px" 
                      }} 
                    />
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
