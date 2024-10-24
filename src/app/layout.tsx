import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import BottomNavigation from "@/components/bottomNav";
import { ThemeProvider } from "@/components/themeProvider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vincent Chin",
  description: "CS Fresh Graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative overscroll-y-none bg-gray-900 antialiased selection:bg-violet-600/90  ${space_grotesk.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col justify-between  relative z-10 ">
            <BottomNavigation />
            {children}
          </div>
          <div className="pointer-events-none absolute inset-0 w-full h-full">
            <div className="h-full bg-white dark:bg-[#202023]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
