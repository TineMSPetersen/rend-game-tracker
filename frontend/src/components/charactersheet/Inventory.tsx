type Item = {
  itemId: {
    name: string;
    effects: string[];
    risky: boolean;
  }
  amount: number;
  
}

type InventoryProps = {
  inventory: Item[];
};

const Inventory = ({inventory}: InventoryProps) => {
  return (
    <div id="inventory">
      <h3 className="text-lg mb-5">Inventory:</h3>
      <div className="grid grid-cols-2">
        {inventory?.length === 0 ? (
          <p className="border-2 border-black rounded-md py-2 px-4">
            Inventory Empty
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {inventory?.map((item, index) => (
              <li
                key={index}
                className="border-2 border-black rounded-md py-2 px-4 relative group overflow-visible"
              >
                <p>
                  {item.itemId.name} x{item.amount} {item.itemId.risky === true && <span className="font-bold">(RISKY)</span>}
                </p>

                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-9999 w-150 min-w-150">
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
  );
};

export default Inventory;
