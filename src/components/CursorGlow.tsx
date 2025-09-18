import React, { useState, useEffect, useRef } from "react";

// Define the type for our state object
type MousePosition = {
	x: number;
	y: number;
};

const CursorGlow: React.FC = () => {
	// Use the type `MousePosition` for the state
	const [position, setPosition] = useState<MousePosition>({ x: -100, y: -100 });
	// lerpPos is the interpolated position used for rendering (smooth follow)
	const [lerpPos, setLerpPos] = useState<MousePosition>(position);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		// Add type annotation `MouseEvent` to the event handler
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []); // The empty array ensures this effect runs only once on mount

	// Animation loop: interpolate lerpPos toward position
	useEffect(() => {
		const ease = 0.07; // smaller = slower, larger = snappier

		const animate = () => {
			setLerpPos((prev) => {
				const dx = position.x - prev.x;
				const dy = position.y - prev.y;

				// If very close, snap to avoid tiny subpixel updates
				const nx = Math.abs(dx) < 0.1 ? position.x : prev.x + dx * ease;
				const ny = Math.abs(dy) < 0.1 ? position.y : prev.y + dy * ease;

				return { x: nx, y: ny };
			});

			rafRef.current = requestAnimationFrame(animate);
		};

		rafRef.current = requestAnimationFrame(animate);

		return () => {
			if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
		};
	}, [position]);

	return (
		<div
			style={{
				position: "fixed",
				top: lerpPos.y,
				left: lerpPos.x,
				transform: "translate(-50%, -50%)",
				pointerEvents: "none",
			}}>
			<div
				style={{
					position: "absolute",
					top: -window.innerHeight / 32 +lerpPos.y / 16,
					left: -window.innerWidth / 32 + lerpPos.x / 16,
					transform: "translate(-50%, -50%)",
					width: "35vw",
					height: "35vw",
					borderRadius: "50%",
					background: "radial-gradient(circle at center, #e9f1, transparent 60%)",
					filter: "blur(10px)",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: -window.innerHeight / 8 + lerpPos.y / 4,
					left: -window.innerWidth / 8 + lerpPos.x / 4,
					transform: "translate(-50%, -50%)",
					width: "35vw",
					height: "35vw",
					borderRadius: "50%",
					background: "radial-gradient(circle at center, #e9f1, transparent 60%)",
					filter: "blur(10px)",
					pointerEvents: "none",
				}}
			/>
		</div>
	);
};

export default CursorGlow;
