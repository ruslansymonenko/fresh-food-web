import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/ui/navbar/Navbar';
import CallRequest from '@/components/ui/modals/CallRequest/CallRequest';
import { Providers } from '@/app/providers/Providers';
import Footer from '@/components/ui/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SITE_NAME } from '@/consts/webSite';

const font = Golos_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Fresh Food Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <CallRequest />
          <ToastContainer theme={'dark'} position={'bottom-right'} />
        </Providers>
      </body>
    </html>
  );
}
