export default function Navbar() {
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      height: '80px',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      background: '#1a1a1a', // Solid dark background like reference
      borderBottom: 'none'
    }}>
      {/* Logo Area */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{
          fontSize: '1.8rem',
          margin: 0,
          border: '2px solid #fff',
          padding: '5px 10px',
          fontWeight: '900',
          letterSpacing: '2px'
        }}>
          MKCE
        </h2>
      </div>

      {/* Navigation Links */}
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, height: '100%' }}>
        {[
          { label: 'Home', id: 'home', active: true },
          { label: 'About', id: 'about' },
          { label: 'Themes', id: 'themes' },
          { label: 'Timeline', id: 'timeline' },
          { label: 'Prizes', id: 'prizes' },
          { label: 'Contact', id: 'footer' }
        ].map((item) => (
          <li key={item.label} style={{ height: '100%' }}>
            <button
              onClick={() => scrollToSection(item.id)}
              style={{
                background: item.active ? '#D32F2F' : 'transparent', // Red background for Home
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
    </nav>
  );
}
