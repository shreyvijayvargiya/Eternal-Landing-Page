"use client";

import { useState } from "react";
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

const EternalLandingPage = () => {
	const [billingPeriod, setBillingPeriod] = useState("monthly");
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
			/>

			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				scrollToSection={scrollToSection}
			/>

			<main className="z-50">
				<LightEffect />

				<HeroSection />

				<TrustedBrandsSection />

				<TeamsSection />

				<ServicesSection />

				<FeaturesSection />

				<ResultsSection />

				<FAQSection />

				<PricingSection
					billingPeriod={billingPeriod}
					setBillingPeriod={setBillingPeriod}
				/>

				<ContactSection />
			</main>

			<Footer />
		</div>
	);
};

export default EternalLandingPage;
