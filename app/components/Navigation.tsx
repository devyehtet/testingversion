"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/exhibition", label: "Exhibition" },
  { href: "/support", label: "Support" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-6 h-0.5"
          >
            <Image
              src="/images/Plane icon.png"
              alt="Impact of Airstrikes"
              width={80}
              height={80}
              className="w-20 h-20"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl hover:text-gray-300 transition-colors font-mono"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
