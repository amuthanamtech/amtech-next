import LightLayout from "@/components/layouts/LightLayout"

export default function LightThemeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LightLayout>{children}</LightLayout>
}
