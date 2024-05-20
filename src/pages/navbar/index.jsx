import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logow.png";
import ALink from "./link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  isMenuToggled,
  setIsMenuToggled,
}) => {
  //const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1279px)");
  const navbarBackground = isTopOfPage ? "" : "notTopofPage"; //if website not at top of the page
  let navigate = useNavigate();
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

              {/* RIGHT SIDE */}
              {isAboveMediumScreens ? (
                <div className={`flex-between w-full`}>
                  <div className={`flex-between gap-8 text-sm`}>
                    <ALink
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <ALink
                      page="Exercises"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <ALink
                      page="Nutrition"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <ALink
                      page="About Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <ALink
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`flex-between gap-8`}>
                    {/* <p className="sign-in" onClick="location.href='../signin'">
                    Sign In
                  </p> */}
                    <Link to="/signin" className="sign-in">
                      Sign In
                    </Link>
                    {/* <button
                      className="become-member-btn"
                      onClick="location.href='../signin'"
                    >
                      Become a Member
                    </button> */}
                    <Link to="/signup" className="become-member-btn">
                      Become a Member
                    </Link>
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

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="mobile-nav">
            {/* CLOSE ICON */}
            <div className="close-icon">
              <button
                className="btn-black"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <XMarkIcon className="xMarkIcon" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="menu-items">
              <ALink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ALink
                page="Exercises"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ALink
                page="Nutrition"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ALink
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ALink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link to="/signin" className="navbar-item">
                Sign In
              </Link>
              <Link to="/signup" className="navbar-item">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
