"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import BackgroundDots from "../LandingPage/components/BackgroundDots";
import Navbar from "../LandingPage/components/Navbar";
import MobileMenu from "../LandingPage/components/MobileMenu";
import Footer from "../LandingPage/components/Footer";

// Helper function to convert title to URL slug
const titleToSlug = (title) => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};

// Sample blog data
const blogs = [
	{
		title: "The Future of Artificial Intelligence in Business",
		excerpt:
			"Discover how AI is revolutionizing the way businesses operate, from automation to intelligent decision-making processes that drive unprecedented growth.",
		date: "March 15, 2024",
		readTime: "8 min read",
	},
	{
		title: "Building Scalable Applications with Modern Web Technologies",
		excerpt:
			"Explore the latest frameworks and tools that enable developers to create robust, scalable applications that can handle millions of users effortlessly.",
		date: "March 22, 2024",
		readTime: "12 min read",
	},
	{
		title: "Design Thinking: Creating User-Centered Experiences",
		excerpt:
			"Learn the principles of design thinking and how to apply them to create intuitive, engaging user experiences that truly resonate with your audience.",
		date: "March 28, 2024",
		readTime: "10 min read",
	},
	{
		title: "Machine Learning: From Theory to Production",
		excerpt:
			"A comprehensive guide to deploying machine learning models in production environments, covering best practices, monitoring, and maintaining AI systems at scale.",
		date: "April 5, 2024",
		readTime: "15 min read",
	},
	{
		title: "React Performance Optimization Techniques",
		excerpt:
			"Discover advanced React optimization strategies including code splitting, memoization, and lazy loading to build faster, more efficient applications.",
		date: "April 12, 2024",
		readTime: "11 min read",
	},
	{
		title: "The Psychology of User Interface Design",
		excerpt:
			"Explore how cognitive psychology principles influence interface design and learn to create interfaces that align with human mental models and behavior patterns.",
		date: "April 18, 2024",
		readTime: "9 min read",
	},
];

const BlogsPage = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
							Our Blog
						</h1>
						<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
							Insights, tutorials, and stories about technology, design, and
							innovation
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogs.map((blog, index) => {
							const slug = titleToSlug(blog.title);
							return (
								<Link key={index} href={`/blogs/${slug}`} className="group">
									<article className="bg-gradient-to-r from-black to-zinc-950/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-zinc-800 rounded-2xl p-6 transition-all duration-300 h-full flex flex-col">
										<div className="flex-1">
											<h2 className="text-2xl font-bold hover:text-white mb-3 text-zinc-200 transition-colors">
												{blog.title}
											</h2>
											<p className="text-zinc-400 mb-4 line-clamp-3">
												{blog.excerpt}
											</p>
										</div>

										<div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4" />
												<span>{blog.date}</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4" />
												<span>{blog.readTime}</span>
											</div>
										</div>

										<div className="flex items-center gap-2 text-zinc-200 group-hover:gap-4 transition-all">
											<span className="text-sm font-medium">Read more</span>
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</div>
									</article>
								</Link>
							);
						})}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default BlogsPage;
