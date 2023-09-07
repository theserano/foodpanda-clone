import foodpandlogo from "../../assets/images/foodpanda_logo.svg";
import {Link} from "react-router-dom";
import "./Menubar.scss";

const Menubar = () => {


  return (
    <div className="menubar container-fluid">
      <div className="foodpanda_logo">
            <img src={foodpandlogo} alt="foodpanda" />
        </div>

        <div className="foodpanda_nav_links">
            <ul className="nav_links">
                <li><Link className="links" to={`/`}>Home</Link></li>
                <li><Link className="links" to={`/about`}>About</Link></li>
                <li><Link className="links" to={`/pandaads`}>panda ads</Link></li>
                <li><Link className="links" to={`/contact`}>contact</Link></li>
            </ul>

        </div>
        
    </div>
  )
}

export default Menubar
