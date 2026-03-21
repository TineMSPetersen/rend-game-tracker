import axios from "axios";
import { useState } from "react";

type Ammo = {
  _id: string;
  amount: number;
  ammoId: {
    name: string;
    damage_type: string;
    strength: number;
    damage: number;
    special_effects: string;
  };
  selected: boolean;
};

type Gun = {
  _id: string;
  gunId: {
    name: string;
    nickname: string;
    range_min: number;
    range_max: number;
    shots: number | string;
    effects: {
      type: string;
      positive: boolean;
      modifier: string;
    }[];
    type: string;
    subtype: string;
    keywords: string[];
    description: string;
  };
  ammo: Ammo[];
};

type Melee = {
  _id: string;
  name: string;
  ws: number;
  attacks: Attack[];
  damage_type: Damage_type[];
  damage: Damage[];
  special_rules: string;
};

type Attack = {
  condition: string;
  number: number;
};

type Damage_type = {
  type: string;
  strength: string | number;
  condition: string;
};

type Damage = {
  condition: string;
  number: number | string;
};

type AttackProps = {
  gun: Gun[];
  melee: Melee[];
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const Attack = ({
  gun,
  melee,
  backendUrl,
  characterId,
  setAction,
}: AttackProps) => {
  const [gunState, setGunState] = useState<Gun[]>(gun);
  const [shot, setShot] = useState<Record<number, boolean>>({});

  const handleShoot = async (gunIndex: number) => {
    setGunState((prev) =>
      prev.map((item, i) => {
        if (i !== gunIndex) return item;
        return {
          ...item,
          ammo: item.ammo.map((ammo) =>
            ammo.selected ? { ...ammo, amount: ammo.amount - 1 } : ammo,
          ),
        };
      }),
    );

    setShot((prev) => ({ ...prev, [gunIndex]: true }));

    try {

      const response = await axios.post(
        `${backendUrl}/api/action/attack`,
        { characterId, gunId: gunState[gunIndex]._id },
      );

      if (response.data.success) {
        console.log("fired")
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-5 max-w-200">
      <section className="flex flex-col items-center mb-5">
        <ul className="flex flex-col gap-2 w-full">
          {gun.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-[3fr_2fr_1fr] gap-5 w-full"
            >
              <div className="border-2 border-black rounded-md py-2 px-4 w-full flex flex-col justify-center items-center group relative">
                <p className="text-xl">
                  {item.gunId.name} |{" "}
                  <span className="font-bold">{item.gunId.nickname}</span>
                </p>
                <p>
                  ({item.gunId.range_min}' - {item.gunId.range_max}') |{" "}
                  {item.gunId.shots} shot{item.gunId.shots === 1 ? "" : "s"}{" "}
                  {item.gunId.effects.length > 0 && "| "}
                  {item.gunId.effects.map((effect, effectIndex) => (
                    <span key={effectIndex}>
                      {effect.type} {effect.positive ? "+" : "-"}
                      {effect.modifier}
                      {effectIndex > 0 && " "}
                    </span>
                  ))}
                </p>
                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-9999 w-100 min-w-100 flex flex-col gap-2">
                  <p className="text-xl">
                    {item.gunId.type} | {item.gunId.subtype}
                  </p>
                  <p className="text-lg">
                    {item.gunId.keywords.map((keyword, keywordIndex) => (
                      <span key={keywordIndex}>
                        {keywordIndex > 0 && " - "}[ {keyword} ]
                      </span>
                    ))}
                  </p>
                  <p className="text-sm">{item.gunId.description}</p>
                </div>
              </div>
              <div className="border-2 border-black rounded-md py-2 px-4 w-full flex flex-col gap-2 items-center justify-center">
                {item.ammo
                  .filter((ammo) => ammo.selected)
                  .map((ammo, ammoIndex) => (
                    <div>
                      {ammo.amount > 0 && (
                        <div className="group relative flex flex-col justify-center items-center">
                          <p
                            key={ammoIndex}
                            className={` text-lg ${ammo.selected ? "font-bold" : "text-gray-500"}`}
                          >
                            {ammo.ammoId.name} [ {ammo.amount} ]
                          </p>
                          <p className="text-md">
                            {ammo.ammoId.damage_type} | Strength:{" "}
                            {ammo.ammoId.strength} | Damage:{" "}
                            {ammo.ammoId.damage}
                          </p>
                          {ammo.ammoId.special_effects != "none" && (
                            <p className="text-xs font-bold">
                              Has special effect (Hover for details)
                            </p>
                          )}
                          {ammo.ammoId.special_effects != "none" && (
                            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-9999 w-100 min-w-100 flex flex-col gap-2">
                              {ammo.ammoId.special_effects != "none" && (
                                <p>{ammo.ammoId.special_effects}</p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <button
                disabled={item.ammo.find((ammo) => ammo.selected)?.amount === 0}
                className={`py-2 px-4 rounded-md text-white cursor-pointer ${shot[index] ? "bg-green-500" : "bg-black"} disabled:opacity-50 disabled:cursor-not-allowed`}
                onClick={() => handleShoot(index)}
              >
                🎯 SHOOT
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Attack;
