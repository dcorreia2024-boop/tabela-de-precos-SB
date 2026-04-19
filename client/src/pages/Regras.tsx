import BotanicalBg from "@/components/BotanicalBg";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ProfileHeader from "@/components/ProfileHeader";

type Block = { title: string; text: string };

const blocks: Block[] = [
  {
    title: "Agendamento & Reserva de Horário",
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
              className="text-3xl font-light"
              style={{
                fontFamily: "Butler, serif",
                color: "#91766E",
                letterSpacing: "0.5px",
              }}
            >
              Regras do Espaço
            </h1>
            <p
              className="text-xs mt-2"
              style={{ color: "#C8A19C", letterSpacing: "3px" }}
            >
              POLÍTICAS DE ATENDIMENTO
            </p>
          </div>

          <div className="px-9 py-6 space-y-8">
            {blocks.map((b, i) => (
              <div key={b.title}>
                {i > 0 && (
                  <div
                    className="text-center mb-6"
                    style={{ color: "#C8A19C", fontSize: "1rem" }}
                  >
                    ✦
                  </div>
                )}
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C8A19C",
                  }}
                >
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C8A19C, transparent)",
                    }}
                  />
                  <span className="whitespace-nowrap text-center">
                    {b.title}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C8A19C, transparent)",
                    }}
                  />
                </div>
                <p
                  className="text-sm leading-relaxed whitespace-pre-line text-center"
                  style={{ color: "#4a3e3a" }}
                >
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
