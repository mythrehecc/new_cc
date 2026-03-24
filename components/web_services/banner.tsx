export default function banner() {
  return (
    <section className="relative py-8 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-[#0a1628] via-[#1a2850] to-[#4a3366] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A9EFF] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF5757] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:flex-1 animate-slide-in-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
              Get Your Free Consultation
              <br />Unlock the potential of custom web solutions today!
            </h3>
          </div>

          <div className="lg:flex-none animate-slide-in-right">
            <button className="w-full lg:w-auto bg-[#FF5757] hover:bg-[#ff4040] text-white px-4 lg:px-6 py-2 sm:py-3 rounded-sm font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5757]/50 hover:-translate-y-2 text-xs sm:text-sm relative group overflow-hidden active:scale-95">
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}