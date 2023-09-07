import "./CardB.scss";

const CardB = ({image, header, text}) => {
  return (
    <div className="card_display container-md">

        <div className="card_content">
            <h1 className="card_content_header">    
                {header}
            </h1>
            <p className="card_content_text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>

        <div className="card_image">
            <img src={image} alt="image" />
        </div>
      
    </div>
  )
}

export default CardB
