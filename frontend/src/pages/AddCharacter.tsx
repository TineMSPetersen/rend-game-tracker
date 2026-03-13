import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

type AddCharacterProps = { backendUrl: string };

type SkillTypes = {
  _id: string;
  name: string;
  level: number;
  effects: { description: string }[];
};
type WeaponSlots = { weaponType: string; mounting: string; amount: number };
type Weapon = { _id: string; name: string };
type Gun = { _id: string; name: string };
type Melee = { _id: string; name: string; mounting: string };
type UpgradeType = {
  _id: string;
  name: string;
  level: number;
  type: "passive" | "trigger" | "bio";
};

type MechTypes = {
  _id: string;
  faction: string;
  image: string;
  name: string;
  modelNumber: string;
  defaultWeapon: { gun: Weapon[]; melee: Weapon[] };
  weaponSlots: WeaponSlots[];
  upgradeSlots: { passive: number; trigger: number; bio: number };
};

const AddCharacter: React.FC<AddCharacterProps> = ({ backendUrl }) => {
  const navigate = useNavigate();
  const defaultJockey = 24;
  const [jugdement, setJudgement] = useState(0);
  const [optimization, setOptimization] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [knowledge, setKnowledge] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [statYield, setStatsYield] = useState(0);
  const [jockey, setJockey] = useState(defaultJockey);

  const [origin, setOrigin] = useState("none");

  const [skillsData, setSkillsData] = useState<SkillTypes[]>([]);
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");

  const [mechList, setMechList] = useState<MechTypes[]>([]);
  const [filteredMechs, setFilteredMechs] = useState<MechTypes[]>([]);
  const [mech, setMech] = useState("");

  const [gunList, setGunList] = useState<Gun[]>([]);
  const [meleeList, setMeleeList] = useState<Melee[]>([]);
  const [defaultWeapon, setDefaultWeapon] = useState<
    MechTypes["defaultWeapon"]
  >({ gun: [], melee: [] });
  const [weaponSlots, setWeaponSlots] = useState<MechTypes["weaponSlots"]>([]);

  const [upgradeList, setUpgradeList] = useState<UpgradeType[]>([]);
  const [upgradeSlots, setUpgradeSlots] = useState<
    MechTypes["upgradeSlots"] | null
  >(null);

  const [name, setName] = useState("");

  const statSetters: Record<
    string,
    React.Dispatch<React.SetStateAction<number>>
  > = {
    j: setJudgement,
    o: setOptimization,
    c: setCharisma,
    k: setKnowledge,
    e: setEndurance,
    y: setStatsYield,
  };

  const statValues: Record<string, number> = {
    j: jugdement,
    o: optimization,
    c: charisma,
    k: knowledge,
    e: endurance,
    y: statYield,
  };

  const changeStats = ({ stat, pos }: { stat: string; pos: boolean }) => {
    const setter = statSetters[stat];
    if (!setter) return;
    const delta = pos ? 1 : -1;
    if (pos && jockey <= 0) return;
    if (pos && statValues[stat] >= 10) return;
    if (!pos && statValues[stat] <= 0) return;
    setter((prev) => prev + delta);
    setJockey((prev) => prev - delta);
  };

  const changeMech = (mechId: string) => {
    const mechInfo = mechList.find((m) => m._id === mechId);
    if (!mechInfo) return;
    setMech(mechId);
    setDefaultWeapon(mechInfo.defaultWeapon);
    setWeaponSlots(mechInfo.weaponSlots);
    setUpgradeSlots(mechInfo.upgradeSlots);
  };

  const getCharacterSkills = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/character/get-skills`,
      );
      if (response.data.success) {
        const levelOneSkills = response.data.skills.filter(
          (skill: SkillTypes) => skill.level === 1,
        );
        setSkillsData(levelOneSkills);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMechList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/mech/mechlist`);
      if (response.data.success) setMechList(response.data.mechs);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeaponList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/mech/weaponlist`);
      if (response.data.success) {
        setGunList(response.data.data.guns || []);
        setMeleeList(response.data.data.melee || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUpgradeList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/mech/upgradelist`);
      if (response.data.success)
        setUpgradeList(response.data.mechUpgrades || []);
    } catch (error) {
      console.log(error);
    }
  };

  const filterMechs = (faction: string) => {
    const mechs = mechList.filter((m) => m.faction === faction);
    setFilteredMechs(mechs);
    setMech("");
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);
      const guns: string[] = [];
      const melee: string[] = [];
      const mechUpgrades: string[] = [];

      weaponSlots.forEach((slot, index) => {
        for (let i = 0; i < slot.amount; i++) {
          const value = form.get(`weapon-${index}-${i}`) as string;
          if (!value) continue;
          if (slot.weaponType.toLowerCase() !== "melee") guns.push(value);
          if (slot.weaponType.toLowerCase() === "melee") melee.push(value);
        }
      });

      const gunsData = guns.map((gunId) => ({
        gunId,
        ammo: [],
        equipped: true,
      }));

      if (upgradeSlots) {
        Object.entries(upgradeSlots).forEach(([type, amount]) => {
          for (let i = 0; i < amount; i++) {
            const value = form.get(`upgrade-${type}-${i}`) as string;
            if (value) mechUpgrades.push(value);
          }
        });
      }

      const stats = {
        judgement: jugdement,
        optimization,
        charisma,
        knowledge,
        endurance,
        yield: statYield,
      };
      const skills = [skill1, skill2].filter(Boolean);

      const data = {
        name,
        stats,
        origin,
        skills,
        mech,
        mechUpgrades,
        gun: gunsData,
        melee,
      };

      console.log("Submitting character:", data);

      const response = await axios.post(
        `${backendUrl}/api/character/add-character`,
        data,
      );

      navigate('/characters')
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterSkills();
    getMechList();
    getWeaponList();
    getUpgradeList();
  }, []);
  useEffect(() => {
    filterMechs(origin);
  }, [origin]);
  useEffect(() => {
    changeMech(mech);
  }, [mech]);
  useEffect(() => {
    console.log("Loaded guns:", gunList);
  }, [gunList]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Add New Character</h1>

      <form className="" onSubmit={onSubmitHandler}>
        <h2 className="text-2xl font-bold mb-5">Character Info</h2>
        <div id="character" className="flex flex-col gap-5">
          <div>
            <label className="text-lg font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="border-2 border-black block w-full py-2 px-4 rounded-md"
              id="name"
              name="name"
              type="text"
              placeholder="Character name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="text-lg font-bold mb-2" htmlFor="jockey">
                J.O.C.K.E.Y
              </label>

              <p className="md">
                You start with{" "}
                <span className="font-semibold">{defaultJockey}</span>{" "}
                J.O.C.K.E.Y points - You currently have{" "}
                <span className="font-bold text-xl">{jockey}</span> points left
              </p>
              <p>Where do you want to put your points?</p>
              <p className="sm"></p>
              <div>
                <ul className="flex gap-5 w-full mt-2">
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "j", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {jugdement}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        J
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Judgement
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "j", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "o", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {optimization}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        O
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Optimization
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "o", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "c", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {charisma}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        C
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Charisma
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "c", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "k", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {knowledge}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        K
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Knowledge
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "k", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "e", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {endurance}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        E
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Endurance
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "e", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                  <li className="flex flex-col gap-2 items-center">
                    <div
                      onClick={() => changeStats({ stat: "y", pos: true })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      +
                    </div>
                    <div className="relative group flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-md bg-white text-lg font-bold">
                        {statYield}
                      </div>
                      <div className="-mt-2 w-7 h-7 flex items-center justify-center border-2 border-black rounded-md bg-white font-bold">
                        Y
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                        Yield
                      </div>
                    </div>
                    <div
                      onClick={() => changeStats({ stat: "y", pos: false })}
                      className="cursor-pointer text-2xl font-extrabold w-7 h-7 bg-slate-300 rounded-full border border-black flex justify-center items-center pb-1"
                    >
                      -
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold mb-2">Select origin</p>
              <div>
                <div className="flex gap-5">
                  <div
                    onClick={() => setOrigin("SNC")}
                    className={`flex flex-col gap-2 items-center  border border-black py-3 px-3 rounded-md w-35 cursor-pointer ${origin === "SNC" && "bg-slate-300"} `}
                  >
                    <img src={assets.smith} />
                    <p>Cog and Smith</p>
                  </div>
                  <div
                    onClick={() => setOrigin("RT")}
                    className={`flex flex-col gap-2 items-center  border border-black py-3 px-3 rounded-md w-35 cursor-pointer ${origin === "RT" && "bg-slate-300"} `}
                  >
                    <img src={assets.raytech} />
                    <p>Raytech</p>
                  </div>
                  <div
                    onClick={() => setOrigin("SB")}
                    className={`flex flex-col gap-2 items-center  border border-black py-3 px-3 rounded-md w-35 cursor-pointer ${origin === "SB" && "bg-slate-300"} `}
                  >
                    <img src={assets.shimizawa} />
                    <p>Shimazawa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold mb-2">Skills</p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="text-md font-bold mb-2" htmlFor="skill1">
                  Skill 1
                </label>
                <select
                  onChange={(e) => setSkill1(e.target.value)}
                  className="border-2 border-black block w-full py-2 px-4 rounded-md text-sm"
                  name="skill1"
                  id="skill1"
                  value={skill1}
                >
                  <option value="">Pick skill</option>
                  {skillsData.map((item: SkillTypes, index: number) => (
                    <option key={index} value={item._id}>
                      {item.name} - {item.effects[0].description}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-md font-bold mb-2" htmlFor="skill2">
                  Skill 2
                </label>
                <select
                  onChange={(e) => setSkill2(e.target.value)}
                  className="border-2 border-black block w-full py-2 px-4 rounded-md text-sm"
                  name="skill2"
                  id="skill2"
                  value={skill2}
                >
                  <option value="">Pick skill</option>
                  {skillsData.map((item: SkillTypes, index: number) => (
                    <option key={index} value={item._id}>
                      {item.name} - {item.effects[0].description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-5">Mech</h2>
        <p className="text-lg font-bold mb-2">Select Your Mech</p>
        <p className="mb-2">
          Mech choice depends on Origin. If you want to read more about each
          Mech, do it at{" "}
          <NavLink className="underline" to={"/mechs"}>
            MechList
          </NavLink>
        </p>
        <div id="mech" className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filteredMechs.map((item: MechTypes, index: number) => (
              <div
                onClick={() => setMech(item._id)}
                key={index}
                className={`flex flex-col h-full border-2 border-black rounded-lg cursor-pointer`}
              >
                <div className="aspect-4/3 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src={item?.image}
                  />
                </div>

                <div
                  className={`py-3 pb-4 px-4 flex flex-col justify-between items-center rounded-b-lg ${mech === item._id && "bg-gray-300"}`}
                >
                  <p className="text-xl font-bold">{item?.name}</p>
                  <p className="text-base">{item?.modelNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-5">Equipment</h2>
        <div id="defaultweapon">
          {defaultWeapon && (
            <div>
              {defaultWeapon.gun.length === 0 &&
              defaultWeapon.melee.length === 0 ? (
                ""
              ) : (
                <div>
                  <h3 className="text-xl mt-5">Default Weapon</h3>
                  <p>Your mech already starts with this weapon:</p>
                  {defaultWeapon.melee && (
                    <div>
                      {defaultWeapon?.melee.map((item, index) => (
                        <p key={index}>{item?.name}</p>
                      ))}
                    </div>
                  )}
                  {defaultWeapon.gun && (
                    <div>
                      {defaultWeapon?.gun.map((item, index) => (
                        <p key={index}>{item?.name}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <div>
            <h3 className="text-xl mt-5 mb-5">Select weapons:</h3>
            {weaponSlots.length > 0 && (
              <div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Guns:</h4>
                  {weaponSlots.map((item, index) => {
                    if (item.weaponType === "melee") return null;
                    return (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" key={index}>
                        {Array.from({ length: item.amount }).map(
                          (_, slotIndex) => (
                            <div key={slotIndex}>
                              <p className="capitalize text-md mb-2">{item.weaponType}:</p>
                              <select
                                name={`weapon-${index}-${slotIndex}`}
                                className="border-2 border-black block w-full py-2 px-4 rounded-md text-sm"
                              >
                                <option value="">Pick weapon</option>
                                {gunList.map((g) => (
                                  <option key={g._id} value={g._id}>
                                    {g.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ),
                        )}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 mt-5">Melee:</h4>
                  {weaponSlots.map((item, index) => {
                    if (item.weaponType !== "melee") return null;
                    return (
                      <div key={index}>
                        <p className="capitalize text-md mb-2">{item.mounting}:</p>
                        {Array.from({ length: item.amount }).map(
                          (_, slotIndex) => (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5" key={slotIndex}>
                              <select
                                name={`weapon-${index}-${slotIndex}`}
                                className="border-2 border-black block w-full py-2 px-4 rounded-md text-sm"
                              >
                                <option value="">Pick weapon</option>
                                {meleeList
                                  .filter(
                                    (m) =>
                                      m.mounting.toLowerCase() ===
                                      item.mounting.toLowerCase(),
                                  )
                                  .map((m) => (
                                    <option key={m._id} value={m._id}>
                                      {m.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          ),
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-5">Mech Upgrades</h2>
        <div>
          {upgradeSlots && (
            <div className="flex flex-col gap-6">
              {Object.entries(upgradeSlots).map(
                ([type, amount], index) =>
                  amount > 0 && (
                    <div key={index}>
                      <p className="capitalize text-lg mb-2">{ type }:</p>
                      <div className="flex gap-5">
                        {Array.from({ length: amount }).map((_, slotIndex) => (
                          <select
                            key={slotIndex}
                            name={`upgrade-${type}-${slotIndex}`}
                            className="border-2 border-black block w-full py-2 px-4 rounded-md text-sm"
                          >
                            <option value="">Pick upgrade</option>

                            {upgradeList
                              .filter((upgrade) => upgrade.type === type)
                              .filter((upgrade) => upgrade.level < 2)
                              .map((upgrade) => (
                                <option key={upgrade._id} value={upgrade._id}>
                                  {upgrade.name}
                                </option>
                              ))}
                          </select>
                        ))}
                      </div>
                    </div>
                  ),
              )}
            </div>
          )}
        </div>

        <button
          className="w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer mt-10"
          type="submit"
        >
          Create Character
        </button>
      </form>
    </div>
  );
};

export default AddCharacter;
