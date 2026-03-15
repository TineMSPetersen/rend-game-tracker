import axios from "axios";
import React, { useState } from "react";

type StatusProps = {
  status: string[];
  backendUrl: string;
  characterId: string;
  setAction: (action: string) => void;
};

const ChangeStatusEffect = ({
  status,
  backendUrl,
  characterId,
  setAction,
}: StatusProps) => {
  const [statusEffect, setStatusEffect] = useState("");

  const removeItem = async (item: string) => {
    console.log(item)

    try {
      const response = await axios.post(`${backendUrl}/api/action/remove-status`, {
        characterId,
        item,
      });

      if (response.data.success) {
        setAction('none')
      }
    } catch (error) {
      console.log(error)
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/action/add-status`, {
        characterId,
        statusEffect,
      });

      if (response.data.success) {
        setStatusEffect("");
        setAction('none')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h3 className="text-lg mb-2">Add Status Effect</h3>
      <form onSubmit={onSubmitHandler} className="flex gap-2 items-center">
        <input
          onChange={(e) => setStatusEffect(e.target.value)}
          value={statusEffect}
          className="border-2 border-black block w-full py-2 px-4 rounded-md"
          type="text"
        />{" "}
        <button
          type="submit"
          className="py-2 px-4 rounded-md text-white bg-black cursor-pointer"
        >
          Add
        </button>
      </form>

      {status.length > 0 && (
        <div>
          <h4 className="text-lg mb-2 mt-5">Current Status Effects:</h4>
          {status.map((item, index) => (
            <div className="flex gap-5 items-center" key={index}>
              <p>{item}</p>
              <p onClick={() => removeItem(item)} className="text-lg cursor-pointer">
                X
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeStatusEffect;
