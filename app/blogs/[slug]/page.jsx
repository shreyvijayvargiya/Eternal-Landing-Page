"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import BackgroundDots from "../../LandingPage/components/BackgroundDots";
import Navbar from "../../LandingPage/components/Navbar";
import MobileMenu from "../../LandingPage/components/MobileMenu";
import Footer from "../../LandingPage/components/Footer";

// Blog content data - mapping titles to full content
const blogContent = {
	"the-future-of-artificial-intelligence-in-business": {
		title: "The Future of Artificial Intelligence in Business",
		date: "March 15, 2024",
		readTime: "8 min read",
		author: "Sarah Johnson",
		content: [
			{
				type: "paragraph",
				text: "Artificial Intelligence has transitioned from a futuristic concept to a practical tool that's reshaping the business landscape. Companies across industries are discovering innovative ways to leverage AI to drive efficiency, enhance customer experiences, and unlock new opportunities.",
			},
			{
				type: "heading",
				text: "Transforming Customer Interactions",
			},
			{
				type: "paragraph",
				text: "One of the most visible impacts of AI in business is in customer service. AI-powered chatbots and virtual assistants can handle routine inquiries 24/7, freeing human agents to focus on complex issues that require empathy and nuanced understanding. These systems learn from every interaction, continuously improving their ability to resolve customer concerns.",
			},
			{
				type: "paragraph",
				text: "Advanced natural language processing enables AI to understand context, detect sentiment, and provide personalized responses. This technology doesn't just answer questions—it anticipates customer needs and proactively offers solutions.",
			},
			{
				type: "heading",
				text: "Data-Driven Decision Making",
			},
			{
				type: "paragraph",
				text: "AI excels at analyzing vast amounts of data to identify patterns and insights that would be impossible for humans to detect manually. Machine learning algorithms can process millions of data points in seconds, uncovering trends, predicting outcomes, and recommending actions.",
			},
			{
				type: "paragraph",
				text: "Business leaders are using AI-powered analytics to make more informed decisions about everything from inventory management to marketing strategies. Predictive analytics help companies anticipate market changes, optimize pricing, and identify opportunities before competitors.",
			},
			{
				type: "heading",
				text: "Automation and Efficiency",
			},
			{
				type: "paragraph",
				text: "Repetitive tasks that once consumed hours of employee time can now be automated with AI. From document processing to data entry, AI systems handle routine work with speed and accuracy. This automation allows employees to focus on creative problem-solving, strategic planning, and relationship building.",
			},
			{
				type: "paragraph",
				text: "The result is not just cost savings, but also improved quality. AI systems reduce human error, ensure consistency, and can operate around the clock without fatigue. This creates opportunities for businesses to scale operations without proportionally increasing labor costs.",
			},
			{
				type: "heading",
				text: "Looking Ahead",
			},
			{
				type: "paragraph",
				text: "As AI technology continues to evolve, we can expect even more sophisticated applications. The integration of AI with other emerging technologies like IoT and blockchain will create new possibilities. Companies that embrace AI today will be best positioned to thrive in an increasingly automated future.",
			},
		],
	},
	"building-scalable-applications-with-modern-web-technologies": {
		title: "Building Scalable Applications with Modern Web Technologies",
		date: "March 22, 2024",
		readTime: "12 min read",
		author: "Michael Chen",
		content: [
			{
				type: "paragraph",
				text: "In today's digital landscape, building applications that can scale is no longer optional—it's essential. As user bases grow and traffic patterns become unpredictable, developers need architectures and tools that can handle everything from startup launches to viral moments.",
			},
			{
				type: "heading",
				text: "The Foundation: Modern Frameworks",
			},
			{
				type: "paragraph",
				text: "Frameworks like Next.js, React, and Vue have revolutionized web development by providing component-based architectures that promote code reusability and maintainability. These frameworks offer server-side rendering, static site generation, and incremental static regeneration—features that enable both performance and scalability.",
			},
			{
				type: "paragraph",
				text: "Server-side rendering ensures that users receive fully rendered pages quickly, while static generation allows for edge-cached content that serves millions of users with minimal server load. The combination creates applications that feel instant while handling massive traffic spikes gracefully.",
			},
			{
				type: "heading",
				text: "Database Considerations",
			},
			{
				type: "paragraph",
				text: "Choosing the right database architecture is crucial for scalability. Modern applications often combine multiple database types: relational databases for transactional data, NoSQL databases for flexible schemas, and in-memory databases for caching and real-time features.",
			},
			{
				type: "paragraph",
				text: "Horizontal scaling through database sharding and replication ensures that as data grows, performance remains consistent. Read replicas distribute query load, while connection pooling prevents resource exhaustion under high concurrency.",
			},
			{
				type: "heading",
				text: "Cloud Infrastructure",
			},
			{
				type: "paragraph",
				text: "Cloud platforms provide auto-scaling capabilities that automatically adjust resources based on demand. Containerization with Docker and orchestration with Kubernetes enable applications to scale individual components independently based on their specific resource needs.",
			},
			{
				type: "paragraph",
				text: "CDN integration ensures that static assets are served from locations closest to users, reducing latency globally. Load balancers distribute incoming requests across multiple server instances, preventing any single point of failure.",
			},
			{
				type: "heading",
				text: "Monitoring and Optimization",
			},
			{
				type: "paragraph",
				text: "Scalability isn't just about handling more load—it's about doing so efficiently. Performance monitoring tools help identify bottlenecks before they become problems. Regular profiling and optimization ensure that applications make the most of available resources.",
			},
			{
				type: "paragraph",
				text: "The key to scalable applications is building with growth in mind from day one. By leveraging modern technologies and best practices, developers can create systems that grow with their users while maintaining excellent performance and user experience.",
			},
		],
	},
	"design-thinking-creating-user-centered-experiences": {
		title: "Design Thinking: Creating User-Centered Experiences",
		date: "March 28, 2024",
		readTime: "10 min read",
		author: "Emma Wilson",
		content: [
			{
				type: "paragraph",
				text: "Design thinking is more than a methodology—it's a mindset that puts users at the center of every decision. By understanding people's needs, desires, and pain points, designers and developers can create experiences that feel intuitive, delightful, and genuinely useful.",
			},
			{
				type: "heading",
				text: "The Five Stages of Design Thinking",
			},
			{
				type: "paragraph",
				text: "Design thinking follows a structured yet flexible process: empathize, define, ideate, prototype, and test. Each stage builds upon the previous one, creating a cycle of learning and refinement that ensures solutions truly address user needs.",
			},
			{
				type: "paragraph",
				text: "Empathy is the foundation. Spending time with users, observing their behaviors, and understanding their emotional responses reveals insights that surveys and analytics alone cannot provide. This human-centered approach uncovers not just what users do, but why they do it.",
			},
			{
				type: "heading",
				text: "Defining the Problem",
			},
			{
				type: "paragraph",
				text: "The define stage synthesizes research into actionable problem statements. Rather than jumping to solutions, teams spend time understanding the root causes of user frustrations. This often reveals that the initial problem statement was addressing symptoms rather than underlying issues.",
			},
			{
				type: "paragraph",
				text: "Clear problem definition enables focused ideation. Teams can explore a wide range of solutions without losing sight of what they're actually trying to solve. This clarity prevents the common pitfall of building features that users don't actually want or need.",
			},
			{
				type: "heading",
				text: "Rapid Prototyping and Testing",
			},
			{
				type: "paragraph",
				text: "Prototyping allows teams to make ideas tangible quickly and inexpensively. Low-fidelity prototypes help test concepts before investing in full development. User testing provides immediate feedback, revealing what works and what doesn't in real-world usage.",
			},
			{
				type: "paragraph",
				text: "The iterative nature of prototyping and testing means that designs improve with each cycle. Failures become learning opportunities, and successful elements are refined and expanded. This approach reduces risk and ensures that final products have been validated through real user interaction.",
			},
			{
				type: "heading",
				text: "Creating Emotional Connections",
			},
			{
				type: "paragraph",
				text: "Great design goes beyond functionality to create emotional connections. Thoughtful micro-interactions, delightful animations, and carefully crafted copy all contribute to experiences that feel personal and engaging. These details transform ordinary interactions into memorable moments.",
			},
			{
				type: "paragraph",
				text: "When users feel understood and valued, they develop loyalty and become advocates. Design thinking ensures that every element of an experience—from the first impression to ongoing interactions—reinforces positive emotional responses.",
			},
		],
	},
	"machine-learning-from-theory-to-production": {
		title: "Machine Learning: From Theory to Production",
		date: "April 5, 2024",
		readTime: "15 min read",
		author: "Sarah Johnson",
		content: [
			{
				type: "paragraph",
				text: "The journey from training a machine learning model to deploying it in production is filled with challenges that many developers underestimate. While building a model that performs well on test data is an achievement, creating a system that reliably serves predictions to real users requires a different set of skills and considerations.",
			},
			{
				type: "heading",
				text: "The Model Development Phase",
			},
			{
				type: "paragraph",
				text: "Developing a machine learning model involves more than just selecting an algorithm. It requires careful data preparation, feature engineering, and iterative experimentation. Version control for both code and data becomes crucial as you iterate through different approaches. Tracking experiments with tools like MLflow or Weights & Biases helps maintain reproducibility and allows you to compare model performance across iterations.",
			},
			{
				type: "paragraph",
				text: "Cross-validation ensures your model's performance metrics are reliable, while hyperparameter tuning helps optimize performance. However, beware of overfitting—models that perform exceptionally on training data often fail in production when faced with real-world distributions.",
			},
			{
				type: "heading",
				text: "Preparing for Production",
			},
			{
				type: "paragraph",
				text: "Production ML systems require robust error handling, input validation, and graceful degradation. Your model must handle edge cases, missing data, and unexpected inputs without crashing. Implementing data validation pipelines ensures that inputs match the distribution your model was trained on, while monitoring systems detect distribution shifts that could degrade performance.",
			},
			{
				type: "paragraph",
				text: "Model serialization is another critical consideration. Formats like ONNX, TensorFlow Serving, or PyTorch's TorchScript enable efficient model deployment across different environments. Consider latency requirements, throughput needs, and resource constraints when choosing your serving architecture.",
			},
			{
				type: "heading",
				text: "Deployment Strategies",
			},
			{
				type: "paragraph",
				text: "Different deployment strategies suit different use cases. Batch inference works well for non-real-time applications, while online inference serves predictions on-demand. Canary deployments allow you to gradually roll out new models, comparing performance between versions before fully committing. A/B testing frameworks enable statistical validation of model improvements.",
			},
			{
				type: "paragraph",
				text: "Containerization with Docker ensures consistent environments across development and production. Kubernetes orchestration enables automatic scaling based on demand, ensuring your ML service can handle traffic spikes. API gateways provide rate limiting, authentication, and request routing for your model endpoints.",
			},
			{
				type: "heading",
				text: "Monitoring and Maintenance",
			},
			{
				type: "paragraph",
				text: "Production ML systems require continuous monitoring. Track prediction latency, error rates, and resource utilization. Monitor for data drift—when production data distributions differ from training data. Concept drift occurs when the relationship between inputs and outputs changes over time, requiring model retraining.",
			},
			{
				type: "paragraph",
				text: "Establish feedback loops to collect production performance data. This data informs future model improvements and helps identify when retraining is necessary. Automated retraining pipelines can keep models fresh as new data becomes available, ensuring they adapt to changing patterns in production.",
			},
		],
	},
	"react-performance-optimization-techniques": {
		title: "React Performance Optimization Techniques",
		date: "April 12, 2024",
		readTime: "11 min read",
		author: "Michael Chen",
		content: [
			{
				type: "paragraph",
				text: "React's component-based architecture makes building user interfaces intuitive, but as applications grow, performance can become a concern. Understanding React's rendering mechanism and applying the right optimization techniques can dramatically improve your app's responsiveness and user experience.",
			},
			{
				type: "heading",
				text: "Understanding React Rendering",
			},
			{
				type: "paragraph",
				text: "React re-renders components when state or props change. While this ensures the UI stays in sync with data, unnecessary re-renders waste computational resources. The React DevTools Profiler helps identify components that render too frequently or take too long to render. Understanding when and why components render is the first step toward optimization.",
			},
			{
				type: "paragraph",
				text: "React's reconciliation algorithm efficiently updates the DOM by comparing the previous virtual DOM with the new one. However, complex component trees with frequent state updates can still cause performance bottlenecks. Strategic use of React's optimization features can minimize unnecessary work.",
			},
			{
				type: "heading",
				text: "Memoization Strategies",
			},
			{
				type: "paragraph",
				text: "React.memo prevents functional components from re-rendering when their props haven't changed. UseMemo caches expensive calculations, recomputing only when dependencies change. UseCallback memoizes function references, preventing child components from re-rendering unnecessarily. These hooks are powerful but should be used judiciously—over-memoization can actually hurt performance.",
			},
			{
				type: "paragraph",
				text: "The key is identifying which components benefit from memoization. Components that render frequently, receive stable props, or perform expensive computations are good candidates. Start by measuring, then optimize based on actual performance data rather than assumptions.",
			},
			{
				type: "heading",
				text: "Code Splitting and Lazy Loading",
			},
			{
				type: "paragraph",
				text: "Code splitting reduces initial bundle size by loading code only when needed. React.lazy enables dynamic imports for components, while Suspense provides fallback UI during loading. Route-based code splitting ensures users only download code for routes they visit, dramatically improving initial load times.",
			},
			{
				type: "paragraph",
				text: "Webpack's automatic code splitting or Next.js's built-in support makes implementation straightforward. Lazy load components that aren't immediately visible, such as modals, complex charts, or below-the-fold content. This technique is especially valuable for large applications with many routes or features.",
			},
			{
				type: "heading",
				text: "Optimizing Lists and Animations",
			},
			{
				type: "paragraph",
				text: "Rendering long lists efficiently requires virtualization. Libraries like react-window or react-virtualized render only visible items, maintaining smooth scrolling performance even with thousands of items. Always provide stable keys for list items to help React's reconciliation algorithm.",
			},
			{
				type: "paragraph",
				text: "For animations, use CSS transforms and opacity instead of properties that trigger layout recalculation. React Spring and Framer Motion leverage the GPU for hardware-accelerated animations. Consider moving heavy animations off the main thread using Web Workers or the Web Animations API.",
			},
		],
	},
	"the-psychology-of-user-interface-design": {
		title: "The Psychology of User Interface Design",
		date: "April 18, 2024",
		readTime: "9 min read",
		author: "Emma Wilson",
		content: [
			{
				type: "paragraph",
				text: "Great interfaces don't just look good—they align with how human minds actually work. Understanding cognitive psychology principles helps designers create interfaces that feel intuitive, reduce cognitive load, and guide users naturally toward their goals. When interfaces match mental models, users don't need to learn how to use them—they just know.",
			},
			{
				type: "heading",
				text: "Cognitive Load Theory",
			},
			{
				type: "paragraph",
				text: "Human working memory can only hold about seven items at once. Interfaces that present too much information simultaneously overwhelm users. Chunking related information, progressive disclosure, and clear visual hierarchy help users process information efficiently. Reduce extraneous cognitive load by eliminating unnecessary elements and focusing attention on what matters most.",
			},
			{
				type: "paragraph",
				text: "Intrinsic cognitive load comes from the complexity of the task itself. Good design can't eliminate this, but it can manage it through clear organization and familiar patterns. Effective interfaces minimize extraneous load—mental effort spent on understanding the interface itself rather than accomplishing the task.",
			},
			{
				type: "heading",
				text: "Mental Models and Expectations",
			},
			{
				type: "paragraph",
				text: "Users bring mental models from previous experiences with similar interfaces. Placing navigation menus where users expect them, using familiar icons, and following platform conventions leverage these existing mental models. When interfaces violate expectations, users must create new mental models, increasing cognitive effort.",
			},
			{
				type: "paragraph",
				text: "Consistency reinforces mental models. When similar actions produce similar results and visual elements maintain consistent meanings, users build reliable expectations. This consistency creates predictability, reducing uncertainty and making interfaces feel more trustworthy and easier to use.",
			},
			{
				type: "heading",
				text: "Visual Perception Principles",
			},
			{
				type: "paragraph",
				text: "Gestalt principles explain how humans perceive visual elements as organized patterns rather than individual components. Proximity groups related elements, similarity creates visual relationships, and closure allows users to perceive complete shapes from partial information. Applying these principles creates visual hierarchy and guides attention naturally.",
			},
			{
				type: "paragraph",
				text: "Color psychology influences emotional responses and directs attention. Warm colors like red and orange signal urgency or importance, while cool colors like blue convey calm and trust. However, color alone should never be the only indicator—combine it with other cues for accessibility and universal understanding.",
			},
			{
				type: "heading",
				text: "Feedback and Affordances",
			},
			{
				type: "paragraph",
				text: "Users need immediate feedback confirming their actions. Visual feedback—button states, loading indicators, success messages—reduces uncertainty. Haptic feedback in mobile interfaces provides physical confirmation. Clear affordances communicate what actions are possible—buttons look clickable, sliders indicate draggability.",
			},
			{
				type: "paragraph",
				text: "Error states should explain what went wrong and how to fix it, rather than just displaying error codes. Prevention is better than correction—disable invalid actions, validate inputs before submission, and provide clear constraints. When errors do occur, maintain context so users don't lose their progress.",
			},
		],
	},
};

