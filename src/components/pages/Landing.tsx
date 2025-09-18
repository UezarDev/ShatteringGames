import CursorGlow from "../CursorGlow";

function Landing() {
  return (
		<div className="flex flex-col min-h-screen justify-center items-center gap-8">
			<CursorGlow />
			<h1 className="text-[16vw] text-zinc-900 font-orbitron font-semibold pointer-events-none absolute origin-bottom -bottom-[1vw] left-1/6 -translate-x-1/6 z-0">
				Shatterin
			</h1>
			<h1 className="text-[13vw] text-zinc-900 font-orbitron font-extrabold pointer-events-none absolute origin-bottom-left -right-[50.75vw] bottom-[4vw] -rotate-90">
				Games
			</h1>
			{/* <div className="absolute bg-zinc-900 w-[2vw] h-[2.5vw] origin-bottom bottom-[12.9vw] right-[9.1vw]"></div> */}
			<p className="text-6xl font-teko">Your gateway to original gaming experiences.</p>
		</div>
	);
}

export default Landing