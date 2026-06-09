import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartPulse — Recover Abandoned Carts with SMS",
  description: "Send personalized SMS campaigns to recover abandoned carts and boost revenue automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ac7954c3-10cd-4cda-b537-df3618208146"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
