import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { handleInputChanges } from '../../utils/inputHelper';
import { updateProfile } from '../../redux/actions/useActions';

export default function Profile() { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { } = useAuth();

    const { users, errorMessage } = useSelector(state => state.users);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        middlename: '',
        company_name: '',
        description: '',
        location: '',
        company_logo: null
    });

    useEffect(() => {
        if (users && users.email_verified_at !== null) {
            navigate('/');
        }
    }, [users, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
       const response =  await dispatch(updateProfile(formData));
       if(response.meta.requestStatus === 'fulfilled')
       {
        navigate('/')
       }
    };

    return (
        <div className='p-[50px]'>
            {users?.email_verified_at === null && <div className='mb-4 text-red-500'>
                Please complete the profile first to proceed. *
            </div>}
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share. {"(except for email and password)"}
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="company_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Company Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                            type="text"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-3"
                                        />
                                    </div>
                                    {errorMessage.firstname &&
                                    <p className='text-red-500 text-sm'>{errorMessage.company_name[0]}</p>
                                }
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Company Description <span className='text-gray-600 text-xs'>(e.g Motto)</span>
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[300px] overflow-y-scroll resize-none p-2"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Company Logo <span className='text-xs text-gray-400'>(Optional)</span>
                                </label>
                                <label className="mt-2 flex items-center gap-x-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-full sm:w-[30%] md:w-[20%] xl:w-[15%] cursor-pointer">
                                    <AccountCircleOutlinedIcon aria-hidden="true" className="h-12 w-12 text-gray-500" />
                                    <span className='text-sm text-gray-600 text-center'>Upload your logo</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => setFormData(prevData => ({
                                            ...prevData,
                                            company_logo: e.target.files[0]
                                        }))}
                                    />
                                </label>
                                <div className='text-sm text-gray-600'>
                                    {formData.company_logo?.name}
                                </div>
                            </div>
                        </div>
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
                                        autoComplete="given-firstname"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                        value={formData.firstname}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                </div>
                                {errorMessage.firstname &&
                                    <p className='text-red-500 text-sm'>{errorMessage.firstname[0]}</p>
                                }
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="lastname"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                        value={formData.lastname}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                </div>
                                {errorMessage.lastname &&
                                    <p className='text-red-500 text-sm'>{errorMessage.lastname[0]}</p>
                                }
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="middlename" className="block text-sm font-medium leading-6 text-gray-900">
                                    Middlename
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="middlename"
                                        name="middlename"
                                        type="text"
                                        autoComplete="middlename"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                        value={formData.middlename}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Location <span className='text-sm text-gray-400 ml-2'>{"What's"} the company location</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        autoComplete="location"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.location}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                </div>
                                {errorMessage.location &&
                                    <p className='text-red-500 text-sm'>{errorMessage.location[0]}</p>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Reminder</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Please check the information inputted one last time to make sure its correct. Thank you!
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
