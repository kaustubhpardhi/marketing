import "./faq.css";
import media1 from "./media1.png";
import media2 from "./media2.png";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-il1">
        <img src={media1} alt="media1" className=""></img>
      </div>
      <div className="faq-title">
        <p className="">Frequently Asked </p>
        <span className="faq-title2">Questions</span>
      </div>
      <div className="questions">
        <div className="question-one">
          <div className="question1-title">
            <p className=""> How can i take asessment test?</p>
          </div>
          <p className="question1-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            lorem qui lectus molestie malesuada vitae vel purus.
          </p>
        </div>
        <hr className="hr1"></hr>
        <div className="questions-faq">
          <div className="qfaq-title">
            <p>How do i apply for jobs?</p>
          </div>
        </div>
        <hr className="hr2"></hr>

        <div className="questions-faq2">
          <div className="qfaq-title">
            <p>What are skill badges?How they work?</p>
          </div>
        </div>
        <hr className="hr3"></hr>

        <div className="questions-faq3">
          <div className="qfaq-title">
            <p>Do i have to pay for giving test?</p>
          </div>
        </div>
      </div>
      <div className="faq-il2">
        <img src={media2} alt="media2" className=""></img>
      </div>
    </div>
  );
};
export default Faq;
