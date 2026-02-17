import React from 'react';
import { motion } from 'framer-motion';
import amberGold from '../../assets/images/amber_gold.png';
import royalOud from '../../assets/images/royal_oud.png';
import rosePetal from '../../assets/images/rose_petal.png';
import citrusZest from '../../assets/images/citrus_zest.png';

const RecentlyArrived: React.FC = () => {
    const products = [
        { id: 1, name: "Amber Gold", category: "Oriental", price: "$120", image: amberGold },
        { id: 2, name: "Royal Oud", category: "Woody", price: "$150", image: royalOud },
        { id: 3, name: "Rose Petal", category: "Floral", price: "$110", image: rosePetal },
        { id: 4, name: "Citrus Zest", category: "Fresh", price: "$95", image: citrusZest },
        { id: 5, name: "Midnight Oud", category: "Exotic", price: "$160", image: royalOud },
        { id: 6, name: "Saffron Sun", category: "Warm", price: "$130", image: amberGold },
        { id: 7, name: "Velvet Rose", category: "Floral", price: "$115", image: rosePetal },
        { id: 8, name: "Ocean Breeze", category: "Fresh", price: "$90", image: citrusZest },
    ];

    return (
        <section className="recently-arrived" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--color-saffron)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}
                    >
                        Freshly Curated
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-black)', marginBottom: '1.5rem' }}
                    >
                        Recently Arrived
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ width: '80px', height: '2px', backgroundColor: 'var(--color-saffron)', margin: '0 auto' }}
                    ></motion.div>
                </div>

                <div style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '2.5rem',
                    padding: '1rem 2rem 3rem',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none' // IE/Edge
                }} className="horizontal-scroll">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            style={{
                                flex: '0 0 320px',
                                scrollSnapAlign: 'start',
                                cursor: 'pointer',
                                position: 'relative',
                                background: 'white',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                            }}
                        >
                            <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    backgroundColor: 'white',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                }}>
                                    New
                                </div>
                            </div>
                            <div style={{ padding: '2rem', textAlign: 'center' }}>
                                <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {product.category}
                                </span>
                                <h3 style={{ margin: '0.5rem 0', color: 'var(--color-black)', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>
                                    {product.name}
                                </h3>
                                <p style={{ color: 'var(--color-rose-gold)', fontWeight: 600, fontSize: '1.1rem' }}>
                                    {product.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'var(--color-black)',
                            color: 'white',
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
