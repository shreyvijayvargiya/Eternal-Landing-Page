import colors from "tailwindcss/colors";

const BackgroundDots = () => {
	return (
		<div
			className="absolute inset-0 w-full h-44 z-0 bg-transparent pointer-events-none"
			style={{ zIndex: 0 }}
		>
			<div className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 opacity-10 z-0"
					style={{
						backgroundImage: `
							linear-gradient(to right, ${colors.zinc[800]} 1px, transparent 1px),
							linear-gradient(to bottom, ${colors.zinc[800]} 1px, transparent 1px)
						`,
						backgroundSize: "2rem 2rem",
					}}
				/>
			</div>
			<div
				className="animate-pulse absolute inset-0 w-full z-0 h-screen"
				style={{
					background: `radial-gradient(circle at top, ${colors.blue[800]}40 0%, transparent 70%)`,
				}}
			/>
		</div>
	);
};

export default BackgroundDots;
