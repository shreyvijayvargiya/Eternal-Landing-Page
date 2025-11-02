import { Heater } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "../constants";

const Footer = () => {
	return (
		<footer className="relative w-full bg-gradient-to-r from-black to-zinc-950 border-t border-zinc-800 z-10">
			<div className="w-full mx-auto p-10 bg-gradient-to-r from-black to-zinc-950 grid md:grid-cols-2 grid-cols-1 items-start justify-center transition-all duration-300 ease-in-out">
				<div className="max-w-xl mx-auto ">
					<Link href="/" className="flex items-center gap-2 mb-2">
						<Heater className="w-5 h-5 text-white" />
						<span className="text-white font-semibold text-lg">Eternal</span>
					</Link>
					<p className="text-zinc-500 text-xs">
						© {new Date().getFullYear()} Eternal. All rights reserved.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start gap-8 mb-8">
					<div>
						<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
							Navigation
						</h5>
						<ul className="space-y-3">
							{navigationItems.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-zinc-400 hover:text-white transition-colors text-sm"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
							Legal
						</h5>
						<ul className="space-y-3">
							<li>
								<Link
									href="/privacy"
									className="text-zinc-400 hover:text-white transition-colors text-sm"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<a
									href="#terms"
									className="text-zinc-400 hover:text-white transition-colors text-sm"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<Link
									href="/cookie"
									className="text-zinc-400 hover:text-white transition-colors text-sm"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<a
									href="#security"
									className="text-zinc-400 hover:text-white transition-colors text-sm"
								>
									Security
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
							Social
						</h5>
						<ul className="space-y-3">
							<li>
								<a
									href="https://linkedin.com/company/eternal"
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-400 hover:text-blue-400 transition-colors text-sm"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/eternal"
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-400 hover:text-blue-400 transition-colors text-sm"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/eternal"
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-400 hover:text-pink-400 transition-colors text-sm"
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="relative h-fit pt-10 text-center rounded-[4em]">
				<p className="md:text-[12em] text-7xl shadow-xlfont-bold font-mono uppercase text-transparent bg-clip-text bg-gradient-to-tr from-black to-white">
					Eternal
				</p>
			</div>
		</footer>
	);
};

export default Footer;
