import Menubar from "../../components/Menubar/Menubar"
import "./PandaAds.scss"
import tapImage from "../../assets/images/Main-character-Group-shot-1_all-1.png";
import handHeld from '../../assets/images/hand-holding-phone-970x693-1.png'
import worked1 from "../../assets/images/worked_logo/amazon-logo-1.png";
import worked2 from "../../assets/images/worked_logo/citi-logo-1.png";
import worked3 from "../../assets/images/worked_logo/coca-cola-logo-1.png";
import worked4 from "../../assets/images/worked_logo/groupm-logo-1-1.png";
import worked5 from "../../assets/images/worked_logo/heineken-logo-1.png";
import worked6 from "../../assets/images/worked_logo/huawei-logo-1.png";
import worked7 from "../../assets/images/worked_logo/mastercard-logo-1.png";
import worked8 from "../../assets/images/worked_logo/netflix-logo-1.png";
import worked9 from "../../assets/images/worked_logo/pg-logo-1.png";
import worked10 from "../../assets/images/worked_logo/prudential-logo-1.png";
import worked11 from "../../assets/images/worked_logo/samsung-logo-1.png";
import worked12 from "../../assets/images/worked_logo/unilever-logo-1.png";
import Carousel_B from "../../components/Carousel_B/Carousel_B";
import Footer from "../../components/Footer/Footer";
import formImage from "../../assets/images/pau-pau-app-growth-1.png"

const PandaAds = () => {
  return (
    <div className="pandaads">

      <Menubar />
      
      <div className="panda_display_container">

        <div className="panda_display">
          <h1>Boost your brands with panda ads</h1>
          <p>Reach millions of digital-native customers on foodpanda across APAC with our integrated marketing solutions</p>
          <button>Get in Touch</button>
        </div>
        
      </div>

      <div className="tap_container">
          <div className="tap_image">
            <img src={tapImage} alt="tap" />
          </div>
          <div className="tap_content">
            <h1>Tap into Asia&rsquo;s largest food and grocery delivery network*</h1>
            <p>Connect with millions of customers across 400+ cities in 11 markets, all through the world’s #3 food delivery app.</p>
            <h4>Target a unique and highly valuable audience</h4>
            <p>Engage with foodpanda customers – tech-savvy convenience-seekers with established purchasing habits.</p>
            <h4>Build strategic brand partnerships with dedicated support</h4>
            <p>Get 360° campaign support to help achieve your marketing goals, from campaign strategies to optimisation and insight</p>
            <p>*Outside of China.</p>
          </div>
      </div>

      <div className="tap_container handheld">
          
          <div className="tap_content">
            <h1>In-app advertising</h1>
            <p>Increase brand visibility with native display ads across different categories on the foodpanda app.</p>
            <h4>Digital marketing channels</h4>
            <p>Extend your reach via foodpanda’s digital network, from eDMs and push notifications to social media posts.</p>
            <h4>Partnership initiatives</h4>
            <p>Execute integrated campaigns for maximum impact, with tailored solutions like product sampling, vouchers, and consumer insights.t</p>
          </div>

          <div className="tap_image">
            <img src={handHeld} alt="tap" />
          </div>

      </div>

      <div className="worked">
        <h2>We&rsquo;ve worked with </h2>
        <div className="worked_logo">
          <img src={worked1} alt="work" />
          <img src={worked2} alt="work" />
          <img src={worked3} alt="work" />
          <img src={worked4} alt="work" />
          <img src={worked5} alt="work" />
          <img src={worked6} alt="work" />
          <img src={worked7} alt="work" />
          <img src={worked8} alt="work" />
          <img src={worked9} alt="work" />
          <img src={worked10} alt="work" />
          <img src={worked11} alt="work" />
          <img src={worked12} alt="work" />
        </div>
      </div>

      {/* Carousel for panda ads */}
      <Carousel_B />

      <div className="panda_form_container container">
        <div className="panda_form_image">
          <img src={formImage} alt="from Image" />
        </div>
        <div className="panda_form">
          <h1>Hungry for growth? We got you!</h1>
        <form>

          <label htmlFor="company">Company</label>
          <input type="text" id="company" />
          
          <label htmlFor="job_title">Job Title</label>
          <input type="text" id="job_title" />

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />

          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" />

          <label htmlFor="company">Company</label>
          <input type="email" id="company" />

          <label htmlFor="company">Company</label>
          <input type="text" id="company" />

          <label htmlFor="countryPrefix">Country Prefix Code</label>
          <select id="countryPrefix">
            <option value="-None-" selected>-None-</option>
            <option value="+1">+1</option>
            <option value="+358">+1</option>
            <option value="+36">+1</option>
            <option value="+420">+1</option>
            <option value="+421">+1</option>
            <option value="+43">+1</option>
            <option value="+45">+1</option>
            <option value="+46">+1</option>
            <option value="+47">+1</option>
            <option value="+49">+1</option>
            <option value="+60">+1</option>
            <option value="+61">+1</option>
            <option value="+63">+1</option>
            <option value="+65">+1</option>
          </select>

          <label htmlFor="Mobile">Mobile</label>
          <input type="text" id="Mobile" />

          <label htmlFor="industry">Industry</label>
          <select id="industry">
            <option value="-None-">-None-</option>
            <option value="Agency">Agency</option>
            <option value="Aggregators">Aggregators</option>
            <option value="Apparel">Apparel</option>
            <option value="Consumer Electronics">Consumer Electronics</option>
            <option value="CPG">CPG</option>
            <option value="Entertainment">Entertainment</option>
            <option value="e-Retailer">e-Retailer</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Health & Pharmacy">Health & Pharmacy</option>
            <option value="Insurance">Insurance</option>
            <option value="Non-CPG">Non-CPG</option>
            <option value="Telco">Telco</option>
          </select>

          <label htmlFor="Country">Country</label>
          <select id="country">
            <option value="-None-">-None-</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Laos">Laos</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Philippines">Philippines</option>
            <option value="Singapore">Singapore</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Thailand">Thailand</option>
          </select>

          <label htmlFor="City">City</label>
          <input type="text" id="City" />

          <input type="submit" value="Submit" />

        </form>
        </div>
      </div>

      <Footer />
      

    </div>
  )
}

export default PandaAds
