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
	Apple,
} from "lucide-react";
import { BsGoogle } from "react-icons/bs";

export const navLinks = [
	"About",
	"Features",
	"Services",
	"Results",
	"Pricing",
	"Contact",
	"FAQ",
];

export const teams = [
	{
		name: "Josh Tried Coding",
		role: "Developer",
		image: "/user-avatar-1.svg",
	},
	{
		name: "Dagmar Babai",
		role: "Developer",
		image: "/user-avatar-3.svg",
	},
	{
		name: "Theo",
		role: "CEO of t3.gg",
		image: "/user-avatar-2.svg",
	},
];

export const pricingPlans = [
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

export const faqs = [
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

export const clientsData = [
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

export const icons = [
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
	Sun,
	Moon,
	Cloud,
	Zap,
	Star,
	Heart,
	Sun,
	Moon,
	Flame,
	Mountain,
	Compass,
	Sun,
	Moon,
	Cloud,
];

export const companies = [
	"Google",
	"Apple",
	"Microsoft",
	"Amazon",
	"Facebook",
	"Twitter",
	"Instagram",
	"LinkedIn",
	"YouTube",
	"TikTok",
	"Snapchat",
	"Pinterest",
	"Reddit",
	"Discord",
	"Telegram",
	"WhatsApp",
	"Skype",
	"Zoom",
	"Slack",
	"Dropbox",
	"Evernote",
	"Trello",
	"Asana",
	"Notion",
	"Todoist",
	"Toodledo",
	"Wunderlist",
	"Todoist",
	"Toodledo",
	"Wunderlist",
	"Todoist",
	"Toodledo",
	"Wunderlist",
	"Todoist",
	"Toodledo",
	"Wunderlist",
];
