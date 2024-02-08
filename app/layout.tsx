import Header from "@/components/header";
import "./globals.css";
import {Roboto_Slab } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata = {
  title: "Christian Gouldy | Portfolio",
  description: "Christian Full Stack Developer Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-28 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f7c0c1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#854445]"></div>
        <div className="bg-[#bde5f1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#305b66]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
