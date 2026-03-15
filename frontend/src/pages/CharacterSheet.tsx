import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Top from "../components/charactersheet/Top";
import Reputation from "../components/charactersheet/Reputation";
import StatusEffects from "../components/charactersheet/StatusEffects";
import MechUpgrades from "../components/charactersheet/MechUpgrades";
import Weapons from "../components/charactersheet/Weapons";
import Mech from "../components/charactersheet/Mech";
import CharacterSkills from "../components/charactersheet/CharacterSkills";
import Inventory from "../components/charactersheet/Inventory";
import Melee from "../components/charactersheet/Melee";
import UseItem from "../components/popup/UseItem";

type CharacterSheetProps = {
  backendUrl: string;
};

const CharacterSheet: React.FC<CharacterSheetProps> = ({ backendUrl }) => {
  const characterId = useParams();
  console.log(characterId.id)
  const [characterInfo, setCharacterInfo] = useState<any>(null);
  const [action, setAction] = useState("none");

  const getCharacterInfo = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/character/get-character-info`,
        { characterId },
      );

      if (response.data.success) {
        setCharacterInfo(response.data.characterData);
        console.log(response.data.characterData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacterInfo();
  }, []);

   useEffect(() => {
    getCharacterInfo();
  }, [action]);

  if (!characterInfo) return <div>Loading...</div>;

  return (
    <div>
      {action != "none" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="bg-white rounded-lg shadow-xl p-6 relative">
            <div className="flex justify-end w-full">
              <button onClick={() => setAction('none')} className="text-gray-500 hover:text-gray-800 cursor-pointer mb-4">
              ✕
            </button>
            </div>
            
            <UseItem inventory={characterInfo.inventory} backendUrl={backendUrl} characterId={characterId.id ?? ""} setAction={setAction} />
          </div>
        </div>
      )}

      <div className="flex justify-center gap-10 pb-10">
        <button className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5">
          Attack
        </button>
        <button
          onClick={() => setAction("useitem")}
          className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5"
        >
          Use Item
        </button>
        <button className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5">
          Update Structure
        </button>
        <button className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5">
          Reload / Change Ammo
        </button>
        <button className="py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-5">
          Add / Remove Status Effect
        </button>
      </div>
      <Top
        name={characterInfo.name}
        alive={characterInfo.alive}
        stats={characterInfo.stats}
        xp={characterInfo.xp}
        gs={characterInfo.gs}
        origin={characterInfo.origin}
        alignment={characterInfo.alignment}
      />
      <div id="mech" className="py-10 grid grid-cols-[5fr_2fr] gap-10">
        <Mech mech={characterInfo.mech} />
        <div className="flex flex-col gap-10">
          <Inventory inventory={characterInfo.inventory} />
          <StatusEffects status_effects={characterInfo.status_effects} />
        </div>
      </div>

      <div className="grid grid-cols-[3fr_6fr] gap-10">
        <section id="left" className="flex flex-col gap-10">
          <MechUpgrades mechUpgrades={characterInfo.mechUpgrades} />
          <CharacterSkills characterSkills={characterInfo.skills} />
        </section>
        <section id="right" className="flex flex-col gap-10">
          <Weapons gun={characterInfo.gun} />
          <Melee melee={characterInfo.melee} />
        </section>
      </div>

      <hr className="my-10"></hr>
      <hr className="my-10"></hr>

      <Top
        name={characterInfo.name}
        alive={characterInfo.alive}
        stats={characterInfo.stats}
        xp={characterInfo.xp}
        gs={characterInfo.gs}
        origin={characterInfo.origin}
        alignment={characterInfo.alignment}
      />
      <div className="grid grid-cols-[2fr_4fr_4fr] gap-10 mt-10">
        <Reputation reputation={characterInfo.reputation} />
        <CharacterSkills characterSkills={characterInfo.skills} />
        <Inventory inventory={characterInfo.inventory} />
      </div>
    </div>
  );
};

export default CharacterSheet;
