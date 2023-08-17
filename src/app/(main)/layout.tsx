import Header from "@/components/layout/header";
import "../globals.css";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Organick | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
