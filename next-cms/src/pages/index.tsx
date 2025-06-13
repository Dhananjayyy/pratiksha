import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as HomeContent } from "../../content/home.md";

export default function Home() {
  const { title, introduction, skills } = attributes;
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Singer-Songwriter</title>
        <meta name="description" content={introduction} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      
      <div className="nav-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/projects" className="nav-link">Music</Link>
          <Link href="/music" className="nav-link">Live Shows</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      
      <div className="portfolio-container">
        <div className="hero-section">
          <h1>{title}</h1>
          <p>{introduction}</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a 
              href="#listen" 
              style={{
                background: 'var(--gradient)',
                padding: '1rem 2rem',
                borderRadius: '30px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(233, 64, 87, 0.4)'
              }}
            >
              <i className="fas fa-play"></i> Listen Now
            </a>
            <a 
              href="#about" 
              style={{
                background: 'transparent',
                padding: '1rem 2rem',
                borderRadius: '30px',
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: 500,
                border: '2px solid var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              About Me
            </a>
          </div>
        </div>

        <div id="featured" className="section">
          <h2 className="section-title">Featured Music</h2>
          <div className="album-grid">
            <div className="album-card">
              <img src="/img/album1.jpg" alt="Echoes of Dawn EP" />
              <div className="album-info">
                <h3>Echoes of Dawn</h3>
                <p>Latest EP • 2025</p>
              </div>
            </div>
            <div className="album-card">
              <img src="/img/album2.jpg" alt="Midnight Reverie Single" />
              <div className="album-info">
                <h3>Midnight Reverie</h3>
                <p>Single • 2025</p>
              </div>
            </div>
            <div className="album-card">
              <img src="/img/album3.jpg" alt="Café Memories" />
              <div className="album-info">
                <h3>Café Memories</h3>
                <p>Acoustic Collection • 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div id="listen" className="section">
          <h2 className="section-title">Listen Now</h2>
          <div className="music-player">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'var(--gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Midnight Reverie</h3>
                <p style={{ margin: 0, color: 'var(--light-text)' }}>From the EP "Echoes of Dawn"</p>
              </div>
            </div>
            
            <div style={{ margin: '2rem 0 1rem', height: '4px', background: '#f1f1f1', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '30%', background: 'var(--gradient)', borderRadius: '2px' }}></div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>1:12</span>
              <span>3:45</span>
            </div>
          </div>
        </div>

        <div id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="content-section">
            <HomeContent />
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            {mounted && skills && skills.map((skill: { name: string; description: string }, k: number) => (
              <div className="skill-card" key={k}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Upcoming Shows</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '1.5rem', 
              backgroundColor: 'var(--card-background)', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow)',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>The Melody Lounge</h3>
                <p style={{ margin: 0, color: 'var(--light-text)' }}>June 20, 2025 • 8:00 PM</p>
              </div>
              <a 
                href="#" 
                style={{
                  background: 'var(--gradient)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem'
                }}
              >
                Get Tickets
              </a>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '1.5rem', 
              backgroundColor: 'var(--card-background)', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow)',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Summer Music Festival</h3>
                <p style={{ margin: 0, color: 'var(--light-text)' }}>July 15, 2025 • 6:30 PM</p>
              </div>
              <a 
                href="#" 
                style={{
                  background: 'var(--gradient)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem'
                }}
              >
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }

