import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend service here
    console.log("Form submitted:", formData);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>Contact | Pratiksha</title>
        <meta name="description" content="Get in touch with Pratiksha for music bookings, collaborations, or just to say hello!" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      <div className="nav-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Music</Link>
          <Link href="/music" className="nav-link">Live Shows</Link>
          <Link href="/contact" className="nav-link active">Contact</Link>
        </nav>
      </div>
      
      <div className="portfolio-container">
        <div className="hero-section">
          <h1>Connect With Me</h1>
          <p>I'd love to hear from you! Whether you're interested in booking me for a show, collaborating on music, or just want to say hello, use the form below to get in touch.</p>
        </div>

        <div className="section">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 className="section-title">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: 'rgba(233, 64, 87, 0.1)',
                  color: 'var(--primary-color)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  fontWeight: 500
                }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '0.75rem', fontSize: '1.25rem' }}></i>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ 
                backgroundColor: 'var(--card-background)', 
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: 'var(--shadow)'
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-color)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      backgroundColor: '#f9f9f9'
                    }}
                    placeholder="Your name"
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-color)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      backgroundColor: '#f9f9f9'
                    }}
                    placeholder="Your email address"
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-color)' }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      backgroundColor: '#f9f9f9',
                      appearance: 'none'
                    }}
                  >
                    <option value="">Please select a topic...</option>
                    <option value="booking">Performance Booking</option>
                    <option value="collaboration">Music Collaboration</option>
                    <option value="press">Press / Media Inquiry</option>
                    <option value="fan">Fan Message</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, color: 'var(--text-color)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'border-color 0.3s',
                      backgroundColor: '#f9f9f9'
                    }}
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  style={{
                    background: 'var(--gradient)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 15px rgba(233, 64, 87, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
            
            <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ 
                backgroundColor: 'var(--card-background)', 
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: 'var(--shadow)'
              }}>
                <h2 style={{ fontSize: '1.5rem', marginTop: 0, position: 'relative', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                  Connect
                  <span style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: '40px', 
                    height: '3px', 
                    background: 'var(--gradient)', 
                    borderRadius: '1.5px' 
                  }}></span>
                </h2>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'var(--gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-envelope" style={{ color: 'white' }}></i>
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Email</h3>
                      <p style={{ margin: 0 }}>booking@pratiksha.com</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'var(--gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fas fa-phone" style={{ color: 'white' }}></i>
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Management</h3>
                      <p style={{ margin: 0 }}>+1 555-123-4567</p>
                    </div>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Follow Me</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href="#" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <i className="fab fa-spotify"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: 'var(--card-background)', 
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('/img/newsletter-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginTop: 0 }}>Join My Newsletter</h3>
                <p>Stay updated on new releases, upcoming shows, and exclusive content.</p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: '30px',
                      border: '1px solid #eee',
                      fontSize: '0.95rem'
                    }}
                  />
                  <button
                    style={{
                      background: 'var(--gradient)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
