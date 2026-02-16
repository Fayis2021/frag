import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import heroVideo from '../../assets/videos/7815734-hd_1920_1080_25fps.mp4';

const Hero: React.FC = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: 'var(--color-black)'
        }}>
            {/* Background Video Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1.0, // Maximum brightness
                        display: 'block'
                    }}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)', // Lighter overlay
                    zIndex: 2
                }}></div>
            </div>

            {/* Content Layer */}
            <div className="container" style={{ textAlign: 'center', color: 'var(--color-white)', zIndex: 10, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span style={{ color: 'var(--color-saffron)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        The Heritage Collection
                    </span>
                    <h1
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            margin: '1rem 0 2rem',
                            color: 'white',
                            lineHeight: 1.1,
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)' // Added subtle shadow for readability
                        }}
                    >
                        Incense of the <br /> <span style={{ color: 'var(--color-saffron)' }}>Mystic East</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                        marginBottom: '4rem',
                        maxWidth: '650px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: 'rgba(255,255,255,0.95)',
                        lineHeight: 1.8,
                        textShadow: '0 1px 5px rgba(0,0,0,0.2)'
                    }}
                >
                    Exquisite hand-blended fragrances inspired by ancient royalty.
                    Capturing the essence of tradition in every drop.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <Button variant="primary" style={{ backgroundColor: 'var(--color-royal-blue)', borderColor: 'var(--color-royal-blue)' }}>Explore Collections</Button>
                    <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>The Craft</Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
