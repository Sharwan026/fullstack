import CustomNavbar from "../components/CustomNavbar"
// import CustomSideNav from "../components/CustomSideNav"
import "../assets/css/home.css";
import { Parallax } from 'react-parallax';
import { useNavigate } from "react-router-dom";

// import CustomCard from "../components/CustumCard";

const Home = () => {
    const Navigate=new useNavigate();
    const handleChangeLoan=()=>{
      Navigate('/loan')
    }
    const handleChangeAbout=()=>{
      Navigate('/about')
    }
    return (
      <div className="App">
      <header >
        <CustomNavbar/>
      </header>
      <main>
        <Parallax bgImage="your-banner-image.jpg" strength={500}>
          <div className="banner">
            <div className="m">
            <div className="banner-content">
              <h1 className="welcome">Welcome to AgroFund</h1>
              <br></br>
              <p className="wel-sub"> -Your Partner in Agricultural Finance Solutions</p>
            </div>
            </div>
          </div>
        </Parallax>
        <section className="parallax-home">
          <div className="intro">
          <div className="parallax-content">
            <h2 className="tit-intro">Introduction to AgriFund</h2><br></br><br></br><br></br><br></br><br></br><br></br>
            <p className="intro-content">"AgriFund is your premier destination for agricultural loans tailored to meet the unique needs of farmers and agribusinesses. Whether you're a small family farm or a large-scale operation, we're here to help you grow and thrive."</p>
            <br></br>
            <br></br>
            <button className="submit-button-home" onClick={handleChangeLoan}>
          Apply Loan Now
        </button>
          </div>
          </div>
        </section>
        <section className="contact">
        <div className="container">
        <div className="card-container">
            {/* Card 1 */}
            <div className="card1">
                <h2 className="card-title" onClick={handleChangeLoan}>Loans</h2>
                {/* <p className="card-description">This is the content of Card 1.</p> */}
            </div>
            {/* Division line */}
            <div className="division-line"></div>
            {/* Card 2 */}
            <div className="card2">
                <h2 className="card-title" onClick={handleChangeAbout}>Our Company</h2>
                {/* <p className="card-description">This is the content of Card 2.</p> */}
            </div>
            {/* Division line */}
            <div className="division-line"></div>
            {/* Card 3 */}
            <div className="card3">
                <h2 className="card-title" onClick={handleChangeAbout}>About Us</h2>
                {/* <p className="card-description">This is the content of Card 3.</p> */}
            </div>
        </div>
      
    </div>
        </section>
        <section className="content">
          <div className="key">
          <div className="content-inner">
            <h2 className="key-title">Key Features</h2><br></br><br></br>
            <p className="keypoint1">Flexible loan options designed for farmers of all sizes.</p>
            <p className="keypoint1">Competitive interest rates and repayment terms.</p>
            <p className="keypoint1">Dedicated support from agricultural finance experts.</p>
            <p className="keypoint1">Fast and hassle-free application process.</p>
            <p className="keypoint1">Commitment to sustainable farming practices and rural development.</p>
          </div>
          </div>
        </section>
        
        
      </main>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
    )
}
export default Home


