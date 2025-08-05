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
        url: 'https://file.notion.so/f/f/db2ea357-35bb-4245-ad40-44b85b1f1386/4e6ce838-3af7-46d2-a27a-fad06b031d85/WhatsApp_Image_2025-08-04_at_18.35.52.jpeg?table=block&id=24582981-b916-8061-a20b-e85a02bae3fc&spaceId=db2ea357-35bb-4245-ad40-44b85b1f1386&expirationTimestamp=1754409600000&signature=0A1PqJclGykcT2SQaDucFIRLysG_WhL1yOiqiJDOvXQ&downloadName=WhatsApp+Image+2025-08-04+at+18.35.52.jpeg',
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
      'https://file.notion.so/f/f/db2ea357-35bb-4245-ad40-44b85b1f1386/4e6ce838-3af7-46d2-a27a-fad06b031d85/WhatsApp_Image_2025-08-04_at_18.35.52.jpeg?table=block&id=24582981-b916-8061-a20b-e85a02bae3fc&spaceId=db2ea357-35bb-4245-ad40-44b85b1f1386&expirationTimestamp=1754409600000&signature=0A1PqJclGykcT2SQaDucFIRLysG_WhL1yOiqiJDOvXQ&downloadName=WhatsApp+Image+2025-08-04+at+18.35.52.jpeg',
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
