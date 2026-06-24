import {
	ArrowRight,
	ArrowUp,
	File,
	Globe,
	Heater,
	Lightbulb,
	Option,
	Paperclip,
	PlusIcon,
	CreditCard,
	Mail,
	Linkedin,
	Twitter,
	Instagram,
	MapPin,
	DotIcon,
	RocketIcon,
	Menu,
	X,
} from "lucide-react";
import React, { useState } from "react";
import colors from "tailwindcss/colors";
import {
	Star,
	Heart,
	Sun,
	Moon,
	Cloud,
	Zap,
	Sparkles,
	Flame,
	Mountain,
	Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = ["About", "Features", "Pricing", "Contact", "FAQ", "Services"];

const teams = [
	{
		name: "Josh Tried Coding",
		role: "Developer",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Dagmar Babai",
		role: "Developer",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Theo",
		role: "CEO of t3.gg",
		image: "https://randomuser.me/api/portraits/men/45.jpg",
	},
];

const pricingPlans = [
	{
		name: "Starter",
		monthlyPrice: "$0",
		yearlyPrice: "$0",
		description: "Perfect for individuals and testing",
		features: [
			"Up to 3 AI agents",
			"10,000 API calls/month",
			"Basic integrations",
			"Community support",
			"5GB storage",
		],
		popular: false,
	},
	{
		name: "Professional",
		monthlyPrice: "$49",
		yearlyPrice: "$39",
		description: "Ideal for growing teams",
		features: [
			"Up to 15 AI agents",
			"100,000 API calls/month",
			"Advanced integrations",
			"Priority support",
			"50GB storage",
			"Custom workflows",
			"Analytics dashboard",
		],
		popular: true,
	},
	{
		name: "Enterprise",
		monthlyPrice: "Custom",
		yearlyPrice: "Custom",
		description: "For large organizations",
		features: [
			"Unlimited AI agents",
			"Unlimited API calls",
			"All integrations",
			"Dedicated support",
			"Unlimited storage",
			"Custom integrations",
			"Advanced analytics",
			"SLA guarantee",
			"On-premise options",
		],
		popular: false,
	},
];

const faqs = [
	{
		question: "What are AI agents and how do they work?",
		answer:
			"AI agents are autonomous systems that can perform tasks, make decisions, and interact with other systems without constant human intervention. They use machine learning and natural language processing to understand context and execute actions across your workflows. You can deploy different types of agents for unique tasks, such as customer support, smart data searches, report generation, and process automation.",
	},
	{
		question: "How do I integrate AI agents with my existing systems?",
		answer:
			"Our platform provides seamless integration through APIs, webhooks, and direct connectors. You can connect agents to databases, CRM systems, productivity tools, and custom applications with just a few clicks. We support integration with popular platforms such as Slack, Salesforce, Notion, and Google Workspace, enabling agents to fit naturally into your existing workflows.",
	},
	{
		question: "Can I customize AI agents for my specific use case?",
		answer:
			"Absolutely! Our platform allows you to create custom agents tailored to your business needs. You can train them on your data, define specific behaviors, and configure them to work with your preferred tools and workflows. Advanced customization includes setting agent roles, chaining multiple agents, and adding bespoke logic or business rules for more complex scenarios.",
	},
	{
		question: "What kind of workflows can AI agents automate?",
		answer:
			"AI agents can automate a wide variety of workflows including customer support, data analysis, content generation, email management, scheduling, research tasks, and complex decision-making processes across multiple systems. They are also capable of integrating with APIs and internal software, performing repetitive or logic-driven processes, running daily reports, triaging support tickets, handling basic IT support, and orchestrating actions between SaaS applications.",
	},
	{
		question: "How secure is my data when using AI agents?",
		answer:
			"Security is our top priority. All data is encrypted in transit and at rest, and we follow industry-leading security standards including SOC 2 compliance. You have full control over data access and can configure agents to only access authorized systems. Additionally, you can monitor and audit agent activities, enforce strict permission boundaries, and ensure agents never store or process data outside defined compliance scopes.",
	},
	{
		question: "Do I need technical expertise to build AI agents?",
		answer:
			"No technical expertise required! Our platform provides an intuitive visual interface for building and deploying agents. However, advanced users can leverage our API and scripting capabilities for more complex customizations. Even non-developers can get started quickly using our template library and drag-and-drop builder. For developers, we offer support for custom Python and JavaScript workflows.",
	},
	{
		question: "Can AI agents collaborate with each other?",
		answer:
			"Yes, agents can be set up to communicate and cooperate on tasks. For example, one agent can gather research, another can analyze results, and a third can summarize findings and send a report, creating efficient multi-stage automation pipelines.",
	},
	{
		question: "What is the pricing model for using AI agents?",
		answer:
			"We offer flexible pricing based on usage and the number of agents deployed. There's a free tier for individuals or testing, and scalable business plans for teams of any size. Custom enterprise solutions are available upon request.",
	},
	{
		question: "How do I monitor and control my AI agents?",
		answer:
			"You get real-time dashboards for tracking agent activity, success metrics, and alerts for potential issues. It's easy to pause, restart, or update agents directly from the dashboard, and you can review detailed logs for auditing and compliance.",
	},
	{
		question: "Is support available if I need help building my agents?",
		answer:
			"Yes! Our support team is available via live chat, email, and scheduled onboarding calls. We also offer detailed documentation, tutorial videos, and a user community where you can get help and share best practices.",
	},
];

const icons = [
	Star,
	Heart,
	Sun,
	Moon,
	Cloud,
	Zap,
	Sparkles,
	Flame,
	Mountain,
	Compass,
];

const BackgroundDots = () => {
	return (
		<div
			className="absolute inset-0 w-full h-44 z-0 bg-transparent pointer-events-none"
			style={{ zIndex: 0 }}
		>
			<div className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 opacity-10 z-0"
					style={{
						backgroundImage: `
							linear-gradient(to right, ${colors.zinc[800]} 1px, transparent 1px),
							linear-gradient(to bottom, ${colors.zinc[800]} 1px, transparent 1px)
						`,
						backgroundSize: "2rem 2rem",
					}}
				/>
			</div>
			<div
				className="animate-pulse absolute inset-0 w-full z-0 h-screen"
				style={{
					background: `radial-gradient(circle at top, ${colors.blue[800]}40 0%, transparent 70%)`,
				}}
			/>
		</div>
	);
};

const clientsData = [
	{
		name: "Sarah Johnson",
		role: "Product Designer",
		company: "DesignCo",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
		content:
			"This template has completely transformed our agency's online presence. The animations are smooth and the code is clean and maintainable.",
		rating: 5,
	},
	{
		name: "Michael Chen",
		role: "Startup Founder",
		company: "TechStart",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
		content:
			"The best Next.js template I've used. It's fast, responsive, and the documentation is excellent. Highly recommended!",
		rating: 5,
	},
	{
		name: "Emma Wilson",
		role: "Marketing Director",
		company: "GrowthLabs",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
		content:
			"We've seen a 40% increase in conversion rates since implementing this template. The UI/UX is simply outstanding.",
		rating: 5,
	},
];

const EternalLandingPage = () => {
	const [billingPeriod, setBillingPeriod] = useState("monthly");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80; // Account for fixed navbar
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	const navLinksList = () => {
		return (
			<>
				{navLinks.map((item) => {
					const sectionId = item.toLowerCase();
					return (
						<div
							key={item}
							onClick={() => scrollToSection(sectionId)}
							className="text-sm text-center cursor-pointer rounded-full hover:bg-blue-800 hover:shadow-xl text-white px-2 py-1 transition-all duration-300 ease-in"
						>
							{item}
						</div>
					);
				})}
			</>
		);
	};

	return (
		<div className="relative w-full h-full bg-black">
			<BackgroundDots />

			<div
				className="absolute inset-0 top-0 left-0 right-0 bottom-0 opacity-5 pointer-events-none"
				style={{ zIndex: 0 }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					preserveAspectRatio="none"
					viewBox="0 0 1400 1400"
				>
					<filter id="a">
						<feTurbulence
							type="fractalNoise"
							baseFrequency=".65"
							numOctaves="3"
							stitchTiles="stitch"
						></feTurbulence>
					</filter>
					<rect width="100%" height="100%" filter="url(#a)"></rect>
				</svg>
			</div>
			<navbar className="flex items-center justify-between p-2 max-w-7xl mx-auto z-50 fixed top-0 left-0 right-0">
				<p className="text-white font-semibold flex gap-1 items-center">
					<Heater className="w-4 h-4" />
					Eternal
				</p>
				<div className="hidden md:flex items-center gap-1 border border-zinc-900 rounded-full py-3 px-4 bg-gradient-to-r from-black to-zinc-950/60">
					{navLinksList()}
				</div>
				<div className="hidden md:block">
					<button className="relative flex gap-1 items-center p-2 rounded-full group bg-white hover:text-white transition-all duration-300 ease-in">
						<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
						<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
						<span className="z-50 text-sm">Get Started</span>
					</button>
				</div>
				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden block p-2 rounded-full text-white hover:bg-zinc-800 transition-all duration-300"
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</navbar>
			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black border-b border-zinc-900"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.1 }}
							className="flex flex-col gap-4 p-6 max-w-7xl mx-auto"
						>
							{/* Logo */}
							<div className="flex items-center gap-2 mb-4">
								<Heater className="w-5 h-5 text-white" />
								<span className="text-white font-semibold text-lg">
									Eternal
								</span>
							</div>

							{/* Navigation Links */}
							<div className="flex flex-col gap-2">
								{navLinks.map((link) => {
									const sectionId = link.toLowerCase();
									return (
										<a
											key={link}
											href={`#${sectionId}`}
											onClick={(e) => {
												e.preventDefault();
												setIsMobileMenuOpen(false);
												scrollToSection(sectionId);
											}}
											className="text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-xl hover:bg-zinc-900"
										>
											{link}
										</a>
									);
								})}
							</div>

							{/* Get Started Button */}
							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative flex gap-1 items-center justify-center p-3 rounded-full group bg-white hover:text-white transition-all duration-300 ease-in mt-4"
							>
								<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
								<ArrowRight className="w-5 h-5 p-1 bg-blue-800 z-40 group-hover:bg-transparent rounded-full text-zinc-100 transition-all duration-300 ease-in" />
								<span className="z-50 text-sm">Get Started</span>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<main className="z-50">
				<div className="relative max-w-4xl mx-auto h-32 bg-none">
					{/* Light Bulb Effect using Tailwind shadows only */}
					<div className="relative w-full overflow-hidden">
						{/* Dark background at top */}
						<div className="absolute top-0 left-0 w-full h-5 bg-black z-20" />

						{/* Bright horizontal light source with angled shadows */}
						<div
							className="absolute top-5 left-0 w-full h-[2px] bg-white z-30"
							style={{
								boxShadow: `
									0 0 20px rgba(255,255,255,0.8),
									0 10px 40px rgba(255,255,255,0.4),
									0 30px 80px rgba(255,255,255,0.2),
									0 60px 120px rgba(255,255,255,0.1),
									-200px 200px 300px rgba(255,255,255,0.15),
									200px 200px 300px rgba(255,255,255,0.15),
									-150px 150px 200px rgba(255,255,255,0.2),
									150px 150px 200px rgba(255,255,255,0.2),
									-100px 100px 150px rgba(255,255,255,0.25),
									100px 100px 150px rgba(255,255,255,0.25),
									-50px 50px 100px rgba(255,255,255,0.3),
									50px 50px 100px rgba(255,255,255,0.3)
								`,
							}}
						/>
					</div>
				</div>
				<section id="about" className="my-16 z-50 scroll-mt-20">
					<div className="text-center cursor-pointer py-2 px-4 mb-4 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						{/* Y Combinator Logo SVG */}
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
						<span className="text-sm font-medium">Backed by YC</span>
					</div>
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-7xl font-extrabold text-zinc-100 mx-auto break-words">
							Ecosystem for
							<span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-zinc-950">
								AI Agents
							</span>
						</h2>
						<p className="text-zinc-400 my-4 max-w-md mx-auto">
							Create intelligent agents to automate, analyze, and make
							decisions.
						</p>
						<div className="flex gap-4 justify-center my-10">
							<button className="relative flex gap-1 items-center p-2 rounded-full group bg-white hover:text-white transition-all duration-300 ease-in">
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
				</section>
				<section className="py-12 my-12 bg-black z-50">
					<div className="max-w-4xl mx-auto text-center">
						<p className="text-zinc-400 text-sm my-4 max-w-md mx-auto">
							Trusted by top 100 brands
						</p>
						<motion.div
							className="flex gap-4 justify-center my-4 max-w-sm mx-auto p-2"
							initial={{ x: 0 }}
							animate={{ x: -100 }}
							transition={{
								duration: 15,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
						>
							{icons.map((item) => {
								const IconComponent = item;
								return (
									<div key={item.name}>
										<IconComponent size={24} className="text-white" />
									</div>
								);
							})}
						</motion.div>
					</div>
				</section>
				<section className="bg-gradient-to-r from-black to-zinc-950/60 py-12">
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
							Build, deploy, and scale intelligent AI agents that work
							autonomously. Connect them to your systems, train them on your
							data, and watch them automate your workflows.
						</p>
					</div>
				</section>
				<section id="services" className="py-12 scroll-mt-20">
					<div className="text-center py-2 px-4 mb-4 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						<RocketIcon className="w-4 h-4" />
						<span className="text-sm font-medium">Services</span>
					</div>
					<div className="flex flex-col gap-4 max-w-4xl mx-auto text-white">
						<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950/60">
							<h2 className="font-semibold text-2xl">AI Chatbot</h2>
							<p className="text-zinc-200 max-w-2xl text-sm">
								Our AI chatbot is a powerful tool that can help you automate
								your workflows and improve your productivity.
							</p>
							<div className="my-4">
								<form className="w-full mx-auto px-4 py-2 border border-zinc-800 bg-black/90 z-0 rounded-xl">
									<div className="max-w-screen-xl mx-auto">
										<div className="flex-1 mb-5">
											<textarea
												name="prompt"
												rows={4}
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
												<button
													className={`border border-zinc-900 flex gap-1 items-center p-2 text-sm rounded-full hover:bg-zinc-50 text-zinc-500 transition-all hover:px-4 duration-100 ease-in`}
												>
													<File size={16} color={colors.zinc[500]} />
													<span>Add image</span>
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
						</div>
						<div className="grid grid-cols-3 gap-2">
							<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950/60 ">
								<h3>Custom agents</h3>
								<div className="flex flex-col gap-2">
									{[
										"Database Agent Created",
										"File Agent Created",
										"Web Agent Created",
										"Email Agent Created",
									].map((item, index) => {
										return (
											<div key={item}>
												<p className="text-sm text-zinc-400 p-2 border border-zinc-900 rounded-xl">
													{index + 1}. {item}
												</p>
											</div>
										);
									})}
								</div>
							</div>
							<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950/60 ">
								<h3>Tools integrations</h3>
							</div>
							<div className="p-4 rounded-xl border border-zinc-900 bg-gradient-to-r from-black to-zinc-950/60 ">
								<h3>Database Integrations</h3>
							</div>
						</div>
					</div>
				</section>
				<section id="features" className="py-12 my-12 scroll-mt-20">
					<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						<span className="text-sm font-medium">Our Clients</span>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto my-8 px-4">
						{clientsData.slice(0, 3).map((client, index) => {
							const rotationClass =
								index === 0
									? "-rotate-6"
									: index === 2
										? "rotate-6"
										: "rotate-0";
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
				</section>
				<section className="py-12 max-w-5xl mx-auto">
					<h4 className="text-4xl text-white font-medium">Results</h4>
					<p className="text-zinc-400 max-w-xs">
						We have helped businesses automate their workflows and improve their
						productivity.
					</p>
					<div className="grid md:grid-cols-4 grid-cols-1 gap-5 text-zinc-100 my-4">
						{[
							{ number: 100, label: "Agents" },
							{ number: 200, label: "Clients" },
							{ number: 300, label: "Projects" },
							{ number: 400, label: "Integrations" },
						].map((item, index) => {
							return (
								<div
									key={item.number}
									className="p-4 h-40 w-full rounded-xl border border-zinc-900 flex flex-col items-center justify-center bg-gradient-to-r from-black to-zinc-950/60 shadow-xl shadow-zinc-950 ring-2 ring-zinc-950/60 hover:shadow-none transition-all duration-300 ease-in-out"
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
											className="text-5xl font-bold text-zinc-100 mb-2"
										>
											{item.number}+
										</motion.div>
										<p className="text-xs text-zinc-400 uppercase tracking-wider">
											{item.label}
										</p>
									</motion.div>
								</div>
							);
						})}
					</div>
				</section>
				<section id="faq" className="py-12 my-12 scroll-mt-20">
					<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						<Paperclip className="w-4 h-4" />
						<span className="text-sm font-medium">FAQs</span>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-start max-w-5xl mx-auto">
						<div className="text-zinc-100 flex-1">
							<p className="text-4xl">FAQs</p>
							<p className="max-w-xs">
								Find all your doubts and questions in one place. Still couldn't
								find what you're looking for?
							</p>
							<button
								className={`mt-6 w-fit py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 bg-zinc-200 hover:bg-white hover:shadow-xl text-black`}
							>
								Contact us
							</button>
						</div>
						<div className="flex flex-col gap-1 bg-gradient-to-r from-black to-zinc-950/60 p-2 rounded-xl border border-zinc-900 ">
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
				</section>
				<section
					id="pricing"
					className="py-12 my-12 bg-gradient-to-r from-black to-zinc-950/60 scroll-mt-20"
				>
					<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						<CreditCard className="w-4 h-4" />
						<span className="text-sm font-medium">Pricing</span>
					</div>
					<div className="flex flex-col gap-4 max-w-5xl mx-auto my-8 px-4">
						{/* Billing Period Tabs */}
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
													<span className="text-sm text-zinc-500">
														/{period}
													</span>
												)}
											</div>
											<p className="text-sm text-zinc-400">
												{plan.description}
											</p>
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
				</section>
				<section id="contact" className="py-12 my-12 scroll-mt-20">
					<div className="text-center my-4 py-1 px-2 justify-center rounded-full border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900/90 text-zinc-400 w-fit mx-auto flex gap-1 items-center">
						<Mail className="w-4 h-4" />
						<span className="text-sm font-medium">Contact Us</span>
					</div>
					<div className="max-w-5xl mx-auto my-8 px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* First Column - 3 boxes */}
							<div className="flex flex-col gap-4">
								{/* Direct Email Box */}
								<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950/60 transition-all duration-300 bg-zinc-black/90">
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

								{/* Social Links Box */}
								<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950/60 transition-all duration-300 bg-zinc-black/90">
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

								{/* Office Location Box */}
								<div className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 bg-gradient-to-r from-black to-zinc-950/60 transition-all duration-300 bg-zinc-black/90">
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

							{/* Second Column - Contact Form */}
							<div className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950/60 shadow-xl shadow-zinc-950 ring-4 ring-zinc-950/60 hover:scale-105 scale-100 transition-all duration-300 ease-in-out">
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
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-zinc-400 mb-2"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={5}
											required
											className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:ring-1 focus:ring-zinc-500/50 transition-all duration-300 resize-none"
											placeholder="Your message here..."
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
				</section>
			</main>
			<footer className="relative w-full bg-gradient-to-r from-black to-zinc-950/60 z-10">
				<div className="w-full mx-auto p-10 bg-gradient-to-r from-black to-zinc-950/60 grid md:grid-cols-2 grid-cols-1 items-start justify-center transition-all duration-300 ease-in-out">
					{/* Logo and Brand Name */}
					<div className="max-w-xl mx-auto ">
						<div className="flex items-center gap-2 mb-2">
							<Heater className="w-5 h-5 text-white" />
							<span className="text-white font-semibold text-lg">Eternal</span>
						</div>
						<p className="text-zinc-500 text-xs">
							© {new Date().getFullYear()} Eternal. All rights reserved.
						</p>
					</div>

					{/* Three Column Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start gap-8 mb-8">
						{/* Navigation Links */}
						<div>
							<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
								Navigation
							</h5>
							<ul className="space-y-3">
								{navLinks.map((link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase()}`}
											className="text-zinc-400 hover:text-white transition-colors text-sm"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Legal Links */}
						<div>
							<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
								Legal
							</h5>
							<ul className="space-y-3">
								<li>
									<a
										href="#privacy"
										className="text-zinc-400 hover:text-white transition-colors text-sm"
									>
										Privacy Policy
									</a>
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
									<a
										href="#cookie"
										className="text-zinc-400 hover:text-white transition-colors text-sm"
									>
										Cookie Policy
									</a>
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

						{/* Social Links */}
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
				{/* Copyright */}
				<div className="relative h-fit pt-10 text-center rounded-[4em]">
					<p className="md:text-[12em] text-7xl shadow-xlfont-bold font-mono uppercase text-transparent bg-clip-text bg-gradient-to-tr from-black to-white">
						Eternal
					</p>
				</div>
			</footer>
		</div>
	);
};

export default EternalLandingPage;
