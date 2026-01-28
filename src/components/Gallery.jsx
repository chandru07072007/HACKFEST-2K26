import React from 'react';

export default function Gallery() {
    // Gallery images - you can replace these URLs with actual MKCE hackathon images
    const galleryImages = [
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400'
    ];

    return (
        <section id="gallery" style={{
            background: '#000',
            padding: '100px 20px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '4.5rem',
                    marginBottom: '80px',
                    color: '#fff',
                    fontWeight: '900',
                    letterSpacing: '10px',
                    textTransform: 'uppercase',
                    textShadow: '0 0 30px rgba(255,255,255,0.5)'
                }}>
                    GALLERY
                </h2>

                {/* Hexagonal Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '20px'
                }}>
                    {galleryImages.map((img, index) => (
                        <div key={index} className="hex-container" style={{
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <div className="hexagon">
                                <div className="hex-overlay"></div>
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles */}
            <style>{`
        /* Hexagon Styles */
        .hex-container {
          position: relative;
          padding-bottom: 115%;
          overflow: visible;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hexagon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.4s ease;
          cursor: pointer;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .hexagon:hover {
          transform: scale(1.15);
          filter: brightness(1.3);
          box-shadow: 0 0 40px rgba(255,255,255,0.6);
          border-color: rgba(255,255,255,0.5);
          z-index: 100;
        }

        .hex-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .hexagon:hover .hex-overlay {
          opacity: 1;
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .hexagon img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .hexagon:hover img {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          #gallery h2 {
            font-size: 2.5rem !important;
            letter-spacing: 5px !important;
          }
          #gallery > div > div {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
            gap: 20px !important;
          }
        }
      `}</style>
        </section>
    );
}
