import CustomNavbar from "../components/CustomNavbar"
// import CustomSideNav from "../components/CustomSideNav"
import "../assets/css/home.css";
import { Panel } from "rsuite";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import CustomCard from "../components/CustumCard";

const Home = () => {
    // const cardData = {
    //     title: 'Invest in Fields',
    //     description: 'Support farmers by investing in agriculture fields.',
    //     image: '../assets/images/2017-06-08-10-25-35.jpg', // Replace with the path to your image
    //   };
    
    return (
        <div className="contain">
            <header>
            <CustomNavbar />
            </header>
            <aside>
                {/* <CustomSideNav/> */}
            </aside>
            <main>
                <div className="hometop">.</div>
            </main>
            <br></br>
            <div className="TOPIC">Welcome to AgroFund</div>
            <br></br><br></br>
            <aside>
            <Panel className="aboutpanel3" shaded bordered bodyFill style={{ display: 'inline-block', width: 440,height: 370 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="Dear user,">
      <p>
        <h5>
        At AgroFund, we believe in the power of agriculture to transform lives and communities. As a dedicated financial partner to farmers, we are here to empower you on your journey to prosperity. Explore our range of tailored financial solutions designed to meet the unique needs of the agricultural sector.
         </h5><br></br>
         
      </p>
      <Link to={`/loanform`}><button type="submit" className="submit-button" >
          Apply Now
        </button></Link>
    </Panel>
  </Panel>
            </aside>
            <Panel className="aboutpanel4" shaded bordered bodyFill style={{ display: 'inline-block', width: 500,height: 200 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="Why Choose AgroFund?">
      <p>
        <h5>
        Tailored Financial Solutions:
        </h5>
        <h5>
        AgroFund understands that every farmer is unique. Our range of financial products, including crop loans, equipment financing, and more, are tailored to suit the diverse needs of the farming community.
        </h5>
              
      </p>
    </Panel>
  </Panel>
            
            <div className="panels">
            <Panel className="buttonPanel" >
                    <Panel header="Who can Apply?">
      {/* <p>
        <small>
        These loans are provided to farmers to finance the cultivation of crops. The loan amount is based on the scale of the farming operation and the type of crop being grown.         </small>
      </p> */}
    </Panel>
  </Panel>
  
  <Link to={`/home2`}><Panel className="buttonPanel" >
                    <Panel header="About Loans">
      {/* <p>
        <small>
        These loans are provided to farmers to finance the cultivation of crops. The loan amount is based on the scale of the farming operation and the type of crop being grown.         </small>
      </p> */}
    </Panel>
  </Panel>
  </Link>
  
  <Panel className="buttonPanel" >
                    <Panel header="Crops">
      <p>
        <small>
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel className="buttonPanel" >
                    <Panel header="Users">
      <p>
        <small>
        </small>
      </p>
    </Panel>
  </Panel>
    </div>
    <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
        </div>
    )
}
export default Home