import axios from "axios";
import { useEffect, useState } from "react";

type CharacterSheetProps = {
  backendUrl: string;
};

const MechList = ({ backendUrl }: CharacterSheetProps) => {
  const [mechList, setMechList] = useState<any>(null);

  const fetchMechList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/mech/mechlist`);

      if (response.data.success) {
        console.log(response.data.mechs);
        setMechList(response.data.mechs);
        console.log(mechList)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMechList();
  }, []);

  return (
    <div>
      {/* }
      <div className="w-full flex justify-center gap-10 mb-10">
        <img src={assets.smith} className="w-20 block cursor-pointer border-2 border-black rounded-md" alt="" />
        <img src={assets.raytech} className="w-20 block cursor-pointer border-2 border-black rounded-md" alt="" />
        <img src={assets.shimizawa} className="w-20 block cursor-pointer border-2 border-black rounded-md" alt="" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {mechList?.map((item: object, index: number) => (
          <div
            key={index}
            className="bg-white flex flex-col h-full border-2 border-black rounded-lg"
          >
            <div className="aspect-4/3 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={item?.image}
              />
            </div>

            <div className="py-3 pb-4 px-4 flex flex-col justify-between items-center bg-gray-300 rounded-b-lg">
              <p className="text-xl font-bold">{item?.name}</p>
              <p className="text-base">{item?.modelNumber}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MechList;
