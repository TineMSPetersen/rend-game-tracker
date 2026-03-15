import { useState } from "react";

type Mech = {
  structure: number;
  core: number;
  cockpit: number;
  components: {
    name: string;
    shortening: string;
    structure: number;
  };
};

type StructureProps = {
  mech: Mech;
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const UpdateStructure = ({
  mech,
  backendUrl,
  characterId,
  setAction,
}: StructureProps) => {

  const [ ttl, setTtl ] = useState(mech.structure)
  const [ core, setCore ] = useState(mech.core)
  const [ cockpit, setCockpit ] = useState(mech.cockpit)

  return (
    <div className="min-w-120">
      <h3 className="text-xl font-bold mb-10">Update Structure</h3>
      <form>

      </form>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          <div className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1">-</div>
          <div className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mech.structure}
            </div>
            <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              TTL
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Total Structure
            </div>
          </div>
          <div className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1">+</div>
        </div>
        <div className="flex gap-2">
          <button>-</button>
          <div className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mech.cockpit}
            </div>
            <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              Cockpit
            </div>
          </div>
          <button>+</button>
        </div>
        <div className="flex gap-2">
          <button>-</button>
          <div className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mech.core}
            </div>
            <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              Core
            </div>
          </div>
          <button>+</button>
        </div>
        
      </div>
    </div>
  );
};

export default UpdateStructure;
