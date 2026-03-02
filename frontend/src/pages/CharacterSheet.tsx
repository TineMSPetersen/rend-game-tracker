import { character } from "../assets/data";
import { assets } from "../assets/assets";

const CharacterSheet = () => {
  return (
    <div>
      <section id="top" className="w-full grid grid-cols-[4fr_4fr_6fr] gap-15">
        <div className="flex gap-2 items-center border-2 border-black rounded-md py-2 px-4 h-fit">
          <h2 className="text-xl text-black">{character.name}</h2>
          <div className="mt-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        <div>
          <ul className="flex gap-5 w-full">
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats.judgement}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                J
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats.optimization}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                O
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats.charisma}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                C
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats.knowledge}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                K
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats["E?"]}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                E
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.stats["Y?"]}
              </div>
              <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                Y
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 w-full justify-between">
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.xp}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                XP
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.gs}
              </div>
              <div className="-mt-2 w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                GS
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.origin}
              </div>
              <div className="-mt-2 w-14 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                ORGN
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                {character.alignment}
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
                <img className="w-15" src={assets.raytech} alt="raytech" />
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.reputation.raytech.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <img className="w-15" src={assets.smith} alt="raytech" />
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.reputation.smith.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <img className="w-15" src={assets.shimizawa} alt="raytech" />
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.reputation.shimizawa.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <img className="w-15" src={assets.shimizawa} alt="raytech" />
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.reputation.vcg.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
              <li className="flex gap-2 items-center">
                <img className="w-15" src={assets.shimizawa} alt="raytech" />
                <div className="w-15 h-15 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.reputation.nmg.rep}
                </div>
                <div className="mt-1 w-7 h-7 bg-gray-400 rounded-full border-2 border-black"></div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-5">Status effect:</h3>
            {character.status_effect.length === 0 ? (
              <p className="border-2 border-black rounded-md py-2 px-4">
                No status effects
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {character.status_effect.map((item, index) => (
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
            {character.upgrades.map((item, index) => (
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
              {character.weapons.map((item, index) => (
                <li key={index} className="flex gap-5 w-full">
                  <div className="border-2 border-black rounded-md py-2 px-4 w-full">
                    {item.nickname} | {item.name}
                  </div>
                  <div className="border-2 border-black rounded-md py-2 px-4 w-full">
                    {item.ammo.map((ammo, index) => (
                      <span key={index} className="text-md">
                        {"shortening" in ammo ? ammo.shortening : ammo.name} [{" "}
                        {ammo.amount} ]{" "}
                        {item.selected_ammo === ammo.name && (
                          <span className="text-xs font-bold">(Equipped)</span>
                        )}
                        {index <= 1 && " - "}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="mech" className="grid grid-cols-[1fr_4fr_3fr] gap-10">
            <section id="stats">
              <div className="flex flex-col items-center mb-5">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                  {character.mech_stats.movement}
                </div>
                <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                  M
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-5">
                {character.mech_stats.defenses.map((item, index) => (
                  <li key={index} className="flex flex-col items-center">
                    <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                      {item.amount}
                    </div>
                    <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                      {item.shortening}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <img src={character.mech_stats.image} alt="" />

            <section id="structure" className="flex gap-10">
              <div>
                <div className="flex flex-col items-center mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {character.mech_stats.structure.total}
                  </div>
                  <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    TTL
                  </div>
                </div>

                <div className="flex flex-col items-center mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {character.mech_stats.structure.cockpit}
                  </div>
                  <div className="-mt-2 w-20 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    Cockpit
                  </div>
                </div>

                <div className="flex flex-col items-center mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                    {character.mech_stats.structure.core}
                  </div>
                  <div className="-mt-2 w-15 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                    Core
                  </div>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-5">
                {character.mech_stats.structure.components.map(
                  (item, index) => (
                    <li key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {item.structure}
                      </div>
                      <div className="-mt-2 w-10 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        {item.shortening}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default CharacterSheet;
