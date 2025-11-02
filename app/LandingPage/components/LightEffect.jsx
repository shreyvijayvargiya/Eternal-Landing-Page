const LightEffect = () => {
	return (
		<div className="relative max-w-4xl mx-auto h-32 bg-none">
			<div className="relative w-full overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-5 bg-black z-20" />
				<div
					className="absolute top-5 left-0 w-full h-[2px] bg-white z-30"
					style={{
						boxShadow: `
							0 0 20px rgba(255,255,255,0.8),
							0 10px 40px rgba(255,255,255,0.4),
							0 30px 80px rgba(255,255,255,0.2),
							0 60px 120px rgba(255,255,255,0.1),
							-200px 200px 300px rgba(255,255,255,0.15),
							200px 200px 300px rgba(255,255,255,0.15),
							-150px 150px 200px rgba(255,255,255,0.2),
							150px 150px 200px rgba(255,255,255,0.2),
							-100px 100px 150px rgba(255,255,255,0.25),
							100px 100px 150px rgba(255,255,255,0.25),
							-50px 50px 100px rgba(255,255,255,0.3),
							50px 50px 100px rgba(255,255,255,0.3)
						`,
					}}
				/>
			</div>
		</div>
	);
};

export default LightEffect;
