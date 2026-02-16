import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../UI/Button';

const arrivals = [
    { id: 1, name: "Kashmiri Oud", price: "$210", category: "Exotic Woody", color: "#4a3728", isNew: true },
    { id: 2, name: "Mughal Rose", price: "$185", category: "Royal Floral", color: "#c21e56", isNew: true },
    { id: 3, name: "Saffron Mist", price: "$165", category: "Spicy Fresh", color: "#ff9933", isNew: true },
    { id: 4, name: "Nilgiri Teal", price: "$145", category: "Aromatic Herbs", color: "#008080", isNew: true },
    { id: 5, name: "Benares Incense", price: "$195", category: "Sacred Smoke", color: "#5d4037", isNew: true },
    { id: 6, name: "Mysore Sandal", price: "$220", category: "Creamy Wood", color: "#d2b48c", isNew: true },
];

const RecentlyArrived: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }} className="bg-mandala">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ color: 'var(--color-saffron)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem' }}
                        >
                            Freshly Curated
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '3rem', color: 'var(--color-royal-blue)', fontStyle: 'italic', marginTop: '0.5rem' }}
                        >
                            Recently Arrived
                        </motion.h2>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => scroll('left')}
                            style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: 'transparent', color: 'var(--color-royal-blue)' }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', color: 'white' }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        gap: '2.5rem',
                        overflowX: 'auto',
                        paddingBottom: '3rem',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        scrollSnapType: 'x mandatory'
                    }}
                    className="hide-scrollbar"
                >
                    {arrivals.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                minWidth: '320px',
                                backgroundColor: 'var(--color-white)',
                                borderRadius: 'var(--radius-soft)',
                                padding: '2rem',
                                boxShadow: 'var(--shadow-indian)',
                                scrollSnapAlign: 'start',
                                position: 'relative'
                            }}
                        >
                            {item.isNew && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    backgroundColor: 'var(--color-saffron)',
                                    color: 'white',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    zIndex: 2
                                }}>
                                    NEW arrival
                                </div>
                            )}

                            <div style={{
                                width: '100%',
                                height: '300px',
                                backgroundColor: item.color,
                                borderRadius: '8px',
                                marginBottom: '1.5rem',
                                opacity: 0.7,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>{item.name.charAt(0)}</span>
                            </div>

                            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-royal-blue)', marginBottom: '0.5rem' }}>{item.name}</h3>
                            <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>{item.category}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-black)' }}>{item.price}</span>
                                <Button variant="text" style={{ padding: 0, color: 'var(--color-saffron)' }}>Explore</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default RecentlyArrived;
