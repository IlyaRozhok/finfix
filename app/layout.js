import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "FinFix - Контролируй финансы без приложений",
  description:
    "Финансовый трекер в Telegram. Долги, расходы, доходы, статистика — всё в одном чате. Никаких Excel и приложений.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
