"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import PageLayout from "./LandingPage/components/PageLayout";

const NotFoundPage = () => {
	return (
		<PageLayout>
			<div className="min-h-[80vh] flex items-center justify-center px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-2xl mx-auto"
				>
					<motion.div
						initial={{ scale: 0.5 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: "spring" }}
						className="mb-8"
					>
						<h1 className="text-9xl font-bold text-white mb-4">404</h1>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-xl font-bold text-zinc-100 mb-4"
					>
						Page Not Found
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Link
							href="/"
							className="relative flex gap-1 items-center p-2 rounded-full group bg-white text-black hover:text-white transition-all duration-300 ease-in px-6"
						>
							<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-blue-800 rounded-full h-full" />
							<Home className="w-5 h-5 z-40" />
							<span className="z-50 text-sm">Go Home</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</PageLayout>
	);
};

export default NotFoundPage;
