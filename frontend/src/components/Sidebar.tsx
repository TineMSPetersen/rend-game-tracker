import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <h2 className='text-xl uppercase font-bold text-[#242A78]'>Gameplay</h2>
        <NavLink to="/charactersheet" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-xs">
          
          <p className='hidden md:block'>Character Sheets</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-xs">
          
          <p className='hidden md:block'>-</p>
        </NavLink>
      </div>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <h2 className='text-xl uppercase font-bold text-[#242A78]'>Lore</h2>
        <NavLink to="/charactersheet" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-xs">
          
          <p className='hidden md:block'>Character Sheets</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-xs">
          
          <p className='hidden md:block'>-</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar