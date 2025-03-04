/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BiLogoShopify } from "react-icons/bi";
import { Link,useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/shopifySlice";
const Signin = () => {
  const dispatch =useDispatch()
  const auth=getAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  //firebaseError:
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if(email && password){
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch(setUserInfo({
        id:user.id,
        userName:user.displayName,
        email:user.email
      }))
      // ...
      setLoading(false);
      setSuccessMsg("Logged in  Successfully! welcome you back!")
    
    setTimeout(()=>{
     navigate("/")
    },3000)
    })
    .catch((error) => {
      setLoading(false);
      const errorcode=error.code;
      if(errorcode.includes("auth/invalid-email")){
        setUserEmailErr("Invalid Email")
      }
      if(errorcode.includes("auth/wrong-password")){
        setUserEmailErr("wrong password try again")
      }
      console.log("Something gone wrong,please try again" )
    })
  }
    setEmail("")
    setPassword("")
    }
  
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        {successMsg ? (
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-green-500 text-green-500 font-titlrFont text-lg font-semibold px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="w-[250px] mx-auto flex flex-col items-center ">
            <Link to="/" className="text-2xl mt-10 font-bold text-orange-500 ">
                      amazon<span className="text-black ">.in</span>
                    </Link>
            <div className="w-full border border-zinc-200 p-1 ">
              <h2 className="font-titleFont text-2xl font-medium mb-4">
                SignIn
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or phone number:</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
                  type="email"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
                {userEmailErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {userEmailErr}
                  </p>
                )}
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">password:</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
                    type="password"
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                  {userPassErr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userPassErr}
                    </p>
                  )}
                </div>
                <br></br>
                <button
                  onClick={handleLogin}
                  className=" w-full h-10 font-normal rounded-full bg-gradient-to-t from bg-yellow-400  hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 "
                >
                  Continue
                </button>
                {loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-black leading-4 mt-4">
                By continuing you agree to shopify's
                <span className="text-blue-600">Conditions of Use</span>and
                <span className="text-blue-600">Privace Notice.</span>
              </p>
              <p className="text-xs text-gray-600 mt-4 cursor-pointer">
                <AiOutlineArrowRight />
                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                  Need help
                </span>
              </p>
            </div>
            <div>
              <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                <span className="w-1/3 text-center">New to Shopify</span>
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              </p>
              <Link className="w-full" to="/Ragistration">
                <button className="w-full h-10 p-1 font-normal rounded-sm bg-gradient-to-t from bg-gray-200  hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 ">
                  Create Your Shopify Account
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions Of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          @ 1996-2023,ReactBd.com,Inc.or its affiliated
        </p>
      </div>
    </div>
  );
};

export default Signin;
