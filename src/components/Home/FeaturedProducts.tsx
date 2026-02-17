import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
    // Show selected featured products (IDs 5, 6, 7)
    const featuredList = products.filter(p => [5, 6, 7].includes(p.id));

    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-black)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Timeless Classics</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>Curated Collections</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-rose-gold)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem'
                }}>
                    {featuredList.map((product, index) => (
                        <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="product-card"
                                style={{
                                    backgroundColor: 'var(--color-dark-gray)',
                                    borderRadius: 'var(--radius-soft)',
                                    padding: '2.5rem',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                    border: '1px solid rgba(212, 175, 55, 0.1)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                whileHover={{ y: -12, borderColor: 'var(--color-rose-gold)', boxShadow: 'var(--shadow-indian)' }}
                            >
                                {/* Product Image */}
                                <div style={{
                                    width: '100%',
                                    height: '350px',
                                    marginBottom: '2rem',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
                                }}>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        className="product-image"
                                    />
                                </div>

                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: 'var(--color-rose-gold)' }}>{product.name}</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.8rem', fontSize: '0.95rem', height: '3em', lineHeight: 1.6, overflow: 'hidden' }}>{product.description}</p>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '1.5rem', color: 'var(--color-white)', fontWeight: 700 }}>{product.price}</span>
                                </div>

                                <Button variant="outline" style={{ borderColor: 'var(--color-rose-gold)', color: 'var(--color-rose-gold)', width: '100%', transition: 'all 0.3s ease' }}>View Masterpiece</Button>
                            </motion.div>
                        </Link>
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
