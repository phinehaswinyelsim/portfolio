export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#050507] px-6 text-center text-zinc-100">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#E9D5A3]">404</p>
        <h1 className="mt-3 font-serif text-5xl">Lost in the dark.</h1>
        <p className="mt-3 text-zinc-400">This page doesn&apos;t exist — but your project could.</p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#E9D5A3]"
        >
          ← Back home
        </a>
      </div>
    </div>
  );
}
