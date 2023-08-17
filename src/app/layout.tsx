import { RootProvider } from "@/state/rootProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Organick",
  description:
    "Bangladesh is No1 online grocery store, daily needs supplier, and shopping site in Bangladesh. Sell diapers, rice, oil from the Dhaka marke",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-primary-dark text-sm`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
