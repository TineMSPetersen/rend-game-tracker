import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import CharacterSheet from "./pages/CharacterSheet";
import MechList from "./pages/MechList";
import AddCharacter from "./pages/AddCharacter";
import CharacterList from "./pages/CharacterList";
import Login from "./components/Login";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );

  return (
    <>
    { token ? (
      <div className="bg-gray-50 min-h-screen">
      <Navbar setToken={setToken} />
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

    </div>
    ) : (
      <Login backendUrl={backendUrl} setToken={setToken} />
    ) }

    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
