import axios from "axios";

type Item = {
  
  itemId: {
    _id: string;
    name: string;
    effects: string[];
    risky: boolean;
  };
  amount: number;
};

type InventoryProps = {
  inventory: Item[];
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const UseItem = ({ inventory, backendUrl, characterId, setAction }: InventoryProps) => {
  const useItem = async (item: string) => {
    
    try {
      const response = await axios.post(
        `${backendUrl}/api/action/use-item`,
        { characterId, item },
      );

      if (response.data.success) {
        console.log("Item removed")
        setAction('none')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="min-w-96">
      {inventory?.length === 0 ? (
        <p className="border-2 border-black rounded-md py-2 px-4">
          Inventory Empty
        </p>
      ) : (
        <ul className="flex flex-col gap-5">
          {inventory?.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <div className="border-2 border-black rounded-md py-2 px-4 relative group overflow-visible flex-1">
                <p>
                  {item.itemId.name} x{item.amount}{" "}
                  {item.itemId.risky === true && (
                    <span className="font-bold">(RISKY)</span>
                  )}
                </p>
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-md rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 w-64">
                  {item.itemId.effects.map((effect, index) => (
                    <p key={index}>{effect}</p>
                  ))}
                </div>
              </div>
              <button onClick={() => useItem(item.itemId._id)} className="py-2 px-4 rounded-md text-white bg-black cursor-pointer whitespace-nowrap">
                Use Item
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseItem;
