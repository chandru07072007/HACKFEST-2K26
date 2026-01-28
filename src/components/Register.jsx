import React from 'react';
import registerQr from '../image/register_qr.png';

export default function Register() {
    return (
        <section id="register" style={{ background: '#fff', padding: '100px 0', width: '100%' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#000', fontWeight: 'bold', textTransform: 'uppercase' }}>Team Registration</h2>

                <div className="register-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Grid Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '50px',
                        alignItems: 'center'
                    }}>

                        {/* Left Column: Text */}
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ marginBottom: '20px', color: '#000', fontSize: '2rem', fontWeight: '800' }}>
                                Ready to Participate?
                            </h3>
                            <p style={{ color: '#555', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                Join us for HACKFEST 2K26 and showcase your innovation.
                                Simply scan the QR code or click it to fill out the registration form.
                            </p>

                            <div style={{
                                background: '#f9f9f9',
                                borderLeft: '4px solid #D32F2F',
                                padding: '15px 20px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                                <p style={{ margin: 0, color: '#333', fontWeight: '500' }}>
                                    <span style={{ color: '#D32F2F', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>NOTE:</span>
                                    Slots are filling up fast! Register your team before the deadline.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: QR Code */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                background: '#fff',
                                padding: '20px',
                                borderRadius: '20px',
                                display: 'inline-block',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: '1px solid #eee'
                            }}
                                className="qr-card">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfx5y8ipMxMeMXmI_hGmv1NmFDeql8JKpo4MXdoeeWyXqYdMA/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block' }}
                                >
                                    <img
                                        src={registerQr}
                                        alt="Registration QR Code"
                                        style={{ width: '280px', height: '280px', display: 'block', borderRadius: '10px' }}
                                    />
                                </a>
                                <p style={{ marginTop: '15px', color: '#888', fontSize: '0.9rem', fontWeight: '600' }}>
                                    Click to Register
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .qr-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 30px 60px rgba(211, 47, 47, 0.15) !important;
                        border-color: #D32F2F !important;
                    }
                    @media (max-width: 768px) {
                        .register-content > div {
                            grid-template-columns: 1fr !important;
                            text-align: center !important;
                            gap: 40px !important;
                        }
                        .register-content div[style*="textAlign: left"] {
                            text-align: center !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
