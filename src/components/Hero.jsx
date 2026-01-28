import React from 'react';
import mkceImage from '../image/MKCEAerialView.jpg';

export default function Hero() {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: '#fff'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${mkceImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.4)', // Dark & Grayscale effect
                zIndex: -1
            }}></div>

            <h1 style={{
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: '900',
                letterSpacing: '5px',
                margin: '0',
                lineHeight: '1',
                textTransform: 'uppercase',
                fontFamily: 'sans-serif'
            }}>
                HACKFEST 2K26
            </h1>

            <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                marginTop: '20px',
                marginBottom: '40px',
                fontWeight: '300',
                color: '#f0f0f0',
                letterSpacing: '1px'
            }}>
                36-hr Hackathon in Karur | February 20 - 21, 2026
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                    className="btn-hero"
                    onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                >
                    REGISTER NOW
                </button>
                <button
                    className="btn-hero"
                >
                    DOWNLOAD BROCHURE
                </button>
            </div>

            <style>{`
        .btn-hero {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 15px 40px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-hero:hover {
          background: #fff;
          color: #000;
        }
      `}</style>
        </section>
    );
}
