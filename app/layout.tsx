"use client";

import "./globals.css";
import { Space_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/exhibition", label: "Exhibition" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header className="max-w-screen-2xl">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2"
        aria-label="Toggle menu"
      >
        <div className="">
          <motion.div
            animate={{ rotate: isOpen ? -180 : 0, y: isOpen ? 0 : 0 }}
            className="w-36 h-36"
          >
            <Image
              src="/images/Plane icon.png"
              alt="Impact of Airstrikes"
              width={800}
              height={800}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={spaceMono.className}>
        {/*<div className="min-h-screen bg-black flex flex-col">*/}
          <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
