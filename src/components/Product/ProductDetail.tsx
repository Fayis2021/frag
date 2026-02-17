import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailProps {
    product: {
        id: number;
        name: string;
        category: string;
        price: string;
        description: string;
        image: string;
        images?: string[];
        notes?: {
            top: string;
            middle: string;
            base: string;
        };
        details?: string;
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState('100ml');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [selectedImage, setSelectedImage] = useState(product.image);

    const gallery = product.images || [product.image, product.image, product.image]; // Mock gallery

    const sizes = ['50ml', '100ml', '200ml'];

    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '5rem', alignItems: 'start' }}>

                    {/* Left: Gallery */}
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedImage(img)}
                                    style={{
                                        width: '80px',
                                        height: '100px',
                                        cursor: 'pointer',
                                        border: selectedImage === img ? '2px solid var(--color-saffron)' : '1px solid #eee',
                                        overflow: 'hidden',
                                        borderRadius: '4px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </motion.div>
                            ))}
                        </div>
                        <div style={{ flex: 1, position: 'relative', height: '650px', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    src={selectedImage}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div style={{ padding: '1rem 0' }}>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <span style={{ color: 'var(--color-saffron)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', fontWeight: 600 }}>{product.category}</span>
                            <h1 style={{ fontSize: '3.5rem', margin: '0.5rem 0 1rem', fontFamily: 'var(--font-display)', color: 'var(--color-black)' }}>{product.name}</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-black)' }}>{product.price}</span>
                                <span style={{ color: 'var(--color-gray)', textDecoration: 'line-through', fontSize: '1.2rem' }}>₹15,000</span>
                            </div>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
                                {product.description || "Indulge in the essence of pure luxury. This masterpiece is crafted with the rarest ingredients from across the globe, offering a scent profile that is both timeless and provocative."}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <p style={{ fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Select Size</p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        style={{
                                            padding: '0.8rem 2rem',
                                            border: selectedSize === size ? '2px solid var(--color-black)' : '1px solid #ddd',
                                            background: selectedSize === size ? 'var(--color-black)' : 'transparent',
                                            color: selectedSize === size ? 'white' : 'var(--color-black)',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            transition: 'all 0.3s ease',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '1rem', border: 'none', background: 'none', cursor: 'pointer' }}>-</button>
                                <span style={{ padding: '0 1.5rem', fontWeight: 600 }}>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '1rem', border: 'none', background: 'none', cursor: 'pointer' }}>+</button>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    flex: 1,
                                    background: 'var(--color-saffron)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1.2rem',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                                }}
                            >
                                Add To Bag
                            </motion.button>
                        </div>

                        {/* Tabs / Accordion */}
                        <div style={{ borderTop: '1px solid #eee' }}>
                            <div style={{ display: 'flex', gap: '3rem', margin: '1.5rem 0' }}>
                                {['description', 'notes', 'shipping'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            paddingBottom: '0.5rem',
                                            borderBottom: activeTab === tab ? '2px solid var(--color-saffron)' : '2px solid transparent',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            fontSize: '0.8rem',
                                            letterSpacing: '0.1em',
                                            color: activeTab === tab ? 'var(--color-black)' : '#999',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div style={{ minHeight: '150px' }}>
                                <AnimatePresence mode="wait">
                                    {activeTab === 'description' && (
                                        <motion.div
                                            key="desc"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            style={{ color: '#666', lineHeight: 1.8 }}
                                        >
                                            {product.details || "A majestic fragrance that captures the golden hour in a bottle. Opening with radiant citrus notes that transition into a heart of rich florals, finally settling into a warm, hypnotic base of rare amber and precious woods. Designed for the individual who leaves an indelible mark wherever they go."}
                                        </motion.div>
                                    )}
                                    {activeTab === 'notes' && (
                                        <motion.div
                                            key="notes"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                                                <div>
                                                    <p style={{ fontWeight: 700, color: 'var(--color-black)', marginBottom: '0.5rem' }}>Top Notes</p>
                                                    <p style={{ color: '#666' }}>{product.notes?.top || "Sicilian Lemon, Bergamot"}</p>
                                                </div>
                                                <div>
                                                    <p style={{ fontWeight: 700, color: 'var(--color-black)', marginBottom: '0.5rem' }}>Heart Notes</p>
                                                    <p style={{ color: '#666' }}>{product.notes?.middle || "Damask Rose, Jasmine"}</p>
                                                </div>
                                                <div>
                                                    <p style={{ fontWeight: 700, color: 'var(--color-black)', marginBottom: '0.5rem' }}>Base Notes</p>
                                                    <p style={{ color: '#666' }}>{product.notes?.base || "Amber, White Musk"}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    {activeTab === 'shipping' && (
                                        <motion.div
                                            key="shipping"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            style={{ color: '#666', lineHeight: 1.8 }}
                                        >
                                            <p>• Complimentary shipping on all orders over ₹5,000</p>
                                            <p>• Standard delivery within 3-5 business days</p>
                                            <p>• Signature gift wrapping included with every purchase</p>
                                            <p>• 14-day returns on unopened items</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
