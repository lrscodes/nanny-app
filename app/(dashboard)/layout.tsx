import "../globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { flags } from "@/lib/flags";
import { redirect } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Dashboard - Hotel Nannies",
  description: "Manage your bookings and profile.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!flags.dashboard) {
    redirect("/");
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-secondary text-text-charcoal">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 