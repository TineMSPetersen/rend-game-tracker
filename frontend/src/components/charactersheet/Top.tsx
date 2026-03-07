type TopProps = {
  name: string;
  stats: {
    judgement: number;
    optimization: number;
    charisma: number;
    knowledge: number;
    endurance: number;
    yield: number;
  }
  xp: number;
  gs: number;
  origin: string;
  alignment: string;
}

const Top = ({ name, stats, xp, gs, origin, alignment }: TopProps) => {
  return (
    <section id="top" className="w-full grid grid-cols-[4fr_4fr_6fr] gap-15">
        <div className="flex gap-2 items-center border-2 border-black rounded-md py-2 px-4 h-fit">
          <h2 className="text-xl text-black">{name}</h2>
          <div className="mt-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        <div>
          <ul className="flex gap-5 w-full">
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats?.judgement}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                J
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Judgement
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats.optimization}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                O
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Optimization
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats.charisma}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                C
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Charisma
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats.knowledge}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                K
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Knowledge
              </div>
            </li>
            <li className="flex flex-col items-center group relative">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats.endurance}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                E
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Endurance
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {stats.yield}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Y
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Yield
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 w-full justify-between">
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {xp}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                XP
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {gs}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                GS
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {origin}
              </div>
              <div className="-mt-2 w-14 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                ORGN
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {alignment}
              </div>
              <div className="-mt-2 w-14 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                ALIG
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Top