type Melee = {
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

type WeaponProps = {
  melee: Melee[];
};

const Melee = ({ melee }: WeaponProps) => {
  return (
    <section id="melee">
      <h3 className="text-2xl font-bold mb-5">Melee Weapons:</h3>
      <ul className="flex flex-col gap-2">
        {melee.map((item, index) => (
          <li key={index} className="flex gap-5 w-full ">
            <div className="border-2 border-black rounded-md py-2 px-4 w-full flex flex-col justify-center items-center group relative">
              <p className="text-xl">{item.name}</p>
              <p className="text-lg">
                WS: {item.ws} | Attacks:{" "}
                {item.attacks.map((attack: Attack, index) => (
                  <span>
                    {attack.condition === "none" ? "" : attack.condition}{" "}
                    {attack.number} {index > 0 && " - "}
                  </span>
                ))}
              </p>
              <div className="flex gap-2">
                <p className="font-bold">Damage Type:</p>
                {item.damage_type.map((type: Damage_type, index) => (
                  <p key={index}>
                    {type.type} - Strength: {type.strength}
                    {type.condition != "none" ? ` | ${type.condition}` : ""}
                  </p>
                ))}
              </div>

              <div className="flex gap-2">
                <p className="font-bold">Damage:</p>
                {item.damage.map((damage: Damage, index) => (
                  <p key={index}>
                    {damage.condition != "none" ? `${damage.condition} | ` : ""}
                    {damage.number}
                  </p>
                ))}
              </div>

              {item.special_rules != "" && item.special_rules != "none" ? (
                <p className="text-sm mt-2">{item.special_rules}</p>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Melee;
