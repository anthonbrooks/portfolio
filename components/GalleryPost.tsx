import { useEffect, useRef } from "react";
import { Photo } from "@/app/page";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface GalleryPostProps {
  post: Photo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryPost({
  post,
  onClose,
  onNext,
  onPrev,
}: GalleryPostProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // close on Escape
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          role="dialog"
          aria-label="Post viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row"
            ref={cardRef}
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <div className="w-full md:flex-1 bg-black h-64 md:h-auto">
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 p-6 overflow-auto">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-5">{post.description}</p>
              <span>
                <p>You can try the app out here:</p>
                <Link href={post.link} className="font-bold">
                  Demo
                </Link>
              </span>
              <div className="mt-6 flex gap-2">
                <button
                  onClick={onPrev}
                  className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  aria-label="Previous post"
                >
                  Prev
                </button>
                <button
                  onClick={onNext}
                  className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  aria-label="Next post"
                >
                  Next
                </button>
                <button
                  onClick={onClose}
                  className="ml-auto px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
