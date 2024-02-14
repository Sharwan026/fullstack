// AdminNavbar.jsx
import { Avatar } from "rsuite";
import "../assets/css/adminnav.css"
import { IoSettingsOutline } from "react-icons/io5";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="logo">Your Logo</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className="search-button">&#128269;</button>
      </div>
      <div className="icon-container">
        <span className="notification-icon" title="Notifications">&#128276;</span>
        <IoSettingsOutline />
        <div className="profile-section">
          <span className="profile-name">Admin User</span>
          {/* <img
            src="path-to-profile-image.jpg"
            alt="Profile"
            className="profile-image"
          /> */}
          <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
