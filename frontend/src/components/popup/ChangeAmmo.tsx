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
  };
  selected: boolean;
};

type Gun = {
  _id: string;
  gunId: {
    name: string;
    nickname: string;
  };
  ammo: Ammo[];
};

type GunProps = {
  gun: Gun[];
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const ChangeAmmo = ({ gun, backendUrl, characterId, setAction }: GunProps) => {
  const [selectedAmmo, setSelectedAmmo] = useState<Record<number, string>>(
  () =>
    gun.reduce(
      (acc, item, index) => {
        const selected = item.ammo.find((ammo) => ammo.selected);
        if (selected) acc[index] = selected._id;
        return acc;
      },
      {} as Record<number, string>,
    ),
);

  const handleChange = (index: number, value: string) => {
    setSelectedAmmo((prev) => ({ ...prev, [index]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const ammoSelections = gun.map((item, index) => {
        console.log("item._id:", item._id);
        console.log("full item:", item);
        return {
          gunId: item._id,
          ammoId: selectedAmmo[index] ?? null,
        };
      });
      const response = await axios.post(
        `${backendUrl}/api/action/change-ammo`,
        { characterId, ammoSelections },
      );

      if (response.data.success) {
        setAction("none");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 min-w-96">
      {gun.map((item: Gun, index) => (
        <div key={index}>
          <label className="text-lg" htmlFor={`gun-${index + 1}`}>
            {item.gunId.name} - {item.gunId.nickname}
          </label>
          <select
            className="block rounded-md border-2 border-black px-4 py-2"
            name={`gun-${index + 1}`}
            id={`gun-${index + 1}`}
            value={selectedAmmo[index] ?? ""}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            <option value="">Select Ammo</option>
            {item.ammo.map((ammo: Ammo, index: number) => (
              <option value={ammo._id} key={index}>
                {ammo.amount}x {ammo.ammoId.name} | {ammo.ammoId.damage_type} -
                Strength:
                {ammo.ammoId.strength} - Damage: {ammo.ammoId.damage}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button
        type="submit"
        className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5"
      >
        Save
      </button>
    </form>
  );
};

export default ChangeAmmo;
