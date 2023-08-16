import Header from "@/components/layout/header";
import "../globals.css";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Organick | Home",
  description:
    "Bangladesh is No1 online grocery store, daily needs supplier, and shopping site in Bangladesh. Sell diapers, rice, oil from the Dhaka marke",
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
