export default function Organizers() {
  return (
    <section className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Organized by
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
          <img
            src="/ACIS-FINAL-DRAFT-modified.png"
            alt="ACIS Logo"
            className="h-24 md:h-40 object-contain"
          />
          <div className="text-2xl md:text-3xl font-bold text-gray-400">&</div>
          <img
            src="/SRU_Main_Logo_Colour.png"
            alt="SR University Logo"
            className="h-24 md:h-40 object-contain"
          />
        </div>

        <div className="space-y-2">
          <p className="text-lg md:text-xl text-gray-300">
            <span className="font-semibold text-cyan-400">ACIS</span>
            <span className="text-gray-400"> (Advanced Computing Innovation Society)</span>
          </p>
          <p className="text-gray-400">and</p>
          <p className="text-lg md:text-xl text-gray-300">
            <span className="font-semibold text-cyan-400">School of Computer Science and Artificial Intelligence</span>
            <br />
            <span className="text-gray-400">SR University</span>
          </p>
        </div>
      </div>
    </section>
  );
}
