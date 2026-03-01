import { assets } from "../assets/assets"




const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between border-b-2 border-gray-300'>
      <div className='flex gap-2 items-center'>
        <img src={assets.logo} className='w-16' alt="logo" />
        <p className='text-2xl uppercase font-bold text-[#242A78]'>The Minute War</p>
      </div>
      <button className={`bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer`}>Logout</button>
    </div>
  )
}

export default Navbar