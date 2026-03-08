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
      className="relative m-2 w-44 h-60 rounded-xl overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent text-white text-sm p-2">
        {title}
      </div>
      {/* subtle glow accent */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-300/40 filter blur-2xl animate-glow"
      />
    </button>
  );
}
