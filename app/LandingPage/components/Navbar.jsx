"use client";

import { ArrowRight, Heater, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "../constants";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
	const pathname = usePathname();
	const isLandingPage = pathname === "/";

	const navLinksList = () => {
		return (
			<>
				{navigationItems.map((item) => {
					if (item.isSection) {
						// Landing page section links
						if (!isLandingPage) {
							// If not on landing page, navigate to home with hash
							return (
								<Link
									key={item.label}
									href={item.href}
									className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
								>
									{item.label}
								</Link>
							);
						}
						// On landing page, use scroll
						const sectionId = item.label.toLowerCase();
						return (
							<div
								key={item.label}
								onClick={() => scrollToSection(sectionId)}
								className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
							>
								{item.label}
							</div>
						);
					} else {
						// Page links
						return (
							<Link
								key={item.label}
								href={item.href}
								className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
							>
								{item.label}
							</Link>
						);
					}
				})}
			</>
		);
	};

	return (
		<navbar className="flex items-center justify-between p-2 max-w-7xl mx-auto fixed top-0 left-0 right-0 z-[100]">
			<Link
				href="/"
				className="text-white font-semibold font-serif flex gap-1 items-center rotate-2 hover:opacity-80 transition-opacity relative z-[101]"
			>
				<Heater className="w-4 h-4" />
				Eternal
			</Link>
			<div className="hidden md:flex items-center gap-1 border border-zinc-900 rounded-full py-3 px-4 bg-gradient-to-r from-black to-transparent relative z-[101]">
				{navLinksList()}
			</div>
			<div className="hidden md:block relative z-[101]">
				<button className="relative flex gap-1 items-center p-2 rounded-full group bg-white text-black hover:text-white transition-all duration-300 ease-in">
					<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
					<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
					<span className="z-50 text-sm">Get Started</span>
				</button>
			</div>
			<button
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				className="md:hidden block p-2 rounded-full text-white hover:bg-zinc-800 transition-all duration-300 relative z-[101]"
				aria-label="Toggle menu"
			>
				{isMobileMenuOpen ? (
					<X className="w-6 h-6" />
				) : (
					<Menu className="w-6 h-6" />
				)}
			</button>
		</navbar>
	);
};

export default Navbar;
