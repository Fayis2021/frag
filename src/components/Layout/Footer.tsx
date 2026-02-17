import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-black)', padding: '8rem 0 4rem', color: 'var(--color-white)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--color-rose-gold)', fontStyle: 'italic', letterSpacing: '0.05em' }}>DUA FRAGRANCE</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            Crafting sovereign fragrances that honor the rich tapestry of Indian heritage. Since 1920.
                        </p>
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            <Instagram size={20} style={{ cursor: 'pointer', color: 'var(--color-rose-gold)' }} />
                            <Facebook size={20} style={{ cursor: 'pointer', color: 'var(--color-rose-gold)' }} />
                            <Twitter size={20} style={{ cursor: 'pointer', color: 'var(--color-rose-gold)' }} />
                            <MessageCircle size={20} style={{ cursor: 'pointer', color: 'var(--color-rose-gold)' }} />
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Collections</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {['Heritage Oud', 'Royal Florals', 'Sacred Spices', 'The Journal'].map(item => (
                                <li key={item}><Link to="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <MapPin size={18} style={{ color: 'var(--color-rose-gold)', flexShrink: 0 }} />
                                <span>Mehrauli Heritage Area, Khasra No. 258, Near Qutub Minar, New Delhi 110030</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                <Mail size={18} style={{ color: 'var(--color-rose-gold)', flexShrink: 0 }} />
                                <span>concierge@duafragrance.in</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                <Phone size={18} style={{ color: 'var(--color-rose-gold)', flexShrink: 0 }} />
                                <span>+91 11 4050 6070</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Newsletter</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9rem' }}>Join our inner circle for exclusive previews.</p>
                        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.6rem', transition: 'border-color 0.3s' }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{ background: 'none', border: 'none', color: 'white', padding: '0.5rem 0', width: '100%', outline: 'none', fontSize: '0.85rem' }}
                            />
                            <button style={{ color: 'var(--color-rose-gold)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer' }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    <p>&copy; {new Date().getFullYear()} DUA FRAGRANCE ARTISAN PERFUMERY. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
