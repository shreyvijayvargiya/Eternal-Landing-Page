"use client";

import { useState } from "react";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
} from "framer-motion";
import {
	X,
	Heater,
	Mail,
	Lock,
	Sparkles,
	Heart,
	Clock,
	Moon,
	Star,
} from "lucide-react";

// Icon Card Stack Component with motion animations
const IconCardStack = () => {
	const icons = [
		{ Icon: Heater, color: "text-blue-400" },
		{ Icon: Sparkles, color: "text-purple-400" },
		{ Icon: Star, color: "text-yellow-400" },
		{ Icon: Heart, color: "text-pink-400" },
		{ Icon: Clock, color: "text-cyan-400" },
		{ Icon: Moon, color: "text-indigo-400" },
	];

	const containerMotion = useMotionValue(0);
	const rotate = useTransform(containerMotion, [0, 100], [0, 8]);
	const scale = useTransform(containerMotion, [0, 100], [1, 0.98]);

	return (
		<motion.div
			className="relative w-48 h-48 mb-8"
			style={{ rotate, scale }}
			onMouseEnter={() => containerMotion.set(100)}
			onMouseLeave={() => containerMotion.set(0)}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			{icons.map((item, index) => {
				const totalCards = icons.length;
				const depth = totalCards - index - 1; // 0 for front card, higher for back
				const offset = depth * 8; // Stack offset in pixels
				const rotation = depth * -2; // Slight rotation for 3D effect
				const scaleValue = 1 - depth * 0.05; // Slightly smaller for depth
				const zIndex = depth; // Lower z-index for back cards

				return (
					<motion.div
						key={index}
						className="absolute inset-0 flex items-center justify-center"
						initial={{
							opacity: 0,
							y: 50,
							rotateX: -20,
							scale: 0.8,
						}}
						animate={{
							opacity: 1,
							y: offset,
							rotate: rotation,
							rotateX: 0,
							scale: scaleValue,
						}}
						transition={{
							delay: index * 0.1,
							duration: 0.6,
							type: "spring",
							stiffness: 200,
							damping: 20,
						}}
						style={{
							zIndex: totalCards - zIndex,
							transformStyle: "preserve-3d",
						}}
					>
						<motion.div
							className={`p-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-2xl border border-zinc-800 shadow-2xl ${item.color}`}
							whileHover={{
								scale: 1.05,
								y: -5,
								rotate: rotation + 2,
								transition: { duration: 0.2 },
							}}
							style={{
								boxShadow: `0 ${offset}px ${offset * 2}px rgba(0, 0, 0, 0.5)`,
							}}
						>
							<item.Icon className="w-16 h-16" />
						</motion.div>
					</motion.div>
				);
			})}
		</motion.div>
	);
};

const LoginForm = ({ isOpen, onClose }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			// Handle login logic here
			console.log("Login attempt:", { email, password });
		}, 1000);
	};

	const handleGoogleLogin = () => {
		// Handle Google login logic here
		console.log("Google login");
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[201] flex items-center justify-center p-4"
					>
						<div className="relative w-full max-w-6xl h-[90vh] max-h-[800px] bg-gradient-to-r from-black via-zinc-950 to-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
							{/* Close Button */}
							<button
								onClick={onClose}
								className="absolute top-4 right-4 z-50 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 transition-colors text-white"
								aria-label="Close"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="flex h-full">
								{/* Left Side - Icon Section */}
								<div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-r from-zinc-900/20 via-zinc-800/30 to-transparent p-12 relative overflow-hidden">
									<div className="absolute inset-0 opacity-10">
										<div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-transparent" />
									</div>
									<div className="relative z-10 flex flex-col items-center justify-center">
										<IconCardStack />
										<motion.h2
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.3, duration: 0.5 }}
											className="text-4xl font-bold text-white mb-4 text-center"
										>
											Eternal
										</motion.h2>
										<motion.p
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.4, duration: 0.5 }}
											className="text-zinc-400 text-center max-w-md"
										>
											Sign in to continue your journey with Eternal
										</motion.p>
									</div>
								</div>

								{/* Right Side - Form Section */}
								<div className="flex-1 flex items-center justify-center p-8 md:p-12 bg-gradient-to-r from-black to-zinc-950">
									<div className="w-full max-w-md">
										{/* Mobile Icon */}
										<div className="md:hidden flex justify-center mb-8">
											<Heater className="w-16 h-16 text-zinc-400" />
										</div>

										<motion.h3
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.1 }}
											className="text-2xl font-bold text-white mb-2 text-center md:text-left"
										>
											Get started
										</motion.h3>
										<motion.p
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.15 }}
											className="text-zinc-400 mb-8 text-center md:text-left"
										>
											Enter your credentials to access your account
										</motion.p>

										<form onSubmit={handleSubmit} className="space-y-6">
											{/* Email Field */}
											<motion.div
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.2 }}
											>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-zinc-300 mb-2"
												>
													Email
												</label>
												<div className="relative">
													<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
													<input
														id="email"
														type="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														required
														className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all"
														placeholder="you@example.com"
													/>
												</div>
											</motion.div>

											{/* Password Field */}
											<motion.div
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.25 }}
											>
												<label
													htmlFor="password"
													className="block text-sm font-medium text-zinc-300 mb-2"
												>
													Password
												</label>
												<div className="relative">
													<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
													<input
														id="password"
														type="password"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
														required
														className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all"
														placeholder="••••••••"
													/>
												</div>
											</motion.div>

											{/* Submit Button */}
											<motion.button
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.3 }}
												type="submit"
												disabled={isLoading}
												className="w-full relative flex gap-2 items-center justify-center p-3 rounded-lg group bg-white text-black hover:text-white transition-all duration-300 ease-in font-medium"
											>
												<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-zinc-800 rounded-lg h-full" />
												<span className="z-50 relative">
													{isLoading ? "Signing in..." : "Sign In"}
												</span>
											</motion.button>

											{/* Divider */}
											<motion.div
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.35 }}
												className="relative my-6"
											>
												<div className="absolute inset-0 flex items-center">
													<div className="w-full border-t border-zinc-800"></div>
												</div>
												<div className="relative flex justify-center text-sm">
													<span className="px-4 bg-gradient-to-r from-black to-zinc-950 text-zinc-500">
														Or continue with
													</span>
												</div>
											</motion.div>

											{/* Google Login Button */}
											<motion.button
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.4 }}
												type="button"
												onClick={handleGoogleLogin}
												className="w-full flex items-center justify-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:bg-zinc-100 hover:text-black transition-all duration-75 ease-in hover:shadow-xl font-medium"
											>
												<svg className="w-5 h-5" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
													/>
													<path
														fill="currentColor"
														d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
													/>
													<path
														fill="currentColor"
														d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
													/>
													<path
														fill="currentColor"
														d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
													/>
												</svg>
												Continue with Google
											</motion.button>

											{/* Terms */}
											<motion.p
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.45 }}
												className="text-xs text-zinc-500 text-center mt-6"
											>
												We accept{" "}
												<a
													href="/privacy"
													className="text-zinc-400 hover:text-zinc-300 underline"
												>
													Terms of Service
												</a>{" "}
												and{" "}
												<a
													href="/privacy"
													className="text-zinc-400 hover:text-zinc-300 underline"
												>
													Privacy Policy
												</a>
											</motion.p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default LoginForm;
