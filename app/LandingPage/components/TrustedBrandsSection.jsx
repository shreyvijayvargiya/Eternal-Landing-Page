import { motion } from "framer-motion";
import { companies } from "../constants";

const TrustedBrandsSection = () => {
	return (
		<motion.section
			className="py-12 my-12 bg-black z-50"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="max-w-4xl mx-auto text-center">
				<p className="text-zinc-400 text-sm my-4 max-w-md mx-auto">
					Trusted by top 100 brands
				</p>
				<div className="max-w-sm overflow-clip mx-auto ">
					<motion.div
						className="flex gap-4 justify-center my-4 p-2"
						initial={{ x: 0 }}
						animate={{ x: [0, -100] }}
						transition={{
							duration: 15,
							repeat: Infinity,
							repeatType: "loop",
							ease: "linear",
						}}
						key={companies.length}
					>
						{companies.map((item) => {
							return (
								<div key={item} className="text-xs p-1 text-zinc-400">
									{item}
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default TrustedBrandsSection;
