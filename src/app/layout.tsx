import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ProgressProviders from "@/components/progress-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Tooltip } from "@/components/ui/tooltip";
import { fontMono, fontSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from 'sonner';
import "./globals.css";
export const metadata: Metadata = {
  title: "Vani Studio - Dịch vụ phát triển phần mềm",
  description: "Vani Studio là tổ chức phát triển phần mềm chuyên về lập trình web, discord bot, và các dịch vụ liên quan đến phần mềm.",
  icons: {
    icon: "/vs.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="vi" className={`${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
  <body suppressHydrationWarning={true}>

        <Tooltip>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              position="bottom-center"
              richColors
              theme="system"
              closeButton
              toastOptions={{
                style: {
                  borderRadius: '15px',
                  padding: '10px'
                },
              }}
            />
            <ProgressProviders>
              <Navbar />
              {children}
              <Footer />
            </ProgressProviders>
          </ThemeProvider>
        </Tooltip>
      </body>
    </html>
  );
}
