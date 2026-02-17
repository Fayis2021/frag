import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../components/Product/ProductDetail';
import { getProductById, products } from '../data/products';
import { motion } from 'framer-motion';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(parseInt(id)) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/products" style={{ color: 'var(--color-saffron)' }}>Return to shop</Link>
            </div>
        );
    }

    // Filter out current product for recommendations
    const recommendations = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div style={{ backgroundColor: 'var(--color-white)', paddingTop: '80px' }}>
            {/* Breadcrumbs */}
            <div style={{ padding: '2rem 0', backgroundColor: 'var(--color-cream)' }} className="bg-mandala">
                <div className="container">
                    <nav style={{ fontSize: '0.85rem', color: '#888' }}>
                        <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 1rem' }}>/</span>
                        <Link to="/products" style={{ color: '#888', textDecoration: 'none' }}>Collections</Link>
                        <span style={{ margin: '0 1rem' }}>/</span>
                        <span style={{ color: 'var(--color-black)', fontWeight: 600 }}>{product.name}</span>
                    </nav>
                </div>
            </div>

            <ProductDetail product={product} />

            {/* Related Products */}
            <section style={{ padding: '8rem 0', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>You May Also Like</h2>
                        <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-saffron)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {recommendations.map(p => (
                            <Link key={p.id} to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <div style={{ height: '350px', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem', background: 'var(--color-cream)', padding: '1.5rem' }}>
                                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <p style={{ color: 'var(--color-gray)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{p.category}</p>
                                    <h3 style={{ color: 'var(--color-black)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                                    <p style={{ color: 'var(--color-saffron)', fontWeight: 600 }}>{p.price}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;
