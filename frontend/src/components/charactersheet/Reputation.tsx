import { assets } from "../../assets/assets";

type ReputationProps = {
  reputation: {
    raytech: {
      rep: number;
      status: string;
    },
    smith: {
      rep: number;
      status: string;
    },
    shimizawa: {
      rep: number;
      status: string;
    },
    vcg: {
      rep: number;
      status: string;
    },
    nmg: {
      rep: number;
      status: string;
    }
  }
};

const Reputation = ({reputation}: ReputationProps) => {
  return (
      <div id="reputation">
        <h3 className="text-lg mb-5">Reputation</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <div className="relative group">
              <img className="w-15" src={assets.raytech} alt="raytech" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Raytech
              </div>
            </div>

            <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {reputation.raytech.rep}
            </div>
            <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="relative group">
              <img className="w-15" src={assets.smith} alt="raytech" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Smith and Cogs
              </div>
            </div>

            <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {reputation.smith.rep}
            </div>
            <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="relative group">
              <img className="w-15" src={assets.shimizawa} alt="raytech" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Shimizawa
              </div>
            </div>

            <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {reputation.shimizawa.rep}
            </div>
            <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="relative group">
              <img className="w-15" src={assets.shimizawa} alt="raytech" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                United Gas Corp
              </div>
            </div>

            <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {reputation?.vcg.rep}
            </div>
            <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="relative group">
              <img className="w-15" src={assets.shimizawa} alt="raytech" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Asteroid Mining Guild
              </div>
            </div>

            <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {reputation.nmg.rep}
            </div>
            <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
          </li>
        </ul>
      </div>
  );
};

export default Reputation;
