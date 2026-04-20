import BotanicalBg from "./BotanicalBg";
import FloatingPhoto from "./FloatingPhoto";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import ProfileHeader from "./ProfileHeader";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="page-wrapper"
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "#DDD0C8",
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <BotanicalBg />

      {/* Top buttons / profile header */}
      <div
        className="relative z-10"
        style={{ padding: "0 20px", boxSizing: "border-box" }}
      >
        <div className="w-full max-w-[480px] mx-auto">
          <ProfileHeader />
        </div>
      </div>

      {/* Navbar — FORA do card, largura total */}
      <div className="relative z-10" style={{ marginTop: "16px" }}>
        <NavMenu />
      </div>

      {/* Card com foto flutuante */}
      <div
        className="relative z-10"
        style={{
          padding: "0 20px",
          marginTop: "48px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="relative mx-auto"
          style={{
            width: "90%",
            maxWidth: "480px",
            overflow: "visible",
            marginBottom: "40px",
          }}
        >
          <FloatingPhoto />
          <div
            className="bg-white shadow-2xl rounded-2xl sm:rounded-[28px]"
            style={{
              boxShadow: "0 15px 50px rgba(100, 80, 75, 0.15)",
              overflow: "hidden",
              position: "relative",
              width: "100%",
            }}
          >
            <div
              className="h-1.5"
              style={{
                background: "linear-gradient(90deg, #C8A19C, #91766E)",
              }}
            />
            <div
              style={{
                paddingTop: "56px",
                paddingLeft: "28px",
                paddingRight: "28px",
                paddingBottom: "0px",
              }}
            >
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
