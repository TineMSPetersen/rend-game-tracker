type Component = {
  structure: number;
  shortening: string;
  name: string;
};

type Mech = {
  stats: {
    movement: number;
    kn: number;
    ch: number;
    em: number;
    th: number;
    ex: number;
    ewar: number;
  };
  image: string;
  structure: {
    total: number;
    cockpit: number;
    core: number;
    components: Component[];
  };
};

type Structure = {
  total: number;
  cockpit: number;
  core: number;
  components: Component[];
};

type MechProps = {
  mech: Mech;
  structure: Structure;
};

const Mech = ({ mech, structure }: MechProps) => {

  return (
    <section
      id="mech"
      className="grid grid-cols-[2fr_5fr_4fr] gap-10 items-center"
    >
      <section id="stats">
        <div className="flex flex-col items-center justify-center mb-5 relative group">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
            {mech.stats.movement}
          </div>
          <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
            M
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
            Movement
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-5">
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mech.stats.kn}
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
              {mech.stats.ch}
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
              {mech.stats.em}
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
              {mech.stats.th}
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
              {mech.stats.ex}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              EX
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Explosive
            </div>
          </li>
          <li className="flex flex-col items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
              {mech.stats.ewar}
            </div>
            <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              EW
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Electronic Warfare
            </div>
          </li>
        </ul>
      </section>

      <img src={mech.image} alt="" />

      <section
        id="structure"
        className="flex gap-20 justify-center items-center"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center relative group">
            <div
              className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold ${structure.total < 1 ? "bg-red-300" : "bg-white"}`}
            >
              {structure.total}
            </div>
            <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              TTL
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Total Structure
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold ${
                structure.cockpit < 1
                  ? "bg-red-300"
                  : structure.cockpit < mech.structure.cockpit / 3
                    ? "bg-yellow-200"
                    : structure.cockpit > mech.structure.cockpit
                      ? "bg-teal-200"
                      : "bg-white"
              }`}
            >
              {structure.cockpit}
            </div>
            <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              Cockpit
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold ${
                structure.core < 1
                  ? "bg-red-300"
                  : structure.core < mech.structure.core / 3
                    ? "bg-yellow-200"
                    : structure.core > mech.structure.core
                      ? "bg-teal-200"
                      : "bg-white"
              }`}>
              {structure.core}
            </div>
            <div className="-mt-2 w-15 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              Core
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-5">
          {structure.components.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center relative group"
            >
              <div className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold ${
                item.structure < 1
                  ? "bg-red-300"
                  : item.structure < (mech.structure.components.find(c => c.shortening === item.shortening)?.structure ?? 0) / 3
                    ? "bg-yellow-200"
                    : structure.core > mech.structure.core
                      ? "bg-teal-200"
                      : "bg-white"
              }`}>
                {item.structure}
              </div>
              <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                {item.shortening}
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Mech;
