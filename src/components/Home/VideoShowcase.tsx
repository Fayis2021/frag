import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../../assets/videos/7815883-hd_1080_1920_25fps.mp4';
import video2 from '../../assets/videos/5084552-uhd_4096_2160_24fps.mp4';

const VideoShowcase: React.FC = () => {
    const sections = [
        {
            video: video1,
            title: "Traditional Craftsmanship",
            description: "Every bottle is a masterpiece of artisanal excellence, blending centuries-old Indian traditions with modern luxury. We source the finest ingredients from the heart of the subcontinent to create scents that tell a story.",
            videoLeft: true
        },
        {
            video: video2,
            title: "Royal Essence",
            description: "Experience the majestic allure of fragrances inspired by ancient royalty. Our UHD collection captures the visual and olfactory brilliance of the most exquisite botanical extracts and rare minerals.",
            videoLeft: false
        }
    ];

    return (
        <section className="video-showcase" style={{ backgroundColor: '#000000', padding: '6rem 0' }}>
            <div className="container">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{
                            display: 'flex',
                            flexDirection: section.videoLeft ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            gap: '4rem',
                            marginBottom: index === sections.length - 1 ? 0 : '8rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {/* Video Column */}
                        <div style={{ flex: '1 1 500px', position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: section.videoLeft ? '9/16' : '16/9', objectFit: 'cover' }}
                            >
                                <source src={section.video} type="video/mp4" />
                            </video>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)'
                            }}></div>
                        </div>

                        {/* Text Column */}
                        <div style={{ flex: '1 1 400px' }}>
                            <span style={{ color: 'var(--color-saffron)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                                The Fragrance Story
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                                {section.title}
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {section.description}
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid var(--color-saffron)',
                                    color: 'var(--color-saffron)',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VideoShowcase;
