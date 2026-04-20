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
    <nav
      className="navbar"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 24px",
        boxSizing: "border-box",
        overflowX: "auto",
        overflowY: "visible",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        className="navbar-inner"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "8px",
          padding: "4px 4px",
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
              className="nav-tab text-xs font-medium transition-all"
              style={{
                flexShrink: 0,
                whiteSpace: "nowrap",
                padding: "6px 16px",
                borderRadius: "999px",
                cursor: "pointer",
                background: active ? "#b08a8a" : "rgba(255,255,255,0.6)",
                color: active ? "white" : "#91766E",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                border: active ? "none" : "1px solid rgba(145,118,110,0.2)",
              }}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
