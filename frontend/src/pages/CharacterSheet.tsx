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

type CharacterSheetProps = {
  backendUrl: string;
};

const CharacterSheet: React.FC<CharacterSheetProps> = ({ backendUrl }) => {
  const characterId = useParams();
  const [characterInfo, setCharacterInfo] = useState<any>(null);

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

  if (!characterInfo) return <div>Loading...</div>;

  return (
    <div>
      <Top
        name={characterInfo.name}
        alive={characterInfo.alive}
        stats={characterInfo.stats}
        xp={characterInfo.xp}
        gs={characterInfo.gs}
        origin={characterInfo.origin}
        alignment={characterInfo.alignment}
      />
      <div className="grid grid-cols-[2fr_2fr_6fr] gap-10">
        <section id="left" className="flex flex-col gap-10">
          <Reputation reputation={characterInfo.reputation} />
          <StatusEffects status_effects={characterInfo.status_effects} />
        </section>
        <section id="middle">
          <MechUpgrades mechUpgrades={characterInfo.mechUpgrades} />
        </section>
        <section id="right" className="flex flex-col gap-10">
          <Weapons gun={characterInfo.gun} />
        </section>
      </div>

        <Mech mech={characterInfo.mech} />
      <hr className="my-10"></hr>

      <div className="grid grid-cols-[2fr_5fr] gap-10">
        <CharacterSkills characterSkills={characterInfo.skills} />
        <Inventory inventory={characterInfo.inventory} />
      </div>
    </div>
  );
};

export default CharacterSheet;
