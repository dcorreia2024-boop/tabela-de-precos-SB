export default function BotanicalBg() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-40 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
          <path d="M10 10 Q 50 10 80 50 T 120 120" />
          <circle cx="80" cy="50" r="5" />
          <path d="M80 50 Q 100 30 130 40" />
          <path d="M40 10 Q 30 40 50 60" />
          <ellipse cx="130" cy="40" rx="10" ry="5" transform="rotate(-30 130 40)" />
        </g>
      </svg>
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-40 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleX(-1)" }}
      >
        <g fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
          <path d="M10 10 Q 50 10 80 50 T 120 120" />
          <circle cx="80" cy="50" r="5" />
          <path d="M80 50 Q 100 30 130 40" />
        </g>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-64 h-64 opacity-40 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleY(-1)" }}
      >
        <g fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
          <path d="M10 10 Q 50 10 80 50 T 120 120" />
          <circle cx="80" cy="50" r="5" />
        </g>
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-40 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(-1, -1)" }}
      >
        <g fill="none" stroke="white" strokeWidth="1.5" opacity="0.8">
          <path d="M10 10 Q 50 10 80 50 T 120 120" />
          <path d="M80 50 Q 100 30 130 40" />
        </g>
      </svg>
    </>
  );
}
