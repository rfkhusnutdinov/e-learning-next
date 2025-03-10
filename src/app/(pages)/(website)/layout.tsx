import "@/app/styles/main.scss";

import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import { Footer } from "@/widgets/ui/Footer";
import { Header } from "@/widgets/ui/Header";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online course e-learning educational website",
  description: "Created by Rinat Khusnutdinov",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
