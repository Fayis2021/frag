import React from 'react';
import { motion } from 'framer-motion';

const ScentNotes: React.FC = () => {
    const layers = [
        { title: 'Top Notes', notes: 'Kashmiri Saffron, Indian Cardamom, Bitter Orange', icon: '🍃' },
        { title: 'Heart Notes', notes: 'Himalayan Cedar, Rose Water, Jasmine Sambac', icon: '🌸' },
        { title: 'Base Notes', notes: 'Golden Honey, Sandalwood, Deep Amber', icon: '🍯' },
    ];

    return (
        <section style={{ padding: '10rem 0', backgroundColor: 'var(--color-black)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Olfactory Journey</span>
                        <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', marginTop: '0.5rem', marginBottom: '2rem', fontStyle: 'italic' }}>
                            The Soul of the Ganges
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: 1.8 }}>
                            Inspired by the rhythm of Indian traditions, our scents are structured to unfold like a story told over a sacred fire.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {layers.map((layer, index) => (
                                <div key={index} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-dark-gray)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                                        border: '1px solid rgba(212, 175, 55, 0.1)'
                                    }}>{layer.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-rose-gold)', marginBottom: '0.4rem' }}>{layer.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6 }}>{layer.notes}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '500px',
                            backgroundColor: 'var(--color-dark-gray)',
                            borderRadius: 'var(--radius-soft)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-indian)'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Scent extraction"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Decorative element */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'var(--color-rose-gold)',
                            borderRadius: '50%',
                            zIndex: -1,
                            opacity: 0.1
                        }}></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScentNotes;
