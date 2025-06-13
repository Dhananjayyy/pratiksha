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
        <title>Contact | Pratiksha's Portfolio</title>
        <meta name="description" content="Get in touch with Pratiksha for collaborations, performances, or just to say hello!" />
      </Head>
      
      <div className="portfolio-container">
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/music" className="nav-link">Music</Link>
          <Link href="/contact" className="nav-link active">Contact</Link>
        </nav>

        <div className="hero-section">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you! Whether you're interested in research collaborations, music performances, or just want to connect, feel free to reach out.</p>
        </div>

        <div className="section">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="section-title">Contact Me</h2>
              
              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: '#dff0d8',
                  color: '#3c763d',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
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
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
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
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
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
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#5e35b1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <h2 className="section-title">Connect</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#5e35b1', marginBottom: '0.5rem' }}>Work</h3>
                <p>Techknowgreen Research Laboratory</p>
                <p>Environmental Technology Division</p>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#5e35b1', marginBottom: '0.5rem' }}>Email</h3>
                <p>pratiksha@techknowgreen.example.com</p>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#5e35b1', marginBottom: '0.5rem' }}>Music Bookings</h3>
                <p>music.pratiksha@example.com</p>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#5e35b1', marginBottom: '0.5rem' }}>Social Media</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ textDecoration: 'none', color: '#333' }}>LinkedIn</a>
                  <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Instagram</a>
                  <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
