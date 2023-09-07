import Footer from "../../components/Footer/Footer";
import Menubar from "../../components/Menubar/Menubar";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      
      <Menubar />

      <div className="home_video contact_image">
        <div className="home_video_text">Contact us</div>
      </div>

      <div className="contact_form">
        <div className="contact_input">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="message"></textarea>
        <input type="submit" value="Send message" />
      </div>

      <Footer />

    </div>
  )
}

export default Contact
