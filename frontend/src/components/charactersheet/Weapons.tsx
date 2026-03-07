type Ammo = {
  ammoId: {
    name: string;
    damage_type: string;
    strength: number;
    damage: number;
    special_effects: string;

  };
  amount: number;
  selected: boolean;
};

type Gun = {
  gunId: {
    name: string;
    nickname: string;
    range_min: number;
    range_max: number;
    shots: number | string;
    effects: {
      type: string;
      modifier: number;
      positive: boolean;
    }[];
    type: string;
    subtype: string;
    keywords: string[];
    description: string;
  };
  ammo: Ammo[];
  equipped: boolean;
};

type WeaponProps = {
  gun: Gun[];
};

const Weapons = ({ gun }: WeaponProps) => {
  return (
    <section id="Weapons">
      <h3 className="text-lg mb-5">Weapons:</h3>
      <ul className="flex flex-col gap-2">
        {gun.map(
          (item, index) =>
            item.equipped && (
              <li key={index} className="flex gap-5 w-full ">
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
                        <p className="text-xl">{item.gunId.type} | {item.gunId.subtype}</p>
                        <p className="text-lg">
                          {item.gunId.keywords.map((keyword, keywordIndex) => (
                            <span key={keywordIndex}>{keywordIndex > 0 && " - "}[ {keyword} ]</span>
                          ))}
                        </p>
                        <p className="text-sm">{item.gunId.description}</p>
                      </div>
                </div>
                <div className="border-2 border-black rounded-md py-2 px-4 w-full flex flex-col gap-2">
                  {item.ammo.map((ammo, ammoIndex) => (
                    <div className="group relative">
                      <p
                        key={ammoIndex}
                        className={` text-base ${ammo.selected ? "font-bold" : "text-gray-500"}`}
                      >
                        {ammo.ammoId.name} [ {ammo.amount} ]
                        {ammo.selected && (
                          <span className="text-xs font-bold"> (Equipped)</span>
                        )}
                      </p>
                      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-lg rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-9999 w-100 min-w-100 flex flex-col gap-2">
                        <p className="text-xl">{ammo.ammoId.damage_type} | Strength: {ammo.ammoId.strength} | Damage: {ammo.ammoId.damage}</p>
                        {ammo.ammoId.special_effects != "none" && <p>{ammo.ammoId.special_effects}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ),
        )}
      </ul>
    </section>
  );
};

export default Weapons;
