import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/navbar';
import Home from './pages/Home';
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Home />
      </body>
    </html>
  );
}
