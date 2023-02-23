import media1 from "./media1.png";
import media2 from "./media2.jpg";
import media3 from "./media3.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="illustration-1">
        <img src={media1} alt="media1" className="illustration-img1" />
      </div>
      <div className="testi-title">
        <div className="title1">
          <p className="">Don't take our word,Listen what Our</p>
        </div>
        <div className="title2">
          <p className="">Customers Say!</p>
        </div>
      </div>
      <div className="illustration-2">
        <img src={media3} alt="media3" />
      </div>
      <div className="testi-cards">
        <div className="testi-card1">
          <div className="image-container"></div>
          <img className="card1-image" src={media2} alt="media2"></img>
          <p className="card1-content">
            Whenever you are learning something, you never know when you are job
            ready. Well with UpLevel, thats no longer a problem.
          </p>
          <p className="card1-name">Antonia Jonathan</p>
          <p className="card-tag">@antonioth</p>
        </div>
        <div className="testi-card2">
          <div className="image-container"></div>
          <img className="card1-image" src={media2} alt="media2"></img>
          <p className="card1-content">
            Whenever you are learning something, you never know when you are job
            ready. Well with UpLevel, thats no longer a problem.
          </p>
          <p className="card1-name">Antonia Jonathan</p>
          <p className="card-tag">@antonioth</p>
        </div>
        <div className="testi-card3">
          <div className="image-container"></div>
          <img className="card1-image" src={media2} alt="media2"></img>
          <p className="card1-content">
            Whenever you are learning something, you never know when you are job
            ready. Well with UpLevel, thats no longer a problem.
          </p>
          <p className="card1-name">Antonia Jonathan</p>
          <p className="card-tag">@antonioth</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
