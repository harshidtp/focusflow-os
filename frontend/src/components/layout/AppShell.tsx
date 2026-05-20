export default function AppShell() {
  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-95" />

      {/* Primary Glow */}
      <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* Secondary Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      {/* Layout Container */}
      <div className="relative z-10 mx-auto flex h-screen w-full max-w-[1400px] flex-col items-center justify-evenly px-6">
        {/* Main Glass Container */}
        <div className="flex min-h-[520px] w-full max-w-4xl animate-[glowPulse_4s_ease-in-out_infinite] flex-col items-center justify-center rounded-[40px] border border-white/10 bg-white/5 px-10 py-20 shadow-2xl backdrop-blur-xl">
          {/* Badge */}
          <span className="mb-6 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm tracking-wide text-emerald-300">
            Deep Focus Environment
          </span>

          {/* Title */}
          <h1 className="mb-6 text-center text-6xl font-black tracking-tight md:text-8xl md:text-9xl">
            FocusFlow OS
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-center text-xl leading-relaxed text-zinc-400">
            Immersive productivity platform designed for deep work, ambient
            focus, and distraction-free sessions.
          </p>
        </div>
      </div>
    </main>
  );
}
