import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home', active: true },
    { label: 'About', id: 'about' },
    { label: 'Themes', id: 'themes' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0 20px' : '0 40px',
        height: '80px',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        background: '#1a1a1a',
        borderBottom: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        {/* Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            margin: 0,
            border: '2px solid #fff',
            padding: '5px 10px',
            fontWeight: '900',
            letterSpacing: '2px',
            color: '#fff'
          }}>
            MKCE
          </h2>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, height: '100%' }}>
            {menuItems.map((item) => (
              <li key={item.label} style={{ height: '100%' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: item.active ? '#D32F2F' : 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    height: '100%',
                    padding: '0 25px',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseOver={(e) => !item.active && (e.target.style.color = '#ccc')}
                  onMouseOut={(e) => !item.active && (e.target.style.color = '#fff')}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 1001,
              padding: '10px'
            }}
          >
            <div style={{
              width: '30px',
              height: '3px',
              background: '#fff',
              margin: '6px 0',
              transition: '0.4s',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}></div>
            <div style={{
              width: '30px',
              height: '3px',
              background: '#fff',
              margin: '6px 0',
              opacity: isMenuOpen ? 0 : 1,
              transition: '0.4s'
            }}></div>
            <div style={{
              width: '30px',
              height: '3px',
              background: '#fff',
              margin: '6px 0',
              transition: '0.4s',
              transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}></div>
          </button>
        )}

        {/* Mobile Menu Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(26, 26, 26, 0.98)',
          display: isMobile ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 999
        }}>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
            {menuItems.map((item) => (
              <li key={item.label} style={{ margin: '20px 0' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
