import { useState } from 'react';
import selviImg from '../image/staff img/Jagnath M.jpeg';
import jeyanathImg from '../image/staff img/Jagnath M.jpeg';
import jeyaGaneshImg from '../image/staff img/Jeya sir.jpeg';

export default function StaffCoordinator() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const coordinators = [
        {
            name: 'Jaganath M',
            title: 'Assistant Professor',
            department: 'AI & DS',
            image: selviImg
        },
        {
            name: 'Jaganath M',
            title: 'Assistant Professor',
            department: 'AI & DS',
            image: jeyanathImg
        },
        {
            name: 'Dr. Jeya Ganesh Kumar Kailasam',
            title: 'Assistant Professor',
            department: 'AI & DS',
            image: jeyaGaneshImg
        }
    ];

    return (
        <section id="staff-coordinator" style={{
            background: '#000',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(4rem, 15vw, 10rem)',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.03)',
                letterSpacing: 'clamp(5px, 2vw, 20px)',
                whiteSpace: 'nowrap',
                zIndex: 0,
                userSelect: 'none',
                pointerEvents: 'none'
            }}>
                STAFF COORDINATORS
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Title */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    textAlign: 'center',
                    marginBottom: '80px',
                    fontWeight: '900',
                    color: '#fff',
                    letterSpacing: '5px',
                    textTransform: 'uppercase'
                }}>
                    STAFF COORDINATORS
                </h2>

                {/* Coordinators Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {coordinators.map((coordinator, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                setHoveredCard(index);
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                setHoveredCard(null);
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Profile Image with Golden Ring */}
                            <div style={{
                                width: '180px',
                                height: '180px',
                                margin: '0 auto 30px auto',
                                position: 'relative'
                            }}>
                                {/* Golden Ring */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-10px',
                                    right: '-10px',
                                    bottom: '-10px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                    padding: '5px',
                                    zIndex: 0
                                }}>
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        background: '#000'
                                    }}></div>
                                </div>

                                {/* Profile Image */}
                                <img
                                    src={coordinator.image}
                                    alt={coordinator.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </div>

                            {/* Name */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#fff',
                                marginBottom: '10px',
                                letterSpacing: '1px'
                            }}>
                                {coordinator.name}
                            </h3>

                            {/* Title */}
                            <p style={{
                                fontSize: '1rem',
                                color: '#FFD700',
                                marginBottom: '5px',
                                fontWeight: '600'
                            }}>
                                {coordinator.title}
                            </p>

                            {/* Department */}
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#aaa',
                                marginBottom: '20px'
                            }}>
                                {coordinator.department}
                            </p>

                            {/* Social Icons - Animated on Hover */}
                            <div style={{
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center',
                                opacity: hoveredCard === index ? 1 : 0,
                                transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'all 0.4s ease',
                                pointerEvents: hoveredCard === index ? 'auto' : 'none'
                            }}>
                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        background: '#1a1a1a',
                                        border: '1px solid #FFD700',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#FFD700';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#1a1a1a';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:staff@mkce.ac.in"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        background: '#1a1a1a',
                                        border: '1px solid #FFD700',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#FFD700';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#1a1a1a';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
