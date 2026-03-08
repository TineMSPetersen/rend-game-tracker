type StatusEffectProps = {
  status_effects: string[];
};

const StatusEffects = ({ status_effects }: StatusEffectProps) => {
  return (
    <div id="status_effects">
      <h3 className="text-2xl font-bold mb-5">Status effect:</h3>
      {status_effects.length === 0 ? (
        <p className="border-2 border-black rounded-md py-2 px-4">
          No status effects
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {status_effects.map((item: string, index: number) => (
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
  );
};

export default StatusEffects;
