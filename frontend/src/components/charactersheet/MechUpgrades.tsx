type MechUpgrade = {
  name: string;
  level: number;
  effect: {
    modifierType: string;
    modifierAmount: number;
    description: string;
  }[];
};

type MechUpgradeProps = {
  mechUpgrades: MechUpgrade[];
};

const MechUpgrades = ({ mechUpgrades }: MechUpgradeProps) => {
  return (
    <div id="mech_upgrades">
      <h3 className="text-2xl font-bold mb-5">Upgrades</h3>
      <ul className="flex flex-col gap-2">
        {mechUpgrades.map((item: MechUpgrade, index: number) => (
          <li
            key={index}
            className="border-2 border-black rounded-md py-2 px-4"
          >
            <p className="text-lg font-bold">{item.name}</p>
            {item.effect.map((effectItem, effectIndex) => (
                <p className="text-md" key={effectIndex}>{effectItem.description}</p>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MechUpgrades;
