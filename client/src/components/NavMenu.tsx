import { Link, useLocation } from "wouter";

const items = [
  { href: "/", label: "Regras" },
  { href: "/precos", label: "Preços" },
  { href: "/pagamento", label: "Pagamento" },
  { href: "/local", label: "Local" },
  { href: "/biosseguranca", label: "Biosseg." },
];

export default function NavMenu() {
  const [location] = useLocation();
  return (
    <div
      className="nav-menu-scroll mb-6"
      style={{
        width: "100%",
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
        padding: "0 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="nav-menu-inner"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "8px",
          width: "max-content",
          minWidth: "100%",
          justifyContent: "center",
          paddingRight: "8px",
        }}
      >
        {items.map((it) => {
          const active =
            location === it.href ||
            (it.href === "/" && location === "/regras");
          return (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-full text-xs font-medium transition-all"
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                background: active ? "#b08a8a" : "rgba(255,255,255,0.6)",
                color: active ? "white" : "#91766E",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                border: active ? "none" : "1px solid rgba(145,118,110,0.2)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
