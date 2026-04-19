import { Link, useLocation } from "wouter";

const items = [
  { href: "/", label: "Preços" },
  { href: "/regras", label: "Regras" },
  { href: "/pagamento", label: "Pagamento" },
];

export default function NavMenu() {
  const [location] = useLocation();
  return (
    <div className="flex justify-center gap-2 mb-6 flex-wrap">
      {items.map((it) => {
        const active = location === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: active
                ? "linear-gradient(90deg, #C8A19C, #91766E)"
                : "rgba(255,255,255,0.6)",
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
  );
}
