import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Gem, Droplet } from 'lucide-react';
import scentStructure from '../../assets/images/scent_structure.png';

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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>

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
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                            position: 'relative'
                        }}>
                            <img
                                src={scentStructure}
                                alt="Scent extraction process"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />


                        </div>


                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScentNotes;
