import { Patrick_Hand } from "next/font/google";

const patHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Polaroid({
  src,
  title,
  onClick,
}: {
  src: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={`relative m-2 w-44 h-60 p-3 pb-10 border-white rounded-xl overflow-hidden shadow-lg shadow-white bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-1 hover:z-20 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img src={src} alt={title} className="w-full h-full object-cover" />
      </div>
      <p
        className={`absolute ${patHand.className} bottom-0 left-0 right-0 text-black text-2xl p-2`}
      >
        {title}
      </p>
      {/* subtle glow accent */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-300/40 filter blur-2xl animate-glow"
      />
    </button>
  );
}
