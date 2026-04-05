import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans flex flex-col items-center justify-center selection:bg-pink-500 selection:text-white pb-20">
      {/* Title section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter border-4 border-black p-4 bg-yellow-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] -rotate-2 inline-block">
          Ha Tae-Hyun
        </h1>
        <div className="mt-6 flex justify-center">
          <p className="text-xl sm:text-2xl font-bold bg-cyan-300 border-4 border-black inline-block px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-1">
            2003년생 프로필
          </p>
        </div>
      </header>

      {/* Main card grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Education Card */}
        <section className="group bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-2">Education</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="bg-pink-400 border-2 border-black p-2 font-bold whitespace-nowrap inline-block text-center shadow-[4px_4px_0px_rgba(0,0,0,1)]">학교</div>
                <p className="text-xl font-bold">한양대학교 서울 캠퍼스</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="bg-green-400 border-2 border-black p-2 font-bold whitespace-nowrap inline-block text-center shadow-[4px_4px_0px_rgba(0,0,0,1)]">전공</div>
                <p className="text-xl font-bold">유기나노공학과 2학년</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Card */}
        <section className="group bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-black mb-6 border-b-4 border-black pb-2">Interests / Goals</h2>
          <div className="space-y-4">
            <div className="bg-blue-300 border-2 border-black p-4 font-bold text-lg hover:bg-yellow-300 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">
              🚀 반도체 유기 소재 개발
            </div>
            <div className="bg-orange-300 border-2 border-black p-4 font-bold text-lg hover:bg-pink-300 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer">
              🏎️ 자동차 유기 소재 개발
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-16 text-center">
        <div className="bg-white border-4 border-black px-6 py-3 font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] text-lg inline-block">
          Welcome to my brutally honest profile!
        </div>
      </footer>
    </div>
  );
}
