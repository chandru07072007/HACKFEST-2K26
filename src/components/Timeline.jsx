import React, { useEffect, useRef } from 'react';
import mkceImage from '../image/mkce.jpeg';

const timelineEvents = [
    { time: "09:00 AM", title: "Registration & Inauguration", day: "Day 1 - 20 Feb 2026" },
    { time: "11:00 AM", title: "Hackathon Starts 🚀", day: "Day 1" },
    { time: "04:00 PM", title: "Mentoring Session 1", day: "Day 1" },
    { time: "08:00 PM", title: "Dinner Break", day: "Day 1" },
    { time: "08:00 AM", title: "Mentoring Session 2", day: "Day 2 - 21 Feb 2026" },
    { time: "05:00 PM", title: "Final Coding Stops 🛑", day: "Day 2" },
    { time: "06:00 PM", title: "Project Demo & Evaluation", day: "Day 2" },
    { time: "08:00 PM", title: "Prize Distribution 🏆", day: "Day 2" }
];

export default function Timeline() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="timeline" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${mkceImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: '100px 20px',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '80px',
                    fontSize: '3.5rem',
                    color: '#fff',
                    fontWeight: '900',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                }}>
                    Event Timeline
                </h2>

                <div ref={timelineRef} className="timeline-container">
                    {timelineEvents.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                paddingBottom: index === timelineEvents.length - 1 ? '0' : '60px',
                                opacity: 0,
                                transform: 'translateY(30px)'
                            }}
                        >
                            {/* Vertical Line */}
                            {index !== timelineEvents.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    left: '19px',
                                    top: '40px',
                                    bottom: '0',
                                    width: '2px',
                                    background: '#D32F2F'
                                }}></div>
                            )}

                            {/* Milestone Dot */}
                            <div className="timeline-dot" style={{
                                position: 'absolute',
                                left: '0',
                                top: '10px',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: '#fff',
                                border: '4px solid #D32F2F',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                color: '#D32F2F',
                                boxShadow: '0 4px 15px rgba(211, 47, 47, 0.2)',
                                zIndex: 2
                            }}>
                                {index + 1}
                            </div>

                            {/* Event Content */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(10px)',
                                padding: '25px 30px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                                className="event-card">
                                {event.day.includes('Day 1 - ') || event.day.includes('Day 2 - ') ? (
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: '#D32F2F',
                                        fontWeight: '700',
                                        marginBottom: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {event.day}
                                    </div>
                                ) : null}

                                <div style={{
                                    fontSize: '1.3rem',
                                    fontWeight: '700',
                                    color: '#D32F2F',
                                    marginBottom: '8px'
                                }}>
                                    {event.time}
                                </div>

                                <div style={{
                                    fontSize: '1.2rem',
                                    color: '#333',
                                    fontWeight: '500'
                                }}>
                                    {event.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .timeline-item {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .timeline-item.visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }

                .event-card:hover {
                    transform: translateX(10px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
                    background: rgba(255, 255, 255, 1);
                }

                .timeline-dot {
                    transition: all 0.3s ease;
                }

                .timeline-item.visible .timeline-dot {
                    animation: dotPulse 1.5s ease-in-out;
                }

                @keyframes dotPulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                        box-shadow: 0 4px 25px rgba(211, 47, 47, 0.4);
                    }
                }

                /* Stagger animation delays */
                .timeline-item:nth-child(1) { transition-delay: 0s; }
                .timeline-item:nth-child(2) { transition-delay: 0.1s; }
                .timeline-item:nth-child(3) { transition-delay: 0.2s; }
                .timeline-item:nth-child(4) { transition-delay: 0.3s; }
                .timeline-item:nth-child(5) { transition-delay: 0.4s; }
                .timeline-item:nth-child(6) { transition-delay: 0.5s; }
                .timeline-item:nth-child(7) { transition-delay: 0.6s; }
                .timeline-item:nth-child(8) { transition-delay: 0.7s; }

                @media (max-width: 768px) {
                    #timeline h2 {
                        font-size: 2.5rem !important;
                        margin-bottom: 50px !important;
                    }

                    .timeline-item {
                        padding-left: 50px !important;
                    }

                    .timeline-dot {
                        width: 32px !important;
                        height: 32px !important;
                        font-size: 1rem !important;
                    }

                    .event-card {
                        padding: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
}
