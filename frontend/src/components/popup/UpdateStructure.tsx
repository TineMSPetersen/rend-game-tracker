import axios from "axios";
import { useState } from "react";

type Structure = {
  total: number;
  core: number;
  cockpit: number;
  components: {
    name: string;
    shortening: string;
    structure: number;
  }[];
  shield: number;
};

type MechStructure = {
  structure: number;
  core: number;
  cockpit: number;
  components: {
    name: string;
    shortening: string;
    structure: number;
  }[];
};

type StructureProps = {
  structure: Structure;
  mechStructure: MechStructure;
  hasShield: boolean;
  mechShield: {
    structure: number;
  };
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const UpdateStructure = ({
  structure,
  mechStructure,
  hasShield,
  mechShield,
  backendUrl,
  characterId,
  setAction,
}: StructureProps) => {
  const [core, setCore] = useState(structure.core);
  const [cockpit, setCockpit] = useState(structure.cockpit);
  const [shield, setShield] = useState(structure.shield);

  const [showRegen, setShowRegen] = useState(false);
  const [total, setTotal] = useState(structure.total);

  const [componentValues, setComponentValues] = useState<
    Record<string, number>
  >(
    Object.fromEntries(
      structure.components.map((component) => [
        component.name,
        component.structure,
      ]),
    ),
  );

  const componentDamage = structure.components.reduce((sum, c) => {
    return sum + (c.structure - (componentValues[c.name] ?? c.structure));
  }, 0);

  const rawDamage =
    structure.core - core + (structure.cockpit - cockpit) + componentDamage;
  const damageTaken = Math.max(0, Math.min(structure.total, rawDamage));

  const onSubmitHandler = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/action/structure`, {
        characterId,
        structure: {
          core,
          cockpit,
          shield,
          damageTaken,
          total: structure.total - damageTaken,
          components: structure.components.map((c) => ({
            ...c,
            structure: componentValues[c.name],
          })),
        },
      });

      if (response.data.success) {
        setAction("none");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const regenTTL = async () => {
  try {
    const response = await axios.post(`${backendUrl}/api/action/structure`, {
      characterId,
      structure: {
        core,
        cockpit,
        shield,
        damageTaken: 0,
        total,
        components: structure.components.map((c) => ({
          ...c,
          structure: componentValues[c.name],
        })),
      },
    });

    if (response.data.success) {
      setAction("none");
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="min-w-120">
      <h3 className="text-xl font-bold mb-10">Update Structure</h3>
      <div className="flex flex-col gap-10">
        {hasShield && (
          <div className="flex justify-center">
            <div className="flex gap-2 items-center">
              <div
                onClick={() => setShield(shield - 1)}
                className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
              >
                -
              </div>
              <div className="flex flex-col items-center relative group">
                <input
                  className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    shield < 1
                      ? "bg-red-300"
                      : shield > mechShield.structure
                        ? "bg-teal-200"
                        : "bg-white"
                  }`}
                  type="number"
                  value={shield}
                  onChange={(e) => setShield(Number(e.target.value))}
                />
                <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                  Shield
                </div>
              </div>
              <div
                onClick={() => setShield(shield + 1)}
                className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
              >
                +
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-20">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setCockpit(cockpit - 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              -
            </div>
            <div className="flex flex-col items-center relative group">
              <input
                className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                  cockpit < 1
                    ? "bg-red-300"
                    : cockpit < mechStructure.cockpit / 3
                      ? "bg-yellow-200"
                      : cockpit > mechStructure.cockpit
                        ? "bg-teal-200"
                        : "bg-white"
                }`}
                type="number"
                value={cockpit}
                onChange={(e) => setCockpit(Number(e.target.value))}
              />
              <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Cockpit
              </div>
            </div>
            <div
              onClick={() => setCockpit(cockpit + 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              +
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setCore(core - 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              -
            </div>
            <div className="flex flex-col items-center relative group">
              <input
                className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                  core < 1
                    ? "bg-red-300"
                    : core < mechStructure.core / 3
                      ? "bg-yellow-200"
                      : core > mechStructure.core
                        ? "bg-teal-200"
                        : "bg-white"
                }`}
                type="number"
                value={core}
                onChange={(e) => setCore(Number(e.target.value))}
              />
              <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Core
              </div>
            </div>
            <div
              onClick={() => setCore(core + 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              +
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center">
          {structure.components.map((c) => (
            <div key={c.name} className="flex gap-2 items-center">
              <div
                onClick={() =>
                  setComponentValues((prev) => ({
                    ...prev,
                    [c.name]: prev[c.name] - 1,
                  }))
                }
                className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
              >
                -
              </div>
              <div className="flex flex-col items-center relative group">
                <input
                  className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    componentValues[c.name] < 1
                      ? "bg-red-300"
                      : componentValues[c.name] < c.structure / 3
                        ? "bg-yellow-200"
                        : componentValues[c.name] > c.structure
                          ? "bg-teal-200"
                          : "bg-white"
                  }`}
                  type="number"
                  value={componentValues[c.name]}
                  onChange={(e) =>
                    setComponentValues((prev) => ({
                      ...prev,
                      [c.name]: Number(e.target.value),
                    }))
                  }
                />
                <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                  {c.shortening}
                </div>
              </div>
              <div
                onClick={() =>
                  setComponentValues((prev) => ({
                    ...prev,
                    [c.name]: prev[c.name] + 1,
                  }))
                }
                className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
              >
                +
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-col items-center relative group">
            <div
              className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center ${structure.total - damageTaken < 1 ? "bg-red-300" : "bg-white"}`}
            >
              {structure.total - damageTaken}
            </div>
            <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
              TTL
            </div>
          </div>
          <p className="text-center font-semibold mt-2">
            Total Damage Taken: <span className="font-bold">{damageTaken}</span>
          </p>
        </div>
      </div>
      <button
        onClick={onSubmitHandler}
        className="py-2 px-6 bg-black text-white rounded-md cursor-pointer"
      >
        Confirm
      </button>

      <hr className="py-5" />

      <button onClick={() => setShowRegen(true)}>Regen Structure</button>

      {showRegen === true && (
        <div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => setTotal(total - 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              -
            </div>
            <div className="flex flex-col items-center relative group">
              <input
                className={`w-10 h-10 flex items-center justify-center border-2 border-black rounded-md text-lg font-bold text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                type="number"
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
              />
              <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Total
              </div>
            </div>
            <div
              onClick={() => setTotal(total + 1)}
              className="select-none cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
            >
              +
            </div>
          </div>

          <button
        onClick={regenTTL}
        className="py-2 px-6 bg-black text-white rounded-md cursor-pointer"
      >
        Regen
      </button>
        </div>
      )}
    </div>
  );
};

export default UpdateStructure;
