import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] w-full h-[100vh] bg-cover bg-center bg-no-repeat">
      <Header />
      {/* <div className="absolute z-0">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div> */}

      <div className="relative w-[450px] mx-auto my-8 px-16 py-12 text-white">
        <div className="absolute inset-0 bg-black opacity-80 rounded-md z-0"></div>
        <div className="relative z-10">
          <p className="mb-7 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          <form className="flex flex-col">
          {!isSignInForm && <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 rounded-md bg-gray-900 opacity-80"
            />}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-3 my-2 rounded-md bg-gray-900 opacity-80"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 my-2 rounded-md bg-gray-900 opacity-80"
            />
            <button className="px-4 py-2 rounded-md bg-red-600 my-2 relative">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex gap-1">
              <span className="opacity-80">{isSignInForm ? "New to Netflix?" : "Already a user?"}</span>
              <p
                className="font-extrabold cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
