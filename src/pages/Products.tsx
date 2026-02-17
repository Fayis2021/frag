import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-cream)' }}
            className="bg-mandala"
        >
            <div className="container" style={{ padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}
                    >
                        The Scent Gallery
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1rem', color: 'var(--color-black)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}
                    >
                        Curated Masterpieces
                    </motion.h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    backgroundColor: 'var(--color-white)',
                                    borderRadius: 'var(--radius-soft)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-soft)',
                                    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: 'var(--color-cream)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '2rem',
                                        overflow: 'hidden'
                                    }}>
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-rose-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{product.category}</span>
                                        <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '0.75rem', color: 'var(--color-black)', fontFamily: 'var(--font-display)' }}>{product.name}</h3>
                                        <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', marginBottom: '2rem', fontWeight: 500 }}>{product.price}</p>
                                        <Button variant="outline" style={{ width: '100%' }}>View Scent</Button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Products;
