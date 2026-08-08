import {
  Package,
  House,
  FileText,
  ShoppingCart,
  Coffee,
  PartyPopper,
  ShoppingBag,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Ambil Barang",
    desc: "Membantu mengambil barang dengan aman dan tepat waktu.",
  },
  {
    icon: House,
    title: "Survey Kos",
    desc: "Survey kos lengkap dengan foto dan video sesuai kebutuhan.",
  },
  {
    icon: FileText,
    title: "Antar Dokumen",
    desc: "Pengiriman dokumen dengan cepat, aman, dan terpercaya.",
  },
  {
    icon: ShoppingCart,
    title: "Titip Beli",
    desc: "Membantu membeli makanan, obat, maupun kebutuhan harian.",
  },
  {
    icon: Coffee,
    title: "Temani Nongkrong",
    desc: "Teman untuk menemani aktivitas atau sekadar nongkrong.",
  },
  {
    icon: PartyPopper,
    title: "Temani Acara",
    desc: "Pendamping untuk menghadiri berbagai acara di Surabaya.",
  },
  {
    icon: ShoppingBag,
    title: "Belanja",
    desc: "Membantu berbelanja sesuai daftar kebutuhan Anda.",
  },
  {
    icon: Truck,
    title: "Antar Barang",
    desc: "Mengantarkan barang ke lokasi tujuan dengan aman.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#08111f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Layanan Kami
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Kami siap membantu berbagai kebutuhan Anda di Surabaya
            dengan layanan yang cepat, aman, dan terpercaya.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}