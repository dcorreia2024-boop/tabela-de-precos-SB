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
      className="flex justify-start sm:justify-center gap-2 mb-6 overflow-x-auto no-scrollbar px-1"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
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
            className="rounded-full text-xs font-medium transition-all shrink-0"
            style={{
              padding: "10px 16px",
              background: active
                ? "#b08a8a"
                : "rgba(255,255,255,0.6)",
              color: active ? "white" : "#91766E",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              border: active ? "none" : "1px solid rgba(145,118,110,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
