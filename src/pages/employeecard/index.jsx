import { useContext, useRef } from "react";
import { UserContext } from "../../App";
import { motion } from "framer-motion";
const EmployeeCard = ({ personal_info }) => {
  // const {
  //   userAuth,
  //   userAuth: { access_token, personal_info },
  //   setUserAuth,
  // } = useContext(UserContext);
  return (
    <motion.div
      className="employee-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="avatar">
        {/* Placeholder for avatar */}
        <img src={personal_info?.profile_img} alt="" />
        {/* <h1>{personal_info?.name}</h1> */}
      </div>
      <div className="info">
        <h2>{personal_info?.fullname}</h2>
        <p>{personal_info?.age} Years, India</p>
        <div className="details">
          <div className="detail-item">
            <span className="detail-title">Weight</span>
            <span className="detail-value">{personal_info?.weight} kg</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Height</span>
            <span className="detail-value">{personal_info?.height} cm</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Goal</span>
            <span className="detail-value">{personal_info?.weightGoal} kg</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
