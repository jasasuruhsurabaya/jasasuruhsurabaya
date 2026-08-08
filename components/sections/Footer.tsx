export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Jasa Suruh Surabaya
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Membantu kebutuhan Anda di Surabaya dengan layanan cepat,
              aman, dan terpercaya.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Layanan
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Survey Kos</li>
              <li>Ambil Barang</li>
              <li>Titip Beli</li>
              <li>Antar Dokumen</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Hubungi Kami
            </h3>

            <div className="space-y-3">

              <a
                href="https://wa.me/6287883924957"
                target="_blank"
                className="block text-cyan-400 hover:text-cyan-300"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/jasasuruhsurabaya72?igsh=MzZvNGo2cmw3cDNh"
                target="_blank"
                className="block text-cyan-400 hover:text-cyan-300"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@originalsurabaya?_r=1&_t=ZS-98022YPAbOT"
                target="_blank"
                className="block text-cyan-400 hover:text-cyan-300"
              >
                TikTok
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Jasa Suruh Surabaya. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}