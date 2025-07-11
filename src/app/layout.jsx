import "@/assets/styles/globals.css";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import AOSProvider from "@/components/shared/aosProvider/AosProvider";
import ThemeProvider from "@/components/shared/themeProvider/ThemeProvider";

import { Be_Vietnam_Pro } from "next/font/google";

const bvp = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--bvp",
});

export const metadata = {
  title: "CleanZian",
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
        <AOSProvider />
        <ThemeProvider
          props={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
