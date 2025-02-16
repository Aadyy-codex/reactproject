import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
    let { login } = useContext(AuthContext);
    return (
            <div className='flex justify-center items-center border border-black h-screen'>
                <button onClick={login} className='font-bold text-xl border border-black w-[15vw] h-[7vh] rounded-md bg-gray-800 text-white'>Click To Login</button>
            </div>
    );
}

export default Login;
