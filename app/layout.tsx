/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getServerSideConfig } from "./config/server";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const serverConfig = getServerSideConfig();

export const metadata: Metadata = {
  title: "Ai助手Pro",
  description: "Your personal ChatGPT Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1b262a" },
  ],
  appleWebApp: {
    title: "Ai助手Pro",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        {children}
        <Analytics />
        {serverConfig?.isVercel && (
          <>
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
