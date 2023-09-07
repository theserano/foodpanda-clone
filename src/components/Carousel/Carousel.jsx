import "./Carousel.scss";
import carousel_image_1 from "../../assets/images/carousel1.jpg"
import carousel_image_2 from "../../assets/images/carousel2.jpg"
import carousel_image_3 from "../../assets/images/carousel3.jpg"


const Carousel = () => {

    const firstDiv = {
        backgroundImage: `url(${carousel_image_1})`
    }
    const secondDiv = {
        backgroundImage: `url(${carousel_image_2})`
    }
    const thirdDiv = {
        backgroundImage: `url(${carousel_image_3})`
    }

  return (
    <div className="carousel_display container">

        <div className="carousel_container">

        <div className="carousel_card" style={firstDiv}>
            <div className="carousel_card_nav">
                <span>Business</span>
                <span>Merchants</span>
                <span>Press</span>
            </div>

            <div className="carousel_card_text">
                foodpanda launches inaugural partner summit as part of future-proofing its merchant ecosystem
            </div>
        </div>


        <div className="carousel_card" style={secondDiv}>
            <div className="carousel_card_nav">
                <span>Business</span>
                <span>Merchants</span>
                <span>Press</span>
            </div>

            <div className="carousel_card_text">
                foodpanda adds major brands to its growing quick-commerce retail arm
            </div>
        </div>


        <div className="carousel_card" style={thirdDiv}>
            <div className="carousel_card_nav">
                <span>Business</span>
                <span>Merchants</span>
                <span>Press</span>
            </div>

            <div className="carousel_card_text">
                pandamart refreshes the grocery shopping experience with pick-up service
            </div>
        </div>

        </div>


    </div>
  )
}




export default Carousel
