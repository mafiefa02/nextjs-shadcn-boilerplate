import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans } from "@/lib/fonts";
import { metadataSettings } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = metadataSettings;
// export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
