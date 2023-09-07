import "./Card.scss";

const Card = ({image, header, text, button}) => {
  return (
    <div className="card_display container-md">

        <div className="card_image">
            <img src={image} alt="image" />
        </div>
        <div className="card_content">
            <h1 className="card_content_header">
                {header}
            </h1>
            <p className="card_content_text" dangerouslySetInnerHTML={{ __html: text }} />
            <button className="card_content_button">
                {button}
            </button>
        </div>
      
    </div>
  )
}

export default Card
