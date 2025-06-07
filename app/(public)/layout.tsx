import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Hotel Nannies - Exceptional Childcare, Effortlessly Arranged",
  description:
    "Premium nanny booking platform for professionals and tourists in London.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-secondary text-text-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
