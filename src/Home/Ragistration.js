/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BiLogoShopify } from "react-icons/bi";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import {motion} from "framer-motion";
import { RotatingLines } from "react-loader-spinner";

const Ragistration = () => {
  const navigate= useNavigate()
  const auth = getAuth();
  //Error msg start:
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  //Err mssg start:
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");
  //Loading State start:
  const [loading ,setLoading]=useState(false);
  const [successMsg,setSuccessMsg]=useState("");
  //handle function:
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };
  //Email validation:

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handleRagistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
      setFirebaseErr("")
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
       }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrCPassword("password must be at least 6 characters");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm Your Password");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Password not matched");
      }
    }
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
          });
          // Signed in
          const user = userCredential.user;
         // console.log(user);
          setLoading(false);
          setSuccessMsg("Account Created Successfully!")
          setTimeout(()=>{
            navigate("/signIn")
          },3000)
        })
        .catch((error) => {
          const errorCode = error.code;
         if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("email already in use,Try another one")
          }
          // ..
        });
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("")
    }
  };
  return (
    <div className="w-full bg-gray-100 pb-10">
      <form class="w-[250px] mx-auto flex flex-col items-center">
        {""}
        <BiLogoShopify className=" w-32 text-2xl " size={120} />
        <div>
          <h2 className="font-titleFont text-2xl font-medium mb-4">
            Create Account
          </h2>
          <div>
            <p className="text-sm font-medium">
              Your Name
              <input
                onChange={handleName}
                value={clientName}
                type="text"
                className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
              />
              {errClientName && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {errClientName}
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              Email or phone no.
              <input
                onChange={handleEmail}
                value={email}
                type="email"
                className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
              />
              {errEmail && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {errEmail}
                </p>
              )}
               {firebaseErr && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {firebaseErr}
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              Password
              <input
                onChange={handlePassword}
                value={password}
                type="password"
                className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
              />
              {errPassword && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {errPassword}
                </p>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              Confirm Password
              <input
                onChange={handleCPassword}
                value={cPassword}
                type="password"
                className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:duration-100"
              />
              {errCPassword && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.6">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {errCPassword}
                </p>
              )}
            </p>
            <p>Passwords must be at least 6 character.</p>
          </div>
          <br></br>
          <button
            onClick={handleRagistration}
            className=" w-full font-normal rounded-sm bg-gradient-to-t from bg-yellow-600  hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 "
          >
            Continue
          </button>
          {
            loading && (
             <div className="flex justify-center">
              <RotatingLines
              strokeColor="#febd69"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}/>
             </div> 
            )}
            {
              successMsg &&(
                <div>
                  <motion.p initial={{y:10,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.5}}
                  className="text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center">{successMsg}</motion.p>
                </div>
              )
            }

        </div>
        <p className="text-xs text-black leading-4 mt-4">
          By continuing you agree to shopify's
          <span className="text-blue-600">Conditions of Use</span>and
          <span className="text-blue-600">Private Notice.</span>
        </p>
        <div>
          <p className="text-xs text-black">
            Already have an account?{""}
            <Link to="/SignIn">
              <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                Sign in{""}
                <span></span>
                <AiOutlineArrowRight />
              </span>
            </Link>
          </p>
          <p className="text-xs text-black mt-4 cursor-pointer">
            Buying for work?
            <span className="text-blue-600">
              Create a free business account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Ragistration;
