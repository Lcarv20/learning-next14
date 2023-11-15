import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js example</title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
