import React from 'react';

export default function About() {
    return (
        <section id="about" style={{
            background: '#fff',
            padding: '100px 20px',
            minHeight: '500px'
        }}>
            <div className="container">
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    marginBottom: '80px',
                    color: '#000',
                    fontWeight: '700',
                    letterSpacing: '2px'
                }}>
                    ABOUT
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Left Column - Text Content */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            marginBottom: '30px',
                            color: '#333',
                            fontWeight: '600'
                        }}>
                            Welcome, Hackers!
                        </h3>

                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            color: '#444',
                            marginBottom: '20px',
                            textAlign: 'justify'
                        }}>
                            "Welcome to <span style={{ color: '#D32F2F', fontWeight: '700' }}>HACKFEST 2K26</span>, where innovation meets impact! We are thrilled to invite you to this exciting hackathon organized by <span style={{ color: '#D32F2F', fontWeight: '700' }}>M. Kumarasamy College of Engineering</span>. It is your gateway to a world of possibilities, where passionate individuals like you come together to unleash their creativity, solve real-world challenges, and make a meaningful difference."
                        </p>

                        <p style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#000',
                            marginTop: '30px'
                        }}>
                            Prize Pool of <span style={{ color: '#D32F2F', fontWeight: '700' }}>₹ 1,00,000+</span> .
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                            alt="Hackathon Team"
                            style={{
                                width: '100%',
                                height: '350px',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Responsive Design */}
            <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #about h2 {
            font-size: 2.5rem !important;
            margin-bottom: 50px !important;
          }
          #about h3 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
        </section>
    );
}
