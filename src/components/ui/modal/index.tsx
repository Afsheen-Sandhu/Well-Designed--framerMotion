"use client";

import React, { ReactNode } from "react";
import { Button } from "../button/index";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.85 }}
            exit={{ opacity: 0, scale: 1, }}
            className="bg-neutral-900/95 p-6 rounded-2xl max-w-xl w-full mx-4 relative shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              variant="icon"
              className="absolute top-3 right-3 text-white hover:text-gray-300 hover:scale-110 transition-transform"
            >
              <X size={20} />
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.01, }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
