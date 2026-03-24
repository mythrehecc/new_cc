// layout.tsx
'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { AdminProvider } from '@/components/admin/context';
import AdminBar from '@/components/admin/adminpannel';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoginModal from '@/components/admin/adminmodal';
import { FloatButton } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';
import DynamicFAQ from '@/components/FAQ/DynamicFAQ';
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from 'react';
import { WishlistFormRef } from '@/components/hero-section';
import Form from '@/components/home/form';
import { ContactFormProvider } from '@/components/ContactFormContext';

const inter = Inter({ subsets: ['latin'] });

// Create context for wishlistFormRef to share across components
const WishlistFormContext =
  createContext<React.RefObject<WishlistFormRef> | null>(null);

export const useWishlistForm = () => {
  const context = useContext(WishlistFormContext);
  if (!context) {
    throw new Error('useWishlistForm must be used within WishlistFormProvider');
  }
  return context;
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayoutContent({ children }: RootLayoutProps) {
  const [showScroll, setShowScroll] = useState(false);
  const [hover, setHover] = useState(false);
  const wishlistFormRef = useRef<WishlistFormRef>({ focusAndGlow: () => {} });

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowScroll(heroBottom < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById('hero-section');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContactFormProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <AdminBar />
        <div style={{ paddingTop: 'var(--admin-bar-height, 0)' }}>
          <Header />
          <main>{children}</main>
          <Form />
          <DynamicFAQ />
          <Footer />
          {showScroll && (
            <FloatButton
              icon={
                <UpCircleFilled
                  style={{
                    fontSize: '20px',
                    color: hover ? '#fff' : '#6366F1',
                  }}
                />
              }
              style={{
                right: 24,
                bottom: 24,
                // boxShadow: '0 4px 20px #6366F1',
                borderRadius: '50%',
                width: 38,
                height: 38,
                background: '#6366F1',
                color: '#fff',
                transition: 'all 0.3s ease-in-out',
              }}
              onClick={scrollToHero}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          )}
        </div>
        <LoginModal />
        {/* <GlobalContactFormModal /> */}
      </div>
    </ContactFormProvider>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <meta
          property="og:title"
          content="Crestcode - High-performance technical consultancy"
        />
        <meta
          property="og:description"
          content="We Own the Engineering.You Own the Vision."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/Headerlogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <AdminProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
          </AdminProvider>
        </Provider>
      </body>
    </html>
  );
}
