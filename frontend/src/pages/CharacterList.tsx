import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

type CharacterListProps = {
  backendUrl: string;
};

type Character = {
  _id: string;
  name: string;
}

const CharacterList: React.FC<CharacterListProps> = ({ backendUrl }) => {
  const [ characterList, setCharacterList ] = useState([]);

  const getCharacterList = async () => {
    try {
      console.log("Yipeee")
      const response = await axios.get(`${backendUrl}/api/character/character-list`)

      if (response.data.success) {
        setCharacterList(response.data.characters)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacterList();
  }, [])
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
      {characterList.map((item: Character, index) => (
        <div className='w-50 h-30 flex items-center justify-center border-2 border-black rounded-md cursor-pointer' key={index}>
          <NavLink to={`/charactersheet/${item._id}`}>
<p>{item.name}</p>
          </NavLink>
          
        </div>
      ))}

    </div>
  )
}

export default CharacterList