import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Provider from "./providers";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "MovieLab",
	description: "Discover movies and TV shows",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.variable} suppressHydrationWarning={true}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
