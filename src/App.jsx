import { createContext, useState, useEffect } from "react";
// import "./App.css";
import Home from "../src/pages/home";
import Fitness from "./pages/fitness";
import Nutrition from "../src/pages/nutrition";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Navbar from "./pages/navbar";
import PersonalDetailsForm from "./pages/personaldetails";
import PDFViewer from "./pages/employeepdf";
import LogNavbar from "./pages/navbar/lognav";
import videoFile from "../src/assets/video3.mp4";
//import { ReactComponent as Facebooksvg } from "../src/assets/square-facebook.svg";
import { motion } from "framer-motion";

import { Routes, Route } from "react-router-dom";
import { lookInSession } from "../src/common/session";
import UserAuthForm from "../src/pages/userAuth";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const UserContext = createContext({});

const SelectedPage = {
  Home: "home",
  Exercises: "exercises",
  Nutrition: "nutrition",
  AboutUs: "aboutus",
  ContactUs: "contactus",
};

function App() {
  //const [count, setCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const [userAuth, setUserAuth] = useState({});

  //to close the menu dropdown when the user clicks anywhere else on the screen
  document.onclick = (e) => {
    //let aside = document.getElementsByClassName("mobile-nav");
    let aside = document.querySelector(".mobile-nav");
    let menubtn = document.querySelector(".menu-btn");
    if (aside) {
      console.log(aside.contains(e.target));
    }
    if (
      aside &&
      !aside.contains(e.target) &&
      menubtn &&
      !menubtn.contains(e.target)
    ) {
      setIsMenuToggled(!isMenuToggled);
    }
  };
  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ acess_token: null });

    //to handle scroll
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        <Routes>
          <Route
            path="/signin"
            element={
              <>
                <LogNavbar
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <UserAuthForm type="signin" />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <LogNavbar
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                  type={"sign"}
                />
                <UserAuthForm type="signup" />
              </>
            }
          />
          <Route
            path="/user/"
            element={
              <>
                <LogNavbar
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                  type={"user"}
                />
                <PersonalDetailsForm />
              </>
            }
          />
          <Route
            path="/user/pdf"
            element={
              <>
                <LogNavbar
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                  type={"user"}
                />
                <PDFViewer />
              </>
            }
          />
          <Route
            index
            element={
              <>
                <div id="home">
                  <div className="hero">
                    <VideoComponent />
                    <Navbar
                      isTopOfPage={isTopOfPage}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      setIsMenuToggled={setIsMenuToggled}
                      isMenuToggled={isMenuToggled}
                    />
                    <div className="content-flex">
                      <motion.div
                        className="content content-getFit-div other-content-decrease-opacity"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                          hidden: { opacity: 0, y: -100 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <h1>GetFit</h1>
                      </motion.div>
                      <motion.div
                        className="content content-explore-div other-content-decrease-opacity"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                          hidden: { opacity: 0, y: 100 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <AnchorLink href="#exercises">Explore</AnchorLink>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <MainPage setSelectedPage={setSelectedPage} />
              </>
            }
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

const MainPage = ({ setSelectedPage }) => {
  return (
    <>
      <main className="content-decrease-opacity">
        <Fitness setSelectedPage={setSelectedPage} />
        <Nutrition setSelectedPage={setSelectedPage} />
        <div className="lowerElements">
          <AboutUs setSelectedPage={setSelectedPage} />
          <ContactUs setSelectedPage={setSelectedPage} />
        </div>
      </main>
    </>
  );
};

const VideoComponent = () => {
  return (
    // <div className="video-container">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="back-video other-content-decrease-opacity"
    >
      <source src={videoFile} type="video/webm" />
    </video>
    // </div>
  );
};

export default App;
