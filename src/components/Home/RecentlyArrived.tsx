import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const RecentlyArrived: React.FC = () => {
    const [scrollIndex, setScrollIndex] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const width = scrollRef.current.offsetWidth;
            const index = Math.round(scrollLeft / (width / 4));
            setScrollIndex(index);
        }
    };

    return (
        <section className="recently-arrived" style={{ padding: '8rem 0', backgroundColor: 'var(--color-black)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--color-rose-gold)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}
                    >
                        Freshly Curated
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', marginBottom: '1.5rem' }}
                    >
                        Recently Arrived
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ width: '80px', height: '2px', backgroundColor: 'var(--color-rose-gold)', margin: '0 auto' }}
                    ></motion.div>
                </div>
            </div>

            <div style={{
                width: '100%',
                padding: '0 5%', // Increased padding
                boxSizing: 'border-box',
                position: 'relative'
            }}>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '2.5rem',
                        padding: '1rem 0 3rem',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none' // IE/Edge
                    }} className="horizontal-scroll">
                    {products.map((product, index) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            style={{ textDecoration: 'none', flex: '0 0 calc(25% - 2rem)', minWidth: '320px' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                                style={{
                                    scrollSnapAlign: 'start',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    background: 'var(--color-dark-gray)',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(212, 175, 55, 0.05)'
                                }}
                            >
                                <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.5rem' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        backgroundColor: 'var(--color-rose-gold)',
                                        color: 'var(--color-black)',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                                    }}>
                                        New
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', textAlign: 'center' }}>
                                    <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {product.category}
                                    </span>
                                    <h3 style={{ margin: '0.5rem 0', color: 'var(--color-white)', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>
                                        {product.name}
                                    </h3>
                                    <p style={{ color: 'var(--color-rose-gold)', fontWeight: 600, fontSize: '1.1rem' }}>
                                        {product.price}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Indicators (Dots) */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem'
                }}>
                    {[0, 1].map((dot) => (
                        <div
                            key={dot}
                            style={{
                                width: dot === Math.floor(scrollIndex / 4) ? '30px' : '10px',
                                height: '2px',
                                backgroundColor: dot === Math.floor(scrollIndex / 4) ? 'var(--color-rose-gold)' : 'rgba(255,255,255,0.1)',
                                transition: 'all 0.3s ease',
                                borderRadius: '2px'
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container">
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'var(--color-rose-gold)',
                            color: 'var(--color-black)',
                            padding: '1.1rem 3.5rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        View All New Arrivals
                    </motion.button>
                </div>
            </div>

            <style>{`
                .horizontal-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default RecentlyArrived;
