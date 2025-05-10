"use client";
import { metadata } from "@/lib/metadata";
import "./globals.css";
import { Provider } from "react-redux";

import { store } from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
