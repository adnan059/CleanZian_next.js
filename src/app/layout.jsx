import "@/app/globals.css";
import Footer from "@/components/myComponents/Footer";
import Header from "@/components/myComponents/header/Header";

import { Be_Vietnam_Pro } from "next/font/google";

const bvp = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--bvp",
});

export const metadata = {
  title: "CleanZia",
  description: "Best Cleaning Service Company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bvp.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
