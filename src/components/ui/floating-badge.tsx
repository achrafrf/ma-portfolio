"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating action buttons for scroll to top and WhatsApp contact
 */
const FloatingBadge = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    // Replace with your WhatsApp number (format: country code + number, no + or spaces)
    const phoneNumber = "1234567890"; // Change this to your number
    const message = encodeURIComponent("Hello! I'm interested in your portfolio.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[100] flex flex-col gap-4 transition-all duration-500 ease-out",
        isMounted
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      )}
    >
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "group relative flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-primary/20 shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,0,0.4),_0_0_40px_rgba(0,255,0,0.3)] hover:bg-primary/10",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-0 group-hover:opacity-75"></span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-primary/20 shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,0,0.4),_0_0_40px_rgba(0,255,0,0.3)] hover:bg-primary/10"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-0 group-hover:opacity-75"></span>
      </button>
    </div>
  );
};

export default FloatingBadge;