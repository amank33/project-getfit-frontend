import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import EmployeeCard from "../employeecard";

import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useContext, useRef } from "react";
import { UserContext } from "../../App";
import { Link, Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { storeInSession } from "../../common/session";
import { motion } from "framer-motion";

const PersonalDetailsForm = () => {
  const {
    userAuth,
    userAuth: { access_token },
  } = useContext(UserContext);
  if (!access_token) {
    toast.error("You have been signed out please sign in again");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  let { personal_info } = JSON.parse(sessionStorage.user);
  const [weight, setWeight] = useState(
    personal_info ? personal_info.weight : ""
  );
  const [weightGoal, setGoalweight] = useState(
    personal_info ? personal_info.weightGoal : ""
  );
  const [height, setHeight] = useState(
    personal_info ? personal_info.height : ""
  );
  const [gender, setGender] = useState(
    personal_info ? personal_info.gender : ""
  );
  const [age, setAge] = useState(personal_info ? personal_info.age : "");
  const [preference, setPreference] = useState(
    personal_info ? personal_info.preference : ""
  );

  let navigate = useNavigate();

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.className.includes("disable")) {
      return;
    }
    //debugger;

    if (!weight) {
      return toast.error("Please enter weight before submitting");
    }
    // parseInt(weight) &&

    if (parseInt(weight) > 133 || parseInt(weight) < 20) {
      return toast.error("Weight can only be a number ranging from 20 to 133");
    }
    if (!weightGoal) {
      return toast.error("Please enter weight goal before submitting");
    }
    if (parseInt(weightGoal) > 133 || parseInt(weightGoal) < 20) {
      return toast.error(
        "Weight goal can only be a number ranging from 20 to 133"
      );
    }
    if (!height) {
      return toast.error("Please enter height before submitting");
    }
    if (parseInt(height) > 280 || parseInt(height) < 80) {
      return toast.error("Height can only be a number ranging from 80 to 280");
    }
    if (!age) {
      return toast.error("Please enter age before submitting");
    }
    if (parseInt(age) > 110 || parseInt(age) < 1) {
      return toast.error("Height can only be a number ranging from 1 to 110");
    }
    if (!gender.length || gender == "Select gender") {
      return toast.error("Please choose preference before submitting");
    }
    if (!preference.length || preference == "Select preference") {
      return toast.error("Please choose preference before submitting");
    }
    e.target.classList.add("disable");
    const updateObj = {
      weight,
      weightGoal,
      height,
      gender,
      age,
      preference,
    };
    debugger;
    let loadingToast = toast.loading("Saving Data...");
    axios
      .post("http://localhost:4000" + "/update-personal-details", updateObj, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
      .then((res) => {
        debugger;
        console.log(res);
        console.log(userAuth);
        e.target.classList.remove("disable");
        toast.dismiss(loadingToast);
        toast.success("Published Successfully");
        storeInSession("user", JSON.stringify(res));
        //setUserAuth(res);
        // setTimeout(() => {
        //   navigate("/user/pdf");
        // }, 1000);
      })
      .catch(({ response }) => {
        e.target.classList.remove("disable");
        toast.dismiss(loadingToast);
        return toast.error(response.data.error);
      });
  };

  return (
    <>
      {/* <EmployeeCard /> */}
      <motion.div
        className="bmi-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Toaster />
        <p className="bmi-container-title">Personal Details</p>
        <form onSubmit={onSubmit} className="bmi-form">
          <div className="form-grouping">
            <div className="form-group">
              <label className="bmi-container-label" htmlFor="weight">
                Weight (kg):
              </label>
              <input
                type="number"
                id="weight"
                // defaultValue={personal_info?.weight}
                value={weight}
                onChange={handleWeightChange}
                // required
              />
            </div>
            <div className="form-group">
              <label className="bmi-container-label" htmlFor="goal-weight">
                Weight Goal (kg):
              </label>
              <input
                type="number"
                id="goal-weight"
                // defaultValue={personal_info?.weightGoal}
                value={weightGoal}
                onChange={(e) => {
                  setGoalweight(e.target.value);
                }}
                // required
              />
            </div>
            <div className="form-group">
              <label className="bmi-container-label" htmlFor="height">
                Height (cm):
              </label>
              <input
                type="number"
                id="height"
                // defaultValue={personal_info?.height}
                value={height}
                onChange={handleHeightChange}
                // required
              />
            </div>

            <div className="form-group">
              <label className="bmi-container-label" htmlFor="age">
                Age (yrs):
              </label>
              <input
                type="number"
                id="age"
                // defaultValue={personal_info?.age}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                // required
              />
            </div>
            <div className="form-group">
              <label className="bmi-container-label" htmlFor="gender">
                Gender:
              </label>

              <select
                value={gender}
                id="gender"
                // defaultValue={personal_info?.gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {/* <p>Selected Preference: {preference}</p> */}
            </div>
            <div className="form-group">
              <label className="bmi-container-label" htmlFor="preference">
                Preference:
              </label>

              <select
                value={preference}
                id="preference"
                // defaultValue={personal_info?.preference}
                onChange={(e) => setPreference(e.target.value)}
              >
                <option value="">Select preference</option>
                <option value="Veg">Veg</option>
                <option value="Non-veg">Non-veg</option>
                <option value="Both">Both</option>
              </select>
              {/* <p>Selected Preference: {preference}</p> */}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </motion.div>
      <Outlet />
    </>
  );
};

export default PersonalDetailsForm;
