import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nabila",
    customer: [
      "Kak, sumpah makasih banget ya udah bantuin aku selama di Surabaya. 🥹🙏",
      "Aku anak perantauan yang baru pindah, jadi masih bingung harus mulai dari mana.",
      "Untung nemu Jasa Suruh Surabaya. Survey kosnya detail banget, foto sama videonya lengkap jadi aku lebih yakin sebelum pilih kos.",
    ],
    admin: [
      "Sama-sama kak 🤍",
      "Senang banget bisa membantu. Semoga betah di Surabaya ya, kalau nanti butuh bantuan tinggal chat aja. 😊",
    ],
  },
  {
    name: "Kevin",
    customer: [
      "Kak, aku udah follow dari lama.",
      "Jujur konten-konten kakak ngebantu banget buat orang yang baru tinggal di Surabaya.",
      "Sekarang kalau lagi cari rekomendasi tempat atau butuh bantuan, yang pertama kepikiran pasti JSS. 😄",
    ],
    admin: [
      "Wah makasih banyak kak. 🥹",
      "Semoga konten dan layanan kami bisa terus bermanfaat buat banyak orang ya. 🙌",
    ],
  },
  {
    name: "Dinda",
    customer: [
      "Kak, aku followers sejati JSS wkwkwk. 🤣",
      "Udah beberapa kali pakai jasanya buat titip beli sama ambil barang.",
      "Pelayanannya selalu ramah, cepat, dan nggak pernah bikin kecewa.",
      "Semoga makin rame ya kak. 💚",
    ],
    admin: [
      "Aamiin, makasih banyak ya kak. 🥹🤍",
      "Support dari kakak berarti banget buat kami. Semoga JSS bisa terus berkembang.",
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Cerita dari Pelanggan
          </h2>

          <p className="mt-4 text-gray-400">
            Beberapa pesan yang kami terima dari pelanggan Jasa Suruh Surabaya.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-700 bg-[#0f172a] p-6 shadow-xl hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-green-400 text-sm">
                    ● Online
                  </p>
                </div>

              </div>

              {/* Customer Bubble */}
              <div className="bg-slate-800 rounded-2xl p-4 text-gray-200 space-y-2 mb-4">

                {item.customer.map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}

                <p className="text-right text-xs text-gray-500">
                  10:24 ✓✓
                </p>

              </div>

              {/* Admin Bubble */}
              <div className="bg-green-600 rounded-2xl p-4 text-white space-y-2">

                {item.admin.map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}

                <p className="text-right text-xs text-green-100">
                  10:26 ✓✓
                </p>

              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-6">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}