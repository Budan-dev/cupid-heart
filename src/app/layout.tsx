import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cupid Heart",
  description: "Social",
  // icons: {
  //   icon: "/Logo.svg",
  // },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
