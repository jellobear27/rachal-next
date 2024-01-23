import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <div className="text-center pb-5 pt-[550px] sticky">Footer goes here!</div>
        </div>
      </body>
    </html>
  );
}
