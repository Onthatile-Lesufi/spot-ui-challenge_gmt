import "./css/Home.css";
import img from "./assets/images/thinkImg.jpeg";

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
          <a href="contact.html" class="cta-button">
            Request a Free Consultation
          </a>
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
            messages that need your attention. We also take care of accurate and
            efficient data entry, ensuring that your records, spreadsheets, and
            databases are always up to date and error-free."**
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
            smooth and efficient. With our support, you can focus on growing
            your business while we take care of maintaining strong relationships
            with your customers.
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
            Additionally, we develop growth strategies tailored to your brand,
            including audience targeting, trend analysis, and collaboration
            opportunities, helping you expand your online presence and maintain
            a consistent, professional image.{" "}
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
            that everyone stays aligned with project goals. Whether managing
            small tasks or complex projects, we ensure efficiency and
            accountability, allowing you to focus on strategic decision-making
            while we handle the details.
          </p>
        </div>
      </section>

      <section class="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Contact us to discuss your requirements.</li>
          <li>We assign a dedicated virtual assistant to handle your tasks.</li>
          <li>
            You focus on growing your business while we take care of the rest.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Home;
