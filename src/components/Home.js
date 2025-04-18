import "./css/Home.css";
import { Link } from "react-router-dom";
import img from "./assets/images/thinkImg.jpeg";
import img2 from "./assets/images/CustomerSupport.jpg";

function Home() {
  return (
    <div>
      <header>
        <div className="homeImg">
          <img src={img} />
        </div>
        <div className="homeInfo">
          <h1>Simplify Your Work, Maximize Your Time</h1>
          <p>
            Professional virtual assistant services tailored to meet your
            business needs.
          </p>
          <Link to='/contact-us' class="cta-button">
            Request a Free Consultation
          </Link>
        </div>
      </header>

      <h2 id="heading">Key Services</h2>
      <section class="services">
        <div class="service">
          <h3>Administrative Support</h3>
          <p>
            "Managing your calendar efficiently ensures that you never miss an
            important meeting, deadline, or appointment. Our virtual assistants
            handle everything from scheduling meetings to setting reminders and
            managing time zones for international clients. Additionally, we
            provide seamless email management, keeping your inbox organized,
            filtering out spam, responding to inquiries, and prioritizing
            messages that need your attention.
          </p>
        </div>
        <div class="service">
          <h3>Customer Service Support</h3>
          <p>
            {" "}
            Providing excellent customer service is key to building trust and
            loyalty with your clients. Our virtual assistants handle customer
            inquiries professionally, ensuring prompt and helpful responses via
            phone, email, or live chat. Whether it’s answering frequently asked
            questions, troubleshooting issues, or providing detailed product or
            service information, we ensure that every customer interaction is
            smooth and efficient.
          </p>
        </div>
        <div class="service">
          <h3>Social Media Management</h3>
          <p>
            {" "}
            A strong social media presence is essential for brand growth and
            engagement. Our virtual assistants handle content scheduling,
            ensuring your posts go live at the optimal times to maximize reach
            and interaction. We also engage with your audience by responding to
            comments, messages, and mentions to foster a loyal community.
            {" "}
          </p>
        </div>
        <div class="service">
          <h3>Project Management</h3>
          <p>
            Effective project management ensures that tasks are completed on
            time and that your team stays organized and productive. Our virtual
            assistants oversee task assignments, track deadlines, and ensure
            that all projects progress smoothly. We help coordinate team
            communication, streamline workflows, and provide regular updates so
            that everyone stays aligned with project goals.
          </p>
        </div>
      </section>

      <section class="how-it-works">
      <div className="how">
        <h2>How It Works</h2>
      
       <li>Contact us to discuss your requirements.</li>
          <li>We assign a dedicated virtual assistant to handle your tasks.</li>
          <li>
            You focus on growing your business while we take care of the rest.
          </li>
       </div>
       <div>
      <img src={img2}/>
       </div>
         
       
      </section>
    </div>
  );
}

export default Home;
