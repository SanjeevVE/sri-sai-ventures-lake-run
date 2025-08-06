// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Sai Ventures LAKE RUN 2.0 - 2025',
  description: 'Official race day information for Sri Sai Ventures LAKE RUN 2.0 - 2025.',
  openGraph: {
    title: 'Sri Sai Ventures LAKE RUN 2.0 - 2025',
    description: 'Official race day information for Sri Sai Ventures LAKE RUN 2.0 - 2025.',
    images: [
      {
        url: 'https://novarace-events.s3.us-east-2.amazonaws.com/email-attachments/super-admin/3ec5865d-9851-4866-996a-17c271820043.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sri Sai Ventures LAKE RUN 2.0 Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Sai Ventures LAKE RUN 2.0 - 2025',
    description: 'Official race day information for Sri Sai Ventures LAKE RUN 2.0 - 2025.',
    images: [
      'https://novarace-events.s3.us-east-2.amazonaws.com/email-attachments/super-admin/3ec5865d-9851-4866-996a-17c271820043.jpeg',
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
