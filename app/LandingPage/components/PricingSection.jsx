import { CreditCard, DotIcon } from "lucide-react";
import { motion } from "framer-motion";
import { pricingPlans } from "../constants";

const PricingSection = ({ billingPeriod, setBillingPeriod }) => {
	return (
		<motion.section
			id="pricing"
			className="py-12 my-12 bg-gradient-to-r from-black to-zinc-950 scroll-mt-20"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay: 0.1 }}
		>
			<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-950/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
				<CreditCard className="w-4 h-4" />
				<span className="text-sm font-medium">Pricing</span>
			</div>
			<div className="flex flex-col gap-4 max-w-5xl mx-auto my-8 px-4">
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-full">
						<button
							onClick={() => setBillingPeriod("monthly")}
							className={`px-6 py-2  rounded-full text-sm font-medium transition-all duration-300 ${
								billingPeriod === "monthly"
									? "bg-white text-black"
									: "text-zinc-400 hover:text-zinc-300"
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setBillingPeriod("yearly")}
							className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								billingPeriod === "yearly"
									? "bg-white text-black"
									: "text-zinc-400 hover:text-zinc-300"
							}`}
						>
							Yearly
							<span className="absolute -top-4 -right-4 rotate-12 bg-blue-600 text-zinc-200 text-xs font-semibold px-2 py-0.5 rounded-full">
								20% off
							</span>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{pricingPlans.map((plan, index) => {
						const price =
							billingPeriod === "monthly"
								? plan.monthlyPrice
								: plan.yearlyPrice;
						const period = billingPeriod === "monthly" ? "month" : "year";
						const isCustom = price === "Custom";

						return (
							<div
								key={index}
								className={`group border border-zinc-900 rounded-xl hover:scale-105 scale-100 p-6 hover:border-zinc-800 transition-all duration-300 ${
									plan.popular
										? "border-zinc-500/50 ring-2 ring-zinc-700 shadow-xl shadow-zinc-900 bg-zinc-950/50"
										: "bg-zinc-black/90 hover:ring-2 hover:ring-zinc-700 hover:shadow-xl hover:shadow-zinc-900 hover:bg-zinc-950/50"
								}`}
							>
								{plan.popular && (
									<div className="mb-4">
										<span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
											Most Popular
										</span>
									</div>
								)}
								<div className="mb-4">
									<h4 className="text-xl font-bold text-zinc-300 mb-2">
										{plan.name}
									</h4>
									<div className="flex items-baseline gap-1 mb-2">
										<span className="text-3xl font-bold text-zinc-100">
											{price}
										</span>
										{!isCustom && (
											<span className="text-sm text-zinc-500">/{period}</span>
										)}
									</div>
									<p className="text-sm text-zinc-400">{plan.description}</p>
								</div>
								<ul className="space-y-2 mt-6">
									{plan.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className="flex items-start gap-2 text-sm text-zinc-400"
										>
											<DotIcon className="w-4 h-4 text-zinc-400" />
											<span className="flex-1">{feature}</span>
										</li>
									))}
								</ul>
								<button
									className={`mt-6 w-full py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
										plan.popular
											? "bg-white text-black "
											: "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 group-hover:bg-white group-hover:text-black"
									}`}
								>
									Get Started
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
};

export default PricingSection;
