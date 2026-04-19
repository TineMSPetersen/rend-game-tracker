import { assets } from "../../assets/assets";

type ReputationProps = {
  reputation: {
    raytech: { rep: number; status: string };
    smith: { rep: number; status: string };
    shimizawa: { rep: number; status: string };
    ugc: { rep: number; status: string };
    amg: { rep: number; status: string };
  };
};

const statusInfo = {
  abhorred: { text: "Abhorred", bg: "bg-slate-900" },
  detested: { text: "Detested", bg: "bg-rose-600" },
  disliked: { text: "Disliked", bg: "bg-orange-500" },
  neutral: { text: "Neutral", bg: "bg-slate-300" },
  liked: { text: "Liked", bg: "bg-sky-500" },
  valued: { text: "Valued", bg: "bg-emerald-400" },
  cherished: { text: "Cherished", bg: "bg-purple-400" },
};

const Reputation = ({ reputation }: ReputationProps) => {
  const getStatusColor = (status: string) =>
    statusInfo[status as keyof typeof statusInfo]?.bg ?? "bg-white";

  const getStatusText = (status: string) =>
    statusInfo[status as keyof typeof statusInfo]?.text ?? "Unknown";

  return (
    <div id="reputation">
      <h3 className="text-2xl font-bold mb-5">Reputation</h3>
      <ul className="flex flex-col gap-2">

        <li className="flex gap-2 items-center">
          <div className="relative group">
            <img className="w-15 border-2 border-black rounded-md" src={assets.raytech} alt="raytech" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Raytech
            </div>
          </div>
          <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {reputation.raytech.rep}
          </div>
          <div className={`relative group mt-1 w-7 h-7 rounded-full border-2 border-black ${getStatusColor(reputation.raytech.status)}`}>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {getStatusText(reputation.raytech.status)}
            </div>
          </div>
        </li>

        <li className="flex gap-2 items-center">
          <div className="relative group">
            <img className="w-15 border-2 border-black rounded-md" src={assets.smith} alt="smith" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Smith and Cox
            </div>
          </div>
          <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {reputation.smith.rep}
          </div>
          <div className={`relative group mt-1 w-7 h-7 rounded-full border-2 border-black ${getStatusColor(reputation.smith.status)}`}>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {getStatusText(reputation.smith.status)}
            </div>
          </div>
        </li>

        <li className="flex gap-2 items-center">
          <div className="relative group">
            <img className="w-15 border-2 border-black rounded-md" src={assets.shimizawa} alt="shimizawa" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Shimizawa
            </div>
          </div>
          <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {reputation.shimizawa.rep}
          </div>
          <div className={`relative group mt-1 w-7 h-7 rounded-full border-2 border-black ${getStatusColor(reputation.shimizawa.status)}`}>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {getStatusText(reputation.shimizawa.status)}
            </div>
          </div>
        </li>

        <li className="flex gap-2 items-center">
          <div className="relative group">
            <img className="w-15 border-2 border-black rounded-md" src={assets.ugc} alt="ugc" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              United Gas Corp
            </div>
          </div>
          <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {reputation.ugc.rep}
          </div>
          <div className={`relative group mt-1 w-7 h-7 rounded-full border-2 border-black ${getStatusColor(reputation.ugc.status)}`}>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {getStatusText(reputation.ugc.status)}
            </div>
          </div>
        </li>

        <li className="flex gap-2 items-center">
          <div className="relative group">
            <img className="w-15 border-2 border-black rounded-md" src={assets.amg} alt="amg" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Asteroid Mining Guild
            </div>
          </div>
          <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {reputation.amg.rep}
          </div>
          <div className={`relative group mt-1 w-7 h-7 rounded-full border-2 border-black ${getStatusColor(reputation.amg.status)}`}>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {getStatusText(reputation.amg.status)}
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Reputation;