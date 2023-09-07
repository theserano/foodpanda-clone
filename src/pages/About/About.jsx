import Card from "../../components/Card/Card";
import Carousel_A from "../../components/Carousel_A/Carousel_A";
import Footer from "../../components/Footer/Footer";
import Menubar from "../../components/Menubar/Menubar";
import "./About.scss";
import image3 from "../../assets/images/jason-goodman-Oalh2MojUuk-unsplash-scaled-e1681198203102.jpg";


const About = () => {  


  return (
    <div className="about">
      <Menubar />
      <div className="home_video about_image">
        <div className="home_video_text">About foodpanda</div>
      </div>

      {/* text describing foodpanda */}
      <div className="about_text container pt-5 mb-5 ">
        <h3>From food delivery to your daily convenience companion.</h3>
        <p>
          A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014
          as a food delivery platform. Dedicated to helping customers get their
          tasty favourites fast, it quickly won the hearts and minds of
          customers in APAC.
        </p>
        <p>
          Powered by tech and operational excellence, foodpanda has been growing
          its quick-commerce footprint in more than 400 cities across 11 markets
          in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan,
          Philippines, Bangladesh, Laos, Cambodia, and Myanmar.{" "}
        </p>
        <p>
          Thanks to dedicated partners, riders, and a team united by shared
          values, foodpanda is now providing millions with a convenient way to
          get food and groceries in a few taps.
        </p>
      </div>

      {/* sliding carousel about foodpanda */}
      <Carousel_A />

      <Card 
        image={image3}
        header={"Find the job you'd love"}
        text={"Hungry to make a difference? Theres a seat at our table! <br /> <br />Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda."}
        button={"Join us!"}
      />

      <Footer />
    </div>
  );
};

export default About;
