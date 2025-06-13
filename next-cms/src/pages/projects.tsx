import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as ProjectsContent } from "../../content/projects.md";

export default function Projects() {
  const { title, subtitle, projectList } = attributes;
  const [mounted, setMounted] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Pratiksha</title>
        <meta name="description" content={subtitle} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      <div className="nav-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link active">Music</Link>
          <Link href="/music" className="nav-link">Live Shows</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      
      <div className="portfolio-container">
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
          <h2 className="section-title">Releases</h2>
          <div className="album-grid">
            {mounted && projectList && projectList.map((project: { title: string; description: string; image?: string; link?: string }, k: number) => (
              <div 
                className="album-card" 
                key={k}
                onClick={() => setCurrentAlbum(currentAlbum === k ? null : k)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={project.image || '/img/album-placeholder.jpg'} 
                  alt={project.title}
                />
                <div className="album-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 50)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {currentAlbum !== null && mounted && projectList && (
          <div className="section">
            <div style={{ 
              background: 'var(--card-background)', 
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: 'var(--shadow)',
              position: 'relative'
            }}>
              <button
                onClick={() => setCurrentAlbum(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--light-text)'
                }}
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 300px' }}>
                  <img 
                    src={projectList[currentAlbum].image || '/img/album-placeholder.jpg'} 
                    alt={projectList[currentAlbum].title}
                    style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow)' }}
                  />
                </div>
                
                <div style={{ flex: '1 1 400px' }}>
                  <h2 style={{ marginTop: 0, color: 'var(--primary-color)' }}>{projectList[currentAlbum].title}</h2>
                  <p>{projectList[currentAlbum].description}</p>
                  
                  <div style={{ marginTop: '2rem' }}>
                    <h3>Tracklist</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ marginRight: '1rem', color: 'var(--light-text)' }}>1</span>
                          <span>Into the Light</span>
                        </div>
                        <span>3:45</span>
                      </li>
                      <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ marginRight: '1rem', color: 'var(--light-text)' }}>2</span>
                          <span>Whispers in the Wind</span>
                        </div>
                        <span>4:12</span>
                      </li>
                      <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ marginRight: '1rem', color: 'var(--light-text)' }}>3</span>
                          <span>Remember When</span>
                        </div>
                        <span>3:56</span>
                      </li>
                      <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ marginRight: '1rem', color: 'var(--light-text)' }}>4</span>
                          <span>Midnight Dreams</span>
                        </div>
                        <span>5:02</span>
                      </li>
                      <li style={{ padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ marginRight: '1rem', color: 'var(--light-text)' }}>5</span>
                          <span>Coming Home</span>
                        </div>
                        <span>4:28</span>
                      </li>
                    </ul>
                  </div>
                  
                  {projectList[currentAlbum].link && (
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                      <a 
                        href={projectList[currentAlbum].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: "0.75rem 1.5rem",
                          background: 'var(--gradient)',
                          color: "white",
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontWeight: '500'
                        }}
                      >
                        <i className="fas fa-play"></i> Listen
                      </a>
                      <a 
                        href="#"
                        style={{
                          display: "inline-flex",
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: "0.75rem 1.5rem",
                          background: 'transparent',
                          color: "var(--text-color)",
                          border: '2px solid var(--primary-color)',
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontWeight: '500'
                        }}
                      >
                        <i className="fas fa-download"></i> Download
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="section">
          <h2 className="section-title">Behind the Music</h2>
          <div className="content-section">
            <p>Every song I create comes from a personal place. My writing process often begins with a melody that captures a feeling, followed by lyrics that tell the story. I draw inspiration from my own experiences and the world around me.</p>
            
            <p>Music production is a collaborative journey. I work with talented musicians and producers who help bring my vision to life, adding layers and textures that elevate the raw emotion of each song.</p>
          </div>
        </div>
      </div>
    </>
  );
}
