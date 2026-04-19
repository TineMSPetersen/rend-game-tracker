type ShieldProps = {
  shield: number;
  mechShield: {
    kn: number;
    em: number;
    th: number;
    ch: number;
    ex: number;
    structure: number;
  };
};

const Shield = ({ shield, mechShield }: ShieldProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-5">Shield:</h3>
        <div className="flex flex-col items-center relative group mb-5">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {shield}
          </div>
          <div className="-mt-2 w-30 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
            STRUCTURE
          </div>
        </div>
        <ul className="flex gap-5">
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mechShield.kn}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              KN
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Kinetic
            </div>
          </li>
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mechShield.ch}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              CH
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Chemical
            </div>
          </li>
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mechShield.em}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              EM
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Electro-Magnetic
            </div>
          </li>
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mechShield.th}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              TH
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Thermal
            </div>
          </li>
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mechShield.ex}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              EX
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Explosive
            </div>
          </li>
        </ul>
      </div>

      <hr className="mt-10" />
    </div>
  );
};

export default Shield;
