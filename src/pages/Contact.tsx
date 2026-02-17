import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}
            className="bg-mandala"
        >
            <div className="container" style={{ padding: '6rem 2rem', maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}
                    >
                        The Concierge
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1rem', color: 'var(--color-white)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}
                    >
                        Direct Correspondence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0' }}
                    >
                        Whether you seek a bespoke consultation or have an inquiry regarding our collections, our concierge is at your service.
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
                    >
                        <div>
                            <h4 style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Flagship</h4>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-white)', lineHeight: 1.6 }}>
                                Mehrauli Heritage Area<br />
                                Khasra No. 258, Near Qutub Minar<br />
                                New Delhi, India 110030
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Digital Inquiries</h4>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>concierge@duafragrance.in</p>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-white)' }}>+91 11 4050 6070</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Social Presence</h4>
                            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.1rem' }}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Instagram</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Pinterest</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            backgroundColor: 'var(--color-dark-gray)',
                            padding: '4rem',
                            borderRadius: 'var(--radius-soft)',
                            boxShadow: 'var(--shadow-medium)',
                            border: '1px solid rgba(212, 175, 55, 0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name</label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-white)', outline: 'none', fontSize: '1rem', background: 'transparent' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</label>
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-white)', outline: 'none', fontSize: '1rem', background: 'transparent' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                            <textarea
                                rows={4}
                                placeholder="How may we assist you?"
                                style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-white)', outline: 'none', resize: 'none', fontSize: '1rem', background: 'transparent' }}
                            ></textarea>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <Button variant="primary" style={{ width: '100%' }}>Submit Inquiry</Button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
