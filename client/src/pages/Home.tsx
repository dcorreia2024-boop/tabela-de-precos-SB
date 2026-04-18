import { Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4" style={{ backgroundColor: "#DDD0C8" }}>
      {/* Botanical SVG Elements - Top Left */}
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

      {/* Botanical SVG Elements - Top Right */}
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

      {/* Botanical SVG Elements - Bottom Left */}
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

      {/* Botanical SVG Elements - Bottom Right */}
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

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Circular Nail Photo */}
        <div className="flex justify-center mb-8">
          <div
            className="w-28 h-28 rounded-full bg-white p-1 shadow-lg flex items-center justify-center overflow-hidden"
            style={{ boxShadow: "0 10px 25px rgba(145, 118, 110, 0.2)" }}
          >
            <img
              src="/manus-storage/nail_photo_a393cc6c.jpg"
              alt="Nails"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* White Card */}
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ borderRadius: "28px", boxShadow: "0 15px 50px rgba(100, 80, 75, 0.15)" }}
        >
          {/* Top Gradient Border */}
          <div
            className="h-1.5"
            style={{
              background: "linear-gradient(90deg, #C8A19C, #91766E)",
            }}
          />

          {/* Header */}
          <div className="text-center pt-16 pb-4 px-8">
            <h1
              className="text-4xl font-light"
              style={{
                fontFamily: "Butler, serif",
                color: "#91766E",
                letterSpacing: "0.5px",
              }}
            >
              Tabela de preços:
            </h1>
          </div>

          {/* Content */}
          <div className="px-9 py-4 space-y-6">
            {/* Section: Procedimentos em Unhas Naturais */}
            <div>
              <div
                className="flex items-center gap-3 mb-3"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C8A19C",
                }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
                <span className="whitespace-nowrap">Procedimentos em Unhas Naturais</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Blindagem + esmaltação em gel
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 80,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Banho de Gel
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 120,00
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Aplicação */}
            <div>
              <div
                className="flex items-center gap-3 mb-3"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C8A19C",
                }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
                <span className="whitespace-nowrap">Aplicação</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Quadrado · Bailarina
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 160,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Almond · Bailarina
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 170,00
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Manutenção */}
            <div>
              <div
                className="flex items-center gap-3 mb-3"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C8A19C",
                }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
                <span className="whitespace-nowrap">Manutenção</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Até 30 dias
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 140,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    De outra profissional
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 170,00
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Outros */}
            <div>
              <div
                className="flex items-center gap-3 mb-3"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C8A19C",
                }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
                <span className="whitespace-nowrap">Outros</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Remoção
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 50,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Remoção para nova aplicação
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 30,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Reposição de unha fora da manutenção
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 15,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Troca de formato
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 15,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Reposição de unha na manutenção
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 10,00
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Decoração */}
            <div>
              <div
                className="flex items-center gap-3 mb-3"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C8A19C",
                }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
                <span className="whitespace-nowrap">Decoração</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A19C, transparent)" }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Par de encapsulada
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 15,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Baby boomer
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 30,00
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm" style={{ color: "#4a3e3a" }}>
                    Pó cromo
                  </span>
                  <div className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(145, 118, 110, 0.3)", marginBottom: "2px" }} />
                  <span className="text-sm font-bold" style={{ color: "#91766E", whiteSpace: "nowrap" }}>
                    R$ 20,00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t" style={{ borderColor: "#F3ECE3" }}>
            <div className="text-center py-8 px-9">
              <h2
                className="text-lg font-bold tracking-widest"
                style={{
                  color: "#91766E",
                  letterSpacing: "8px",
                  marginBottom: "2px",
                }}
              >
                SAMILLE
              </h2>
              <p
                className="text-xs tracking-widest"
                style={{
                  color: "#91766E",
                  letterSpacing: "6px",
                  opacity: 0.8,
                  marginBottom: "20px",
                }}
              >
                BEAUTY
              </p>

              {/* Contact Pill */}
              <div
                className="inline-flex items-center justify-center gap-5 px-6 py-2.5 rounded-full text-white text-xs font-medium"
                style={{
                  background: "linear-gradient(90deg, #C8A19C, #91766E)",
                }}
              >
                <a
                  href="https://wa.me/5534991287559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (34) 99128-7559
                </a>
                <span style={{ opacity: 0.5 }}>·</span>
                <a
                  href="https://instagram.com/samillenails_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  samillenails_
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
