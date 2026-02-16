import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-white)' }}
        >
            <div className="container" style={{ padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>A Century of Essence</span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--color-royal-blue)', fontStyle: 'italic' }}>Our Royal Heritage</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                    <div style={{ order: 1 }}>
                        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#333', lineHeight: 1.9, fontWeight: 400 }}>
                            Founded in 1920 amidst the vibrant landscapes of India, L'Eau De Vie began with a singular obsession:
                            to distill the complex, majestic soul of our land into liquid art.
                        </p>
                        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#333', lineHeight: 1.9 }}>
                            We believe a fragrance is a bridge between the physical and the spiritual. It's the silent narrator
                            of your legacy, a scent that commands respect and inspires awe.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: 1.9 }}>
                            By merging ancient Ayurvedic extraction techniques with modern French refinement,
                            we create olfactory masterpieces that are both timeless and avant-garde.
                        </p>
                    </div>
                    <div style={{ order: 2 }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1596434407519-21b44ec65768?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Heritage Bottles"
                                style={{ width: '100%', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-indian)' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                backgroundColor: 'var(--color-royal-blue)',
                                padding: '2rem',
                                color: 'white',
                                borderRadius: '12px'
                            }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>100+</span>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Artisanry</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '12rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '5rem', color: 'var(--color-royal-blue)', fontStyle: 'italic' }}>Pillars of the House</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Sovereign Sourcing', desc: 'Direct partnerships with ethical farmers across the Indian subcontinent.', icon: '🏵️' },
                            { title: 'Master Craft', desc: 'Hand-blended in small batches by third-generation master perfumers.', icon: '🕯️' },
                            { title: 'Cultural Legacy', desc: 'A commitment to preserving and celebrating Eastern olfactory traditions.', icon: '📜' }
                        ].map((item, index) => (
                            <div key={index} style={{ padding: '4rem 3rem', backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-soft)', transition: 'transform 0.3s ease' }} className="bg-mandala">
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: 'var(--color-black)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
