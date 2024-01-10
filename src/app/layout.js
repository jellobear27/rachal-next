import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen bg-gradient-to-tr from-[#60072C]
      via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
          <div>
            <Header />
          </div>
          {children}
          <div>Footer goes here!</div>
        </div>
      </body>
    </html>
  );
}
