"use client";

import { motion } from "framer-motion";
import PageLayout from "../LandingPage/components/PageLayout";

const PrivacyPolicyPage = () => {
	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto px-4 py-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-white"
				>
					<h1 className="text-5xl font-bold my-6 text-zinc-100">
						Privacy Policy
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
						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								1. Introduction
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								Welcome to Eternal ("we," "our," or "us"). We are committed to
								protecting your privacy and ensuring you have a positive
								experience on our website and in using our products and
								services. This Privacy Policy explains how we collect, use,
								disclose, and safeguard your information when you visit our
								website and use our services.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								2. Information We Collect
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								We collect information that you provide directly to us,
								including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>
									Name and contact information (email address, phone number)
								</li>
								<li>Account credentials and profile information</li>
								<li>Payment and billing information</li>
								<li>Communication preferences</li>
								<li>Any other information you choose to provide</li>
							</ul>
							<p className="text-zinc-400 leading-relaxed mt-4">
								We also automatically collect certain information when you visit
								our website, including your IP address, browser type, operating
								system, and usage patterns.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								3. How We Use Your Information
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								We use the information we collect to:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>Provide, maintain, and improve our services</li>
								<li>Process transactions and send related information</li>
								<li>Send technical notices and support messages</li>
								<li>Respond to your comments and questions</li>
								<li>
									Communicate with you about products, services, and promotions
								</li>
								<li>Monitor and analyze trends and usage</li>
								<li>Detect, prevent, and address technical issues</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								4. Information Sharing and Disclosure
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								We do not sell, trade, or rent your personal information to
								third parties. We may share your information only in the
								following circumstances:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4 mt-4">
								<li>
									With service providers who assist us in operating our services
								</li>
								<li>To comply with legal obligations</li>
								<li>To protect our rights and prevent fraud</li>
								<li>With your consent or at your direction</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								5. Data Security
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								We implement appropriate technical and organizational security
								measures to protect your personal information. However, no
								method of transmission over the Internet or electronic storage
								is 100% secure, and we cannot guarantee absolute security.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								6. Your Rights
							</h2>
							<p className="text-zinc-400 leading-relaxed mb-4">
								You have certain rights regarding your personal information,
								including:
							</p>
							<ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
								<li>The right to access your personal information</li>
								<li>The right to correct inaccurate information</li>
								<li>The right to delete your information</li>
								<li>The right to object to processing</li>
								<li>The right to data portability</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-zinc-300 mb-4">
								7. Contact Us
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								If you have questions about this Privacy Policy, please contact
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

export default PrivacyPolicyPage;
