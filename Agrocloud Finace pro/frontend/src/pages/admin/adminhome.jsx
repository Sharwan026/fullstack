// import CustomNavbar from "../../components/CustomNavbar"
import CustomSideN from "../../components/CustomSideNav"
// import AdminNavbar from "../../components/adminnav"
import "../admin/adminhome.css"
import LineChart from "./LineChart"


const Adminhome = () => {
    return (
        <div className='bod'>
            <div className='addashboard-container'>
            <CustomSideN/>
            </div>
        <div className="adminmain">
        <LineChart/>
        </div>
    </div>
    )
}
export default Adminhome