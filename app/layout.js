import "./globals.css";

export const metadata = {
  title: "Programação Front-End",
  description: "Portfolio de Brenno Souza - Desenvolvedor Back-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
