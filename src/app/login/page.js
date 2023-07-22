"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin=(e)=>{
    e.preventDefault();
    router.push('/dashboard');
    // toast.success('Login successful!', {
    //   position: 'top-right',
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row gap-10 items-center justify-center p-4">
      <div className="w-[300px] h-[400px] bg-blue-400">
        <Image className="w-full h-full rounded-md md:rounded-none" src="/Login_Img.png" width={300} height={400}></Image>
      </div>
      {/* Login Form */}
      <div className="w-[300px] h-[400px] p-4">
        <h2 className="global_font font-bold">Login</h2>
        <p>Donec tortor quam at duis tortor.</p>

        <div className="w-full global_font flex items-center mt-8">
          <form className="w-full global_font" onSubmit={handleLogin}>
            <label className="font-thin" htmlFor="username">
              E-Mail
            </label>
            <br />
            <input
              required
              className="w-full mb-4 border p-1 border-gray-300 rounded-md"
              placeholder="Placeholder content"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label className="font-thin" htmlFor="password">
              Password
            </label>
            <br />
            <input
              required
              className="w-full mb-4 p-1 border border-gray-300 rounded-md"
              placeholder="Placeholder content"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex justify-end text-neutral-600">
              <p className="hover:cursor-pointer">Forgot Password?</p>
            </div>
            <button className="w-full mt-4 p-1 bg-blue-600 text-white rounded-md hover:brightness-95" type="submit">
              Login
            </button>
            <div className="w-full mt-6 flex items-center justify-center flex-col">
              <div className="w-full flex items-center justify-center gap-1">
                <div className="w-full h-0.5 bg-gray-400"></div>
                <span>or</span>
                <div className="w-full h-0.5 bg-gray-400"></div>
              </div>
              <Link className="w-full" href="/register"> 
                <button className="w-full p-1 mt-2 rounded-md border border-neutral-600 hover:bg-gray-300">
                  Register now
                </button>                      
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
