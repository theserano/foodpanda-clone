import "./Footer.scss";
import footer_logo from "../../assets/images/foodpanda_logo.svg";
import { Link } from "react-router-dom";
import {BiLogoLinkedin} from "react-icons/bi";
import {AiFillInstagram} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">

        <div className="footer_logo">
            <img src={footer_logo} alt="logo" />
        </div>

        <div className="footer_links">
            <div className="first_links">
                <h5>Navigate</h5>
                <ul>
                    <li>
                        <Link className="links" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="links" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="links" to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className="links" to='/newsroom'>Newsroom</Link>
                    </li>
                </ul>
            </div>

            <div className="second_links">
                <h5>Follow us on</h5>
                <ul>
                    <li><a href="https://linkedin.com"><BiLogoLinkedin /></a></li>
                    <li><a href="https://twitter.com"><BsTwitter /></a></li>
                    <li><a href="https://instagram.com"><AiFillInstagram /></a></li>
                </ul>
            </div>
        </div>

        <div className="small_links">
            <div className="copy">
                Copyright©2023 <Link to='/' className="links">foodpanda</Link>
            </div>
            <div>Privacy Policy</div>
        </div>

    </div>
  )
}

export default Footer
