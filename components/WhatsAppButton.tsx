"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLinks } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // Show once user scrolls past hero; hide while scrolling down near bottom
      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 140;
      setShow(y > 300);
      setHidden(y > lastY && !nearBottom);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: hidden ? 0 : 1,
            y: hidden ? 24 : 0,
          }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bone shadow-lg shadow-ink/20 transition-colors hover:bg-charcoal sm:h-16 sm:w-16"
          aria-label="Chat with OG Blanks on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
