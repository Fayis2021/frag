import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';

// Placeholder data
const allProducts = [
    { id: 1, name: "Midnight Rose", price: "$145", category: "Floral", color: "#4a0e1c" },
    { id: 2, name: "Oud Mystique", price: "$180", category: "Woody", color: "#3d2b1f" },
    { id: 3, name: "Citrus Verbena", price: "$120", category: "Fresh", color: "#9ea836" },
    { id: 4, name: "Vanilla absolute", price: "$160", category: "Oriental", color: "#d2b48c" },
    { id: 5, name: "Ocean Breeze", price: "$130", category: "Fresh", color: "#87ceeb" },
    { id: 6, name: "Spiced Amber", price: "$155", category: "Oriental", color: "#ffbf00" },
];

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
                    <span style={{ color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Scent Gallery</span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--color-royal-blue)', fontStyle: 'italic' }}>Curated Masterpieces</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
                    {allProducts.map((product) => (
                        <div key={product.id} style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-soft)',
                            padding: '3rem 2.5rem',
                            textAlign: 'center',
                            boxShadow: 'var(--shadow-indian)',
                            transition: 'all 0.4s ease'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '280px',
                                backgroundColor: product.color,
                                marginBottom: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0.6,
                                borderRadius: '8px'
                            }}>
                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                                    {product.name.charAt(0)}
                                </span>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-saffron)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{product.category}</span>
                            <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-royal-blue)' }}>{product.name}</h3>
                            <p style={{ fontSize: '1.4rem', color: 'var(--color-black)', marginBottom: '2.5rem', fontWeight: 700 }}>{product.price}</p>
                            <Button variant="primary" style={{ width: '100%', backgroundColor: 'var(--color-royal-blue)', borderColor: 'var(--color-royal-blue)' }}>Reserve Now</Button>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Products;
