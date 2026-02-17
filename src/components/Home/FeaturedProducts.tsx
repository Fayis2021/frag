import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

import midnightRose from '../../assets/images/midnight_rose.png';
import mysticOud from '../../assets/images/mystic_oud.png';
import citrusVerbena from '../../assets/images/citrus_verbena.png';

// Premium product data
const products = [
    {
        id: 1,
        name: "Midnight Rose",
        description: "A velvety blend of Bulgarian rose and dark amber.",
        price: "$145",
        image: midnightRose
    },
    {
        id: 2,
        name: "Mystic Oud",
        description: "Rich agarwood paired with smoke and leather notes.",
        price: "$180",
        image: mysticOud
    },
    {
        id: 3,
        name: "Citrus Verbena",
        description: "Sparkling lemon zest with fresh basil and cedar.",
        price: "$120",
        image: citrusVerbena
    }
];

const FeaturedProducts: React.FC = () => {
    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Timeless Classics</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-royal-blue)' }}>Curated Collections</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-saffron)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem'
                }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="product-card" // Added class for CSS targeting
                            style={{
                                backgroundColor: 'var(--color-cream)',
                                borderRadius: 'var(--radius-soft)',
                                padding: '2.5rem',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                border: '1px solid transparent'
                            }}
                            whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: 'var(--shadow-indian)' }}
                        >
                            {/* Product Image */}
                            <div style={{
                                width: '100%',
                                height: '320px',
                                marginBottom: '2rem',
                                overflow: 'hidden',
                                borderRadius: '8px'
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    className="product-image"
                                />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--color-royal-blue)' }}>{product.name}</h3>
                            <p style={{ color: 'var(--color-gray)', marginBottom: '1.8rem', fontSize: '0.95rem', height: '3em', lineHeight: 1.6 }}>{product.description}</p>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '1.4rem', color: 'var(--color-black)', fontWeight: 700 }}>{product.price}</span>
                            </div>

                            <Button variant="outline" style={{ borderColor: 'var(--color-royal-blue)', color: 'var(--color-royal-blue)' }}>View Details</Button>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .product-card:hover .product-image {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
