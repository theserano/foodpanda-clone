import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import "./Carousel_B.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import CardB from "../CardB/CardB";
import image1 from "../../assets/images/a_carousel1.jpg";
import image2 from "../../assets/images/a_carousel2.jpg";
import image3 from "../../assets/images/a_carousel3.jpg";

const Carousel_B = () => {

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="carousel_b">
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
          <CardB 
            image={image1}
            header={"Which markets are panda ads available in?"}
            text={"panda ads is available in 11 markets accross APAC: Bangladesh, Cambodia, Hong Kong, Laos, Malaysia, Myanmar, Pakistan, Philippines, Singapore, Taiwan and Thailand"}
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardB 
            image={image2}
            header={"Do i need to be a vendor on foodpanda to advertise with panda ads?"}
            text={"You don't need to be a foodpanda vendor to advertise with panda ads. Our solutions are available for businesses accross all industries who want to tap into foodpanda's audiences."}
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardB 
            image={image3}
            header={"Are panda ads served only when  users place food delivery orders on foodpanda"}
            text={"panda ads served when any type of order is placed on foodpanda, from food delivery to pick-up, pandamart and foodpanda shops!"}
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
  )
}

export default Carousel_B
