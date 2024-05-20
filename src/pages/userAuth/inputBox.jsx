import { useState } from "react";
import { EyeIcon, KeyIcon, UsersIcon } from "@heroicons/react/24/solid";
import envelope from "../../assets/envelope.png";
import eyecross from "../../assets/eyecross.png";
// import Envelope from "../../assets/envelope-closed";
//common code for all input box
const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="input-box-div">
      <input
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        id={id}
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        className="input-box"
      />
      <i className={"fi " + icon + " input-icon"}></i>
      {name == "fullname" ? (
        <UsersIcon className="icons-signForm" />
      ) : name == "email" ? (
        <img alt="logo" src={envelope} className="mailLogo" />
      ) : name == "password" ? (
        passwordVisible ? (
          <EyeIcon
            className="icons-signForm"
            onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          />
        ) : (
          // <KeyIcon
          //   className="icons-signForm"
          //   onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          // />
          <img
            alt="logo"
            src={eyecross}
            className="mailLogo"
            onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
