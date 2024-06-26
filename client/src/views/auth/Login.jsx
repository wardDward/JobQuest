import NavigationBar from "../../components/navigations/NavigationBar";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";

export default function Login() {
  return (
    <>
      <NavigationBar />
      <div className="h-screen flex justify-center items-center bg-slate-50">
        <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[35%] mt-[50px] h-[90%]">
          <a
            href="#"
            className="flex justify-end mb-1 text-current font-semibold hover:underline"
          >
            Are you an employer?
          </a>
          <div className="w-full bg-white shadow-lg rounded-md h-[85%] p-2 md:p-[50px] flex flex-col">
            <h1 className="text-3xl md:text-4xl text-gray-700 font-bold">
              Sign in
            </h1>
            <form action="" className="flex flex-col my-6">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-md font-semibold text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
                />
              </div>
              <div className="flex flex-col mt-5 mb-4">
                <label
                  htmlFor="password"
                  className="text-md font-semibold text-gray-700 flex items-center justify-between"
                >
                  <span>Password</span>
                  <a
                    href="#"
                    className="flex justify-end text-current font-semibold hover:underline"
                  >
                    Forgot Password?
                  </a>
                </label>
                <input
                  type="password"
                  className="w-full border border-slate-400 rounded-lg p-2 mt-1 outline-none focus:ring-2"
                />
              </div>
              <div className="mt-10 mb-2">
                <button
                  type="submit"
                  className="bg-magenta-100 text-white w-full py-2 font-bold tracking-wider rounded-md hover:bg-magenta-200"
                >
                  Sign In
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
              <div className="mt-5 text-gray-600 text-md text-center md:text-start">{"Don't "} have an account? <a href="#" className="text-current hover:underline">Sign Up.</a></div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[50px] bg-white border-b-[1px] p-[10px] flex items-center">
        NavigationBar
      </div>
    </>
  );
}
