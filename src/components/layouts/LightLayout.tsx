'use client'

import Header from "@/components/Header"

export default function LightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="light-theme">
      <Header bgTransparent={false} isOverlay={false} />
      <div className="pt-50">
        {children}
      </div>
    </div>
  )
}
