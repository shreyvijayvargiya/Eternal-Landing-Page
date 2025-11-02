import { ArrowRight, Mail, Globe, Linkedin, Twitter, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
	return (
		<motion.section
			id="contact"
			className="py-12 my-12 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<Mail className="w-4 h-4" />
				<span className="text-sm font-medium">Contact Us</span>
			</div>
			<div className="max-w-5xl mx-auto my-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex flex-col gap-4">
						<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950 transition-all duration-300 bg-zinc-black/90">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
									<Mail className="w-5 h-5 text-zinc-400" />
								</div>
								<div className="flex-1">
									<h4 className="text-lg font-semibold text-zinc-300 mb-2">
										Email Us
									</h4>
									<a
										href="mailto:contact@eternal.ai"
										className="text-zinc-400 hover:text-zinc-300 transition-colors text-sm"
									>
										contact@eternal.ai
									</a>
								</div>
							</div>
						</div>

						<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950 transition-all duration-300 bg-zinc-black/90">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
									<Globe className="w-5 h-5 text-zinc-400" />
								</div>
								<div className="flex-1">
									<h4 className="text-lg font-semibold text-zinc-300 mb-4">
										Follow Us
									</h4>
									<div className="flex gap-3">
										<a
											href="https://linkedin.com/company/eternal"
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
											aria-label="LinkedIn"
										>
											<Linkedin className="w-5 h-5 text-zinc-400 hover:text-blue-400 transition-colors" />
										</a>
										<a
											href="https://twitter.com/eternal"
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
											aria-label="Twitter"
										>
											<Twitter className="w-5 h-5 text-zinc-400 hover:text-blue-400 transition-colors" />
										</a>
										<a
											href="https://instagram.com/eternal"
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
											aria-label="Instagram"
										>
											<Instagram className="w-5 h-5 text-zinc-400 hover:text-pink-400 transition-colors" />
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950 transition-all duration-300 bg-zinc-black/90">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
									<MapPin className="w-5 h-5 text-zinc-400" />
								</div>
								<div className="flex-1">
									<h4 className="text-lg font-semibold text-zinc-300 mb-2">
										Office Location
									</h4>
									<p className="text-zinc-400 text-sm leading-relaxed">
										123 Innovation Street
										<br />
										San Francisco, CA 94105
										<br />
										United States
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950 shadow-xl shadow-zinc-950 ring-4 ring-zinc-950 hover:scale-105 scale-100 transition-all duration-300 ease-in-out">
						<h4 className="text-lg font-semibold text-zinc-300 mb-6">
							Send us a Message
						</h4>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-zinc-400 mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:ring-1 focus:ring-zinc-500/50 transition-all duration-300"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-zinc-400 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:ring-1 focus:ring-zinc-500/50 transition-all duration-300"
									placeholder="your.email@example.com"
								/>
							</div>
							<button className="w-full relative flex justify-center gap-1 items-center p-2 rounded-full group bg-zinc-800 text-white hover:text-black transition-all duration-300 ease-in">
								<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-zinc-100 rounded-full h-full" />
								<ArrowRight className="w-5 h-5 p-1 group-hover:rotate-45 rotate-0 bg-zinc-900 z-40 group-hover:bg-transparent rounded-full text-zinc-100 group-hover:text-black transition-all duration-300 ease-in" />
								<span className="z-50 text-sm">Send Message</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default ContactSection;

