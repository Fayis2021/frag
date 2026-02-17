import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Star, ArrowRight } from 'lucide-react';

const BestSeller: React.FC = () => {
    // Selecting specific products for Best Sellers (e.g., highly rated or popular ones)
    const bestSellers = products.filter(p => [1, 2, 4, 5, 8, 10].includes(p.id));

    return (
        <section style={{
            padding: '10rem 0',
            backgroundColor: '#050505', // Slightly different from standard black
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Texture/Pattern separate from other widgets */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Section Header */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '5rem',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            color: 'var(--color-rose-gold)',
                            fontWeight: 700,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Customer Favorites
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'var(--color-white)',
                            fontFamily: 'var(--font-display)',
                            margin: 0
                        }}>
                            Our <span style={{ color: 'var(--color-rose-gold)', fontStyle: 'italic' }}>Best Sellers</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Best Seller Grid - Distinct Card Style */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '3rem'
                }}>
                    {bestSellers.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    position: 'relative',
                                    height: '550px',
                                    borderRadius: '4px', // Sharper corners for distinct 'Editor's Choice' feel
                                    overflow: 'hidden'
                                }} className="bestseller-card">

                                    {/* Image with Darkening overlay on idle, lightening on hover */}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            left: '1rem',
                                            zIndex: 10,
                                            backgroundColor: 'var(--color-rose-gold)',
                                            color: 'black',
                                            padding: '0.25rem 0.75rem',
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            #1 Choice
                                        </div>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s ease'
                                            }}
                                            className="bestseller-img"
                                        />
                                        {/* Overlay Gradient */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                            transition: 'opacity 0.4s ease'
                                        }}></div>
                                    </div>

                                    {/* Content positioned at bottom */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '2.5rem',
                                        zIndex: 2,
                                        transform: 'translateY(10px)',
                                        transition: 'transform 0.4s ease'
                                    }} className="bestseller-content">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <Star key={s} size={12} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
                                            ))}
                                        </div>
                                        <h3 style={{
                                            fontSize: '2rem',
                                            color: 'white',
                                            fontFamily: 'var(--font-display)',
                                            margin: '0 0 0.5rem 0'
                                        }}>
                                            {product.name}
                                        </h3>
                                        <p style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.9rem',
                                            marginBottom: '1.5rem',
                                            lineHeight: 1.6
                                        }}>
                                            {product.description.substring(0, 60)}...
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                            <span style={{ fontSize: '1.2rem', color: 'var(--color-rose-gold)', fontWeight: 600 }}>{product.price}</span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                cursor: 'pointer'
                                            }}>
                                                Shop <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <style>{`
                    .bestseller-card:hover .bestseller-img {
                        transform: scale(1.05);
                    }
                    .bestseller-card:hover .bestseller-content {
                        transform: translateY(0);
                    }
                `}</style>

            </div>
        </section>
    );
};

export default BestSeller;
