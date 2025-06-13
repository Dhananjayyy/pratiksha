import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { attributes, react as MusicContent } from "../../content/music.md";

export default function Music() {
  const { title, subtitle, performances } = attributes;
  const [mounted, setMounted] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);

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
        <title>{title} | Pratiksha</title>
        <meta name="description" content={subtitle} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      <div className="nav-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Music</Link>
          <Link href="/music" className="nav-link active">Live Shows</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      
      <div className="portfolio-container">
        <div className="hero-section">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a 
              href="#upcoming" 
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
              <i className="fas fa-ticket-alt"></i> Upcoming Shows
            </a>
          </div>
        </div>

        <div className="section">
          <div className="content-section">
            <MusicContent />
          </div>
        </div>

        <div id="upcoming" className="section">
          <h2 className="section-title">Upcoming Performances</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ 
              display: 'flex',
              backgroundColor: 'var(--card-background)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ flex: '0 0 120px', background: 'var(--gradient)', color: 'white', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 600 }}>20</div>
                <div>June</div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>The Melody Lounge</h3>
                  <p style={{ margin: '0 0 0.5rem 0', color: 'var(--light-text)' }}>8:00 PM • Downtown Music District</p>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(233, 64, 87, 0.1)', 
                      color: 'var(--primary-color)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '30px',
                      fontSize: '0.85rem'
                    }}>
                      <i className="fas fa-music" style={{ marginRight: '0.5rem' }}></i> Solo Acoustic
                    </span>
                  </div>
                </div>
                <a 
                  href="#"
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    background: 'var(--gradient)',
                    color: "white",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: '500',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Get Tickets
                </a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex',
              backgroundColor: 'var(--card-background)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ flex: '0 0 120px', background: 'var(--gradient)', color: 'white', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 600 }}>15</div>
                <div>July</div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Summer Music Festival</h3>
                  <p style={{ margin: '0 0 0.5rem 0', color: 'var(--light-text)' }}>6:30 PM • Sunview Park</p>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(233, 64, 87, 0.1)', 
                      color: 'var(--primary-color)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '30px',
                      fontSize: '0.85rem'
                    }}>
                      <i className="fas fa-users" style={{ marginRight: '0.5rem' }}></i> Full Band
                    </span>
                  </div>
                </div>
                <a 
                  href="#"
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    background: 'var(--gradient)',
                    color: "white",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: '500',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Past Performances</h2>
          <div className="skills-grid">
            {mounted && performances && performances.map((performance: { venue: string; date: string; description: string; image?: string }, k: number) => (
              <div 
                className="skill-card" 
                key={k}
                onClick={() => setSelectedVenue(selectedVenue === k ? null : k)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                {performance.image && (
                  <div style={{ 
                    marginBottom: "1.5rem", 
                    marginLeft: '-2rem',
                    marginRight: '-2rem',
                    marginTop: '-2rem',
                    height: '200px'
                  }}>
                    <img 
                      src={performance.image} 
                      alt={performance.venue} 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }} 
                    />
                  </div>
                )}
                <h3>{performance.venue}</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: 500 }}>{formatDate(performance.date)}</p>
                <p>{performance.description}</p>
                
                {selectedVenue === k && (
                  <div style={{ 
                    marginTop: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: '8px',
                  }}>
                    <h4 style={{ marginTop: 0 }}>Gallery</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      <img src="/img/gallery1.jpg" alt="Performance photo" style={{ width: '100%', borderRadius: '4px' }} />
                      <img src="/img/gallery2.jpg" alt="Performance photo" style={{ width: '100%', borderRadius: '4px' }} />
                      <img src="/img/gallery3.jpg" alt="Performance photo" style={{ width: '100%', borderRadius: '4px' }} />
                      <img src="/img/gallery4.jpg" alt="Performance photo" style={{ width: '100%', borderRadius: '4px' }} />
                    </div>
                    
                    <h4>Setlist Highlights</h4>
                    <ul style={{ paddingLeft: '1.25rem' }}>
                      <li>Echoes of Dawn</li>
                      <li>Midnight Reverie</li>
                      <li>Summer Breeze (Cover)</li>
                      <li>Into the Light</li>
                      <li>Remember When</li>
                    </ul>
                  </div>
                )}
                
                <div style={{ 
                  marginTop: '1rem', 
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--primary-color)',
                  fontWeight: 500,
                  fontSize: '0.9rem'
                }}>
                  {selectedVenue === k ? (
                    <>
                      <i className="fas fa-chevron-up" style={{ marginRight: '0.5rem' }}></i>
                      Show less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                      Show more
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Book Me</h2>
          <div className="content-section">
            <p>Interested in having me perform at your venue, festival, or private event? I'd love to bring my music to your audience.</p>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a 
                href="/contact"
                style={{
                  background: 'var(--gradient)',
                  padding: '1rem 2.5rem',
                  borderRadius: '30px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(233, 64, 87, 0.4)'
                }}
              >
                <i className="fas fa-envelope"></i> Contact for Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
