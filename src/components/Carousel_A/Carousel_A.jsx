import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import "./Carousel_A.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Card from "../Card/Card";
import image1 from "../../assets/images/about-image-1.jpg";
import image2 from "../../assets/images/about-image-2.jpg";
import image3 from "../../assets/images/about-image-3.jpg";

const Carousel_A = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="carousel_a">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            image={image1}
            header={"Customers come first"}
            text={
              "We are far more than just swift food delivery. foodpanda enables customers to pickup their takeaway meals, skip boring grocery trips and send parcels. Customer needs are at teh core and center of our business."
            }
            button={"right?"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={image2}
            header={"Our riders are our heros"}
            text={`We're here to provide exciting opportunities and empower work flexibility. Learn more about our riders' journey or sign up to become one `}
            button={"ride with us"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={image3}
            header={"Growing with our partners"}
            text={
              "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?"
            }
            button={"become a partner"}
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel_A;
