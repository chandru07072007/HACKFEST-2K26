import React from 'react';
import mkceLogo from '../image/mkce.logo.png';
import ibmLogo from '../image/ibm.png';
import adroitLogo from '../image/adroit.jpg';

export default function Sponsors() {
    return (
        <section id="sponsors" style={{
            background: '#fff',
            padding: '100px 20px',
            minHeight: '80vh',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '80px',
                    fontSize: '3.5rem',
                    color: '#000',
                    fontWeight: '900',
                    letterSpacing: '8px',
                    textTransform: 'uppercase'
                }}>
                    OUR SPONSORS
                </h2>

                {/* Sponsors Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {/* MKCE Logo */}
                    <div style={{
                        background: '#fff',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        padding: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '220px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease'
                    }}
                        className="sponsor-card">
                        <img
                            src={mkceLogo}
                            alt="M.Kumarasamy College of Engineering"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* IBM Logo */}
                    <div style={{
                        background: '#fff',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        padding: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '220px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease'
                    }}
                        className="sponsor-card">
                        <img
                            src={ibmLogo}
                            alt="IBM"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* AdroIT Technologies Logo */}
                    <div style={{
                        background: '#fff',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        padding: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '220px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease'
                    }}
                        className="sponsor-card">
                        <img
                            src={adroitLogo}
                            alt="AdroIT Technologies"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .sponsor-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                    border-color: #D32F2F;
                }

                @media (max-width: 768px) {
                    #sponsors h2 {
                        font-size: 2.5rem !important;
                        margin-bottom: 50px !important;
                    }
                }
            `}</style>
        </section>
    );
}
