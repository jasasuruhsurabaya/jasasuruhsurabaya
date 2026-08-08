export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Hubungi Kami",
      desc: "Chat melalui WhatsApp dan jelaskan kebutuhan Anda.",
    },
    {
      number: "02",
      title: "Konfirmasi",
      desc: "Kami memberikan estimasi harga dan waktu pengerjaan.",
    },
    {
      number: "03",
      title: "Pengerjaan",
      desc: "Tim kami akan mengerjakan sesuai permintaan Anda.",
    },
    {
      number: "04",
      title: "Selesai",
      desc: "Layanan selesai dan pembayaran dilakukan sesuai kesepakatan.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Cara Kerja
          </h2>

          <p className="text-gray-400 mt-3">
            Hanya 4 langkah mudah untuk menggunakan layanan kami.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-cyan-400 text-4xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}