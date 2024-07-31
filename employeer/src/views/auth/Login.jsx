import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../redux/actions/useActions.js'
import { useEffect, useState } from 'react'
import { handleInputChanges } from '../../utils/inputHelper.js'
import { useNavigate } from 'react-router-dom'
import { clearState } from '../../redux/feature/userSlice.js'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormdata] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { isLoading, errorMessage } = useSelector(state => state.users)

  const login = async (e) => {
    e.preventDefault()
    const response = await dispatch(handleLogin(formData))
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/')
    }
  }

  useEffect(() => {
    setFormdata({
      email: '',
      password: ''
    })

    return () => {
      dispatch(clearState())
    }
  }, [dispatch])

  return (
    <div className="bg-white w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] shadow-lg p-4 border rounded-md">
      <form onSubmit={login}>
        <div>
          <h1 className="text-2xl text-gray-700 font-bold tracking-wider">Sign In</h1>
        </div>
        <div className="flex flex-col mt-5 mb-2">
          <label htmlFor="email" className="text-gray-600 font-medium text-md">Email address</label>
          <input type="email" name="email" id="email" placeholder="company@example.com" className="mt-1 border-[2px] border-gray-400 py-2 px-2 rounded-lg placeholder:text-sm outline-none focus:ring-1 focus:border-darkerBlue" onChange={(e) => handleInputChanges(e, formData, setFormdata)} />
          {errorMessage.email && <p className="text-red-500 text-sm mt-1">{errorMessage.email[0]}</p>}
        </div>
        <div className="flex flex-col my-2">
          <div className="flex items-center justify-between  mt-5">
            <label htmlFor="password" className="text-gray-600 font-medium text-md">Password</label>
            <Link className="text-sm text-currentDarker font-bold hover:underline">Forgot Password?</Link>
          </div>
          <input type="password" name="password" id="password" className="mt-1 border-[2px] border-gray-400 py-2 px-2 rounded-lg outline-none focus:ring-1 focus:border-darkerBlue" value={formData.password} onChange={(e) => handleInputChanges(e, formData, setFormdata)} />
          {errorMessage.password && <p className="text-red-500 text-sm mt-1">{errorMessage.password[0]}</p>}

        </div>
        <div>
          <button type="submit" className="py-2 flex items-center justify-center w-full bg-magenta-100 hover:bg-magenta-200 text-white rounded-lg tracking-wider font-semibold">
            {isLoading &&
              <span className="loading loading-bars loading-xs"></span>

            }
            <span className={isLoading ? 'hidden' : 'block'}>Sign in</span>
          </button>
        </div>
        <p className="mt-5">
          {"Don't"} have an account? <Link to={'/register'} className="text-currentDarker font-medium underline">Register</Link>
        </p>
      </form>
    </div>
  )
}
