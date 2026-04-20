import PageShell from "@/components/PageShell";
import { useState } from "react";

export default function Pagamento() {
  const [copied, setCopied] = useState(false);
  const pixKey = "61.094.010/0001-28";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <PageShell>
      {/* Cabeçalho */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h1
          style={{
            fontFamily: "Butler, serif",
            fontSize: "22px",
            color: "#8a6e65",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Pagamento
        </h1>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#b09088",
            textAlign: "center",
          }}
        >
          FORMAS QUE VOCÊ CONSEGUE PAGAR
        </p>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(180, 148, 138, 0.3)",
            margin: "12px auto 0",
          }}
        />
      </div>

      {/* Cards */}
      <div style={{ marginTop: "24px" }}>
        {/* DINHEIRO */}
        <div
          className="flex items-center"
          style={{
            background: "#c4a898",
            borderRadius: "14px",
            padding: "16px 20px",
            marginBottom: "12px",
            gap: "16px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
          <h3
            className="text-sm font-semibold text-white"
            style={{ letterSpacing: "1.5px" }}
          >
            DINHEIRO
          </h3>
        </div>

        {/* CARTÃO */}
        <div
          className="flex items-center"
          style={{
            background: "#c4a898",
            borderRadius: "14px",
            padding: "16px 20px",
            marginBottom: "12px",
            gap: "16px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <line x1="6" y1="15" x2="10" y2="15" />
          </svg>
          <div>
            <h3
              className="text-sm font-semibold text-white"
              style={{ letterSpacing: "1.5px" }}
            >
              CARTÃO
            </h3>
            <p
              className="text-xs mt-0.5 text-white"
              style={{ opacity: 0.85 }}
            >
              Taxa por conta da cliente
            </p>
          </div>
        </div>

        {/* PIX */}
        <div
          className="flex items-center"
          style={{
            background: "#c4a898",
            borderRadius: "14px",
            padding: "16px 20px",
            marginBottom: "12px",
            gap: "16px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M12 2 L22 12 L12 22 L2 12 Z" />
            <path d="M7 12 L12 7 L17 12 L12 17 Z" />
          </svg>
          <h3
            className="text-sm font-semibold text-white"
            style={{ letterSpacing: "1.5px" }}
          >
            PIX
          </h3>
        </div>

        {/* Caixa com chave Pix */}
        <div
          style={{
            background: "#FAF6F1",
            border: "1px solid rgba(200, 161, 156, 0.25)",
            borderRadius: "12px",
            boxShadow: "inset 0 1px 3px rgba(145, 118, 110, 0.08)",
            padding: "16px",
            marginTop: "4px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              color: "#b09088",
              letterSpacing: "1.5px",
              marginBottom: "4px",
            }}
          >
            CHAVE PIX (CNPJ)
          </p>
          <button
            onClick={handleCopy}
            className="block w-full text-left hover:opacity-80 transition-opacity"
            style={{
              color: "#8a6e65",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            {pixKey}
            <span
              className="ml-2"
              style={{
                color: "#b09088",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              {copied ? "✓ copiado" : "(toque para copiar)"}
            </span>
          </button>
          <div
            style={{
              marginTop: "10px",
              paddingTop: "10px",
              fontSize: "12px",
              color: "#4a3e3a",
              borderTop: "1px solid rgba(200, 161, 156, 0.25)",
            }}
          >
            Samille Bonifácio do Nascimento
            <br />
            <span style={{ opacity: 0.7 }}>Nubank</span>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
