import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';

export const metadata = {
  title: 'MR7 Fitness — Premium Gym & Fitness Center',
  description:
    'MR7 Fitness is an exclusive, high-end fitness center offering modern equipment, expert trainers, and flexible membership plans. Transform your body and build your strength.',
  keywords: ['gym', 'fitness', 'personal training', 'membership', 'MR7 Fitness', 'premium gym'],
  openGraph: {
    title: 'MR7 Fitness — Premium Gym & Fitness Center',
    description: 'Transform your body. Build your strength. Join the premium fitness experience at MR7 Fitness.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black-deep text-white-soft antialiased">
        <LoadingScreen>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LoadingScreen>
      </body>
    </html>
  );
}
