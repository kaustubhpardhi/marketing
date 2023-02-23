import React from "react";
import logo from "../../Assets/logo/ok5.png";
import insta from "../../Assets/logo/Vectorinsta.png";
import twitter from "../../Assets/logo/Vectortwitter.png";
import fb from "../../Assets/logo/Vectorfb.png";
import "./footer.css";
const Footer = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer" id="footer">
      <div className="footer_upper">
        <div>
          🚀
          {/* <img className='logo_img' src={logo} alt="loading" /> */}
          <p>upLevel </p>
        </div>
        <div>
          <h3>Pages</h3>

          <li>
            <a to="#Home" onClick={() => handleClickScroll("Home")}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a to="#test" onClick={() => handleClickScroll("test")}>
              {" "}
              Tests
            </a>
          </li>
          <li>
            <a to="#Services" onClick={() => handleClickScroll("Services")}>
              {" "}
              Services
            </a>
          </li>
          <li>
            <a to="#About" onClick={() => handleClickScroll("About")}>
              {" "}
              About
            </a>
          </li>
          <li>
            <a to="#Partner" onClick={() => handleClickScroll("Partner")}>
              {" "}
              Partner
            </a>
          </li>
        </div>
        <div>
          <h3>Reference Page</h3>
          <li>Style Guide</li>
          <li>Instructions</li>
          <li>Licensing</li>
          <li>Changelog</li>
          <li>Style Guide</li>
        </div>
        {/* <div>
                    <h3>Pages</h3>
                    <li><a to="#Home" onClick={() => handleClickScroll("Home")}> Home</a></li>
                    <li><a to="#test" onClick={() => handleClickScroll("test")}> Tests</a></li>
                    <li><a to="#Services" onClick={() => handleClickScroll("Services")}> Services</a></li>
                    <li><a to="#About" onClick={() => handleClickScroll("About")}> About</a></li>
                    <li><a to="#Partner" onClick={() => handleClickScroll("Partner")}> Partner</a></li>
                </div> */}
      </div>
      <hr />
      <div className="footer_bottum">
        <div>
          <p>© 2023 UpLevel.com</p>
        </div>
        <div className="social_icon">
          <a
            className="social_icon_a"
            href="https://www.aedin.com/in/onkar-kotule-564608178/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="" />
          </a>
          <a
            className="social_icon_a github"
            href="https://github.com/onkar95"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="" />
          </a>
          <a
            className="social_icon_a"
            href="https://www.instagram.com/onkar_95_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
