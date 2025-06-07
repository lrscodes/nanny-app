import Link from 'next/link';
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const mainLinks = [
    { href: "/#find-a-nanny", label: "Find a Nanny" },
    { href: "/pricing", label: "Pricing" },
    { href: "/compliance", label: "Compliance" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook },
    { href: "https://twitter.com", icon: Twitter },
    { href: "https://instagram.com", icon: Instagram },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-serif">Hotel Nannies</h2>
            <p className="mt-2 text-sm text-gray-300">
              Exceptional childcare, effortlessly arranged.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hotel Nannies. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Made with ❤️ in London
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 