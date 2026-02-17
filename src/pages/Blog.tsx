import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: 'The Alchemist: Sourcing Rare Oudh in Assam',
        category: 'Heritage',
        date: 'October 12, 2023',
        image: 'https://images.unsplash.com/photo-1615485243306-bf254249a556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Journey into the deep forests of North East India where the legendary liquid gold is harvested through generations of tradition...'
    },
    {
        id: 2,
        title: 'Middle Notes & Monsoon: A Sensory Connection',
        category: 'Olfactory Art',
        date: 'September 28, 2023',
        image: 'https://images.unsplash.com/photo-1512423175375-a3c3b06996d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'How the Indian soil responds to the first rains, and how we capture that ephemeral "Petrichor" in our signature collection.'
    },
    {
        id: 3,
        title: 'The Art of Layering: A Modern Royal Guide',
        category: 'Rituals',
        date: 'September 15, 2023',
        image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Learn the ancient secrets of combining attars and contemporary fragrances to create a scent profile that is uniquely yours.'
    }
];

const Blog: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}
            className="bg-mandala"
        >
            <div className="container" style={{ padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--color-rose-gold)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem' }}
                    >
                        The Journal
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1.5rem', color: 'var(--color-white)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}
                    >
                        Olfactory Stories
                    </motion.h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ cursor: 'pointer' }}
                        >
                            <Link to={`/blog/${post.id}`}>
                                <div style={{
                                    height: '300px',
                                    overflow: 'hidden',
                                    borderRadius: 'var(--radius-soft)',
                                    marginBottom: '2rem',
                                    position: 'relative',
                                    boxShadow: 'var(--shadow-soft)'
                                }}>
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        backgroundColor: 'var(--color-rose-gold)',
                                        color: 'var(--color-black)',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        borderRadius: '4px'
                                    }}>
                                        {post.category}
                                    </div>
                                </div>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.date}</span>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-white)', margin: '1rem 0', lineHeight: 1.3 }}>{post.title}</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.excerpt}</p>
                                <span style={{
                                    color: 'var(--color-rose-gold)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    borderBottom: '1px solid var(--color-rose-gold)',
                                    paddingBottom: '4px'
                                }}>Read Story —</span>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;
