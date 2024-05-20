import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logow.png";
import ALink from "./link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext, useRef } from "react";

import AnimationWrapper from "../../common/page-animation";
import { removeFromSession } from "../../common/session";

const LogNavbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  isMenuToggled,
  setIsMenuToggled,
  type,
}) => {
  //const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [userIconPanel, setUserIconPanel] = useState(false); //for img open to manage nav panel for user
  const isAboveMediumScreens = useMediaQuery("(min-width: 1279px)");
  const navbarBackground = isTopOfPage ? "" : "notTopofPage"; //if website not at top of the page
  let navigate = useNavigate();

  const {
    userAuth,
    userAuth: { access_token, personal_info },
  } = useContext(UserContext);

  //profile_img, fullname, username

  const handleIconPanelBlur = () => {
    setTimeout(() => {
      setUserIconPanel(false);
    }, 200);
  };
  const handleUserIconPanelClick = () => {
    setUserIconPanel((state) => !state);
  };
  return (
    <>
      <nav className="navbar-maindiv">
        <motion.div
          className={`${navbarBackground} flex-between navbar`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex-between navbar-outer">
            <div className={`flex-between w-full navbar-inner`}>
              {/* LEFT SIDE */}
              <img alt="logo" src={Logo} className="navLogo" />

              {/* RIGHT SIDE isAboveMediumScreens*/}
              {true ? (
                <div className={`flex-between w-full`}>
                  <div className={`flex-between gap-8 text-sm`}>
                    <Link to="/" className="lognav-item">
                      Home
                    </Link>
                  </div>
                  <div className={`flex-between gap-8`}>
                    {/* <p className="sign-in" onClick="location.href='../signin'">
                    Sign In
                  </p> */}

                    {/* <button
                      className="become-member-btn"
                      onClick="location.href='../signin'"
                    >
                      Become a Member
                    </button> */}
                    {access_token ? (
                      <>
                        {/* <Link to="/" className="">
                          LogOut
                        </Link> */}
                        <div
                          className="div-imgNavbar"
                          onClick={handleUserIconPanelClick}
                          onBlur={handleIconPanelBlur}
                        >
                          <button className="user-img-button-nav">
                            <img
                              src={personal_info?.profile_img}
                              className="user-img-nav"
                              alt=""
                            />
                          </button>
                          {userIconPanel ? (
                            <UserIconPanel navigate={navigate} />
                          ) : null}
                        </div>
                      </>
                    ) : (
                      <Link to="/" className="become-member-btn">
                        Go Back
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  className="menu-btn"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="barsIcon" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </nav>
      {/* 
      
      
      {access_token ? (
        //  if access token is present means user signed in the showing user details instead of sign up and sign in
        <>
          <Link to="/dashboard/notification">
            <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
              <i className="fi fi-rr-bell text-2xl block mt-1"></i>
            </button>
          </Link>
          <div
            className="relative"
            onClick={handleUserNavPanelClick}
            onBlur={handlePanelBlur}
          >
            <button className="w-12 h-12 mt-1">
              <img
                src={personal_info?.profile_img}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </button>
            {userNavPanel ? <UserNavigationPanel /> : null}
          </div>
        </>
      ) : (
        <>
          <Link to="/signin" className="sign-in">
            Sign In
          </Link>

          <Link to="/signup" className="become-member-btn">
            Become a Member
          </Link>
        </>
      )} */}
      <Outlet />
    </>
  );
};

const UserIconPanel = ({ navigate }) => {
  const {
    userAuth,
    userAuth: { access_token, personal_info },
    setUserAuth,
  } = useContext(UserContext);

  const signOutUser = () => {
    //let navigate = useNavigate();
    removeFromSession("user");
    setUserAuth({ access_token: null });

    console.log("logout clicked");
    navigate("/");
  };

  return (
    <AnimationWrapper
      transition={{ duration: 0.2 }}
      className="imgOpen-wrapper"
    >
      <div className="imgOpen-nav">
        <Link to="/user" className="imgOpen-links">
          Personal Details
        </Link>
        <Link to="/user/pdf" className="imgOpen-links">
          Diet Recommendations
        </Link>

        <span className="span-logout"></span>

        <button className="signOut-button" onClick={signOutUser}>
          <h1 className="signOut-h1">Sign Out</h1>
          <p className="signOut-p">@{personal_info?.username}</p>
        </button>
      </div>
    </AnimationWrapper>
  );
};

export default LogNavbar;

const MobileMenuModal = () => {
  return (
    <h1>mobile menu</h1>
    // {/* MOBILE MENU MODAL */}
    // {!isAboveMediumScreens && isMenuToggled && (
    //   <div className="mobile-nav">
    //     {/* CLOSE ICON */}
    //     <div className="close-icon">
    //       <button
    //         className="btn-black"
    //         onClick={() => setIsMenuToggled(!isMenuToggled)}
    //       >
    //         <XMarkIcon className="xMarkIcon" />
    //       </button>
    //     </div>

    //     {/* MENU ITEMS */}
    //     <div className="menu-items">
    //       {/* <ALink
    //         page="Home"
    //         selectedPage={selectedPage}
    //         setSelectedPage={setSelectedPage}
    //       /> */}
    //       <Link to="/" className="">
    //         Home
    //       </Link>
    //       {access_token ? (
    //         <div
    //           className="div-imgNavbar"
    //           onClick={handleUserIconPanelClick}
    //           onBlur={handleIconPanelBlur}
    //         >
    //           <button className="user-img-button-nav">
    //             <img
    //               src={personal_info?.profile_img}
    //               className="user-img-nav"
    //               alt=""
    //             />
    //           </button>
    //           {userIconPanel ? <UserIconPanel /> : null}
    //         </div>
    //       ) : (
    //         <>
    //           <Link to="/signin" className="sign-in">
    //             Sign In
    //           </Link>

    //           <Link to="/signup" className="become-member-btn">
    //             Become a Member
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    //)}
  );
};
