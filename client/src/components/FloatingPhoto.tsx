export default function FloatingPhoto() {
  return (
    <div
      className="absolute left-1/2"
      style={{
        top: "-44px",
        transform: "translateX(-50%)",
        zIndex: 10,
      }}
    >
      <div
        className="overflow-hidden rounded-full"
        style={{
          width: "88px",
          height: "88px",
          border: "4px solid #f0e8e0",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        }}
      >
        <img
          src="/assets/nail-photo.jpeg"
          alt="Samille Bonifácio"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
