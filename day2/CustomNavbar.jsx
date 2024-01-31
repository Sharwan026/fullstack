import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from "react-router-dom";

const CustomNavbar=()=>{
    return(
        <Navbar>
        <Navbar.Brand href="#">AgroFund</Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />}><Link to={`/home`} style={{textDecoration: 'none'}}>Home</Link></Nav.Item>
            <Nav.Item ><Link to={`/contact`} style={{textDecoration: 'none'}}>Contact</Link></Nav.Item>
            <Nav.Item ><Link to={ `/About`} style={{textDecoration: 'none'}}>About</Link></Nav.Item>
          <Nav.Item>Products</Nav.Item>
        </Nav>
        <Nav pullRight>
        <Nav.Item><Link to={'/login'}>Login</Link></Nav.Item>
            <Nav.Item><Link to={'/signup'}>Signup</Link></Nav.Item>
        </Nav>
      </Navbar>
    )
}
export default CustomNavbar;