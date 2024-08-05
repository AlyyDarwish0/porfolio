import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Aly Darwish - Portfolio",
	description: "Welcome to the portfolio of Aly Darwish. As a Cybersecurity professional striving to excel in the field, I embrace the continuous learning it demands. To gain experience, I participate in hacking competitions and consistently achieve high ranks, even when competing against hundreds of others.",
	keywords: "Aly Darwish, portfolio, cybersecurity, web development, AI, machine learning, robotics, full-stack development, software solutions, Python, JavaScript",
	author: "Aly Darwish",
	canonical: "https://alydarwish.me",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://alydarwish.me",
		site_name: "Aly Darwish - Portfolio",
		title: "Aly Darwish - Portfolio",
		description: "Welcome to the portfolio of Aly Darwish. As a Cybersecurity professional striving to excel in the field, I embrace the continuous learning it demands. To gain experience, I participate in hacking competitions and consistently achieve high ranks, even when competing against hundreds of others.",
		images: [
			{
				url: "https://alydarwish.me/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Aly Darwish - Portfolio",
			},
		],
	},
	icons: {
		icon: "/favicon.ico",
		appleTouchIcon: "/apple-touch-icon.png",
		favicon32: "/favicon-32x32.png",
		favicon16: "/favicon-16x16.png",
		manifest: "/site.webmanifest",
		maskIcon: "/safari-pinned-tab.svg",
	},
	manifest: "/site.webmanifest",
	robots: "index, follow",
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
