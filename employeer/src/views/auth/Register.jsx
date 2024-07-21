import { Link, useNavigate } from 'react-router-dom'
import { handleRegister } from '../../redux/actions/useActions.js'
import { useState } from 'react'
import { handleInputChanges } from '../../utils/inputHelper.js'
import { useDispatch, useSelector } from 'react-redux'

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, errorMessage } = useSelector(state => state.users)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const register = async (e) => {
        e.preventDefault()
        const response = await dispatch(handleRegister(formData))
        if (response.meta.requestStatus === 'fulfilled') {
            setFormData({
                email: '',
                password: ''
            })
            navigate('/')
        }
    }

    return (
        <div className="bg-white w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] shadow-lg p-4 border rounded-md">
            <form onSubmit={register}>
                <div>
                    <h1 className="text-2xl text-gray-700 font-bold tracking-wider">Sign Up</h1>
                </div>
                <div className="flex flex-col mt-5 mb-2">
                    <label htmlFor="email" className="text-gray-600 font-medium text-md">Email address</label>
                    <input type="email" name="email" id="email" placeholder="company@example.com" className="mt-1 border-[2px] border-gray-400 py-2 px-2 rounded-lg placeholder:text-sm outline-none focus:ring-1 focus:border-darkerBlue" onChange={(e) => handleInputChanges(e, formData, setFormData)} />
                    {errorMessage.email && <p className="text-red-500 text-sm mt-1">{errorMessage.email[0]}</p>}

                </div>
                <div className="flex flex-col my-2">
                    <label htmlFor="password" className="text-gray-600 font-medium text-md">Password</label>
                    <input type="password" name="password" id="password" className="mt-1 border-[2px] border-gray-400 py-2 px-2 rounded-lg outline-none focus:ring-1 focus:border-darkerBlue" onChange={(e) => handleInputChanges(e, formData, setFormData)} />
                    {errorMessage.password && <p className="text-red-500 text-sm mt-1">{errorMessage.password[0]}</p>}
                </div>
                <div className="flex mt-5 mb-4">
                    <div className="mr-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                    </div>
                    <p className="text-xs text-gray-600">
                        By registering, I agree to the Privacy Policy and consent to the
                        collection, storage and use of my personal data as described in that
                        policy. I agree to receive marketing messages from JobQuest and
                        affiliates and understand that I can opt out at any time via the
                        unsubscribe links or as detailed in the Privacy Policy.
                    </p>
                </div>
                <div>
                    <button type="submit" className="py-2 flex items-center justify-center w-full bg-magenta-100 hover:bg-magenta-200 text-white rounded-lg tracking-wider font-semibold">
                        {isLoading &&
                            <span className="loading loading-bars loading-xs"></span>

                        }
                        <span className={isLoading ? 'hidden' : 'block'}>Sign up</span>
                    </button>
                </div>
                <p className="mt-5">
                    Already have an account? <Link to={'/login'} className="text-currentDarker font-medium underline">Sign in </Link>
                </p>
            </form>
        </div>
    )
}