const BlogPostPage = () => {
	const params = useParams();
	const slug = params?.slug;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		if (slug) {
			const blogData = blogContent[slug];
			if (blogData) {
				setBlog(blogData);
			}
		}
	}, [slug]);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	if (!blog) {
		return (
			<div className="relative w-full h-full bg-black min-h-screen">
				<BackgroundDots />
				<Navbar
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
					scrollToSection={scrollToSection}
				/>
				<main className="relative z-50 pt-24 pb-20">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="text-4xl font-bold text-white mb-4">
							Blog Post Not Found
						</h1>
						<Link
							href="/blogs"
							className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to Blogs
						</Link>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="relative w-full h-full bg-black min-h-screen">
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

			<Navbar
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				scrollToSection={scrollToSection}
			/>

			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				scrollToSection={scrollToSection}
			/>

			<main className="relative z-50 pt-24 pb-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<Link
						href="/blogs"
						className="text-sm inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Back to Blogs</span>
					</Link>

					<article className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12">
						<header className="mb-8">
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
								{blog.title}
							</h1>

							<div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm">
								<div className="flex items-center gap-2">
									<User className="w-4 h-4" />
									<span>{blog.author}</span>
								</div>
								<div className="flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									<span>{blog.date}</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="w-4 h-4" />
									<span>{blog.readTime}</span>
								</div>
							</div>
						</header>

						<div className="prose prose-invert max-w-none">
							{blog.content.map((section, index) => {
								if (section.type === "heading") {
									return (
										<h2
											key={index}
											className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4"
										>
											{section.text}
										</h2>
									);
								}
								return (
									<p
										key={index}
										className="text-zinc-300 leading-7 mb-6 text-lg"
									>
										{section.text}
									</p>
								);
							})}
						</div>
					</article>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default BlogPostPage;
