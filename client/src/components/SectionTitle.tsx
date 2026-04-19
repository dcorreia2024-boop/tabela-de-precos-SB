export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: "10px",
        marginBottom: "14px",
      }}
    >
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "rgba(180, 148, 138, 0.3)",
          display: "block",
        }}
      />
      <span
        className="text-center"
        style={{
          fontSize: "10px",
          letterSpacing: "2.5px",
          color: "#b09088",
          fontWeight: 600,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "rgba(180, 148, 138, 0.3)",
          display: "block",
        }}
      />
    </div>
  );
}
