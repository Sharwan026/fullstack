import CustomSideN from "../../components/CustomSideNav";
import LineChart from "../admin/LineChart";



function Admin(){

    return(

        <div style={{display:'flex'}}>

            <CustomSideN/>
        
        <div style={{marginTop:100,marginLeft:100}}>
            <LineChart/>
        </div>
        
        </div>
    );
}
export default Admin;