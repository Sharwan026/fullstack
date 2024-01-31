import CustomNavbar from "../components/CustomNavbar"
// import CustomSideNav from "../components/CustomSideNav"
import "../assets/css/home2.css";
import { Panel } from "rsuite";
// import CustumCard from "../components/CustumCard";

const Home2 = () => {
    
    
    return (
        <div className="contain">
            <header>
            <CustomNavbar />
            </header>
            <aside>
                {/* <CustomSideNav/> */}
            </aside>
            <main>
                <div className="hometop2"></div>
            </main>
            <div className="topic2">
                <h1 className="lon">Welcome to AgroFund Loans...</h1>
                <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://img.freepik.com/free-photo/columns-coins-grass_155003-7852.jpg?w=1060&t=st=1706522887~exp=1706523487~hmac=f59b55eb2e0bbe2a0ec8f7bc6ea75783222f2c1ab0c06d9584d13bbb3035caa1" height="240" />
    
    <div className="x"><Panel header="Crop loans">
      <p>
        <small>
        These loans are provided to farmers to finance the cultivation of crops. The loan amount is based on the scale of the farming operation and the type of crop being grown.         </small>
      </p>
    </Panel>
      </div>
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="240" />
    <div className="x"><Panel header="Kisan credit cards">
      <p>
        <small>
        These are credit cards that are issued to farmers to help them purchase agricultural inputs such as seeds, fertilizers, and pesticides.      </small>
      </p>
    </Panel>
    
    </div>
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://live.staticflickr.com/8261/29939704512_d1e0fbb84d_b.jpg" height="240" />
    <div className="x"><Panel header="Product marketing loans">
      <p>
        <small>
        These loans are provided to farmers to help them market their agricultural produce. The loan amount is based on the value of the produce and the market demand.
         </small>
      </p>
    </Panel>
    </div>
    
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://live.staticflickr.com/8261/29939704512_d1e0fbb84d_b.jpg" height="240" />
    <div className="x"><Panel header="Microfinance for Agriculture">
      <p>
        <small>
        Some microfinance institutions offer small loans to farmers who may not have access to traditional banking services.
         </small>
      </p>
    </Panel>
    </div>
    
  </Panel>
  
            </div>
            <div>
            <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8Y2WcI35Yzg80jFYdgrGNpzgBV7dkq_ugw&usqp=CAU" height="240" />
    <div className="x">
    <Panel header="Dairy loans">
      <p>
        <small>
        These loans are provided to farmers to finance the purchase of dairy animals and equipment. The loan amount is based on the scale of the dairy operation and the number of animals being purchased.
        </small>     
         </p>
    </Panel>
    </div>
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZbbBfeB0qWPRdS3n4E3KNNaDJ3GuT2_Cew&usqp=CAU" height="240" />
    <div className="x"><Panel header="Allied agricultural loans">
      <p>
        <small>
        These loans are provided to farmers to finance allied agricultural activities such as poultry farming, fish farming, and beekeeping. 
        </small>
      </p>
    </Panel>
  </div>
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://media.gettyimages.com/id/1437707163/photo/money-coins-stack-grow-up-to-saving-money.jpg?s=612x612&w=0&k=20&c=b6xlgZv6AKdah4BtXkYHG8T3gDJgtc3r_5tMdzCQ61Y=" height="240" />
    <div className="x">
      <Panel header="Agriculture term loans">
      <p>
        <small>
        These loans are provided to farmers to finance long-term agricultural projects such as land development, farm mechanization, and irrigation. 
         </small>
      </p>
    </Panel>
    </div>
  </Panel>
  <Panel className="panel" shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src="https://live.staticflickr.com/8261/29939704512_d1e0fbb84d_b.jpg" height="240" />
    <div className="x"><Panel header="Livestock Loans">
      <p>
        <small>
        For the purchase of livestock or to cover the costs associated with raising animals.
         </small>
      </p>
    </Panel>
    </div>
    
  </Panel>
    </div>
        </div>
    )
}
export default Home2