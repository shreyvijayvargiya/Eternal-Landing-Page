import { ArrowRight, Heater } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const MobileMenu = ({
	isMobileMenuOpen,
	setIsMobileMenuOpen,
	scrollToSection,
}) => {
	return (
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
							<span className="text-white font-semibold text-lg">Eternal</span>
						</div>

						<div className="flex flex-col gap-2">
							{navLinks.map((link) => {
								const sectionId = link.toLowerCase();
								return (
									<a
										key={link}
										href={`#${sectionId}`}
										onClick={(e) => {
											e.preventDefault();
											setIsMobileMenuOpen(false);
											scrollToSection(sectionId);
										}}
										className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900"
									>
										{link}
									</a>
								);
							})}
						</div>

						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative flex gap-1 items-center justify-center p-3 rounded-full group bg-white hover:text-white transition-all duration-300 ease-in mt-4"
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
