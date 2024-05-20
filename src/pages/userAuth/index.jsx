import InputBox from "../userAuth/inputBox";
import googleIcon from "../../assets/google.png";
import { Link, Outlet, Navigate } from "react-router-dom";
import AnimationWrapper from "../../common/page-animation";
import { useContext, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";

import { storeInSession } from "../../common/session";
import { UserContext } from "../../App";
import { authWithGoogle } from "../../common/firebase";

//authentication forms sign in and sign up forms component
const UserAuthForm = ({ type }) => {
  const authForm = useRef();

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);
  console.log(access_token);

  //to submit the data to backend and authenticate
  const serverRoute = type == "signin" ? "/signin" : "/signup";

  //in case of sign or sign up in server.js success
  //writing the userData + access_token to the localSessionStorage and contextAPI
  const userAuthThroughServer = (serverRoute, formData) => {
    //axios.post(process.env.VITE_SERVER_DOMAIN);
    console.log(import.meta.env.VITE_SERVER_DOMAIN);
    console.log("domain");
    axios
      .post("http://localhost:4000" + serverRoute, formData)
      .then(({ data }) => {
        console.log(data);
        storeInSession("user", JSON.stringify(data));
        setUserAuth(data);
      })
      .catch((err) => {
        const { response } = err;
        toast.error(response.data.error);
      });
  };

  //to handle the n submit of sign in or sign up button
  const handleSubmit = (e) => {
    e.preventDefault();

    //get formdata using the id of the form
    let form = new FormData(formElement);
    //let form = new FormData(authForm.current);

    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    validate(formData);
    debugger;
    userAuthThroughServer(serverRoute, formData);
  };

  //handle google authentication
  const handleGoogleAuth = (e) => {
    e.preventDefault();
    authWithGoogle()
      .then(({ user }) => {
        dubugger;
        console.log(user);
        let serverRoute = "/google-auth";
        let formData = {
          access_token: user.accessToken,
        };
        userAuthThroughServer(serverRoute, formData);
      })
      .catch((err) => {
        toast.error("trouble logging to google");
        return console.log(err);
      });
  };

  //in case user signed in navigate back to home
  //if not signed in showing form component
  //return access_token ? (
  //const i = 11;
  return access_token ? (
    <Navigate to="/user/" />
  ) : (
    <>
      <AnimationWrapper keyValue={type}>
        <motion.div
          className="user-auth-div-parent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <section className="user-auth-div">
            <Toaster />
            <form
              ref={authForm}
              id="formElement"
              className="userAuth-form"
              action=""
            >
              <h1 className="userAuth-form-h1">
                {type == "signin" ? "Welcome Back" : "Join Us"}
              </h1>

              {/* conditionally render full name input on sign up */}
              {type != "signin" ? (
                <InputBox
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  icon="fi-rr-user"
                />
              ) : null}

              {/* common for both sign in and sign up */}
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                icon="fi-rr-envelope"
              />
              <InputBox
                name="password"
                type="password"
                placeholder="Password"
                icon="fi-rr-key"
              />
              <button
                className="handleSubmit-sign-button"
                type="submit"
                onClick={handleSubmit}
              >
                {type == "signin" ? "Login" : "Sign Up"}
              </button>

              {/* for google auth below button */}
              <div className="hr-div">
                <hr className="hr" />
                <p>or</p>
                <hr className="hr" />
              </div>

              <button className="googleAuth-btn" onClick={handleGoogleAuth}>
                <img src={googleIcon} className="w-5" alt="" />
                Continue with Google
              </button>

              {/* for sign in and sign up text */}
              {type == "signin" ? (
                <p className="action-btn-p">
                  Don't have an account?
                  <Link to="/signup" className="action-btn-p-link">
                    Sign Up
                  </Link>
                </p>
              ) : (
                <p className="action-btn-p">
                  Already a member?
                  <Link to="/signin" className="action-btn-p-link">
                    Sign In
                  </Link>
                </p>
              )}
            </form>
          </section>
        </motion.div>
      </AnimationWrapper>
      <Outlet />
    </>
  );
};

function validate({ fullname, email, password }) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

  if (fullname && fullname.length < 3)
    return toast.error("Fullname must be at least 3 characters long");

  if (!email.length)
    //run on false
    return toast.error("Please enter Email");

  if (!emailRegex.test(email)) return toast.error("Email is invalid");

  if (!passwordRegex.test(password))
    return toast.error(
      "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters"
    );
}
const UserAuthForm1 = ({ type }) => {
  return <h1>hello</h1>;
};
export default UserAuthForm;
