import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const RecentlyArrived: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section style={{ padding: '12rem 0', backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Atmosphere */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.03) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ color: 'var(--color-rose-gold)', textTransform: 'uppercase', letterSpacing: '0.5em', fontSize: '0.75rem', fontWeight: 700, display: 'block', marginBottom: '1.5rem' }}
                        >
                            The Newest Olfactory Stories
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-white)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}
                        >
                            Recently <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-rose-gold)' }}>Arrived</span>
                        </motion.h2>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: canScrollLeft ? 'var(--color-rose-gold)' : 'rgba(255,255,255,0.2)',
                                cursor: canScrollLeft ? 'pointer' : 'default',
                                transition: 'all 0.4s ease',
                                backgroundColor: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: canScrollRight ? 'var(--color-rose-gold)' : 'rgba(255,255,255,0.2)',
                                cursor: canScrollRight ? 'pointer' : 'default',
                                transition: 'all 0.4s ease',
                                backgroundColor: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        overflowX: 'auto',
                        padding: '2rem 0 5rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        scrollSnapType: 'x mandatory'
                    }}
                    className="horizontal-scroll"
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="product-card-item"
                            style={{
                                position: 'relative',
                                scrollSnapAlign: 'start'
                            }}
                        >
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                                <div style={{
                                    height: '500px',
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backdropFilter: 'blur(10px)'
                                }} className="arrived-card">
                                    {/* Image Container */}
                                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '2rem',
                                            left: '2rem',
                                            padding: '0.4rem 1.2rem',
                                            backgroundColor: 'var(--color-rose-gold)',
                                            color: 'var(--color-black)',
                                            borderRadius: '50px',
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            zIndex: 2
                                        }}>New Arrival</div>

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>

                                    {/* Info Overlay (Semi-Transparent Gradient) */}
                                    <div style={{
                                        padding: '2.5rem',
                                        background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 100%)',
                                        textAlign: 'left'
                                    }}>
                                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>{product.category}</span>
                                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-white)', margin: '0.5rem 0', fontFamily: 'var(--font-display)' }}>{product.name}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ color: 'var(--color-rose-gold)', fontWeight: 700, fontSize: '1.2rem' }}>{product.price}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                                View Scent <ArrowRight size={16} color="var(--color-rose-gold)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <style>{`
                    .horizontal-scroll::-webkit-scrollbar { display: none; }
                    .product-card-item {
                        flex: 0 0 85%;
                        min-width: 280px;
                    }
                    @media (min-width: 768px) {
                        .product-card-item {
                            flex: 0 0 calc(50% - 1.5rem);
                        }
                    }
                    @media (min-width: 1024px) {
                        .product-card-item {
                            flex: 0 0 calc((100% - 6rem) / 3);
                        }
                    }
                    .arrived-card:hover {
                        border-color: rgba(212, 175, 55, 0.4) !important;
                        background-color: rgba(255,255,255,0.04) !important;
                        transform: translateY(-10px);
                        box-shadow: 0 30px 60px rgba(0,0,0,0.6);
                    }
                `}</style>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'var(--color-rose-gold)',
                                padding: '1.2rem 4rem',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--color-rose-gold)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                borderRadius: '100px'
                            }}
                        >
                            Explore Full Gallery
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentlyArrived;
