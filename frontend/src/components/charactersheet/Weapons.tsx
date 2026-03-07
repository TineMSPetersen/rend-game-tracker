type Ammo = {
  ammoId: {
    name: string;
  };
  amount: number;
  selected: boolean;
};

type Gun = {
  gunId: {
    name: string;
  };
  ammo: Ammo[];
};

type WeaponProps = {
  gun: Gun[];
};

const Weapons = ({ gun }: WeaponProps) => {
  return (
    <section id="Weapons">
      <h3 className="text-lg mb-5">Weapons:</h3>
      <ul className="flex flex-col gap-2">
        {gun.map((item, index) => (
          <li key={index} className="flex gap-5 w-full">
            <div className="border-2 border-black rounded-md py-2 px-4 w-full">
              {item.gunId.name} {/* gun name from populated gunId */}
            </div>
            <div className="border-2 border-black rounded-md py-2 px-4 w-full">
              {item.ammo.map((ammo, ammoIndex) => (
                <span key={ammoIndex} className="text-md">
                  {ammo.ammoId.name} [ {ammo.amount} ]
                  {ammo.selected && (
                    <span className="text-xs font-bold"> (Equipped)</span>
                  )}
                  {ammoIndex < item.ammo.length - 1 && " - "}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Weapons;
