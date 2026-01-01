import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prosenjit Kumar Mandal - Full Stack Java Developer",
  description: "Full Stack Java Developer with 8+ years of experience in Design, Development, and Maintenance of web-based applications using JAVA/J2EE technologies.",
  keywords: ["Full Stack Developer", "Java Developer", "Web Development", "React", "Angular", "Spring Boot"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
