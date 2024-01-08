import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateEmailandPass } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [validateError, setValidateError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleButton = () => {
    setSignIn(!signIn);
  };

  const handleSubmit = () => {
    const validate = validateEmailandPass(
      email.current.value,
      password.current.value
    );
    const showValidationError = setValidateError(validate);
    if (showValidationError) return null;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/browser");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setValidateError(errorMessage);
        });
    } else {
        signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/browser");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setValidateError(errorMessage);
        });
    }
  };

  return (
    <div className="h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <Header />
      <form
        className="flex flex-col bg-black w-3/12 p-12 my-30 mx-auto left-0 right-0 bg-opacity-90 h-2/3"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-extrabold text-3xl text-white py-4 ">
          {!signIn ? "Sign up" : "Sign In"}
        </h1>
        {validateError && (
          <p className="text-red-400 font-medium text-xs">{validateError}</p>
        )}
        {!signIn && (
          <input
            className="p-4 my-2 bg-gray-600 text-white rounded-md"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 bg-gray-600 text-white rounded-md"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-4 my-2 bg-gray-600 text-white rounded-md"
          placeholder="Input Alphanumeric Password"
          type="text"
        />
        <button
          className="bg-red-500 p-4 my-4 text-white  rounded-md font-semibold"
          onClick={handleSubmit}
        >
          {!signIn ? "Sign up" : "Sign In"}
        </button>
        <div className="flex flex-row justify-between mb-4">
          <span>
            <input type="checkbox" value="remember_me" />
            <label className="text-white mx-1">Remember me</label>
          </span>
          <a className="text-white">Need help?</a>
        </div>
        <h3 className="mt-10 mb-2 text-gray-400">
          {!signIn ? (
            <div className="flex flex-row">
              <p className="text-gray-400 mr-2">Already have a account</p>
              <p
                className="cursor-pointer text-white underline "
                onClick={toggleButton}
              >
                Sign In
              </p>
            </div>
          ) : (
            <div className="flex flex-row">
              <p className="text-gray-400 mr-2">New to Netflix?</p>
              <p
                className="cursor-pointer text-white underline"
                onClick={toggleButton}
              >
                Sign up
              </p>
            </div>
          )}
        </h3>
        <p className="text-gray-400 text-sm">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.{" "}
          <b>Learn more.</b>
        </p>
      </form>
    </div>
  );
};

export default Login;
