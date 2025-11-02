import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { clientsData } from "../constants";

const FeaturesSection = () => {
	return (
		<motion.section
			id="features"
			className="py-12 my-12 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<span className="text-sm font-medium">Our Clients</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto my-8 px-4">
				{clientsData.slice(0, 3).map((client, index) => {
					const rotationClass =
						index === 0 ? "-rotate-6" : index === 2 ? "rotate-6" : "rotate-0";
					return (
						<div
							key={index}
							className={`group border border-zinc-900 rounded-xl hover:scale-105 scale-100 p-6 hover:border-zinc-800 transition-all duration-300 bg-zinc-black/90 hover:ring-2 hover:ring-zinc-700 hover:shadow-xl hover:shadow-zinc-900 hover:bg-zinc-950/50 ${rotationClass}`}
						>
							<div className="mb-4 flex items-center gap-3">
								<img
									src={client.avatar}
									alt={client.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<h4 className="text-lg font-bold text-zinc-300">
										{client.name}
									</h4>
									<p className="text-sm text-zinc-400">
										{client.role} • {client.company}
									</p>
								</div>
							</div>
							<p className="text-sm text-zinc-400 leading-relaxed mb-4">
								{client.content}
							</p>
							<div className="flex gap-1">
								{Array.from({ length: client.rating }).map((_, i) => (
									<Star
										key={i}
										size={16}
										className="text-yellow-400 fill-yellow-400"
									/>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</motion.section>
	);
};

export default FeaturesSection;
