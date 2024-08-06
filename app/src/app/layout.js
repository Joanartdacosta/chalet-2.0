import "./globals.css";
import NavBar from "@/components/common/navbar/NavBar";
import Footer from "@/components/common/footer/Footer";
import {
  poppins,
  openSans,
  ropaSans,
  quicksand,
  playfairDisplay,
} from "@/fonts/fonts";

export const metadata = {
  title: "CHALET",
  description: "CHALET DESIGN DE INTERIORES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${openSans.variable} ${poppins.variable} ${quicksand.variable} ${ropaSans.variable} ${playfairDisplay.variable}`}
        >
          <NavBar />
          <section> {children}</section>
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
