import type { Metadata } from "next";
import ClientProvider from "./ClientProvider";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  title: "Klinik Maharani",
  description: "Klinik Maharani",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "id",
    url: "https://isad-4-oz6yrxdb2a-et.a.run.app/",
    title: "Klinik Maharani",
    description: "Klinik Maharani",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
