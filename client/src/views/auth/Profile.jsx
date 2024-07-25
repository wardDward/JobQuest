import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { handleInputChanges } from '../../utils/inputHelper';
import { updateProfile } from '../../redux/actions/userAction';
import Swal from '../../components/popUps/Swal'


export default function Profile() {
    const { } = useAuth()
    const { isLoading, errorMessage } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [swal, setSwal] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await dispatch(updateProfile(formData))
        console.log(response);
        if (response.meta.requestStatus === 'fulfilled') {
            setMessage(response.payload.message)
            setSwal(true)


            setTimeout(() => {
                setSwal(false)
            }, 3000)
        }
    }

    return (
        <>
            <div className='p-[70px]'>
                <Link className='mb-4 p-1 rounded-full hover:bg-slate-100 w-[30px] flex items-center cursor-pointer' to={'/jobfinder'}>
                    <ArrowBackIcon sx={{ fontSize: 22 }} className='text-magenta-100' />
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        />
                                        {errorMessage?.firstname && <p className='text-red-500 text-sm'>{errorMessage.firstname[0]}</p>}

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Lastname
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        />
                                        {errorMessage?.lastname && <p className='text-red-500 text-sm'>{errorMessage.lastname[0]}</p>}

                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="middlename" className="block text-sm font-medium leading-6 text-gray-900">
                                        Middle name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="middlename"
                                            name="middlename"
                                            type="text"
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? 'cursor-not-allowed' : ''}`}
                        >
                            {isLoading && <span className="loading loading-bars loading-xs"></span>
                            }
                            <span className={`${isLoading ? 'hidden' : 'block'}`}>Save</span>
                        </button>
                    </div>
                </form>
            </div>
            {swal && <Swal message={message} status={'success'}>{message}</Swal>}
        </>

    )
}
