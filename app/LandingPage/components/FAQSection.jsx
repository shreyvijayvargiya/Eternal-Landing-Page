import { Paperclip, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "../constants";

const FAQSection = () => {
	return (
		<motion.section
			id="faq"
			className="py-12 my-12 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<Paperclip className="w-4 h-4" />
				<span className="text-sm font-medium">FAQs</span>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-start max-w-5xl mx-auto">
				<div className="text-zinc-100 flex-1">
					<p className="text-4xl">FAQs</p>
					<p className="max-w-xs">
						Find all your doubts and questions in one place. Still couldn't find
						what you're looking for?
					</p>
					<button
						className={`mt-6 w-fit py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 bg-zinc-200 hover:bg-white hover:shadow-xl text-black`}
					>
						Contact us
					</button>
				</div>
				<div className="flex flex-col gap-1 bg-gradient-to-r from-black to-zinc-950 p-2 rounded-xl border border-zinc-900 ">
					{faqs.map((faq, index) => (
						<details
							key={index}
							className="w-full group border border-zinc-900 rounded-xl p-2 hover:border-zinc-800 transition-all duration-300"
						>
							<summary className="flex items-center justify-between cursor-pointer list-none transition-all duration-300 ease-in-out">
								<h4 className="text-sm font-semibold text-zinc-300 pr-4">
									{faq.question}
								</h4>
								<PlusIcon
									size={20}
									className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 ease-in-out flex-shrink-0"
								/>
							</summary>
							<p className="max-w-xl mt-4 text-zinc-400 text-sm leading-relaxed">
								{faq.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default FAQSection;
