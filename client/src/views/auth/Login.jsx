import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from "../../redux/features/userSlice";
import { handleInputChanges } from "../../utils/inputHelper";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { isLoading, errorMessage } = useSelector(state => state.users)

  const login = async (e) => {
    e.preventDefault()
    const response = await dispatch(handleLogin(formData))

    if (response.meta.requestStatus === 'fulfilled') {
      setFormData({
        email: '',
        password: ''
      })
      navigate('/jobfinder')
    }
  }


  return (
    <>
      <h1 className="text-3xl md:text-4xl text-gray-700 font-bold">Sign in</h1>
      <form onSubmit={login} className="flex flex-col my-6">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-700"
          >
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
            onChange={(e) => handleInputChanges(e, formData, setFormData)}
            value={formData.email}
          />
          {errorMessage?.email && (
            <p className="text-red-500 text-sm">{errorMessage.email[0]}</p>
          )}
        </div>
        <div className="flex flex-col mt-5 mb-4">
          <label
            htmlFor="password"
            className="text-md font-semibold text-gray-700 flex items-center justify-between"
          >
            <span>Password</span>
            <a
              href="#"
              className="flex justify-end text-curresnt font-semibold hover:underline"
            >
              Forgot Password?
            </a>
          </label>
          <input
            name="password"
            type="password"
            className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
            onChange={(e) => handleInputChanges(e, formData, setFormData)}
            value={formData.password}
          />
          {errorMessage?.password && (
            <p className="text-red-500 text-sm">{errorMessage.password[0]}</p>
          )}
        </div>
        <div className="mt-10 mb-2">
          <button
            disabled={isLoading}
            type="submit"
            className={`${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} bg-magenta-100 text-white w-full py-2 font-bold tracking-wider rounded-md hover:bg-magenta-200 flex items-center justify-center`}
          >
            {isLoading && (
              <span className="loading loading-bars loading-xs"></span>
            )}
            <span className={`${isLoading ? "hidden" : "block"}`}>Sign In</span>
          </button>
        </div>
        <div className="flex items-center mt-5">
          <hr className="bg-gray-500 h-[1px] w-full" />
          <span className="text-gray-700 font-medium mx-4">or</span>
          <hr className="bg-gray-500 h-[1px] w-full" />
        </div>
        <div className="flex flex-col mt-6">
          <div className="w-full border-[1px] border-gray-600 flex items-center justify-center py-2 rounded-md relative hover:bg-slate-300 cursor-pointer">
            <img
              src={Google}
              alt="google"
              className="w-[25px] h-[25px] absolute left-4"
            />
            <span className="text-md font-medium text-gray-700">
              Continue with Google
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="w-full border-[1px] border-gray-600 flex items-center justify-center py-2 rounded-md relative hover:bg-slate-300 cursor-pointer">
            <img
              src={Facebook}
              alt="google"
              className="w-[25px] h-[25px] absolute left-4"
            />
            <span className="text-md font-medium text-gray-700">
              Continue with Facebook
            </span>
          </div>
        </div>
        <div className="mt-5 text-gray-600 text-md text-center md:text-start">
          {"Don't "} have an account?{" "}
          <Link to="/register" className="text-current hover:underline">
            Sign Up.
          </Link>
        </div>
      </form>
    </>
  );
}
