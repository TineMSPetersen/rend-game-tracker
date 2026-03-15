import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import CharacterSheet from "./pages/CharacterSheet";
import MechList from "./pages/MechList";
import AddCharacter from "./pages/AddCharacter";
import CharacterList from "./pages/CharacterList";

const App = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;;

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
      <div className="w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/charactersheet/:id" element={<CharacterSheet backendUrl={backendUrl} />} />
            <Route path="/mechs" element={<MechList backendUrl={backendUrl} />} />
            <Route path="/addcharacter" element={<AddCharacter backendUrl={backendUrl} />} />
            <Route path="/characters" element={<CharacterList backendUrl={backendUrl} />} />
          </Routes>
        </div>
        </div>

    </div></>
  );
};

export default App;
