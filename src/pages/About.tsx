import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-cream)' }}
            className="bg-mandala"
        >
            <div className="container" style={{ padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem' }}
                    >
                        A Century of Essence
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1.5rem', color: 'var(--color-black)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}
                    >
                        Our Royal Heritage
                    </motion.h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: 'var(--color-black)', lineHeight: 1.9, fontWeight: 400 }}>
                            Founded in 1920 amidst the vibrant landscapes of India, <span className="text-gradient" style={{ fontWeight: 600 }}>Essence of Life</span> began with a singular obsession:
                            to distill the complex, majestic soul of our land into liquid art.
                        </p>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: 'var(--color-gray)', lineHeight: 1.9 }}>
                            We believe a fragrance is a bridge between the physical and the spiritual. It's the silent narrator
                            of your legacy, a scent that commands respect and inspires awe.
                        </p>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', lineHeight: 1.9 }}>
                            By merging ancient Ayurvedic extraction techniques with modern French refinement,
                            we create olfactory masterpieces that are both timeless and avant-garde.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ padding: '1rem', border: '1px solid rgba(183, 110, 121, 0.2)', borderRadius: 'var(--radius-soft)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1596434407519-21b44ec65768?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Heritage Bottles"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-indian)', display: 'block' }}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                backgroundColor: 'var(--color-royal-blue)',
                                padding: '2.5rem',
                                color: 'white',
                                borderRadius: '12px',
                                boxShadow: 'var(--shadow-medium)'
                            }}
                        >
                            <span style={{ fontSize: '3rem', fontWeight: 800, display: 'block', marginBottom: '0.2rem' }}>100+</span>
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Years of Artisanry</p>
                        </motion.div>
                    </motion.div>
                </div>

                <div style={{ marginTop: '15rem', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '6rem', color: 'var(--color-black)', fontStyle: 'italic' }}
                    >
                        Pillars of the House
                    </motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { title: 'Sovereign Sourcing', desc: 'Direct partnerships with ethical farmers across the Indian subcontinent.', icon: '🏵️' },
                            { title: 'Master Craft', desc: 'Hand-blended in small batches by third-generation master perfumers.', icon: '🕯️' },
                            { title: 'Cultural Legacy', desc: 'A commitment to preserving and celebrating Eastern olfactory traditions.', icon: '📜' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '5rem 3rem',
                                    backgroundColor: 'var(--color-white)',
                                    borderRadius: 'var(--radius-soft)',
                                    boxShadow: 'var(--shadow-soft)',
                                    border: '1px solid rgba(183, 110, 121, 0.05)'
                                }}
                            >
                                <div style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.7rem', marginBottom: '1.5rem', color: 'var(--color-black)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', lineHeight: 1.7 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
