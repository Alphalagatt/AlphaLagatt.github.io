import "../resources/_DSC5224.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../index.css";

function Home(){
    return<div className="main-body-container">
        <div className="side-nav">
            <div>
                <img className="logo" src={require("../resources/alphalagatt-high-resolution-logo-black-on-transparent-background.png")} alt="my logo"/>
            </div>
            <div className="socials-container">
                <img className="socials" src={require("../resources/icons8-linkedin-100.png")} alt="Linked in Logo"/>
                <img className="socials" src={require("../resources/icons8-github-96.png")} alt="Github Logo" />
                <img className="socials" src={require("../resources/icons8-twitter-100.png")} alt="X logo" />
            </div>

        </div>
        <div className="main-body">
            <Nav/>
            <div className="sub-main-body">
                <div className="main-body-words">
                    <p>My Name is</p>
                    <h1>Alpha Lagatt</h1>
                    <h2>Empowering Tomorrow's Enterprises Today</h2>
                    <h3>Your IT Consulting Partner for Seamless Solutions Architecting, Cutting-Edge ERP and CRM Development, and Microsoft Business Applications Mastery.</h3>
                    <div className="contact-button">Let's Talk</div>
                </div>
                <div className="main-body-my-Photo">
                    <img src={ require("../resources/_DSC5224.png")} alt="myPhoto"/>
                </div>
            </div>
            <Footer/>
        </div>
        
        
    </div>
}

export default Home;