import "./../styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FlexInvest Painel",
  description: "Painel oficial do robô FlexInvest Pro",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
