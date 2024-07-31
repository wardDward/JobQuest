import { Link } from "react-router-dom";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleRegister } from "../../redux/actions/userAction";
import { handleInputChanges } from "../../utils/inputHelper";
import Swal from "../../components/popUps/Swal";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(state => state.users);
  const [showSwal, setShowSwal] = useState(false)
  const { users } = useSelector(state => state.users)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    const ressponse = await dispatch(handleRegister(formData));
    console.log(ressponse);
    if (ressponse.meta.requestStatus === 'fulfilled') {
      setFormData({
        email: '',
        password: ''
      })
      setShowSwal(true)
      setTimeout(() => {
        setShowSwal(false)
      }, 3000)
    }
  };


  useEffect(() => {
    if (users && users.email_verified_at === null) {
      navigate('/email/verification')
    }
  }, [users, navigate])


  return (
    <>
      <h1 className="text-3xl md:text-4xl text-gray-700 font-bold">Register</h1>
      <form onSubmit={register} className="flex flex-col my-6">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-700"
          >
            Email address
          </label>
          <input
            name="email"
            onChange={(e) => handleInputChanges(e, formData, setFormData)}
            type="email"
            className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
            value={formData.email}
          />
          {errorMessage?.email && (
            <p className="text-red-500 text-sm">{errorMessage.email[0]}</p>
          )}
        </div>
        <div className="flex flex-col mt-5 mb-4">
          <label
            htmlFor="password"
            className="text-md font-semibold text-gray-700"
          >
            <span>Password</span>
          </label>
          <input
            name="password"
            onChange={(e) => handleInputChanges(e, formData, setFormData)}
            type="password"
            className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
            value={formData.password}
          />
          {errorMessage?.password && (
            <p className="text-red-500 text-sm">{errorMessage.password[0]}</p>
          )}
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
        <div className="mt-5 mb-2">
          <button
            disabled={isLoading}
            type="submit"
            className={`${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} bg-magenta-100 text-white w-full py-2 font-bold tracking-wider rounded-md hover:bg-magenta-200 flex items-center justify-center`}
          >
            {isLoading && (
              <span className="loading loading-bars loading-xs"></span>
            )}
            <span className={`${isLoading ? "hidden" : "block"}`}>Sign Up</span>
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
          Already have an account?{" "}
          <Link to="/login" className="text-current hover:underline">
            Sign In.
          </Link>
        </div>
      </form>
      {showSwal && <Swal message={'success'}>
        <div className="flex flex-col justify-center items-center my-3 p-2">
          <MarkEmailReadIcon sx={{ fontSize: 55 }} className="text-lime-700 mb-3" />
          <p className="text-center text-md text-gray-800">We sent a email verification in your registered email. Please check your email.</p>
        </div>
      </Swal>}

    </>
  );
}
