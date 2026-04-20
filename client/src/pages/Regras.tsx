import PageShell from "@/components/PageShell";
import SectionTitle from "@/components/SectionTitle";

type Block = { title: string; text: string };

const blocks: Block[] = [
  {
    title: "Agendamento & Reserva",
    text: `Meus atendimentos são organizados de forma exclusiva, pensando no melhor resultado para cada cliente ✨

Para confirmação do horário, é necessário um sinal de 50% do valor do procedimento.

Esse valor garante sua vaga na agenda e será descontado no dia do atendimento 🤍

Cancelamentos devem ser informados com antecedência mínima de 12 horas para verificar a disponibilidade de um novo horário.

Qualquer dúvida, estou à disposição.`,
  },
  {
    title: "Atrasos",
    text: `É tolerável 15 minutos de atraso. Passando disso, envie uma mensagem para verificar disponibilidade de espera, encurtamento do atendimento ou, em casos extremos, cancelamento do horário.`,
  },
  {
    title: "Acompanhantes",
    text: `Não é permitido acompanhante. Exceções somente com autorização prévia.

Crianças devem permanecer sob total responsabilidade e supervisão durante todo o atendimento.`,
  },
];

export default function Regras() {
  return (
    <PageShell>
      {/* Cabeçalho */}
      <div
        className="text-center"
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
          Regras do Espaço
        </h1>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#b09088",
            textAlign: "center",
          }}
        >
          POLÍTICAS DE ATENDIMENTO
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

      {/* Blocos */}
      <div style={{ marginTop: "24px" }}>
        {blocks.map((b, i) => (
          <div key={b.title} style={{ marginBottom: "28px" }}>
            {i > 0 && (
              <div
                style={{
                  color: "#c4a898",
                  fontSize: "14px",
                  textAlign: "center",
                  margin: "20px auto",
                  display: "block",
                }}
              >
                ✦
              </div>
            )}
            <SectionTitle>{b.title}</SectionTitle>
            <div
              style={{
                textAlign: "center",
                color: "#4a3e3a",
                lineHeight: 1.75,
                fontSize: "13px",
              }}
              className="sm:text-[14px]"
            >
              {b.text.split("\n\n").map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    marginBottom: "10px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: "4px" }} />
    </PageShell>
  );
}
