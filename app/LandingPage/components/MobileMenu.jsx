"use client";

import { ArrowRight, Heater, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../constants";

const MobileMenu = ({
	isMobileMenuOpen,
	setIsMobileMenuOpen,
	scrollToSection,
}) => {
	const pathname = usePathname();
	const isLandingPage = pathname === "/";

	return (
		<AnimatePresence>
			{isMobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className="fixed top-0 left-0 right-0 bottom-0 rounded-xl shadow-zinc-900 shadow-2xl mx-auto z-[100] md:hidden bg-gradient-to-r from-black to-zinc-950"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
						className="relative flex flex-col gap-4 p-6 max-w-7xl mx-auto"
					>
						<Link
							href="/"
							className="flex items-center gap-2 mb-4"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Heater className="w-5 h-5 text-white" />
							<span className="text-white font-semibold text-lg">Eternal</span>
						</Link>
						<div onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4">
							<X className="w-6 h-6 text-white" />
						</div>

						<div className="flex flex-col gap-2">
							{navigationItems.map((item) => {
								if (item.isSection) {
									// Landing page section links
									if (!isLandingPage) {
										// If not on landing page, use Link to navigate
										return (
											<Link
												key={item.label}
												href={item.href}
												onClick={() => setIsMobileMenuOpen(false)}
												className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900"
											>
												{item.label}
											</Link>
										);
									}
									// On landing page, use scroll
									const sectionId = item.label.toLowerCase();
									return (
										<a
											key={item.label}
											href={item.href}
											onClick={(e) => {
												e.preventDefault();
												setIsMobileMenuOpen(false);
												scrollToSection(sectionId);
											}}
											className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900"
										>
											{item.label}
										</a>
									);
								} else {
									// Page links
									return (
										<Link
											key={item.label}
											href={item.href}
											onClick={() => setIsMobileMenuOpen(false)}
											className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900"
										>
											{item.label}
										</Link>
									);
								}
							})}
						</div>

						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative flex gap-1 items-center justify-center p-3 rounded-full group bg-white hover:text-white text-black transition-all duration-300 ease-in mt-4"
						>
							<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
							<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
							<span className="z-50 text-sm">Get Started</span>
						</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;
