import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/logo.png'
import { sendEmail } from '../../redux/features/userSlice'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResendEmail() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { } = useAuth()
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        if (users && users.email_verified_at !== null) {
            navigate('/jobfinder')
        }
    }, [users, navigate])

    return (
        <div className="h-screen bg-white flex justify-center items-center">
            <div className="bg-white border-t-[5px] border-darkerBlue w-[90%] md:w-[60%] lg:w-[30%] shadow-lg py-4 px-5 rounded-md">
                <div className='flex items-center'>
                    <img src={Logo} alt="JobQuest" className='h-[55px] w-[55px]' />
                    <h3 className='text-md font-semibold text-darkerBlue ml-5'>Welcome To JobQuest</h3>
                </div>
                <div>
                    <p className='text-gray-700 text-sm my-2'>
                        If you do not receive any email please click the button below.
                    </p>
                    <div className='flex items-center'>
                        <div role='button' className='mt-2 bg-darkerBlue text-white py-2 text-sm px-2 rounded-md' onClick={() => dispatch(sendEmail())}>Send Verification</div>
                        <div role='button' className='mt-2 text-gray-700 py-2 px-2 rounded-md text-sm hover:underline ml-3' onClick={() => dispatch(sendEmail())}>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
