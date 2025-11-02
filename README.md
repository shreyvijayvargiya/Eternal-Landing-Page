# Eternal Landing Page Template

A modern, professional Next.js landing page template with smooth animations, responsive design, and a dark theme aesthetic. Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![React](https://img.shields.io/badge/React-19-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Table of Contents

- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components & Sections](#-components--sections)
- [Recent Updates](#-recent-updates)
- [Code Flow](#-code-flow)
- [Customization Guide](#-customization-guide)
- [Advanced Customization](#-advanced-customization)
- [Contact Form Setup](#-contact-form-setup)
- [Deployment](#-deployment)
- [Technologies Used](#-technologies-used)
- [Support](#-support)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

### Installation

1. **Extract or clone the template** to your desired location

2. **Navigate to the project directory**:

   ```bash
   cd eternal-landing-page-nextjs
   ```

3. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

You should now see the landing page running locally!

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
eternal-landing-page-nextjs/
├── app/
│   ├── LandingPage/          # Main landing page
│   │   ├── components/       # Reusable components
│   │   │   ├── LoginForm.jsx # Login modal component
│   │   │   └── ...           # Other components
│   │   ├── constants.js      # Data & configuration
│   │   └── index.jsx         # Landing page entry point
│   ├── blogs/                # Blog section
│   │   ├── page.jsx          # Blog listing page
│   │   └── [slug]/          # Dynamic blog post pages
│   │       └── page.jsx      # Individual blog post
│   ├── privacy/              # Privacy Policy page
│   ├── cookie/               # Cookie Policy page
│   ├── not-found.jsx         # 404 Error page
│   ├── page.jsx              # Root page (redirects to landing)
│   ├── layout.jsx            # Root layout
│   └── globals.css           # Global styles
├── api/                      # API routes (if needed)
├── public/                   # Static assets
├── styles/                   # Additional styles
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

### Key Files Explained

- **`app/LandingPage/index.jsx`**: Main landing page component that orchestrates all sections
- **`app/LandingPage/constants.js`**: Centralized data store (navigation links, pricing, FAQs, etc.)
- **`app/LandingPage/components/`**: Individual section components (Hero, Services, Pricing, etc.)
- **`tailwind.config.js`**: Tailwind CSS configuration and custom theme settings

---

## 🧩 Components & Sections

The template consists of modular, reusable components. Here's what each section does:

### Core Components

#### **BackgroundDots** (`components/BackgroundDots.jsx`)

- **Purpose**: Creates the animated dot grid background pattern
- **Customization**: Modify dot size, spacing, and colors in the component

#### **Navbar** (`components/Navbar.jsx`)

- **Purpose**: Main navigation bar with logo, links, and CTA button
- **Props**:
  - `isMobileMenuOpen`: Controls mobile menu visibility
  - `setIsMobileMenuOpen`: Toggles mobile menu state
  - `scrollToSection`: Function for smooth scrolling to page sections
- **Customization**: Update logo, navigation links, and styling

#### **MobileMenu** (`components/MobileMenu.jsx`)

- **Purpose**: Responsive mobile navigation menu with animations
- **Features**: Slide-in animation, navigation links, close functionality
- **Customization**: Modify animation timing, menu items, or styling

### Page Sections

#### **1. LightEffect** (`components/LightEffect.jsx`)

- **Purpose**: Creates the light bulb effect at the top of the page
- **Customization**: Adjust shadow intensity, light color, or remove entirely

#### **2. HeroSection** (`components/HeroSection.jsx`)

- **Purpose**: Main hero section with headline, description, and CTAs
- **What to Customize**:
  - Headline text (line 45-49)
  - Description paragraph (line 50-53)
  - CTA button text and links (line 54-64)
  - Y Combinator badge (optional, line 38-45)

#### **3. TrustedBrandsSection** (`components/TrustedBrandsSection.jsx`)

- **Purpose**: Displays scrolling brand icons/logos
- **Customization**:
  - Update icons in `constants.js` → `icons` array
  - Modify scroll speed in `animate` prop (line 15-21)

#### **4. TeamsSection** (`components/TeamsSection.jsx`)

- **Purpose**: Shows team members with hover effects
- **Customization**:
  - Update team data in `constants.js` → `teams` array
  - Modify description text (line 45-49)

#### **5. ServicesSection** (`components/ServicesSection.jsx`)

- **Purpose**: Showcases services, chatbot, and integrations
- **Sub-sections**:
  - AI Chatbot form (currently UI only - needs integration)
  - Custom agents scrolling list
  - Tools integrations with animated icons
  - Database integrations visualization
- **Customization**:
  - Update agent items (line 13-24)
  - Modify integration icons
  - Change chatbot placeholder text

#### **6. FeaturesSection** (`components/FeaturesSection.jsx`)

- **Purpose**: Client testimonials/reviews section
- **Customization**:
  - Update client data in `constants.js` → `clientsData` array
  - Modify card rotation effects (line 19-23)

#### **7. ResultsSection** (`components/ResultsSection.jsx`)

- **Purpose**: Statistics/metrics display with colored badges
- **Customization**:
  - Update numbers and labels (line 9-14)
  - Modify badge colors (line 17-22)
  - Change animation delays

#### **8. FAQSection** (`components/FAQSection.jsx`)

- **Purpose**: Frequently Asked Questions accordion
- **Customization**:
  - Update FAQ data in `constants.js` → `faqs` array
  - Modify accordion styling or behavior

#### **9. PricingSection** (`components/PricingSection.jsx`)

- **Purpose**: Pricing plans with monthly/yearly toggle
- **Props**:
  - `billingPeriod`: Current billing period ("monthly" or "yearly")
  - `setBillingPeriod`: Function to update billing period
- **Customization**:
  - Update pricing data in `constants.js` → `pricingPlans` array
  - Modify discount badge text (line 54-56)
  - Change pricing display format

#### **10. ContactSection** (`components/ContactSection.jsx`)

- **Purpose**: Contact information and contact form
- **What's Included**:
  - Email contact card
  - Social media links
  - Office location
  - Contact form (UI only - needs integration)
- **Customization**:
  - Update contact email (line 30-35)
  - Modify social links (line 49-76)
  - Update office address (line 82-100)
  - **Note**: Form needs integration (see Contact Form Setup section)

#### **11. Footer** (`components/Footer.jsx`)

- **Purpose**: Site footer with navigation, legal links, and social media
- **Customization**:
  - Update legal links (line 42-78)
  - Modify social media URLs (line 82-112)
  - Change copyright text (line 14-16)

#### **12. LoginForm** (`components/LoginForm.jsx`)

- **Purpose**: Full-screen login modal with animated icon card stack
- **Features**:
  - Email and password login form
  - Google OAuth login button
  - Terms and Privacy Policy links
  - Animated icon card stack on left side (using Framer Motion)
  - Responsive design (mobile-friendly)
- **Props**:
  - `isOpen`: Boolean to control modal visibility
  - `onClose`: Function to close the modal
- **Animations**:
  - Uses `useMotionValue` and `useTransform` for smooth card stack interactions
  - Staggered card entrance animations
  - Interactive hover effects on entire stack
- **Trigger**: Opens when "Get Started" buttons are clicked throughout the site
- **Customization**:
  - Update form fields, validation, or styling
  - Integrate with your authentication backend
  - Modify icon cards and colors

### Blog Pages

#### **Blog Listing** (`app/blogs/page.jsx`)

- **Purpose**: Displays all available blog posts in a grid layout
- **Features**:
  - Responsive grid (1 column mobile, 2 tablet, 3 desktop)
  - Blog cards with title, excerpt, date, and read time
  - Smooth hover animations
  - Links to individual blog posts
- **Customization**:
  - Update blog data array
  - Modify card styling or layout
  - Add pagination or filters

#### **Blog Post** (`app/blogs/[slug]/page.jsx`)

- **Purpose**: Dynamic route for individual blog posts
- **Features**:
  - URL-friendly slugs generated from blog titles
  - Full blog content with headings and paragraphs
  - Author, date, and read time metadata
  - Back to blogs navigation
  - Same Navbar and Footer as landing page
- **Routing**: Uses Next.js dynamic routes (`[slug]`)
- **Customization**:
  - Update blog content data structure
  - Modify article styling
  - Add related posts or comments section

### Utility Components

#### **PageLayout** (`components/PageLayout.jsx`)

- **Purpose**: Reusable layout wrapper for additional pages (Privacy, Cookie, 404)
- **Includes**: Navbar, Mobile Menu, Background, Footer
- **Usage**: Wrap any page content with `<PageLayout>{children}</PageLayout>`

---

## ✨ Recent Updates

### Version 2.0 - New Features

#### 🎨 Login Form Modal

- **Full-screen animated modal** with split layout:
  - **Left side**: Beautiful icon card stack with 6 animated cards using Framer Motion
  - **Right side**: Login form with email, password, Google OAuth, and terms acceptance
- **Trigger**: Opens when clicking any "Get Started" button (Navbar, Hero, Pricing, Mobile Menu)
- **Animations**:
  - Stacked card effect with depth, rotation, and scale transforms
  - Interactive hover effects on entire stack
  - Smooth entrance animations for form elements

#### 📝 Blog System

- **Blog Listing Page** (`/blogs`):
  - Grid layout displaying 6 featured blog posts
  - Each card shows: title, excerpt, publication date, and estimated read time
  - Hover effects and smooth transitions
- **Individual Blog Posts** (`/blogs/[slug]`):

  - Dynamic routing using blog title slugs
  - Full article layout with headings and paragraphs
  - Author attribution and metadata
  - Seamless navigation back to blog listing

- **Sample Blog Topics**:
  1. The Future of Artificial Intelligence in Business
  2. Building Scalable Applications with Modern Web Technologies
  3. Design Thinking: Creating User-Centered Experiences
  4. Machine Learning: From Theory to Production
  5. React Performance Optimization Techniques
  6. The Psychology of User Interface Design

#### 🧭 Enhanced Navigation

- **Updated Navbar**: Now includes links to all pages (Home, Blog, Privacy, Cookie)
- **Smart Navigation**:
  - On landing page: Section links scroll smoothly
  - On other pages: Section links navigate to home page with hash
  - Page links (Blog, Privacy, Cookie) work consistently across all pages
- **Footer Updates**: All navigation items now included in footer links
- **Mobile Menu**: Updated to support both section and page navigation

#### 🔧 Technical Improvements

- **Hydration Fixes**:

  - Added proper SSR/client-side checks for `window` and `document` access
  - Fixed `usePathname()` to handle SSR scenarios
  - Changed invalid `<navbar>` tag to semantic `<nav>` tag
  - All components now render consistently on server and client

- **Version Compatibility**:
  - Updated React from 19.x to 18.2.0 for Next.js 15.0.0 compatibility
  - Fixed dependency resolution for Vercel builds

#### 🎯 Icon Card Stack Animation

The login form features an innovative stacked card animation:

- **6 Icon Cards**: Heater, Sparkles, Star, Heart, Clock, Moon
- **3D Stack Effect**: Cards positioned with depth, rotation, and scale
- **Interactive**: Entire stack rotates and scales on hover
- **Individual Cards**: Each card lifts and scales on individual hover
- **Smooth Animations**: Uses `useMotionValue` and `useTransform` for fluid motion

### How to Use New Features

#### Opening Login Modal

The login modal opens automatically when users click any "Get Started" button:

- In the Navbar (desktop)
- In the Hero Section
- In each Pricing Plan card
- In the Mobile Menu

#### Adding New Blog Posts

Edit `app/blogs/page.jsx` to add blog entries:

```javascript
const blogs = [
	{
		title: "Your Blog Title",
		excerpt: "Your excerpt here...",
		date: "Month Day, Year",
		readTime: "X min read",
	},
	// Add more blogs
];
```

Then add corresponding content in `app/blogs/[slug]/page.jsx` in the `blogContent` object:

```javascript
const blogContent = {
	"your-blog-slug": {
		title: "Your Blog Title",
		date: "Month Day, Year",
		readTime: "X min read",
		author: "Author Name",
		content: [
			{ type: "paragraph", text: "Your content..." },
			{ type: "heading", text: "Section Title" },
			// More content
		],
	},
};
```

#### Customizing Login Form

Edit `app/LandingPage/components/LoginForm.jsx`:

- Update form fields and validation
- Integrate with your authentication API
- Modify icon colors and card styling
- Customize animations timing

---

## 🔄 Code Flow

### Application Flow

1. **Entry Point** (`app/page.jsx`)

   - Renders the main landing page component

2. **Landing Page** (`app/LandingPage/index.jsx`)

   - Initializes state (billing period, mobile menu, login modal)
   - Defines scroll functionality with SSR-safe checks
   - Handles hash navigation for section links
   - Renders all section components in order:
     ```
     Background → Navbar → MobileMenu → Main Content → Footer → LoginForm
     ```

3. **State Management**

   - **Local State**: Uses React `useState` for:
     - Billing period toggle (monthly/yearly)
     - Mobile menu open/close state
     - Login modal visibility state
   - **Props Drilling**: State passed down to child components as props
   - **Modal Control**: `onOpenLogin` prop passed to all "Get Started" buttons

4. **Animation Flow**

   - **Framer Motion**: Each section uses `motion.section` with:
     - `initial`: Starting animation state
     - `whileInView`: Animation triggered when section enters viewport
     - `viewport`: Viewport detection settings
     - `transition`: Animation timing and easing

5. **Scroll Behavior**
   - Navigation links trigger `scrollToSection()` function
   - Smooth scrolls to section with offset for fixed navbar
   - Works for both desktop navigation and mobile menu

### Data Flow

```
constants.js (Data Source)
    ↓
index.jsx (Main Component)
    ↓
Individual Section Components
    ↓
Rendered UI
```

**Example**: Pricing plans data flows like this:

1. `pricingPlans` defined in `constants.js`
2. Imported in `PricingSection.jsx`
3. Mapped and rendered with `billingPeriod` state controlling display

---

## 🎨 Customization Guide

### 1. Changing Content

#### Update Navigation Links

Edit `app/LandingPage/constants.js`:

```javascript
export const navLinks = [
	"About",
	"Features",
	"Services",
	// Add or remove links here
];
```

#### Update Pricing Plans

Edit `app/LandingPage/constants.js`:

```javascript
export const pricingPlans = [
	{
		name: "Your Plan Name",
		monthlyPrice: "$99",
		yearlyPrice: "$79",
		description: "Your description",
		features: [
			"Feature 1",
			"Feature 2",
			// Add more features
		],
		popular: false, // Set to true for highlighted plan
	},
];
```

#### Update FAQ Content

Edit `app/LandingPage/constants.js`:

```javascript
export const faqs = [
	{
		question: "Your question?",
		answer: "Your detailed answer here...",
	},
];
```

#### Update Team Members

Edit `app/LandingPage/constants.js`:

```javascript
export const teams = [
	{
		name: "Team Member Name",
		role: "Their Role",
		image: "path/to/image.jpg",
	},
];
```

#### Update Client Testimonials

Edit `app/LandingPage/constants.js`:

```javascript
export const clientsData = [
	{
		name: "Client Name",
		role: "Their Role",
		company: "Company Name",
		avatar: "path/to/avatar.jpg",
		content: "Testimonial text...",
		rating: 5,
	},
];
```

### 2. Changing Colors & Styling

#### Primary Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: "#3b82f6", // Your primary color
				secondary: "#8b5cf6", // Your secondary color
			},
		},
	},
};
```

Then replace color classes in components:

- `bg-blue-800` → `bg-primary`
- `text-blue-400` → `text-primary`

#### Background Colors

The template uses dark theme by default. To change:

- Global background: Edit `index.jsx` line 39 → `bg-black` to your color
- Section backgrounds: Edit individual components

### 3. Changing Logo/Branding

#### Replace Logo Icon

Edit `components/Navbar.jsx` (line 27):

```jsx
// Replace Heater icon with your logo
<img src="/your-logo.png" alt="Logo" className="w-8 h-8" />
```

#### Update Brand Name

Search and replace "Eternal" throughout the codebase:

- `components/Navbar.jsx`
- `components/Footer.jsx`
- `components/MobileMenu.jsx`
- Any other components

### 4. Modifying Sections

#### Remove a Section

In `app/LandingPage/index.jsx`, simply remove or comment out:

```jsx
// <TrustedBrandsSection />  // Removed section
```

#### Reorder Sections

In `app/LandingPage/index.jsx`, reorder the section components:

```jsx
<main className="z-50">
	<LightEffect />
	<HeroSection />
	<PricingSection /> // Moved to top
	<ServicesSection />
	// ... rest of sections
</main>
```

#### Add a New Section

1. Create new component: `components/YourSection.jsx`
2. Import in `index.jsx`
3. Add `<YourSection />` in the main return

---

## ⚙️ Advanced Customization

### Custom Animations

#### Modify Animation Speed

Edit any `motion.section` component:

```jsx
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}  // Increase for slower
  // ...
>
```

#### Change Animation Type

```jsx
// Fade + Slide Up (current)
initial={{ opacity: 0, y: 50 }}

// Fade + Slide Down
initial={{ opacity: 0, y: -50 }}

// Fade + Scale
initial={{ opacity: 0, scale: 0.9 }}

// Fade + Rotate
initial={{ opacity: 0, rotate: -5 }}
```

### Custom Fonts

1. **Import font** in `app/layout.jsx`:

```jsx
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

2. **Apply font** in layout:

```jsx
<body className={inter.className}>
```

3. **Update Tailwind config** if using custom font:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

### Environment Variables

Create `.env.local` file for sensitive data:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
CONTACT_EMAIL=your@email.com
```

Access in code:

```javascript
process.env.NEXT_PUBLIC_SITE_URL;
```

### SEO Optimization

#### Update Metadata

Edit `app/layout.jsx`:

```jsx
export const metadata = {
	title: "Your Site Title",
	description: "Your site description",
	keywords: "keyword1, keyword2",
	openGraph: {
		title: "Your Title",
		description: "Your Description",
		images: ["/og-image.jpg"],
	},
};
```

#### Add Structured Data

Create a component for JSON-LD schema or add to layout.

### Performance Optimization

#### Image Optimization

Replace `<img>` with Next.js `Image`:

```jsx
import Image from "next/image";

<Image
	src="/your-image.jpg"
	alt="Description"
	width={400}
	height={300}
	priority // For above-fold images
/>;
```

#### Code Splitting

Sections are already component-based. For additional splitting:

```jsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
	loading: () => <p>Loading...</p>,
});
```

---

## 📧 Contact Form Setup

The contact form is currently UI-only. Here are three integration options:

### Option 1: Formspree (Easiest - Recommended)

**Setup Steps**:

1. **Sign up** at [formspree.io](https://formspree.io) (free account available)

2. **Create a new form** and get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update ContactSection.jsx**:

```jsx
"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});
	const [status, setStatus] = useState({ type: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus({ type: "", message: "" });

		try {
			const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus({
					type: "success",
					message: "Thank you! Your message has been sent successfully.",
				});
				setFormData({ name: "", email: "" });
			} else {
				setStatus({
					type: "error",
					message: "Oops! Something went wrong. Please try again.",
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Network error. Please check your connection.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<motion.section id="contact" className="py-12 my-12 scroll-mt-20">
			{/* ... existing code ... */}
			<form onSubmit={handleSubmit} className="space-y-4">
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
						value={formData.name}
						onChange={handleChange}
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
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:ring-1 focus:ring-zinc-500/50 transition-all duration-300"
						placeholder="your.email@example.com"
					/>
				</div>

				{status.message && (
					<div
						className={`p-4 rounded-xl ${
							status.type === "success"
								? "bg-green-500/10 border border-green-500 text-green-400"
								: "bg-red-500/10 border border-red-500 text-red-400"
						}`}
					>
						{status.message}
					</div>
				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full relative flex justify-center gap-1 items-center p-2 rounded-full group bg-zinc-800 text-white hover:text-black transition-all duration-300 ease-in disabled:opacity-50"
				>
					<div className="absolute left-0 bottom-0 w-0 z-0 invisible group-hover:visible transition-all duration-300 ease-in group-hover:w-full bg-zinc-100 rounded-full h-full" />
					<ArrowRight className="w-5 h-5 p-1 group-hover:rotate-45 rotate-0 bg-zinc-900 z-40 group-hover:bg-transparent rounded-full text-zinc-100 group-hover:text-black transition-all duration-300 ease-in" />
					<span className="z-50 text-sm">
						{isSubmitting ? "Sending..." : "Send Message"}
					</span>
				</button>
			</form>
		</motion.section>
	);
};
```

**Replace `YOUR_FORM_ID`** with your actual Formspree form ID.

**Advantages**:

- ✅ No backend required
- ✅ Free tier: 50 submissions/month
- ✅ Easy setup (10 minutes)
- ✅ Spam protection included

---

### Option 2: EmailJS (Alternative - No Backend)

**Setup Steps**:

1. **Install EmailJS**:

```bash
npm install @emailjs/browser
```

2. **Sign up** at [emailjs.com](https://www.emailjs.com)

3. **Configure email service** (Gmail, Outlook, etc.) in EmailJS dashboard

4. **Update ContactSection.jsx**:

```jsx
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.sendForm(
				"YOUR_SERVICE_ID", // From EmailJS dashboard
				"YOUR_TEMPLATE_ID", // From EmailJS dashboard
				e.target,
				"YOUR_PUBLIC_KEY" // From EmailJS dashboard
			);

			// Show success message
			alert("Message sent successfully!");
			e.target.reset();
		} catch (error) {
			console.error("Error:", error);
			alert("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={sendEmail}>
			{/* Form fields with name attributes matching EmailJS template */}
			<input name="user_name" />
			<input name="user_email" />
			{/* ... */}
		</form>
	);
};
```

**Advantages**:

- ✅ No backend required
- ✅ Free tier: 200 emails/month
- ✅ Direct email sending

---

### Option 3: Next.js API Route (Most Professional)

**Setup Steps**:

1. **Install nodemailer**:

```bash
npm install nodemailer
```

2. **Create API route**: `app/api/contact/route.js`:

```javascript
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
	try {
		const { name, email, message } = await request.json();

		// Validate
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Configure transporter (Gmail example)
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD, // App password, not regular password
			},
		});

		// Send email
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.CONTACT_EMAIL,
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
```

3. **Create `.env.local`** file:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=contact@yoursite.com
```

4. **Update ContactSection.jsx** to call this API:

```jsx
const handleSubmit = async (e) => {
	e.preventDefault();

	const response = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});

	const data = await response.json();
	// Handle response
};
```

**Advantages**:

- ✅ Full control
- ✅ No third-party dependencies
- ✅ Customizable email templates
- ⚠️ Requires backend knowledge

---

### Recommended Approach

For template buyers, **provide all three options** with instructions:

- **Formspree**: Best for beginners (recommended)
- **EmailJS**: Good for intermediate users
- **API Route**: Best for advanced users

---

## 🚀 Deployment

### Vercel (Recommended - Easiest)

1. **Push your code** to GitHub

2. **Import project** on [vercel.com](https://vercel.com):

   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Important - Fix Dependency Issues**:

   The project uses React 18.2.0 (compatible with Next.js 15.0.0). If you encounter build errors:

   - Ensure `package.json` has `"react": "^18.2.0"` and `"react-dom": "^18.2.0"`
   - Vercel will automatically install correct dependencies

4. **Configure environment variables** (if using API route):

   - Go to Project Settings → Environment Variables
   - Add: `EMAIL_USER`, `EMAIL_PASSWORD`, `CONTACT_EMAIL`

5. **Deploy** - Vercel builds and deploys automatically!

6. **Custom domain** (optional):
   - Add your domain in Project Settings → Domains

**Advantages**:

- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Built-in CDN
- ✅ Zero configuration needed
- ✅ Handles Next.js routing including dynamic routes (`/blogs/[slug]`)

---

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Push to Git** and connect to Netlify
4. **Add environment variables** in Netlify dashboard

---

### Other Platforms

#### Traditional Hosting (VPS/Shared)

1. Build the project: `npm run build`
2. Upload `.next` folder and required files
3. Run: `npm start`
4. Configure Node.js process manager (PM2 recommended)

#### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🛠️ Technologies Used

- **[Next.js 15.0](https://nextjs.org/)** - React framework with App Router
- **[React 18.2](https://react.dev/)** - UI library (compatible with Next.js 15)
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 11](https://www.framer.com/motion/)** - Animation library with `useMotionValue` and `useTransform`
- **[Lucide React](https://lucide.dev/)** - Icon library
- **Next.js Dynamic Routes** - For blog posts (`/blogs/[slug]`)
- **TypeScript-ready** - Can be converted to TypeScript

### Key Framer Motion Features Used

- **AnimatePresence**: For modal and menu animations
- **useMotionValue**: For reactive motion values in card stack
- **useTransform**: For smooth value transformations
- **Spring Physics**: Natural motion animations throughout
- **Viewport Animations**: Sections animate when scrolled into view

---

## 📞 Support

- **Email**: shreyvijayvargiya26@gmail.com

## 🎉 Thank You!

Thank you for using the Eternal Landing Page Template! If you found this template helpful, consider leaving a review or star.

**Happy Coding! 🚀**
