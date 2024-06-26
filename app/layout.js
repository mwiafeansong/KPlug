import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ModalContextProvider } from '@/context';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KPlug',
  description: 'KDrama for KLovers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ModalContextProvider>
          <main>{children}</main>
        </ModalContextProvider>
        <Footer />
      </body>
    </html>
  );
}
