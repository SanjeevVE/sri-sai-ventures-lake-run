// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Sai Ventures LAKE RUN 2.0 - 2025',
  description: 'Official race day information for Sri Sai Ventures LAKE RUN 2.0 - 2025.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
