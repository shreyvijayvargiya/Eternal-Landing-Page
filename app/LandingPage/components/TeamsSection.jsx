import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { teams } from "../constants";

const TeamsSection = () => {
	return (
		<motion.section
			className="bg-gradient-to-r from-black to-zinc-950 py-12"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className="group flex justify-center hover:gap-0 gap-1 items-center my-4 mx-auto p-2 bg-zinc-950 rounded-xl w-fit z-50">
				{teams.map((team) => {
					return (
						<img
							key={team.name}
							src={team.image}
							alt={team.name}
							className="w-10 h-10 rounded-xl"
						/>
					);
				})}
				<div className="flex items-center justify-center p-2 rounded-xl hover:bg-zinc-900">
					<PlusIcon className="group-hover:rotate-180 rotate-0 transition-all duration-300 ease-in w-4 h-4 text-center text-zinc-400" />
				</div>
			</div>
			<div className="max-w-2xl mx-auto text-center my-12 px-4">
				<p className="text-4xl font-sans text-zinc-300 leading-relaxed">
					Build, deploy, and scale intelligent AI agents that work autonomously.
					Connect them to your systems, train them on your data, and watch them
					automate your workflows.
				</p>
			</div>
		</motion.section>
	);
};

export default TeamsSection;
