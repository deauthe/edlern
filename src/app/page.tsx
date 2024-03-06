import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			></div>
		</main>
	);
}
