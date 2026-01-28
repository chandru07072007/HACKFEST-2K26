import React from 'react';

const prizes = [
    {
        position: "SECOND PRIZE",
        amount: "₹25,000",
        icon: "🥈",
        color: "#00D9FF",
        glowColor: "0, 217, 255",
        rank: 2
    },
    {
        position: "FIRST PRIZE",
        amount: "₹50,000",
        icon: "🥇",
        color: "#FFD700",
        glowColor: "255, 215, 0",
        rank: 1
    },
    {
        position: "THIRD PRIZE",
        amount: "₹15,000",
        icon: "🥉",
        color: "#FF1744",
        glowColor: "255, 23, 68",
        rank: 3
    }
];

export default function Prizes() {
    return (
        <section id="prizes" style={{
            background: '#000',
            padding: '100px 20px',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Stars Background */}
            <div className="stars-layer"></div>

            {/* Large Background Text */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 'clamp(6rem, 15vw, 12rem)',
                fontWeight: '900',
                color: 'rgba(255,255,255,0.02)',
                letterSpacing: '20px',
                whiteSpace: 'nowrap',
                zIndex: 1
            }}>
                REWARDS
            </div>

            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '100px',
                    fontSize: '4.5rem',
                    color: '#fff',
                    fontWeight: '900',
                    letterSpacing: '12px',
                    textTransform: 'uppercase',
                    textShadow: '0 0 40px rgba(255,255,255,0.5)'
                }}>
                    PRIZES
                </h2>

                {/* Podium Layout */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '40px',
                    flexWrap: 'wrap',
                    padding: '20px',
                    marginBottom: '80px'
                }}>
                    {prizes.map((prize, index) => (
                        <div
                            key={index}
                            className="prize-card"
                            data-rank={prize.rank}
                            style={{
                                '--glow-color': prize.glowColor,
                                background: 'rgba(10, 10, 10, 0.9)',
                                border: `3px solid ${prize.color}`,
                                borderRadius: '20px',
                                padding: prize.rank === 1 ? '60px 40px' : '50px 35px',
                                textAlign: 'center',
                                minWidth: prize.rank === 1 ? '360px' : '300px',
                                maxWidth: prize.rank === 1 ? '400px' : '340px',
                                boxShadow: `
                                    0 0 40px rgba(${prize.glowColor}, 0.6),
                                    0 0 80px rgba(${prize.glowColor}, 0.3),
                                    inset 0 0 40px rgba(${prize.glowColor}, 0.1)
                                `,
                                position: 'relative',
                                marginTop: prize.rank === 1 ? '0' : '100px',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                backdropFilter: 'blur(20px)',
                                transform: prize.rank === 1 ? 'scale(1.1)' : 'scale(1)'
                            }}
                        >

                            {/* Medal Icon */}
                            <div style={{
                                fontSize: prize.rank === 1 ? '5rem' : '4rem',
                                marginBottom: '25px',
                                filter: `drop-shadow(0 0 20px ${prize.color})`
                            }}>
                                {prize.icon}
                            </div>

                            {/* Position */}
                            <div style={{
                                fontSize: '1rem',
                                color: '#888',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                marginBottom: '20px',
                                textTransform: 'uppercase'
                            }}>
                                {prize.position}
                            </div>

                            {/* Prize Amount */}
                            <div style={{
                                fontSize: prize.rank === 1 ? '3.5rem' : '2.8rem',
                                color: prize.color,
                                fontWeight: '900',
                                marginBottom: '30px',
                                textShadow: `
                                    0 0 30px ${prize.color},
                                    0 0 60px ${prize.color},
                                    0 0 90px rgba(${prize.glowColor}, 0.5)
                                `,
                                letterSpacing: '2px'
                            }}>
                                {prize.amount}
                            </div>

                            {/* View Button */}
                            <button className="neon-btn" style={{
                                background: 'transparent',
                                border: `2px solid ${prize.color}`,
                                color: prize.color,
                                padding: '12px 40px',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                transition: 'all 0.3s ease',
                                boxShadow: `0 0 20px rgba(${prize.glowColor}, 0.3)`,
                                '--btn-color': prize.color,
                                '--btn-glow': prize.glowColor
                            }}>
                                VIEW
                            </button>
                        </div>
                    ))}
                </div>

                {/* Consolation Prizes */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '60px'
                }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(20, 20, 20, 0.8)',
                        border: '2px solid #9C27B0',
                        borderRadius: '15px',
                        padding: '30px 50px',
                        boxShadow: `
                            0 0 30px rgba(156, 39, 176, 0.4),
                            inset 0 0 20px rgba(156, 39, 176, 0.1)
                        `,
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            color: '#9C27B0',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            marginBottom: '15px',
                            textTransform: 'uppercase',
                            textShadow: '0 0 20px rgba(156, 39, 176, 0.8)'
                        }}>
                            🎁 Consolation Prizes
                        </div>
                        <div style={{
                            fontSize: '2.5rem',
                            color: '#fff',
                            fontWeight: '900',
                            textShadow: '0 0 30px rgba(156, 39, 176, 0.6)'
                        }}>
                            5 Winners
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .stars-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        radial-gradient(2px 2px at 20% 30%, white, transparent),
                        radial-gradient(2px 2px at 60% 70%, white, transparent),
                        radial-gradient(1px 1px at 50% 50%, white, transparent),
                        radial-gradient(1px 1px at 80% 10%, white, transparent),
                        radial-gradient(2px 2px at 90% 60%, white, transparent),
                        radial-gradient(1px 1px at 33% 80%, white, transparent),
                        radial-gradient(2px 2px at 15% 90%, white, transparent);
                    background-size: 200px 200px, 300px 300px, 250px 250px, 150px 150px, 180px 180px, 220px 220px, 280px 280px;
                    opacity: 0.5;
                    z-index: 0;
                }

                @media (max-width: 768px) {
                    #prizes h2 {
                        font-size: 2.5rem !important;
                        margin-bottom: 60px !important;
                    }

                    .prize-card {
                        margin-top: 60px !important;
                        min-width: 260px !important;
                        transform: scale(1) !important;
                    }

                    .prize-card[data-rank="1"] {
                        transform: scale(1.05) !important;
                    }
                }
            `}</style>
        </section>
    );
}
