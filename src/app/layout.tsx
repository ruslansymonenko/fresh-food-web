import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/ui/navbar/Navbar';
import CallRequest from '@/components/ui/modals/CallRequest/CallRequest';
import { Providers } from '@/components/providers/Providers';
import Footer from '@/components/ui/footer/Footer';

const font = Golos_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fresh Food',
  description: 'Fresh Food Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <CallRequest />
        </Providers>
      </body>
    </html>
  );
}
