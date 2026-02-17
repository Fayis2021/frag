import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GenderCollection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'male' | 'female'>('male');

    const filteredProducts = products.filter(p => p.gender === activeTab || p.gender === 'unisex').slice(0, 6);

    return (
        <section style={{ padding: '12rem 0', backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Light Effects */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}
                        >
                            Refined Selection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--color-white)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}
                        >
                            Curated <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-rose-gold)' }}>By Essence</span>
                        </motion.h2>
                    </div>

                    <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.03)', padding: '0.4rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                        {['male', 'female'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as 'male' | 'female')}
                                style={{
                                    padding: '1.2rem 3.5rem',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    zIndex: 2,
                                    backgroundColor: 'transparent',
                                    color: activeTab === tab ? 'var(--color-black)' : 'rgba(255,255,255,0.5)',
                                    transition: 'color 0.4s ease'
                                }}
                            >
                                {tab === 'male' ? 'For Him' : 'For Her'}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="tabHighlight"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'var(--color-rose-gold)',
                                            borderRadius: '100px',
                                            zIndex: -1
                                        }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}
                    >
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                whileHover={{ y: -15 }}
                                style={{ position: 'relative' }}
                            >
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                                    <div style={{
                                        backgroundColor: 'rgba(255,255,255,0.02)',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        padding: '3rem',
                                        marginBottom: '2rem',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        height: '420px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        transition: 'all 0.5s ease',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            style={{ width: '85%', height: '85%' }}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        </motion.div>

                                        {/* Hover Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '2rem',
                                            right: '2rem',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-rose-gold)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-black)',
                                            opacity: 0,
                                            transform: 'translateY(10px)',
                                            transition: 'all 0.4s ease'
                                        }} className="explore-badge">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'left', padding: '0 0.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>{product.category}</span>
                                            <span style={{ color: 'var(--color-rose-gold)', fontWeight: 700, fontSize: '1rem' }}>{product.price}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.6rem', color: 'var(--color-white)', margin: 0, fontFamily: 'var(--font-display)', transition: 'color 0.3s ease' }}>{product.name}</h3>
                                    </div>
                                </Link>

                                <style>{`
                                    a:hover .explore-badge {
                                        opacity: 1 !important;
                                        transform: translateY(0) !important;
                                    }
                                    a:hover div:first-of-type {
                                        border-color: rgba(212, 175, 55, 0.3) !important;
                                        background-color: rgba(255,255,255,0.04) !important;
                                        box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
                                    }
                                `}</style>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ textAlign: 'center', marginTop: '8rem' }}
                >
                    <Link to="/products" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-rose-gold)'; e.currentTarget.style.borderColor = 'var(--color-rose-gold)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}>
                        Explore the full collection <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default GenderCollection;
