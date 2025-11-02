"use client";

import { motion } from "framer-motion";
import PageLayout from "../LandingPage/components/PageLayout";

const CookiePolicyPage = () => {
	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto px-4 py-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-white"
				>
					<h1 className="text-5xl font-bold mb-6 text-zinc-100">
						Cookie Policy
					</h1>
					<p className="text-zinc-400 mb-8 text-sm">
						Last updated:{" "}
						{new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					<div className="space-y-8">
						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								What Are Cookies?
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								Cookies are small text files that are placed on your computer or
								mobile device when you visit a website. They are widely used to
								make websites work more efficiently and provide information to
								the owners of the site. Cookies allow a website to recognize
								your device and store some information about your preferences or
								past actions.
							</p>
						</section>

						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								How We Use Cookies
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								We use cookies for the following purposes:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>
									<strong className="text-zinc-300">Essential Cookies:</strong>{" "}
									Required for the website to function properly
								</li>
								<li>
									<strong className="text-zinc-300">Analytics Cookies:</strong>{" "}
									Help us understand how visitors interact with our website
								</li>
								<li>
									<strong className="text-zinc-300">Functional Cookies:</strong>{" "}
									Remember your preferences and settings
								</li>
								<li>
									<strong className="text-zinc-300">Marketing Cookies:</strong>{" "}
									Used to deliver relevant advertisements
								</li>
							</ul>
						</section>

						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								Types of Cookies We Use
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-medium text-zinc-300 mb-2">
										Session Cookies
									</h3>
									<p className="text-zinc-400 leading-relaxed">
										These are temporary cookies that are deleted when you close
										your browser. They help maintain your session while browsing
										our website.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-medium text-zinc-300 mb-2">
										Persistent Cookies
									</h3>
									<p className="text-zinc-400 leading-relaxed">
										These cookies remain on your device for a set period or
										until you delete them. They help us remember your
										preferences and improve your experience.
									</p>
								</div>
							</div>
						</section>

						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								Third-Party Cookies
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								We may also use third-party cookies from service providers such
								as:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>Google Analytics for website analytics</li>
								<li>Social media platforms for sharing functionality</li>
								<li>Advertising networks for targeted advertising</li>
							</ul>
							<p className="text-zinc-400 leading-relaxed mt-4">
								These third parties may use cookies to collect information about
								your online activities across different websites.
							</p>
						</section>

						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								Managing Cookies
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								You can control and manage cookies in various ways:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>
									Browser settings: Most browsers allow you to refuse or delete
									cookies through their settings
								</li>
								<li>
									Opt-out tools: Use industry opt-out tools to manage
									advertising cookies
								</li>
								<li>
									Our cookie consent banner: Manage your preferences through our
									cookie consent mechanism
								</li>
							</ul>
							<p className="text-zinc-400 leading-relaxed mt-4">
								Please note that disabling cookies may impact the functionality
								of our website.
							</p>
						</section>

						<section className="border border-zinc-900 rounded-xl p-6 bg-gradient-to-r from-black to-zinc-950">
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								Contact Us
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								If you have questions about our use of cookies, please contact
								us at:
							</p>
							<p className="text-zinc-300 mt-4">
								Email:{" "}
								<a
									href="mailto:privacy@eternal.ai"
									className="text-blue-400 hover:text-blue-300"
								>
									privacy@eternal.ai
								</a>
							</p>
						</section>
					</div>
				</motion.div>
			</div>
		</PageLayout>
	);
};

export default CookiePolicyPage;
