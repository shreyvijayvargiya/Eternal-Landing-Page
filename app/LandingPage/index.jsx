"use client";

import React, { useState, useEffect } from "react";
import BackgroundDots from "./components/BackgroundDots";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import LightEffect from "./components/LightEffect";
import HeroSection from "./components/HeroSection";
import TrustedBrandsSection from "./components/TrustedBrandsSection";
import TeamsSection from "./components/TeamsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ResultsSection from "./components/ResultsSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

const EternalLandingPage = () => {
	const [billingPeriod, setBillingPeriod] = useState("monthly");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	const scrollToSection = (sectionId) => {
		if (typeof window === "undefined") return;

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

	// Handle hash navigation when page loads or hash changes
	useEffect(() => {
		// Only run on client side
		if (typeof window === "undefined") return;

		const handleHashScroll = () => {
			if (window.location.hash) {
				const hash = window.location.hash.substring(1); // Remove #
				setTimeout(() => {
					const element = document.getElementById(hash);
					if (element) {
						const offset = 80;
						const elementPosition = element.getBoundingClientRect().top;
						const offsetPosition =
							elementPosition + window.pageYOffset - offset;

						window.scrollTo({
							top: offsetPosition,
							behavior: "smooth",
						});
					}
				}, 100); // Small delay to ensure page is fully loaded
			}
		};

		// Scroll on initial load if there's a hash
		handleHashScroll();

		// Listen for hash changes
		window.addEventListener("hashchange", handleHashScroll);

		return () => {
			window.removeEventListener("hashchange", handleHashScroll);
		};
	}, []);

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

			<Navbar
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				scrollToSection={scrollToSection}
				onOpenLogin={() => setIsLoginModalOpen(true)}
			/>

			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				scrollToSection={scrollToSection}
				onOpenLogin={() => setIsLoginModalOpen(true)}
			/>

			<main className="z-50">
				<LightEffect />

				<HeroSection onOpenLogin={() => setIsLoginModalOpen(true)} />

				<TrustedBrandsSection />

				<TeamsSection />

				<ServicesSection />

				<FeaturesSection />

				<ResultsSection />

				<FAQSection />

				<PricingSection
					billingPeriod={billingPeriod}
					setBillingPeriod={setBillingPeriod}
					onOpenLogin={() => setIsLoginModalOpen(true)}
				/>

				<ContactSection />
			</main>

			<Footer />

			<LoginForm
				isOpen={isLoginModalOpen}
				onClose={() => setIsLoginModalOpen(false)}
			/>
		</div>
	);
};

export default EternalLandingPage;
