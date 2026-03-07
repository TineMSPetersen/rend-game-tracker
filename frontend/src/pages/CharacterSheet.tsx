import { character } from "../assets/data";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type CharacterSheetProps = {
  backendUrl: string;
};

const CharacterSheet: React.FC<CharacterSheetProps> = ({ backendUrl }) => {
  const characterId = useParams();

  const [characterInfo, setCharacterInfo] = useState<any>(null);

  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);

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
      <section id="top" className="w-full grid grid-cols-[4fr_4fr_6fr] gap-15">
        <div className="flex gap-2 items-center border-2 border-black rounded-md py-2 px-4 h-fit">
          <h2 className="text-xl text-black">{characterInfo?.name}</h2>
          <div className="mt-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        <div>
          <ul className="flex gap-5 w-full">
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.judgement}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                J
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Judgement
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.optimization}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                O
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Optimization
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.charisma}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                C
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Charisma
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.knowledge}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                K
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Knowledge
              </div>
            </li>
            <li className="flex flex-col items-center group relative">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.endurance}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                E
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Endurance
              </div>
            </li>
            <li className="flex flex-col items-center relative group">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo.stats?.yield}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Y
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                Yield
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 w-full justify-between">
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo?.xp}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                XP
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo?.gs}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                GS
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo?.origin}
              </div>
              <div className="-mt-2 w-14 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                ORGN
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {characterInfo?.alignment}
              </div>
              <div className="-mt-2 w-14 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                ALIG
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="grid grid-cols-[2fr_2fr_6fr] gap-10">
        <section id="left" className="flex flex-col gap-10">
          <div>
            <h3 className="text-lg mb-5">Reputation</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <div className="relative group">
                  <img className="w-15" src={assets.raytech} alt="raytech" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Raytech
                  </div>
                </div>

                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.reputation?.raytech.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="relative group">
                  <img className="w-15" src={assets.smith} alt="raytech" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Smith and Cogs
                  </div>
                </div>

                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.reputation?.smith.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="relative group">
                  <img className="w-15" src={assets.shimizawa} alt="raytech" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Shimizawa
                  </div>
                </div>
                
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.reputation?.shimizawa.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="relative group">
                  <img className="w-15" src={assets.shimizawa} alt="raytech" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    United Gas Corp
                  </div>
                </div>
                
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.reputation?.vcg.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="relative group">
                  <img className="w-15" src={assets.shimizawa} alt="raytech" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Asteroid Mining Guild
                  </div>
                </div>
                
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.reputation?.nmg.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-5">Status effect:</h3>
            {characterInfo.status_effects?.length === 0 ? (
              <p className="border-2 border-black rounded-md py-2 px-4">
                No status effects
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {characterInfo.status_effects?.map((item, index) => (
                  <li
                    key={index}
                    className="border-2 border-black rounded-md py-2 px-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <section id="middle">
          <h3 className="text-lg mb-5">Upgrades</h3>
          <ul className="flex flex-col gap-2">
            {characterInfo.mechUpgrades?.map((item, index) => (
              <li
                key={index}
                className="border-2 border-black rounded-md py-2 px-4"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </section>
        <section id="right" className="flex flex-col gap-10">
          <section id="Weapons">
            <h3 className="text-lg mb-5">Weapons:</h3>
            <ul className="flex flex-col gap-2">
              {characterInfo?.gun.map((item, index) => (
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

          <section id="mech" className="grid grid-cols-[1fr_4fr_3fr] gap-10">
            <section id="stats">
              <div className="flex flex-col items-center mb-5 relative group">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {characterInfo.mech.stats.movement}
                </div>
                <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                  M
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                  Movement
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-5">
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.kn}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    KN
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Kinetic
                  </div>
                </li>
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.ch}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    CH
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    CHEM
                  </div>
                </li>
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.em}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    EM
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    EM
                  </div>
                </li>
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.th}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    TH
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    TH
                  </div>
                </li>
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.ex}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    EX
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    EX
                  </div>
                </li>
                <li className="flex flex-col items-center relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.stats.ewar}
                  </div>
                  <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    EW
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Electronic Warfare
                  </div>
                </li>
              </ul>
            </section>

            <img src={character.mech_stats.image} alt="" />

            <section id="structure" className="flex gap-10">
              <div>
                <div className="flex flex-col items-center mb-5 relative group">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.structure}
                  </div>
                  <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    TTL
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Total Structure
                  </div>
                </div>

                <div className="flex flex-col items-center mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.cockpit}
                  </div>
                  <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    Cockpit
                  </div>
                </div>

                <div className="flex flex-col items-center mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {characterInfo.mech.core}
                  </div>
                  <div className="-mt-2 w-15 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    Core
                  </div>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-5">
                {characterInfo.mech.components.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center relative group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                      {item.structure}
                    </div>
                    <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                      {item.shortening}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                      {item.name}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </div>
      <hr className="my-10"></hr>

      <div className="grid grid-cols-[2fr_5fr] gap-10">
        <div>
          <h3 className="text-lg mb-5">Skills:</h3>
          {characterInfo.skills?.length === 0 ? (
            <p className="border-2 border-black rounded-md py-2 px-4">
              No Skills
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {characterInfo.skills?.map((item, index) => (
                <li
                  key={index}
                  className="border-2 border-black rounded-md py-2 px-4 relative group overflow-visible"
                >
                  <p>{item.name}</p>
                  <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[9999] w-[600px] min-w-[600px]">
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="text-lg mb-5">Inventory:</h3>
          <div className="grid grid-cols-2">
            {characterInfo.inventory?.length === 0 ? (
              <p className="border-2 border-black rounded-md py-2 px-4">
                Inventory Empty
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {characterInfo.inventory?.map((item, index) => (
                  <li
                    key={index}
                    className="border-2 border-black rounded-md py-2 px-4 relative group overflow-visible"
                  >
                    <p>
                      {item.itemId.name} x{item.amount}
                    </p>

                    <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[9999] w-[600px] min-w-[600px]">
                      {item.itemId.effects.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
