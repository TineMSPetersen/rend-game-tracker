type Skill = {
  name: string;
  description: string;
  effects: {
    description: string;
  }[];
};

type CharacterSkillProps = {
  characterSkills: Skill[];
};

const CharacterSkills = ({ characterSkills }: CharacterSkillProps) => {
  return (
    <div id="character_skills">
      <h3 className="text-2xl font-bold mb-5">Character Skills:</h3>
      {characterSkills.length === 0 ? (
        <p className="border-2 border-black rounded-md py-2 px-4">No Skills</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {characterSkills?.map((item, index) => (
            <li
              key={index}
              className="border-2 border-black rounded-md py-2 px-4 overflow-visible"
            >
              <p className="text-lg font-bold">{item.name}</p>
              {item.effects.map((effectItem, effectIndex) => (
                  <p className="text-md" key={effectIndex}>{effectItem.description}</p>
                ))}
                <p className="text-sm italic">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterSkills;
