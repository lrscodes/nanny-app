"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#find-a-nanny", label: "Find a Nanny" },
    { href: "/pricing", label: "Pricing" },
    { href: "/compliance", label: "Compliance" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-serif text-white">
          Hotel Nannies
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-white hover:text-accent transition-colors">
            Login
          </Link>
          <Button asChild variant="secondary">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="text-white hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Button asChild variant="secondary" onClick={() => setIsMenuOpen(false)}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 