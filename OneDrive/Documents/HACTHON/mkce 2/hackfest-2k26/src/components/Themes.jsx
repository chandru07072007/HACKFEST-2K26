import React from 'react';
import sdg3 from '../image/sdg 3.png';
import sdg4 from '../image/sdg 4.png';
import sdg9 from '../image/sdg 9.png';
import sdg11 from '../image/sdg 11.png';
import sdg13 from '../image/sdg 13.png';

const domains = [
    {
        id: "03",
        title: "Good Health & Well-being",
        subtitle: "SDG 3",
        color: "#4C9F38",
        image: sdg3
    },
    {
        id: "04",
        title: "Quality Education",
        subtitle: "SDG 4",
        color: "#C5192D",
        image: sdg4
    },
    {
        id: "09",
        title: "Industry, Innovation & Infrastructure",
        subtitle: "SDG 9",
        color: "#FD6925",
        image: sdg9
    },
    {
        id: "11",
        title: "Sustainable Cities & Communities",
        subtitle: "SDG 11",
        color: "#FD9D24",
        image: sdg11
    },
    {
        id: "13",
        title: "Climate Action",
        subtitle: "SDG 13",
        color: "#3F7E44",
        image: sdg13
    }
];

export default function Themes() {
    return (
        <section id="themes" style={{
            background: '#f5f5f5',
            padding: '100px 20px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '70vh'
        }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3.5rem',
                    marginBottom: '20px',
                    color: '#000',
                    fontWeight: '900',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                }}>
                    DOMAINS
                </h2>

                <p style={{
                    textAlign: 'center',
                    fontSize: '1.3rem',
                    color: '#555',
                    marginBottom: '60px',
                    fontWeight: '500'
                }}>
                    PREPARE FOR HACKATHON 🚀
                </p>

                {/* Horizontal Scrolling Container */}
                <div className="scroll-container" style={{
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '20px 0'
                }}>
                    <div className="scroll-track">
                        {/* First set of cards */}
                        {domains.map((domain, index) => (
                            <div
                                key={`${domain.id}-1`}
                                className="domain-card-horizontal"
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    minWidth: '280px',
                                    margin: '0 15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {/* SDG Image */}
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    marginBottom: '20px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <img
                                        src={domain.image}
                                        alt={domain.subtitle}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                {/* Title */}
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#333',
                                    fontWeight: '600',
                                    margin: 0,
                                    lineHeight: '1.4'
                                }}>
                                    {domain.title}
                                </p>
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {domains.map((domain, index) => (
                            <div
                                key={`${domain.id}-2`}
                                className="domain-card-horizontal"
                                style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    minWidth: '280px',
                                    margin: '0 15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    marginBottom: '20px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <img
                                        src={domain.image}
                                        alt={domain.subtitle}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#333',
                                    fontWeight: '600',
                                    margin: 0,
                                    lineHeight: '1.4'
                                }}>
                                    {domain.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
        .scroll-track {
          display: flex;
          animation: scrollHorizontal 25s linear infinite;
          width: fit-content;
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .domain-card-horizontal {
          flex-shrink: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .domain-card-horizontal:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .domain-card-horizontal img {
          transition: transform 0.3s ease;
        }

        .domain-card-horizontal:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          #themes h2 {
            font-size: 2.5rem !important;
          }

          .domain-card-horizontal {
            min-width: 240px !important;
            padding: 25px !important;
          }

          .domain-card-horizontal > div:first-child {
            width: 160px !important;
            height: 160px !important;
          }

          .scroll-track {
            animation-duration: 20s !important;
          }
        }
      `}</style>
        </section>
    );
}
