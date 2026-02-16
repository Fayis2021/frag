import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-cream)' }}
            className="bg-mandala"
        >
            <div className="container" style={{ padding: '6rem 2rem', maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Concierge</span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--color-royal-blue)', fontStyle: 'italic' }}>Direct Correspondence</h1>
                    <p style={{ marginTop: '1.5rem', color: 'var(--color-gray)', fontSize: '1.15rem' }}>
                        Allow us to assist you in your sensory exploration.
                    </p>
                </div>

                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                    backgroundColor: 'var(--color-white)',
                    padding: '5rem 4rem',
                    borderRadius: 'var(--radius-soft)',
                    boxShadow: 'var(--shadow-indian)'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--color-royal-blue)', fontWeight: 700, letterSpacing: '0.1em' }}>NAME</label>
                            <input
                                type="text"
                                placeholder="How shall we address you?"
                                style={{ padding: '1.2rem', backgroundColor: 'var(--color-light-gray)', border: 'none', borderRadius: '8px', color: 'var(--color-black)', outline: 'none', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--color-royal-blue)', fontWeight: 700, letterSpacing: '0.1em' }}>EMAIL</label>
                            <input
                                type="email"
                                placeholder="Your preferred contact"
                                style={{ padding: '1.2rem', backgroundColor: 'var(--color-light-gray)', border: 'none', borderRadius: '8px', color: 'var(--color-black)', outline: 'none', fontSize: '1rem' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <label style={{ fontSize: '0.85rem', color: 'var(--color-royal-blue)', fontWeight: 700, letterSpacing: '0.1em' }}>INQUIRY</label>
                        <textarea
                            rows={5}
                            placeholder="How may we serve your olfactory desires?"
                            style={{ padding: '1.2rem', backgroundColor: 'var(--color-light-gray)', border: 'none', borderRadius: '8px', color: 'var(--color-black)', outline: 'none', resize: 'vertical', fontSize: '1rem' }}
                        ></textarea>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <Button variant="primary" style={{ padding: '1rem 3rem', backgroundColor: 'var(--color-royal-blue)', borderColor: 'var(--color-royal-blue)' }}>Send Inquiry</Button>
                    </div>
                </form>

                <div style={{ marginTop: '7rem', textAlign: 'center', color: '#444', display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap' }}>
                    <div>
                        <h4 style={{ color: 'var(--color-royal-blue)', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>THE BOUTIQUE</h4>
                        <p>Mehrauli Heritage Area, New Delhi, IN</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-royal-blue)', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>DIGITAL CONCIERGE</h4>
                        <p>private@leaudevie.in</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
