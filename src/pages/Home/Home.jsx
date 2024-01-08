import Card from "../../components/Card/Card";
import Menubar from "../../components/Menubar/Menubar";
import "./Home.scss";
import image1 from "../../assets/images/fp-home.jpg";
import image2 from "../../assets/images/foodpanda-home-2.jpg";
import btnimage1 from "../../assets/images/app-apple.png";
import btnimage2 from "../../assets/images/app-google.png";
import btnimage3 from "../../assets/images/app-huawei.png";
import image3 from "../../assets/images/jason-goodman-Oalh2MojUuk-unsplash-scaled-e1681198203102.jpg";
import Carousel from "../../components/Carousel/Carousel";
import {IoIosArrowForward} from "react-icons/io";
import Image_last from "../../assets/images/foodpanda-home-3.jpg";
import Footer from "../../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
// import Loading from "../../components/loading/Loading";

const Home = () => {

  const cardRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setTextVisible(entry.isIntersecting)
    })
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
  }, [])

  return (
    <div className="home">
      <Menubar />

      {/* Home video display */}
      <div className="home_video">
        <video
          poster="https://www.foodpanda.com/wp-content/uploads/2023/03/fp-home-video-poster.jpg"
          id="player"
          className="video_content"
          autoPlay
          muted
          loop
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/809646186/rendition/720p/file.mp4?loc=external&amp;signature=b3c8f78618e1bc64987de8a2533c33471709edf480fc783d42672110f40b500b"
            type="video/mp4"
          />
        </video>

        {/* text on the home video */}
        <div className="home_video_text">food and groceries in a tap</div>
      </div>

      {/* text explanation */}
      <div className={`home_first_text ${textVisible ? "home_text_active" : ""}`} ref={cardRef}>
        <p>
          We&rsquo;re here to help you live life the panda way. Spend more time
          doing what you love{" "}
        </p>
        <p>
          -we&rsquo;ll take care of tasty meals, fresh groceries and new
          flavours.
        </p>
      </div>

      {/* home cards */}
        <Card
          image={image1}
          header={"Meet the next generation of delivery!"}
          text={
            "What makes quick commerce quick? We stand for swift personalized delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe."
          }
          button={"read our story"}
        />

      {/* Home card with different positions */}
      <div className="home_card_display container">
        
        <div className="home_card_content">
          <h1 className="home_card_content_header">Taste the convenience.</h1>
          <p className="home_card_content_text">
            Try us out! Delicious food and speedy groceries are at your
            fingertips. Go ahead, download foodpanda now.
          </p>
          <div className="home_card_content_button">
            <img src={btnimage1} alt="stuff" />
            <img src={btnimage2} alt="stuff" />
            <img src={btnimage3} alt="stuff" />
          </div>
        </div>

        <div className="home_card_image">
          <img src={image2} alt="image" />
        </div>

      </div>

      {/* third home card  */}
      <Card 
        image={image3}
        header={"Find the job you'd love"}
        text={"Hungry to make a difference? Theres a seat at our table! <br /> <br />Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda."}
        button={"Join us!"}
      />

      <div className="home_question">
        <h1>Have you heard?</h1>
        <p>The industry is changing fast! Stay up to date with foodpanda press. Catch up on the lates news, updates and reports here.</p>
      </div>

      {/* carousel for home page */}
      <Carousel />
      
      {/* Feed the Team */}
      <div className="home_card_display container">
        
        <div className="home_card_content">
          <h1 className="home_card_content_header">Feed your team.</h1>
          <p className="home_card_content_text">
          Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.
          </p>
          <button className="feed_btn">Learn more<IoIosArrowForward /></button>
        </div>

        <div className="home_card_image">
          <img src={Image_last} alt="image" />
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Home;
