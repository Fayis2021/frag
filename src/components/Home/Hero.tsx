import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/videos/7815734-hd_1920_1080_25fps.mp4';

const Hero: React.FC = () => {
    const [videoLoaded, setVideoLoaded] = React.useState(false);

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
                zIndex: 1,
                background: 'var(--gradient-dark)' // Branded fallback
            }}>
                {/* Poster Image while loading */}
                {!videoLoaded && (
                    <img
                        src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }}
                    />
                )}
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: videoLoaded ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <source src={heroVideo} type="video/mp4" />
                </motion.video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
                    zIndex: 3
                }}></div>
            </div>

            {/* Content Layer */}
            <div className="container" style={{ textAlign: 'center', color: 'var(--color-white)', zIndex: 10, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontWeight: 500,
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}>
                        Handcrafted Elegance
                    </span>
                    <h1
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                            margin: '0 0 2rem',
                            color: 'white',
                            lineHeight: 1.05,
                            fontWeight: 400,
                            textShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                    >
                        The Art of <br /> Rare Scents
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        marginBottom: '4.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        letterSpacing: '0.02em'
                    }}
                >
                    Discover timeless fragrances inspired by ancient traditions,
                    refined for the sophisticated modern lifestyle.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'var(--color-rose-gold)',
                            color: 'var(--color-black)',
                            padding: '1.1rem 3.5rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Shop Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '1.1rem 3.5rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            border: '1px solid white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Our Story
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
