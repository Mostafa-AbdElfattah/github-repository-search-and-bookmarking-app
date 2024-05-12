import { Inter } from "next/font/google";
import "../scss/base.scss";
import MainNavbar from "@/components/MainNavbar/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Github Repository Search and Bookmarking App",
  description: "Github Repository Search and Bookmarking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
