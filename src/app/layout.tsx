import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visal & Neath Invitation",
  description: "This is our Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Moul&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Suwannaphum:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link>
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
