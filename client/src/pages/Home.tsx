import PageShell from "@/components/PageShell";
import SectionTitle from "@/components/SectionTitle";

type Item = { name: string; price: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Procedimentos em Unhas Naturais",
    items: [
      { name: "Blindagem + esmaltação em gel", price: "R$ 100,00" },
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
          Tabela de preços
        </h1>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#b09088",
            textAlign: "center",
          }}
        >
          SERVIÇOS E VALORES
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

      {/* Seções */}
      <div style={{ marginTop: "24px" }}>
        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: "28px" }}>
            <SectionTitle>{section.title}</SectionTitle>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-2"
                >
                  <span style={{ color: "#4a3e3a", fontSize: "13px" }}>
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
                    style={{
                      color: "#91766E",
                      fontSize: "13px",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
