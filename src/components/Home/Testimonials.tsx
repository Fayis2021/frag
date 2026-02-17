import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    const reviews = [
        { name: 'Dr. Aarav Mehta', text: "The Kashmiri Oud is a masterpiece. It captures the essence of the mountains perfectly. Truly world-class.", rating: 5 },
        { name: 'Ananya Sharma', text: "Mughal Rose is my signature scent now. It's elegant, royal, and lasts all day long. A beautiful tribute to our heritage.", rating: 5 },
        { name: 'Rohan Gupta', text: "Benares Incense takes me back to the ghats. The depth and complexity of these fragrances are unmatched.", rating: 5 },
    ];

    return (
        <section style={{ padding: '10rem 0', backgroundColor: 'var(--color-black)' }} className="bg-mandala">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Patron Voices</span>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', fontStyle: 'italic', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Whispers of Excellence</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Cherished experiences from our global community.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--color-dark-gray)',
                                padding: '4rem 3rem',
                                borderRadius: 'var(--radius-soft)',
                                textAlign: 'center',
                                border: '1px solid rgba(212, 175, 55, 0.1)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
                                ))}
                            </div>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                                "{review.text}"
                            </p>
                            <h4 style={{ fontSize: '1rem', color: 'var(--color-rose-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>
                                — {review.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
