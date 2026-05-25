"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Popup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
      
      {/* Popup Box (smaller + auto image size) */}
      <div className="relative bg-white rounded-xl p-2 w-auto max-w-[90vw] shadow-xl">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow-md"
        >
          <X size={18} />
        </button>

        {/* Image (auto size like real poster/brochure) */}
        <Image
          src="/images/sum.png"
          alt="Brochure"
          width={500}
          height={700}
          className="rounded-lg w-auto h-auto max-h-[80vh]"
        />
      </div>
    </div>
  );
};

export default Popup;