import CustomNavbar from "../components/CustomNavbar"
import "../assets/css/about.css"
import { Panel } from "rsuite"
const About = () => {
    return (
        <div className="aboutbg">
        <div className="container">
        <header>
        <CustomNavbar />
        </header>
        <main>
                <div className="abouttop">.</div>
        </main>
        <br></br>
        <aside>
            <Panel className="aboutpanel1" shaded bordered bodyFill style={{ display: 'inline-block', width: 500,height: 300 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="About AgroFund">
      <p>
        <h5>
        Welcome to AgroFund, where we cultivate dreams and empower farmers for a sustainable future. At AgroFund, we believe in the power of agriculture to transform lives and communities. Our mission is to provide accessible and tailored financial solutions to farmers, supporting them in their journey to prosperity.        
         </h5>
      </p>
    </Panel>
  </Panel>
            </aside>
            <div>
            <Panel className="aboutpanel2" shaded bordered bodyFill style={{ display: 'inline-block', width: 500,height: 600 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="Our Commitment">
      <p>
        <h5>
        AgroFund is more than just a financial institution; we are a partner in your agricultural endeavors. With a deep-rooted commitment to the farming community, we strive to:   
              </h5><br></br>
              <h5>
              Empower Farmers: We are dedicated to empowering farmers by providing them with the financial resources they need to enhance productivity and secure a stable future.
              </h5><br></br>
              <h5>
              Facilitate Growth: AgroFund is committed to fostering agricultural growth. We understand the unique challenges faced by farmers, and our customized financial solutions are designed to catalyze sustainable development.
              </h5><br></br>
              <h5>
              Build Strong Connections: Our approach is founded on building strong, lasting relationships with the farming community. We value transparency, integrity, and collaboration, ensuring that our clients feel supported every step of the way.
              </h5>
      </p>
    </Panel>
  </Panel>
            </div>
            <aside>
            <Panel className="aboutpanel3" shaded bordered bodyFill style={{ display: 'inline-block', width: 440,height: 470 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="What Sets Us Apart">
      <p>
        <h5>
        Expertise: AgroFund brings a wealth of expertise in agricultural finance. Our team consists of professionals with a deep understanding of the agricultural sector, allowing us to provide tailored solutions that meet the unique needs of farmers.
         </h5><br></br>
         <h5>
         Innovation: We leverage cutting-edge technology to streamline our processes and make financial services more accessible. Our innovative approach ensures a seamless experience for our clients.
         </h5><br></br>
         <h5>
         Community Focus: AgroFund is deeply rooted in the communities we serve. We actively engage in community development initiatives, supporting local farmers and contributing to the overall well-being of rural areas.
         </h5>
      </p>
    </Panel>
  </Panel>
            </aside>
            <div>
            <Panel className="aboutpanel4" shaded bordered bodyFill style={{ display: 'inline-block', width: 500,height: 200 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="Our Vision">
      <p>
        <h5>
        Our vision is to be a catalyst for positive change in the agricultural landscape. We aspire to be the preferred financial partner for farmers, providing not just loans but a holistic support system that propels them towards success.             
        </h5>
              
      </p>
    </Panel>
  </Panel>
  <aside>
            <Panel className="aboutpanel3" shaded bordered bodyFill style={{ display: 'inline-block', width: 440,height: 370 }}>
    {/* <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" /> */}
    <Panel header="Meet the Team">
      <p>
        <h5>
        AgroFund is comprised of a dedicated team passionate about agriculture and committed to making a difference. Get to know the faces behind AgroFund who work tirelessly to support and uplift the farming community.         </h5><br></br>
         <h5>
         Thank you for considering AgroFund as your financial partner in agriculture. We look forward to being a part of your agricultural journey.         </h5><br></br>
         <h5>
         For inquiries, feel free to contact us or visit our Loans page to explore our financial solutions.         </h5>
      </p>
    </Panel>
  </Panel>
            </aside>
            </div>
    </div>  
    </div>  
    )
}
export default About