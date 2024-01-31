import { Nav, Sidenav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import TrendIcon from '@rsuite/icons/Trend';
import { Link, useNavigate } from "react-router-dom";

const CustomSideN = () => {
  const navigate = useNavigate();

  const handleChangeUserProfile = () => {
    navigate("/userprofile");
  };
  const handleChangeFaq = () => {
    navigate("/faq");
  };
  const handleChangeDash = () => {
    navigate("/adminhome");
  };
  const handleChangeSignin = () => {
    navigate("/login");
  };
  const handleChangeSignup = () => {
    navigate("/signup");
  };

  return (
    <div style={{ width: 240, position: "" }}>
      <Sidenav defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item onClick={handleChangeDash} eventKey="1" icon={<DashboardIcon />}>
              Admin Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />} onClick={handleChangeUserProfile}>
              Users profile
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              Create User
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Pages" icon={<MagicIcon />}>
              <Nav.Item onClick={handleChangeSignin} eventKey="3-1">Sign in</Nav.Item>
              <Nav.Item onClick={handleChangeSignup} eventKey="3-2">Sign up</Nav.Item>
              <Nav.Item onClick={handleChangeFaq} eventKey="3-3">FAQ Page</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Graph data" icon={<TrendIcon />}>
              <Nav.Item eventKey="4-1">User</Nav.Item>
              <Nav.Item eventKey="4-2">No of Loan</Nav.Item>
              <Nav.Item eventKey="4-3">New User</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Profiles</Nav.Item>
                <Nav.Item eventKey="4-5-2">Reviews</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default CustomSideN;
