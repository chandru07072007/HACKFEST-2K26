import React from 'react';

export default function Contact() {
    return (
        <section id="contact" style={{
            background: '#0a0a0a',
            padding: '80px 0',
            marginBottom: '0',
            borderTop: '1px solid #222'
        }}>
            <div className="container">
                {/* Main Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Brand Section */}
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '15px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '700'
                        }}>
                            HACKFEST 2K26
                        </h2>
                        <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '20px' }}>
                            International Hackathon
                        </p>
                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {/* GitHub */}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#667eea';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#667eea';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#667eea';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#1a1a1a" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#667eea';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#667eea';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Venue Address */}
                    <div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            marginBottom: '20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            Venue Address
                        </h3>
                        <p style={{ color: '#aaa', lineHeight: '1.8', margin: 0 }}>
                            M. Kumarasamy College of Engineering,<br />
                            Karur - Namakkal Main Road,<br />
                            Thalavapalayam,<br />
                            Karur, Tamil Nadu - 639113
                        </p>

                        <h3 style={{
                            fontSize: '1.3rem',
                            marginTop: '30px',
                            marginBottom: '20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            Branding Guidelines
                        </h3>
                        <a href="#" style={{
                            color: '#667eea',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                            onMouseLeave={(e) => e.target.style.color = '#667eea'}
                        >
                            › HACKFEST Branding Assets
                        </a>
                    </div>

                    {/* Additional Links */}
                    <div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            marginBottom: '20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            Additional Links
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'MLH Code of Conduct', href: '#' },
                                { label: 'College Website', href: '#' },
                                { label: 'The Coding Society', href: '#' }
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        color: '#667eea',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                                    onMouseLeave={(e) => e.target.style.color = '#667eea'}
                                >
                                    › {link.label}
                                </a>
                            ))}
                        </div>

                        <h3 style={{
                            fontSize: '1.3rem',
                            marginTop: '30px',
                            marginBottom: '20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            Past Events
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Visit 1.0', href: '#' },
                                { label: 'Visit 2.0', href: '#' }
                            ].map((event) => (
                                <a
                                    key={event.label}
                                    href={event.href}
                                    style={{
                                        color: '#667eea',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                                    onMouseLeave={(e) => e.target.style.color = '#667eea'}
                                >
                                    › {event.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Location Map */}
                    <div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            marginBottom: '20px',
                            color: '#fff',
                            fontWeight: '600'
                        }}>
                            Location
                        </h3>
                        <div style={{
                            position: 'relative',
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            height: '250px'
                        }}>
                            <a
                                href="https://maps.app.goo.gl/4w8tb82tsfJMNbSH9"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    zIndex: 10,
                                    background: '#fff',
                                    color: '#667eea',
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#667eea';
                                    e.target.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#fff';
                                    e.target.style.color = '#667eea';
                                }}
                            >
                                View larger map
                            </a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9527654321!2d78.08270731479247!3d10.957400992215043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f4b5e6e6e6f%3A0xb5e5e5e5e5e5e5e5!2sM.Kumarasamy%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1706425305123!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="M. Kumarasamy College of Engineering Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Email Contact Section */}
                <div style={{
                    textAlign: 'center',
                    padding: '40px 0',
                    borderTop: '1px solid #222',
                    marginTop: '40px'
                }}>
                    <p style={{ color: '#aaa', marginBottom: '10px' }}>Contact Us</p>
                    <a href="mailto:hackfest2k26@mkce.ac.in" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        transition: 'color 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                        onMouseLeave={(e) => e.target.style.color = '#667eea'}
                    >
                        hackfest2k26@mkce.ac.in
                    </a>
                </div>
            </div>
        </section>
    );
}
