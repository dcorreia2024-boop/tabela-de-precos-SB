import BotanicalBg from "@/components/BotanicalBg";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ProfileHeader from "@/components/ProfileHeader";

type Item = { name: string; price: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Procedimentos em Unhas Naturais",
    items: [
      { name: "Blindagem + esmaltação em gel", price: "R$ 80,00" },
      { name: "Banho de Gel", price: "R$ 120,00" },
      { name: "Esmaltação em Gel (Mãos e Pés)", price: "R$ 160,00" },
    ],
  },
  {
    title: "Aplicação",
    items: [
      { name: "Quadrado", price: "R$ 160,00" },
      { name: "Almond · Bailarina", price: "R$ 170,00" },
    ],
  },
  {
    title: "Manutenção",
    items: [
      { name: "Até 30 dias", price: "R$ 140,00" },
      { name: "De outra profissional", price: "R$ 170,00" },
    ],
  },
  {
    title: "Outros",
    items: [
      { name: "Remoção", price: "R$ 50,00" },
      { name: "Remoção para nova aplicação", price: "R$ 30,00" },
      { name: "Troca de formato", price: "R$ 15,00" },
      { name: "Reposição de unha fora da manutenção", price: "R$ 15,00" },
      { name: "Reposição de unha na manutenção", price: "R$ 10,00" },
    ],
  },
  {
    title: "Decoração",
    items: [
      { name: "Par de encapsulada", price: "R$ 15,00" },
      { name: "Baby boomer", price: "R$ 30,00" },
      { name: "Pó cromo", price: "R$ 20,00" },
    ],
  },
];

export default function Home() {
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

          <div className="text-center pt-12 pb-4 px-8">
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

          <div className="px-9 py-4 space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
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
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C8A19C, transparent)",
                    }}
                  />
                  <span className="whitespace-nowrap">{section.title}</span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C8A19C, transparent)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-2"
                    >
                      <span className="text-sm" style={{ color: "#4a3e3a" }}>
                        {item.name}
                      </span>
                      <div
                        className="flex-1 border-b border-dotted"
                        style={{
                          borderColor: "rgba(145, 118, 110, 0.3)",
                          marginBottom: "2px",
                        }}
                      />
                      <span
                        className="text-sm font-bold"
                        style={{ color: "#91766E", whiteSpace: "nowrap" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
