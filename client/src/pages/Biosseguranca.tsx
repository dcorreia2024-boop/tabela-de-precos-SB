import BotanicalBg from "@/components/BotanicalBg";
import FloatingPhoto from "@/components/FloatingPhoto";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ProfileHeader from "@/components/ProfileHeader";
import SectionTitle from "@/components/SectionTitle";

export default function Biosseguranca() {
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
                  Biossegurança
                </h1>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: "#b09088",
                    textAlign: "center",
                  }}
                >
                  CUIDADO EM CADA DETALHE
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
                {/* BLOCO 1 — ESPAÇO */}
                <div style={{ marginBottom: "28px" }}>
                  <SectionTitle>Espaço</SectionTitle>
                  <p
                    style={{
                      color: "#4a3e3a",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      marginBottom: "14px",
                    }}
                  >
                    Cada atendimento é totalmente personalizado, com atenção aos
                    detalhes e às necessidades de cada cliente.
                  </p>
                  <img
                    src="/assets/biosseguranca/espaco.jpeg"
                    alt="Espaço de atendimento"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "14px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                      display: "block",
                    }}
                  />
                </div>

                {/* Separador */}
                <div
                  style={{
                    textAlign: "center",
                    color: "#c4a898",
                    fontSize: "14px",
                    margin: "24px auto",
                  }}
                >
                  ✦
                </div>

                {/* BLOCO 2 — MATERIAIS */}
                <div style={{ marginBottom: "28px" }}>
                  <SectionTitle>Materiais</SectionTitle>
                  <p
                    style={{
                      color: "#4a3e3a",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      marginBottom: "14px",
                    }}
                  >
                    Materiais esterilizados em autoclave e itens descartáveis de
                    uso individual, garantindo total segurança em cada
                    atendimento.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="/assets/biosseguranca/materiais_1.jpeg"
                      alt="Materiais esterilizados"
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                        display: "block",
                      }}
                    />
                    <img
                      src="/assets/biosseguranca/materiais_2.jpeg"
                      alt="Itens descartáveis"
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
