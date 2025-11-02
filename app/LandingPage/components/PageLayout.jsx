"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Heater, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundDots from "./BackgroundDots";
import Footer from "./Footer";
import { navLinks } from "../constants";

const PageLayout = ({ children }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinksList = () => {
		return (
			<>
				{navLinks.map((item) => {
					const sectionId = item.toLowerCase();
					return (
						<Link
							key={item}
							href={`/${sectionId === "about" ? "" : sectionId}`}
							className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
						>
							{item}
						</Link>
					);
				})}
			</>
		);
	};

	return (
		<div className="relative w-full h-full bg-black">
			<BackgroundDots />

			<div
				className="absolute inset-0 top-0 left-0 right-0 bottom-0 opacity-5 pointer-events-none"
				style={{ zIndex: 0 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					preserveAspectRatio="none"
					viewBox="0 0 1400 1400"
				>
					<filter id="a">
						<feTurbulence
							type="fractalNoise"
							baseFrequency=".65"
							numOctaves="3"
							stitchTiles="stitch"
						></feTurbulence>
					</filter>
					<rect width="100%" height="100%" filter="url(#a)"></rect>
				</svg>
			</div>

			<navbar className="flex items-center justify-between p-2 max-w-7xl mx-auto z-50 fixed top-0 left-0 right-0">
				<Link
					href="/"
					className="text-white font-semibold flex gap-1 items-center"
				>
					<Heater className="w-4 h-4" />
					Eternal
				</Link>
				<div className="hidden md:flex items-center gap-1 border border-zinc-900 rounded-full py-3 px-4 bg-gradient-to-r from-black to-zinc-950">
					{navLinksList()}
				</div>
				<div className="hidden md:block">
					<Link
						href="/"
						className="relative flex gap-1 items-center p-2 rounded-full group bg-white text-black hover:text-white transition-all duration-300 ease-in"
					>
						<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
						<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
						<span className="z-50 text-sm">Get Started</span>
					</Link>
				</div>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden block p-2 rounded-full text-white hover:bg-zinc-800 transition-all duration-300"
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</navbar>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black border-b border-zinc-900"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.1 }}
							className="flex flex-col gap-4 p-6 max-w-7xl mx-auto"
						>
							<div className="flex items-center gap-2 mb-4">
								<Heater className="w-5 h-5 text-white" />
								<span className="text-white font-semibold text-lg">
									Eternal
								</span>
							</div>

							<div className="flex flex-col gap-2">
								{navLinks.map((link) => {
									const sectionId = link.toLowerCase();
									return (
										<Link
											key={link}
											href={`/${sectionId === "about" ? "" : sectionId}`}
											onClick={() => setIsMobileMenuOpen(false)}
											className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900"
										>
											{link}
										</Link>
									);
								})}
							</div>

							<Link
								href="/"
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative flex gap-1 items-center justify-center p-3 rounded-full group bg-white hover:text-white transition-all duration-300 ease-in mt-4"
							>
								<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
								<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
								<span className="z-50 text-sm">Get Started</span>
							</Link>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<main className="z-50 min-h-screen pt-20">{children}</main>

			<Footer />
		</div>
	);
};

export default PageLayout;
