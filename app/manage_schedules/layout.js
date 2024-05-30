import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manage Schedules",
  description: "Manage Masterman Bell Schedules",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
