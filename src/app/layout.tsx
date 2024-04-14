import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh's Photography",
  description: "Select pictures I have taken over the years."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        ></link>
      </head>
      <body
        className={cn(
          inter.className,
          "flex flex-col items-center justify-center"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Heading></Heading>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}