import "./home.css";
import media1 from "./assets/media1.png";
import media2 from "./assets/media2.png";
import media3 from "./assets/media3.jpg";
import media4 from "./assets/media4.png";
import Hometwo from "./hometwo";
const Home = () => {
  return (
    <div className="home">
      <Hometwo />
      <div className="home-media">
        <div className="media media-1">
          <img src={media1} alt="media1" className="media1-img" />
        </div>
        <div className="media media-2">
          <img src={media2} alt="media2" className="media2-img" />
        </div>
        <div className="media media-3">
          <div className="icon"></div>
          <div className="icon-rating">
            <p className="icon-rating-text">100+</p>
          </div>
          <div className="media3-title">
            <p>Skill Assesment Tests </p>
          </div>
        </div>
        <div className="media media4">
          <div className="icons">
            <img src={media4} alt="media4" className="media4-img"></img>
            <img src={media4} alt="media4" className="media4-img"></img>
            <img src={media4} alt="media4" className="media4-img"></img>
            <img src={media4} alt="media4" className="media4-img"></img>
            <img src={media4} alt="media4" className="media4-img"></img>
          </div>
          <div>
            <p className="media4-title">2.3K+ Reviews</p>
          </div>
        </div>
        <div className="media media5"></div>
        <div className="media media6"></div>
        <div className="media media7">
          <div className="media7-items">
            <div className="profile-image-container">
              <img src={media3} alt="media7" className="profile-image" />
            </div>
            <div className="media7-profile">
              <p className="media7-profile-details">John Doe</p>
              <p className="media7-profile-role">Student</p>
            </div>
          </div>
          <div className="media7-text">
            <p className="media7-text-content">
              When you are learning something you never know when you are job
              ready well with upLevel that's no longer a problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
