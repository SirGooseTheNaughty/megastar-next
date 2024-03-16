import type { Metadata } from "next";
import { Lato } from "next/font/google";
import i18nConfig from '@/i18n-config';
import cn from 'classnames';
import './globals.css';

const lato = Lato({ weight: ['300', '400'], subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: "Megastar Group",
  description: "Welcome to the official cite for Megastar Group.",
  metadataBase: new URL('https://megastar-group.ru/'),
  openGraph: {
    type: "website",
    title: "Megastar Group",
    description: "Welcome to the official cite for Megastar Group.",
    url: "https://megastar-group.ru/",
  }
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  }
}>) {
  return (
    <html lang={locale}>
      <body className={cn(lato.className, 'bg-blue text-white')}>
        {children}
      </body>
    </html>
  );
}
