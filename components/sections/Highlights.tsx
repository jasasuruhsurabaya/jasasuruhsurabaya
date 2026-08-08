import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Survey Kos Budget 400 Ribuan",
    category: "🏠 Survey Kos",
    views: "490 RB Views",
    image: "/highlights/survey-kos.jpg",
    link: "https://www.tiktok.com/@originalsurabaya/video/7665643834696584469",
  },
  {
    title: "Hidup di Surabaya Sendirian",
    category: "❤️ Anak Rantau",
    views: "2,8 JT Views",
    image: "/highlights/anak-rantau.jpg",
    link: "https://www.tiktok.com/@originalsurabaya/video/7666816902727077141",
  },
  {
    title: "Korban Mamikos",
    category: "💡 Edukasi",
    views: "218 RB Views",
    image: "/highlights/korban-mamikos.jpg",
    link: "https://www.tiktok.com/@originalsurabaya",
  },
  {
    title: "Jastip Polo",
    category: "📦 Jasa Titip",
    views: "6,9 RB Views",
    image: "/highlights/jastip.jpg",
    link: "https://www.tiktok.com/@originalsurabaya",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-[#08111f]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Dokumentasi
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Dokumentasi & Highlight
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Dokumentasi langsung dari aktivitas kami dan konten TikTok
            sebagai bukti pelayanan kepada pelanggan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {videos.map((video) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
            >
              <div className="relative h-72">

                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="rounded-full bg-white/90 p-5 transition group-hover:scale-110">
                    <Play
                      size={34}
                      className="text-[#08111f] fill-[#08111f]"
                    />
                  </div>

                </div>

              </div>

              <div className="p-6">

                <p className="text-cyan-400 text-sm">
                  {video.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {video.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-gray-400">
                    {video.views}
                  </span>

                  <span className="flex items-center gap-2 text-cyan-400">
                    Tonton
                    <ExternalLink size={18} />
                  </span>

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}