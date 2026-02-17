import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-black)', padding: '8rem 0 4rem', color: 'var(--color-white)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '5rem', marginBottom: '6rem' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--color-saffron)', fontStyle: 'italic', letterSpacing: '0.05em' }}>ESSENCE OF LIFE</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            Crafting sovereign fragrances that honor the rich tapestry of Indian heritage. Since 1920.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Instagram size={20} style={{ cursor: 'pointer', color: 'var(--color-saffron)' }} />
                            <Facebook size={20} style={{ cursor: 'pointer', color: 'var(--color-saffron)' }} />
                            <Twitter size={20} style={{ cursor: 'pointer', color: 'var(--color-saffron)' }} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Collections</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {['Heritage Oud', 'Royal Florals', 'Sacred Spices', 'The Journal'].map(item => (
                                <li key={item}><Link to="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Newsletter</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9rem' }}>Join our inner circle for exclusive previews.</p>
                        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.6rem', transition: 'border-color 0.3s' }}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                style={{ background: 'none', border: 'none', color: 'white', padding: '0.5rem 0', width: '100%', outline: 'none', fontSize: '0.85rem' }}
                            />
                            <button style={{ color: 'var(--color-saffron)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer' }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    <p>&copy; {new Date().getFullYear()} ESSENCE OF LIFE ARTISAN PERFUMERY. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
