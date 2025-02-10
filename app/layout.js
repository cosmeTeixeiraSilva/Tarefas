import Header from "./_components/header";
import "./globals.css";



export const metadata = {
  title: "Tarefas Plus",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="w-screen flex flex-col mx-auto"
      >
        <Header />
        <div className="flex mx-auto w-full items-center justify-center">{children}</div>



      </body>
    </html>
  );
}
