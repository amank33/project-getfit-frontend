// import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Pdf from "../../assets/CodingBook.pdf";
import EmployeeCard from "../employeecard";
import { useContext, useRef } from "react";
import { UserContext } from "../../App";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
// const PDFViewer1 = () => {
//   return (
//     <div style={{ width: "70%", height: "500px" }}>
//       <Worker
//         workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
//       >
//         <Viewer fileUrl={Pdf} />
//       </Worker>
//     </div>
//   );
// };
const PDFViewer = () => {
  let navigate = useNavigate();
  let { access_token, personal_info } = JSON.parse(sessionStorage.user);
  if (!access_token) {
    toast.error("You have been signed out please sign in again");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  if (!personal_info && personal_info?.weight) {
    toast.error(
      "Please fill in personal details first to get diet recommendations"
    );
    setTimeout(() => {
      navigate("/user");
    }, 2000);
  }

  //navigate("/user");

  return (
    <>
      <div className="pdf-page">
        <Toaster />
        <div className="pdf-card-container">
          <EmployeeCard personal_info={personal_info} />
          <BMIChart />
        </div>
        <motion.div
          style={{ width: "90%", height: "75vh" }}
          className="pdf-div"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <iframe
            src={Pdf}
            title="PDF Document"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </motion.div>
      </div>
      <Outlet />
    </>
  );
};

const BMIChart = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  // debugger;
  // let bmi;
  // let bmiCategory;
  let { personal_info } = JSON.parse(sessionStorage.user);
  let height = parseInt(personal_info?.height);

  let weight = parseInt(personal_info?.weight);
  //debugger;

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };

  const data = {
    labels: ["Underweight", "Normal weight", "Overweight", "Obesity"],
    datasets: [
      {
        data: [
          bmiCategory === "Underweight" ? 1 : 0,
          bmiCategory === "Normal weight" ? 1 : 0,
          bmiCategory === "Overweight" ? 1 : 0,
          bmiCategory === "Obesity" ? 1 : 0,
        ],
        backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"],
        hoverBackgroundColor: ["#ff6666", "#3399ff", "#66ff66", "#ff9966"],
      },
    ],
  };
  const calculateBMI = () => {
    //debugger;
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      //bmi = bmiValue;
      let bmiCategory1 = determineBMICategory(bmiValue);
      setBmiCategory(bmiCategory1);
    }
  };

  // setTimeout(() => {
  //   setBmi(bmi);
  // }, 200);
  const buttonRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      buttonRef.current.click();
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 2 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <button ref={buttonRef} onClick={calculateBMI} hidden></button>
      {bmi && <PieChart bmi={bmi} bmiCategory={bmiCategory} data={data} />}
    </motion.div>
  );
};
const PieChart = (val) => {
  let { bmi, bmiCategory, data } = val;
  debugger;
  return (
    <div className="bmi-result">
      <h2>Your BMI: {bmi}</h2>
      <p>Category: {bmiCategory}</p>
      <Pie data={data} />
    </div>
  );
};

export default PDFViewer;
