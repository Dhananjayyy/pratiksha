import "@/styles/globals.css";
import "@/styles/portfolio.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: 'var(--background)',
      }}>
        <div style={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #5e35b1',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite',
        }} />
        <style jsx global>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Script 
        id="font-poppins" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
              document.head.appendChild(link);
            })()
          `
        }}
      />
      <style jsx global>{`
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '2rem',
        borderTop: '1px solid #eaeaea',
      }}>
        <p>© {new Date().getFullYear()} Pratiksha's Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}
