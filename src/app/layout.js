import "./globals.css";
import DOMPurify from "isomorphic-dompurify";
import { metadata } from "./utils/metaData";
import { Press_Start_2P } from 'next/font/google';
import SplashScreen from "./components/splashScreen";

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-press-start-2p',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(metadata.title) }} />
        <meta name="description" content={DOMPurify.sanitize(metadata.description)} />
        <meta name="keywords" content={DOMPurify.sanitize(metadata.keywords)} />
        <meta name="author" content={DOMPurify.sanitize(metadata.author)} />
        <meta name="robots" content={DOMPurify.sanitize(metadata.robots)} />
        <meta name="viewport" content={DOMPurify.sanitize(metadata.viewport)} />
        <meta name="type" content={DOMPurify.sanitize(metadata.type)} />
      </head>
      <body className={pressStart2P.className}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
