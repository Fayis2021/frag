import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Gem, Droplet } from 'lucide-react';

const ScentNotes: React.FC = () => {
    const layers = [
        {
            title: 'Top Notes',
            subtitle: 'The First Impression',
            notes: 'Kashmiri Saffron, Indian Cardamom, Bitter Orange',
            icon: <Wind size={24} color="var(--color-rose-gold)" />,
            description: "Light and volatile, these notes are the initial burst of scent that awakens the senses."
        },
        {
            title: 'Heart Notes',
            subtitle: 'The Soul of the Scent',
            notes: 'Himalayan Cedar, Rose Water, Jasmine Sambac',
            icon: <Gem size={24} color="var(--color-rose-gold)" />,
            description: "Developing after the top notes fade, these form the core character of the fragrance."
        },
        {
            title: 'Base Notes',
            subtitle: 'The Lasting Memory',
            notes: 'Golden Honey, Sandalwood, Deep Amber',
            icon: <Droplet size={24} color="var(--color-rose-gold)" />,
            description: "Rich and heavy, these notes linger on the skin, creating a long-lasting impression."
        },
    ];

    return (
        <section style={{ padding: '10rem 0', backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Atmosphere */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>
                            Olfactory Architecture
                        </span>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', color: 'var(--color-white)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                            The Anatomy of <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-rose-gold)' }}>Perfection</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '4rem', lineHeight: 1.8, maxWidth: '500px' }}>
                            Every fragrance is a carefully constructed masterpiece, built layer by layer to tell a unique story that evolves with time on your skin.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {layers.map((layer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    style={{
                                        display: 'flex',
                                        gap: '2rem',
                                        alignItems: 'flex-start',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                >
                                    <div style={{
                                        minWidth: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                                    }}>
                                        {layer.icon}
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-white)', margin: 0, fontFamily: 'var(--font-display)' }}>{layer.title}</h3>
                                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{layer.subtitle}</span>
                                        </div>
                                        <p style={{ color: 'var(--color-rose-gold)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{layer.notes}</p>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{layer.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image / Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative', height: '100%' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '700px',
                            backgroundColor: 'var(--color-dark-gray)',
                            borderRadius: '200px 200px 0 0',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            position: 'relative',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                                zIndex: 1
                            }} />
                            <img
                                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Scent extraction process"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '3rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 2,
                                    backgroundColor: 'rgba(10,10,10,0.8)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '1.5rem 3rem',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(212, 175, 55, 0.3)',
                                    textAlign: 'center',
                                    width: '80%'
                                }}
                            >
                                <p style={{ color: 'var(--color-rose-gold)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Heritage</p>
                                <p style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.2rem', margin: 0 }}>Crafted in limited batches</p>
                            </motion.div>
                        </div>

                        {/* Decorative Orbit */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '110%',
                            height: '60%',
                            borderRadius: '50%',
                            border: '1px solid rgba(212, 175, 55, 0.1)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScentNotes;
