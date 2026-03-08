import { useEffect } from "react";
import { Photo } from "@/app/page";

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
}: {
  post: Photo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  // close on Escape
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      role="dialog"
      aria-label="Post viewer"
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden flex">
        <div className="flex-1 bg-black" style={{ minHeight: 320 }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="flex-1 p-6 overflow-auto">
          <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.description}</p>
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
              className="ml-auto px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
