import PageShell from "@/components/PageShell";
import SectionTitle from "@/components/SectionTitle";

const Separator = () => (
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
);

export default function Biosseguranca() {
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
        <Separator />

        {/* BLOCO LOCALIZAÇÃO */}
        <div style={{ marginBottom: "28px" }}>
          <SectionTitle>Localização</SectionTitle>
          <div
            className="bio-section"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              className="bio-image"
              src="/assets/biosseguranca/mesa_de_cafe.jpeg"
              alt="Mesa de café - ambiente acolhedor"
              style={{
                width: "45%",
                flexShrink: 0,
                height: "130px",
                objectFit: "cover",
                objectPosition: "center bottom",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
            <p
              style={{
                flex: 1,
                color: "#8a6e65",
                fontSize: "13px",
                lineHeight: 1.7,
              }}
            >
              Um espaço pensado para você se sentir em casa. Café fresquinho e
              um ambiente aconchegante te esperam a cada visita.
            </p>
          </div>
        </div>

        <Separator />

        {/* BLOCO ESPAÇO */}
        <div style={{ marginBottom: "28px" }}>
          <SectionTitle>Espaço</SectionTitle>
          <div
            className="bio-section"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p
              style={{
                flex: 1,
                color: "#8a6e65",
                fontSize: "13px",
                lineHeight: 1.7,
              }}
            >
              Cada atendimento é totalmente personalizado, com atenção aos
              detalhes e às necessidades de cada cliente.
            </p>
            <img
              className="bio-image"
              src="/assets/biosseguranca/espaco.jpeg"
              alt="Espaço de atendimento"
              style={{
                width: "45%",
                flexShrink: 0,
                height: "130px",
                objectFit: "cover",
                objectPosition: "right center",
                filter: "brightness(1.3) contrast(0.9)",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
          </div>
        </div>

        <Separator />

        {/* BLOCO MATERIAIS */}
        <div style={{ marginBottom: "28px" }}>
          <SectionTitle>Materiais</SectionTitle>
          <p
            style={{
              color: "#4a3e3a",
              fontSize: "13px",
              lineHeight: 1.7,
              marginBottom: "10px",
            }}
          >
            Materiais esterilizados em autoclave e itens descartáveis de uso
            individual, garantindo total segurança em cada atendimento.
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
                height: "150px",
                objectFit: "cover",
                objectPosition: "center center",
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
                height: "150px",
                objectFit: "cover",
                objectPosition: "center center",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
