import {
  BadgeCheck,
  MapPin,
  MessageCircleMore,
  Zap,
} from "lucide-react";

const stats = [
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Membalas chat dengan cepat dan siap membantu setiap hari.",
  },
  {
    icon: BadgeCheck,
    title: "Terpercaya",
    desc: "Pelayanan jujur, aman, dan mengutamakan kepuasan pelanggan.",
  },
  {
    icon: MessageCircleMore,
    title: "Ramah",
    desc: "Selalu melayani dengan sopan dan komunikasi yang nyaman.",
  },
  {
    icon: MapPin,
    title: "Area Surabaya",
    desc: "Siap membantu di seluruh wilayah Surabaya dan sekitarnya.",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Kenapa Memilih Kami?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Solusi Praktis untuk Kebutuhan Anda
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-8">
            Kami hadir untuk membantu masyarakat dan para perantau
            di Surabaya dengan pelayanan yang cepat, aman,
            dan dapat dipercaya.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon size={32} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}