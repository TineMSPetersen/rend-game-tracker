import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type CharacterListProps = {
  backendUrl: string;
};

type Character = {
  _id: string;
  name: string;
};

const CharacterList: React.FC<CharacterListProps> = ({ backendUrl }) => {
  const [characterList, setCharacterList] = useState([]);

  const getCharacterList = async () => {
    try {
      console.log("Yipeee");
      const response = await axios.get(
        `${backendUrl}/api/character/character-list`,
      );

      if (response.data.success) {
        setCharacterList(response.data.characters);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacterList();
  }, []);

  if (!characterList) return <div>Loading...</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {characterList.map((item: Character, index) => (
          <NavLink
            to={`/charactersheet/${item._id}`}
            className="w-50 h-30 flex items-center justify-center border-2 border-black rounded-md cursor-pointer"
            key={index}
          >
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
