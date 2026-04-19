import BotanicalBg from "@/components/BotanicalBg";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ProfileHeader from "@/components/ProfileHeader";
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
    <div
      className="min-h-screen flex items-center justify-center py-8 px-4 relative"
      style={{ backgroundColor: "#DDD0C8" }}
    >
      <BotanicalBg />

      <div className="relative z-10 w-full max-w-md">
        <ProfileHeader />
        <NavMenu />

        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{
            borderRadius: "28px",
            boxShadow: "0 15px 50px rgba(100, 80, 75, 0.15)",
          }}
        >
          <div
            className="h-1.5"
            style={{ background: "linear-gradient(90deg, #C8A19C, #91766E)" }}
          />

          <div className="text-center pt-12 pb-2 px-8">
            <h1
              className="text-4xl font-light"
              style={{
                fontFamily: "Butler, serif",
                color: "#91766E",
                letterSpacing: "2px",
              }}
            >
              Pagamento
            </h1>
            <p
              className="text-xs mt-2"
              style={{ color: "#C8A19C", letterSpacing: "2px" }}
            >
              FORMAS QUE VOCÊ CONSEGUE PAGAR
            </p>
            <div
              className="text-center mt-4"
              style={{ color: "#C8A19C", fontSize: "1rem" }}
            >
              ✦
            </div>
          </div>

          <div className="px-9 py-6 space-y-5">
            {/* DINHEIRO */}
            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(135deg, #F3ECE3, #C8A19C)",
                  color: "white",
                  fontSize: "1.5rem",
                  boxShadow: "0 4px 12px rgba(145, 118, 110, 0.2)",
                }}
              >
                💵
              </div>
              <div>
                <h3
                  className="text-sm font-bold"
                  style={{
                    color: "#91766E",
                    letterSpacing: "2px",
                  }}
                >
                  DINHEIRO
                </h3>
              </div>
            </div>

            {/* CARTÃO */}
            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(135deg, #F3ECE3, #C8A19C)",
                  color: "white",
                  fontSize: "1.5rem",
                  boxShadow: "0 4px 12px rgba(145, 118, 110, 0.2)",
                }}
              >
                💳
              </div>
              <div>
                <h3
                  className="text-sm font-bold"
                  style={{
                    color: "#91766E",
                    letterSpacing: "2px",
                  }}
                >
                  CARTÃO
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#4a3e3a", opacity: 0.7 }}
                >
                  Taxa por conta da cliente
                </p>
              </div>
            </div>

            {/* PIX */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #F3ECE3, #C8A19C)",
                    color: "white",
                    fontSize: "1.4rem",
                    boxShadow: "0 4px 12px rgba(145, 118, 110, 0.2)",
                  }}
                >
                  ◆
                </div>
                <div>
                  <h3
                    className="text-sm font-bold"
                    style={{
                      color: "#91766E",
                      letterSpacing: "2px",
                    }}
                  >
                    PIX
                  </h3>
                </div>
              </div>
              <div
                className="rounded-2xl p-4 ml-0"
                style={{
                  background: "#FAF6F1",
                  border: "1px solid rgba(200, 161, 156, 0.25)",
                }}
              >
                <p
                  className="text-xs mb-1"
                  style={{ color: "#C8A19C", letterSpacing: "1.5px" }}
                >
                  CHAVE PIX (CNPJ)
                </p>
                <button
                  onClick={handleCopy}
                  className="text-sm font-bold block w-full text-left hover:opacity-80 transition-opacity"
                  style={{ color: "#91766E" }}
                >
                  {pixKey}
                  <span
                    className="text-xs ml-2"
                    style={{ color: "#C8A19C", fontWeight: 400 }}
                  >
                    {copied ? "✓ copiado" : "(toque para copiar)"}
                  </span>
                </button>
                <div
                  className="mt-3 pt-3 text-xs"
                  style={{
                    color: "#4a3e3a",
                    borderTop: "1px solid rgba(200, 161, 156, 0.2)",
                  }}
                >
                  Samille Bonifácio do Nascimento
                  <br />
                  <span style={{ opacity: 0.7 }}>Nubank</span>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
