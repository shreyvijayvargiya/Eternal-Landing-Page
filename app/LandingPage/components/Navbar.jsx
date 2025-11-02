import { ArrowRight, Heater, Menu, X } from "lucide-react";
import { navLinks } from "../constants";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
	const navLinksList = () => {
		return (
			<>
				{navLinks.map((item) => {
					const sectionId = item.toLowerCase();
					return (
						<div
							key={item}
							onClick={() => scrollToSection(sectionId)}
							className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
						>
							{item}
						</div>
					);
				})}
			</>
		);
	};

	return (
		<navbar className="flex items-center justify-between p-2 max-w-7xl mx-auto z-50 fixed top-0 left-0 right-0">
			<p className="text-white font-semibold font-serif flex gap-1 items-center rotate-2">
				<Heater className="w-4 h-4" />
				Eternal
			</p>
			<div className="hidden md:flex items-center gap-1 border border-zinc-900 rounded-full py-3 px-4 bg-gradient-to-r from-black to-transparent">
				{navLinksList()}
			</div>
			<div className="hidden md:block">
				<button className="relative flex gap-1 items-center p-2 rounded-full group bg-white text-black hover:text-white transition-all duration-300 ease-in">
					<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
					<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
					<span className="z-50 text-sm">Get Started</span>
				</button>
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
	);
};

export default Navbar;
