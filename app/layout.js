
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahlussuffa",
  description: "shaping moral value",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${nunito.className} overflow-x-hidden`}>
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
