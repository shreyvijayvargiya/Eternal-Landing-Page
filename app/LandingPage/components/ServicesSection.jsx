import {
	ArrowRight,
	ArrowUp,
	Globe,
	Lightbulb,
	Option,
	RocketIcon,
	Mic,
} from "lucide-react";
import { motion } from "framer-motion";
import colors from "tailwindcss/colors";
import { icons } from "../constants";

const ServicesSection = () => {
	const agentItems = [
		"Database Agent Created",
		"File Agent Created",
		"Web Agent Created",
		"Email Agent Created",
		"File Agent Created",
		"Web Agent Created",
		"Database Agent Created",
		"File Agent Created",
		"Web Agent Created",
		"Email Agent Created",
		"File Agent Created",
		"Web Agent Created",
	];

	return (
		<motion.section
			id="services"
			className="py-12 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			onMouseOut={{ opacity: 0, y: 50 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="text-center py-2 px-4 mb-4 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<RocketIcon className="w-4 h-4" />
				<span className="text-sm font-medium">Services</span>
			</div>
			<div className="flex flex-col gap-4 max-w-5xl mx-auto text-white">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950">
						<h2 className="font-semibold text-2xl">AI Chatbot</h2>
						<p className="text-zinc-200 max-w-2xl text-sm">
							Our AI chatbot is a powerful tool that can help you automate your
							workflows and improve your productivity.
						</p>
						<form className="w-full my-4  mx-auto px-4 py-2 border border-zinc-800 bg-black/90 z-0 rounded-xl">
							<div className="max-w-screen-xl mx-auto">
								<div className="flex-1 mb-5">
									<textarea
										name="prompt"
										rows={2}
										autoComplete="false"
										placeholder="Type a message..."
										className="flex-1 p-2 w-full bg-transparent text-zinc-400 rounded-xl outline-none"
									/>
								</div>
								<div className="flex justify-between items-center gap-2 pt-4">
									<div className="flex justify-start items-center gap-2 pt-4">
										<button
											className={`border border-zinc-900 flex gap-1 items-center p-2 text-sm rounded-full hover:bg-zinc-50 text-zinc-500 transition-all hover:px-4 duration-100 ease-in`}
										>
											<Globe size={16} color={colors.zinc[400]} />
											<span>Search</span>
										</button>
										<button
											className={`border border-zinc-900 flex gap-1 items-center p-2 text-sm rounded-full hover:bg-zinc-50 text-zinc-500 transition-all hover:px-4 duration-100 ease-in`}
										>
											<Lightbulb size={16} color={colors.zinc[400]} />
											<span>Reason</span>
										</button>
									</div>
									<div className="relative flex gap-2">
										<div className="text-zinc-400 cursor-pointer hover:rotate-180 group-hover:animate-spin transition-all duration-800 ease-in bg-zinc-900 p-2 rounded-xl">
											<Option size={18} />
										</div>
										<button
											type="button"
											className="bg-zinc-800 p-2 text-sm rounded-full hover:bg-zinc-900 text-zinc-400"
										>
											<ArrowUp size={18} />
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950 ">
						<h3>Custom agents</h3>
						<p className="mb-4 text-zinc-400 text-sm">
							Smart custom agents to automate your workflows.
						</p>
						<div className="h-48 overflow-hidden relative">
							<motion.div
								className="flex flex-col gap-2"
								animate={{
									y: [0, -200],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									repeatType: "loop",
									ease: "linear",
								}}
							>
								{agentItems.map((item, index) => {
									return (
										<div
											key={`${item}-${index}`}
											className="flex items-center gap-2 px-2 py-1 rounded-xl border border-zinc-900 hover:bg-zinc-800 bg-gradient-to-r from-black to-zinc-950"
										>
											<img
												className="w-4 h-4 rounded-full"
												alt="Agent"
												src="./user-avatar-1.svg"
											/>
											<p className="text-sm text-zinc-400 p-2">{item}</p>
											<Mic className="w-4 h-4 text-zinc-400 ml-auto" />
										</div>
									);
								})}
							</motion.div>
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-2">
					<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950 overflow-clip">
						<h3>Tools integrations</h3>
						<p className="mb-4 text-zinc-400 text-sm">
							Integrate with your favorite tools to automate your workflows.
						</p>
						<motion.div
							className="flex gap-4 justify-center my-4 w-full overflow-hidden mx-auto p-2"
							initial={{ x: 0 }}
							animate={{ x: -200 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
							key={icons.length}
						>
							{icons.slice(0, 10).map((item, index) => {
								const IconComponent = item;
								return (
									<div key={item.name + "-" + index}>
										<IconComponent size={24} className="text-white" />
									</div>
								);
							})}
						</motion.div>
						<motion.div
							className="flex gap-4 justify-center my-4 w-full overflow-hidden mx-auto p-2"
							initial={{ x: 0 }}
							animate={{ x: -120 }}
							whileHover={{ x: [0, -120] }}
							transition={{
								duration: 10,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
							key={icons.length}
						>
							{icons.slice(0, 10).map((item, index) => {
								const IconComponent = item;
								return (
									<div key={item.name + "-" + index}>
										<IconComponent size={24} className="text-white" />
									</div>
								);
							})}
						</motion.div>
						<motion.div
							className="flex gap-4 justify-center my-4 w-full overflow-hidden mx-auto p-2"
							initial={{ x: 0 }}
							animate={{ x: [0, 50] }}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
							key={icons.length}
						>
							{icons.slice(0, 10).map((item, index) => {
								const IconComponent = item;
								return (
									<div key={item.name + "-" + index}>
										<IconComponent size={24} className="text-white" />
									</div>
								);
							})}
						</motion.div>
					</div>
					<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950 overflow-clip">
						<h3>Database Integrations</h3>
						<p className="mb-4 text-zinc-400 text-sm">
							Integrate with your favorite databases to automate your workflows.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								y: [0, 100],
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 20,
								delay: 0.1,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
							className="w-full h-full relative"
						>
							<img
								src="./db-flow-img.svg"
								alt="Database Flow"
								className="w-full h-40"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default ServicesSection;
