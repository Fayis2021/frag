import React from 'react';
import Hero from '../components/Home/Hero';
import RecentlyArrived from '../components/Home/RecentlyArrived';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import ScentNotes from '../components/Home/ScentNotes';
import Testimonials from '../components/Home/Testimonials';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <RecentlyArrived />
            <FeaturedProducts />
            <ScentNotes />
            {/* Philosophy Section */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '2.5rem', color: 'var(--color-rose-gold)', fontStyle: 'italic' }}>Our Philosophy</h2>
                    <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '4rem', lineHeight: 2, fontWeight: 400 }}>
                        We believe that perfume is more than just a scent; it is an emotion, a memory, a work of art.
                        Our master perfumers travel the globe to source the rarest ingredients, blending them with
                        passion and precision to create fragrances that transcend time.
                    </p>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Perfumer at work"
                            style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: 'var(--radius-soft)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            right: '-30px',
                            backgroundColor: 'var(--color-rose)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-soft)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</span>
                            <span style={{ fontWeight: 600, color: 'var(--color-rose-gold)' }}>Handcrafted</span>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
        </>
    );
};

export default Home;
