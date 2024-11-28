import React, { useState } from "react";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
  const [isLogin, SetIsLogin] = useState(true);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br
  from-red-500 to-pink-500 p-4
  "
    >
      <div className="w-full max-w-md ">
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          {isLogin ? "SignIn to Swipe" : "Create a Swipe Account"}
        </h2>
        <div className="bg-white shadow-xl rounded-lg p-8">
          {isLogin ? <LogInForm /> : <SignUpForm />}
          <div className="mt-8 text-center ">
            <p className="text-sm text-gray-600">
              {isLogin ? "New to Swipe?" : "Already have an account?"}
            </p>
            <button
              onClick={() => SetIsLogin((prevIsLogin) => !prevIsLogin)}
              className="mt-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
            >
              {isLogin ? "Create an account" : "Sign in to your Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
