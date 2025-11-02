import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<motion.section
			id="about"
			className="my-16 z-50 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6 }}
		>
			<div className="text-center cursor-pointer py-2 px-4 mb-4 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<span className="inline-block w-4 h-4 align-middle mr-1">
					<svg
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="32" height="32" rx="7" fill="#FF6600" />
						<path
							d="M10.645 8.5h2.105l3.25 6.195L19.197 8.5h1.977l-4.346 8.452V23.5h-1.782v-6.537L10.645 8.5Z"
							fill="white"
						/>
					</svg>
				</span>
				<span className="text-xs font-medium">Backed by YC</span>
			</div>
			<br />
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-5xl font-extrabold text-zinc-100 mx-auto break-words">
					Ecosystem for
					<span className="ml-4 py-4 px-8 relative group rounded-full bg-gradient-to-r from-blue-900 to-transparent ring-4 ring-blue-900 shadow-zinc-700 shadow-xl">
						AI Agents
					</span>
				</h2>
				<p className="text-zinc-400 my-8 max-w-md mx-auto">
					Create intelligent agents to automate, analyze, and make decisions.
				</p>
				<div className="flex gap-4 justify-center my-10">
					<button className="relative flex gap-1 items-center p-2 rounded-full group bg-white text-black hover:text-white transition-all duration-300 ease-in">
						<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
						<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
						<span className="z-50 text-sm">Get Started</span>
					</button>
					<button
						className={`w-fit py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-zinc-200 bg-zinc-950 text-white hover:text-black hover:shadow-xl`}
					>
						Learn more
					</button>
				</div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
