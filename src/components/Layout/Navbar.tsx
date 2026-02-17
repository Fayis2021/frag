import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', path: '/products' },
        { name: 'Our Story', path: '/about' },
        { name: 'Journal', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const isSolid = scrolled || !isHomePage;

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: isSolid ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
                backdropFilter: isSolid ? 'blur(10px)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: isSolid ? '0.7rem 0' : '1.4rem 0',
                boxShadow: isSolid ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
                borderBottom: isSolid ? '1px solid var(--color-light-gray)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: isSolid ? 'var(--color-royal-blue)' : 'white',
                    letterSpacing: '0.05em',
                    fontStyle: 'italic',
                    transition: 'color 0.4s ease'
                }}>
                    DUA FRAGRANCE
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontSize: '0.9rem',
                                color: isSolid ? 'var(--color-black)' : 'white',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                transition: 'all 0.3s ease'
                            }}
                            className="nav-link-hover"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                        <ShoppingBag size={22} color={isSolid ? "var(--color-royal-blue)" : "white"} style={{ cursor: 'pointer', transition: 'color 0.4s ease' }} />
                        <Button variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', backgroundColor: 'var(--color-saffron)', border: 'none' }}>Shop</Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: isSolid ? 'var(--color-royal-blue)' : 'white', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.4s ease' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '80%',
                            height: '100vh',
                            backgroundColor: 'var(--color-royal-blue)',
                            padding: '6rem 3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2.5rem',
                            zIndex: 999,
                            boxShadow: '-10px 0 50px rgba(0,0,0,0.2)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'var(--color-white)',
                                    fontStyle: 'italic',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <Button style={{ width: '100%', backgroundColor: 'var(--color-saffron)', border: 'none' }}>Visit Our Shop</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link-hover:hover {
            color: var(--color-saffron) !important;
            transform: translateY(-2px);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
