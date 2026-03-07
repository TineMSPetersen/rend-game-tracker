type Skill = {
  name: string;
  description: string;
  effects: {
    description: string;
  }[]
}

type CharacterSkillProps = {
  characterSkills: Skill[]
}

const CharacterSkills = ({characterSkills}: CharacterSkillProps) => {
  return (
    <div id="character_skills">
          <h3 className="text-lg mb-5">Skills:</h3>
          {characterSkills.length === 0 ? (
            <p className="border-2 border-black rounded-md py-2 px-4">
              No Skills
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {characterSkills?.map((item, index) => (
                <li
                  key={index}
                  className="border-2 border-black rounded-md py-2 px-4 relative group overflow-visible"
                >
                  <p>{item.name}</p>
                  <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-9999 w-150 min-w-150">
                    {item.effects.map((effectItem, effectIndex) => (
                      <p key={effectIndex}>{effectItem.description}</p>
                    ))}
                    <p className="text-sm italic">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
  )
}

export default CharacterSkills