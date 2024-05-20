// import facebook from "../../assets/square-facebook.png";
// import eyecross from "../../assets/x-twitter.png";
import instagram from "../../assets/instagram.png";
import companyimg from "../../assets/companyimg.jpg";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import email from "../../assets/form-email.png";
import location from "../../assets/form-location.png";
import call from "../../assets/form-call.png";
import fb from "../../assets/footer-fb.png";
import insta from "../../assets/footer-insta.png";
import twitter from "../../assets/footer-twitter.png";

const ContactUs = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div id="contactus">
      <section className="contact-form">
        <div className="container">
          <motion.div
            onViewportEnter={() => setSelectedPage("contactus")}
            className="form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="company-address">
              <div className="address-group">
                {/* <i className="far fa-envelope fa-3x text-red"></i> */}
                <img alt="logo" src={location} className="mailContact" />
                <h2 className="text-gray md-heading">Location</h2>
                <p>service road, circle, Biswa Bangla Gate, Kolkata</p>
              </div>
              <div className="address-group">
                {/* <i className="far fa-envelope fa-3x text-red"></i> */}
                <img alt="logo" src={email} className="mailContact" />
                <h2 className="text-gray md-heading">Email</h2>
                <p>priya.rai@gmail.com</p>
              </div>
              <div className="address-group">
                {/* <i className="far fa-envelope fa-3x text-red"></i> */}
                <img alt="logo" src={call} className="mailContact" />
                <h2 className="text-gray md-heading">Call us</h2>
                <p>+91 869560543</p>
              </div>
              <img
                src={companyimg}
                alt="Company image"
                className="companyImage"
              />
            </div>
            <form
              className="form"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/c74f88d69dae22b66ec20ace3e3b2bfb"
              method="POST"
            >
              <h1 className="lg-heading text-black">Contact Us</h1>
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                vero nam voluptas soluta quisquam modi quo. Reiciendis est ab
                voluptatibus?
              </p>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name=""
                  id="username"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
              {/* <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="" id="phone" required />
              </div> */}

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name=""
                  id="message"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>
              <button type="submit" className="form-btn">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <footer className="footer">
        <div className="container container-social">
          <div className="social-media-links">
            <img alt="logo" src={insta} className="mailContact" />
            <img alt="logo" src={fb} className="mailContact" />
            <img alt="logo" src={twitter} className="mailContact" />
          </div>
          <p className="footer-p">Get-Fit &copy; 2024, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
