import { ArrowRight, MessageCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-[#08111f]">

      <div className="max-w-7xl mx-auto px-6 py-28 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
          ✨ Jasa Suruh Terpercaya di Surabaya
        </div>

        {/* Judul */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Butuh Bantuan
          <br />

          <span className="text-cyan-400">
            di Surabaya?
          </span>
        </h1>

        {/* Deskripsi */}
        <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
          Kami membantu survey kos, ambil barang,
          titip beli, antar dokumen,
          hingga menemani berbagai kebutuhan Anda
          dengan cepat, aman, dan terpercaya.
        </p>

        {/* Tombol */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/6287883924957"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-400 transition"
          >
            <MessageCircle size={20} />
            Chat WhatsApp
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Lihat Layanan
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Rating */}
        <div className="mt-12 flex justify-center items-center gap-2 text-yellow-400">

          <Star fill="currentColor" size={20} />
          <Star fill="currentColor" size={20} />
          <Star fill="currentColor" size={20} />
          <Star fill="currentColor" size={20} />
          <Star fill="currentColor" size={20} />

          <span className="ml-3 text-slate-300">
            Dipercaya pelanggan di Surabaya
          </span>

        </div>

      </div>

    </section>
  );
}