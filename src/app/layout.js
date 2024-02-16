import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rachal Skeen CPA",
  description: "A CPA landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='min-h-screen bg-[#f5f7f9] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
          <div>
            <Header />
          </div>
          {children}
          <div className="text-center text-[#2a414f] mt-20 sticky">Designed by StrawbieTech 2024 <span className="">🍓</span></div>
        </div>
      </body>
    </html>
  );
}
