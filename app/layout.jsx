import { mortserrat } from "./_ui/font";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    template: "My Portfolio | %s",
    default: "My Portfolio | Home",
  },
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className="relative">
      <body className={`${mortserrat.className} bg-light w-full min-h-screen`}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
