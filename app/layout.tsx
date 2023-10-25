import type { Metadata } from 'next';
import './globals.css';
import AppHeight from '@/components/AppHeight';
import MuiThemeProvider from '@/components/common/ThemeProvider';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Chatroom | Twig',
  description: 'Single page Chatbot, that allows you to chat with a bot that responds with random string responses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppHeight />
        <MuiThemeProvider>
          <Header />

          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
