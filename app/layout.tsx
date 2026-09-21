import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://phinehaswinyelsim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phinehas Winyelsim — Student Software Developer",
    template: "%s | Phinehas Winyelsim",
  },
  description:
    "Portfolio of Phinehas Winyelsim, Telecommunications Engineering student and aspiring software engineer in Ghana building practical digital products — FixMate Ghana, PrimeTech and more.",
  keywords: ["Phinehas Winyelsim", "portfolio", "software developer Ghana", "web development", "Next.js", "FixMate Ghana", "PrimeTech", "telecommunications engineering"],
  authors: [{ name: "Phinehas Winyelsim" }],
  openGraph: {
    title: "Phinehas Winyelsim — Websites & web apps that solve real problems",
    description: "Selected work, services and contact. Open to internships, freelance & collaboration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phinehas Winyelsim — Student Software Developer",
    description: "Telecommunications Engineering student building practical digital products.",
  },
  icons: { icon: "/favicon.svg" },
};

const themeInit = `(function(){try{var t=localStorage.getItem('pw-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-[#FAF9F6] text-zinc-900 antialiased dark:bg-ink dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
