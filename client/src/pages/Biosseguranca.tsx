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
          <img
            src="/assets/biosseguranca/mesa_de_cafe.jpeg"
            alt="Mesa de café - ambiente acolhedor"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: "14px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              display: "block",
              marginBottom: "14px",
            }}
          />
          <p
            style={{
              color: "#4a3e3a",
              fontSize: "13px",
              lineHeight: 1.7,
            }}
          >
            Um espaço pensado para você se sentir em casa. Café fresquinho e um
            ambiente aconchegante te esperam a cada visita.
          </p>
        </div>

        <Separator />

        {/* BLOCO ESPAÇO */}
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
          <div
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/assets/biosseguranca/espaco.jpeg"
              alt="Espaço de atendimento"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                objectPosition: "center center",
                filter: "brightness(1.2) contrast(0.92)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(240,232,224,0.25) 100%)",
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
              marginBottom: "14px",
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
