import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
