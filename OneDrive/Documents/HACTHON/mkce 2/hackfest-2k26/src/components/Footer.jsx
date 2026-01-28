import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: '#0a0a0a',
            padding: '50px 0',
            textAlign: 'center',
            borderTop: '1px solid #333',
            marginTop: '50px'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>HACKFEST 2K26</h2>
                <p>Connect with us</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    {['Instagram', 'LinkedIn', 'Twitter', 'Discord'].map((social) => (
                        <a key={social} href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s' }} className="hover-neon">
                            {social}
                        </a>
                    ))}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    &copy; 2026 M. Kumarasamy College of Engineering. All rights reserved.<br />
                    Developed for HACKFEST 2K26.
                </p>
            </div>
        </footer>
    );
}
