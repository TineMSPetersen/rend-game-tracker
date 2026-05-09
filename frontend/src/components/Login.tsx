import { useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

interface LoginProps {
  backendUrl: string;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login: React.FC<LoginProps> = ({ backendUrl, setToken }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/api/user/login", {
          username,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          console.log(response.data.message);
          toast.error(response.data.message)
        }
    } catch (error: any) {
      console.log(error);
      toast.error(error)
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[url(https://images.pexels.com/photos/37269546/pexels-photo-37269546.jpeg)] bg-cover bg-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <img src={assets.logo} className='w-16' alt="logo" />
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        </div>
        
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Username</p>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="text" placeholder='Your username' required />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Your password' required />
          </div>
          <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login