import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppHeight from '@/components/AppHeight';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatroom | Twig',
  description: 'Single page Chatbot, that allows you to chat with a bot that responds with random string responses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeight />
        {children}
      </body>
    </html>
  );
}
