import { Panel } from "rsuite";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/css/home2.css";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  const Navigate=new useNavigate();
  
  const handleChangeKcc=()=>{
    Navigate('/kccform')
  }
  const handleChangeLoanForm=()=>{
    Navigate('/loanform')
  }
    return (
        <div className="contain">
            <header>
                <CustomNavbar />
            </header>
            
            {/* <main>
                <div className="hometop2"></div>
            </main> */}
            
            <div className="topic2">
                <h1 className="lon">Welcome to AgroFund Loans...</h1>
                <br></br><br></br>
                <div className="panel-container">
                    <Panel onClick={handleChangeKcc} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://thenewsmill.com/wp-content/uploads/2023/02/PM-Kisan-Credit-Card-Scheme.jpg" height="240"  />
                        <div className="x">
                            <Panel header="Kisan Credit Card Scheme">
                                <p>
                                    <small>
                                    The KCC Scheme was introduced with the objective of providing adequate and timely credit to the farmers for their agricultural operations. 
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    <Panel onClick={handleChangeLoanForm} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://krishijagran.com/media/8475/cages-fish-farm-aquaculture-thailand-blue-pond-farming-107799769.jpg" height="240" alt="Crop loans" />
                        <div className="x">
                            <Panel header="Prime Minister Matsya Sampada Yojana">
                                <p>
                                    <small>
                                    Pradhan Mantri Matsya Sampada Yojana (PMMSY) is a scheme to bring about ecologically healthy, economically viable, and socially inclusive development of the fisheries sector of India.
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    <Panel onClick={handleChangeLoanForm} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://i.ytimg.com/vi/W8kpnX_8tac/maxresdefault.jpg" height="240" alt="Crop loans" />
                        <div className="x">
                            <Panel header="Sub-Mission on Agricultural Mechanization (SMAM)">
                                <p>
                                    <small>
                                    Agricultural machines take an important role to increase productivity with timely and precise fieldwork. To promote the usage of farm mechanization and increase the ratio of farm power to cultivable unit area up to 2.5 kW/ha, the scheme will be implemented in all the Indian states.
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    <Panel onClick={handleChangeLoanForm} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://img.freepik.com/premium-photo/happy-young-indian-farmer-counting-showing-money_75648-1647.jpg?w=740" height="240" alt="Crop loans" />
                        <div className="x">
                            <Panel header="Pradhan Mantri Kisan Mandhan Scheme">
                                <p>
                                    <small>
                                    Pradhan Mantri Kisan Maandhan Yojana is a government scheme meant for old age protection and social security of Small and Marginal Farmers (SMF).
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    <Panel onClick={handleChangeLoanForm} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://img.indiafilings.com/learn/wp-content/uploads/2016/03/12010759/Dairy-Entrepreneurship-Development-Scheme.jpg" height="240" alt="Crop loans" />
                        <div className="x">
                            <Panel header="Dairy Entrepreneurship Development Scheme">
                                <p>
                                    <small>
                                    The Dairy Entrepreneurship Development Scheme (DEDS) is a government-sponsored scheme in India that aims to promote the growth of the dairy business.
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    <Panel onClick={handleChangeLoanForm} className="panel parallax" shaded bordered bodyFill>
                        <img src="https://www.veganfoodandliving.com/wp-content/uploads/2021/09/farmers-working-in-organic-field.jpg" height="240" alt="Crop loans" />
                        <div className="x">
                            <Panel header="Organic Farming Incentive Scheme">
                                <p>
                                    <small>
                                    The Organic Farming Scheme provides financial support to farmers to encourage production of organic foods.
                                    </small>
                                </p>
                            </Panel>
                        </div>
                    </Panel>

                    {/* Add more panels here */}
                </div>
            </div>
        </div>
    )
}

export default Home2;
