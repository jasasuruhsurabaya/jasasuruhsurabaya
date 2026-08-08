export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-xl font-bold tracking-wide text-white">
          Jasa Suruh Surabaya
        </h1>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/jasasuruhsurabaya72"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-600 px-4 py-2 text-white hover:scale-105 transition"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@originalsurabaya"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black border border-white/20 px-4 py-2 text-white hover:scale-105 transition"
          >
            TikTok
          </a>

          <a
            href="https://wa.me/6287883924957"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-4 py-2 font-semibold text-white hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}