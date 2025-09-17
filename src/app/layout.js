
import SwitchMode from "@/components/SwitchMode";
import "./globals.css";
import { Bai_Jamjuree, Inter } from "next/font/google";
import Provider from "./Provider";
import Navbar1 from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });
const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bai-jamjuree" });
export const metadata = {
  title: "Naveed dev",
  description: "Naveed dev",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${baiJamjuree.variable}`}>
        <Provider>
        
          <Navbar1/>
          {children}
          <Footer/>
         
          </Provider>
      </body>
    </html>
  );
}
