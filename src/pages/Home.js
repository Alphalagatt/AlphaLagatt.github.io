import "../resources/_DSC5224.png";
import Nav from "../components/Nav";
import "../index.css";

function Home(){
    return<div className="main-body-container">
        <div className="side-nav">
            <img src={require("../resources/alphalagatt-high-resolution-logo-black-on-transparent-background.png")} alt="my logo"/>
        </div>
        <div className="main-body">
            <Nav/>
            <div className="sub-main-body">
                <div className="main-body-words">
                    <h1>Alpha Lagatt</h1>
                    <h2>Empowering Tomorrow's Enterprises Today</h2>
                    <h3>Your IT Consulting Partner for Seamless Solutions Architecting, Cutting-Edge ERP and CRM Development, and Microsoft Business Applications Mastery.</h3>
                    <h5>Website Coming soon</h5>
                </div>
                <div className="main-body-my-Photo">
                    <img src={ require("../resources/_DSC5224.png")} alt="myPhoto"/>
                </div>
            </div>
        </div>
        
        
    </div>
}

export default Home;