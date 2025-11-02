import { motion } from "framer-motion";

const ResultsSection = () => {
	const results = [
		{ number: "75k", label: "Agents" },
		{ number: "180k", label: "Clients" },
		{ number: "90k", label: "Projects" },
		{ number: "350", label: "Integrations" },
	];

	const bgColors = [
		"bg-pink-500",
		"bg-yellow-500",
		"bg-orange-500",
		"bg-blue-500",
	];

	return (
		<motion.section
			className="py-12 max-w-5xl mx-auto"
			id="results"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<h4 className="text-4xl text-white font-medium">Results</h4>
			<p className="text-zinc-400 max-w-xs">
				We have helped businesses automate their workflows and improve their
				productivity.
			</p>
			<div className="grid md:grid-cols-4 grid-cols-1 gap-5 text-zinc-100 my-4">
				{results.map((item, index) => {
					return (
						<div
							key={item.number}
							className="p-4 h-40 w-full rounded-xl border border-zinc-900 flex flex-col items-center justify-center bg-gradient-to-r from-black to-zinc-950 shadow-xl shadow-zinc-950 ring-2 ring-zinc-950 hover:shadow-none transition-all duration-300 ease-in-out"
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="text-center"
							>
								<motion.div
									initial={{ scale: 0.5 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1 + 0.2,
										type: "spring",
									}}
									className="text-4xl font-bold text-zinc-100 mb-2"
								>
									{item.number}+
								</motion.div>
								<p
									className={`text-xs p-2 ${bgColors[index]} rounded-full w-fit text-white tracking-wider`}
								>
									{item.label}
								</p>
							</motion.div>
						</div>
					);
				})}
			</div>
		</motion.section>
	);
};

export default ResultsSection;
