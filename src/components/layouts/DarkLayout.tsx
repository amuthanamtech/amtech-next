'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dark-theme">
      <Header bgTransparent={true} isOverlay={false} />
      {children}
    </div>
  )
}
