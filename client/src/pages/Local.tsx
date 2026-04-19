import BotanicalBg from "@/components/BotanicalBg";
import FloatingPhoto from "@/components/FloatingPhoto";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ProfileHeader from "@/components/ProfileHeader";

const fullAddress =
  "Condomínio Edifício Chams, R. Duque de Caxias, 450 - Centro, Uberlândia - MG, 38400-901";

const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
const mapsView = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export default function Local() {
  return (
    <div
      className="min-h-screen w-full flex items-start sm:items-center justify-center relative"
      style={{ backgroundColor: "#DDD0C8", padding: "60px 20px" }}
    >
      <BotanicalBg />

      <div className="relative z-10 w-full max-w-[480px] mx-auto">
        <ProfileHeader />
        <NavMenu />

        <div
          className="relative"
          style={{ marginTop: "48px", overflow: "visible" }}
        >
          <FloatingPhoto />
          <div
            className="bg-white shadow-2xl rounded-2xl sm:rounded-[28px]"
            style={{
              boxShadow: "0 15px 50px rgba(100, 80, 75, 0.15)",
              overflow: "hidden",
            }}
          >
            <div
              className="h-1.5"
              style={{ background: "linear-gradient(90deg, #C8A19C, #91766E)" }}
            />

            <div
              style={{
                paddingTop: "56px",
                paddingLeft: "28px",
                paddingRight: "28px",
                paddingBottom: "0px",
              }}
            >
              {/* Cabeçalho */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <h1
                  style={{
                    fontFamily: "Butler, serif",
                    fontSize: "22px",
                    color: "#8a6e65",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Localização
                </h1>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: "#b09088",
                    textAlign: "center",
                  }}
                >
                  ONDE ME ENCONTRAR
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

              {/* Conteúdo */}
              <div style={{ marginTop: "24px" }}>
                {/* Endereço */}
                <div className="text-center" style={{ marginBottom: "20px" }}>
                  <div className="inline-flex items-center justify-center mb-3">
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "linear-gradient(135deg, #F3ECE3, #C8A19C)",
                        boxShadow: "0 4px 12px rgba(145, 118, 110, 0.2)",
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  </div>

                  <h2
                    style={{
                      fontFamily: "Butler, serif",
                      fontSize: "18px",
                      color: "#8a6e65",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    Edifício Chams
                  </h2>
                  <p
                    style={{
                      color: "#4a3e3a",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      marginBottom: "12px",
                    }}
                  >
                    Sala 911 · 9° andar
                  </p>

                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "rgba(180, 148, 138, 0.3)",
                      margin: "0 auto 12px",
                    }}
                  />

                  <p
                    style={{
                      color: "#4a3e3a",
                      fontSize: "13px",
                      lineHeight: 1.75,
                    }}
                  >
                    R. Duque de Caxias, 450
                    <br />
                    <span style={{ opacity: 0.75 }}>
                      Centro · Uberlândia/MG
                    </span>
                    <br />
                    <span
                      style={{
                        opacity: 0.6,
                        fontSize: "11px",
                        letterSpacing: "1px",
                      }}
                    >
                      CEP 38400-901
                    </span>
                  </p>
                </div>

                {/* Mapa */}
                <a
                  href={mapsView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden hover:opacity-95 transition-opacity"
                  style={{
                    borderRadius: "14px",
                    border: "1px solid rgba(200, 161, 156, 0.3)",
                    boxShadow: "0 4px 16px rgba(145, 118, 110, 0.12)",
                    marginBottom: "16px",
                  }}
                >
                  <iframe
                    src={mapsEmbed}
                    title="Mapa - Edifício Chams"
                    width="100%"
                    height="260"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>

                {/* Botão Como Chegar */}
                <a
                  href={mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white font-medium hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(90deg, #C8A19C, #91766E)",
                    boxShadow: "0 4px 14px rgba(145, 118, 110, 0.3)",
                    letterSpacing: "1px",
                    padding: "14px 24px",
                    borderRadius: "999px",
                    fontSize: "13px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  COMO CHEGAR
                </a>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
