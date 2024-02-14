import { useState } from 'react';
import '../admin/createuser.css'; // Import CSS file
import CustomNavbar from '../../components/CustomNavbar';
import CustomSideNav from './CustomSideNav';
import CustomSideN from '../../components/CustomSideNav';

const UserCreationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const userData = {
      name,
      email,
      password,
      phoneNumber,
      address
    };
    console.log('User data:', userData);
  };

  return (
    <div style={{display:'flex'}}>
        <header>
          <CustomSideN />
        </header>
    <div className="user-creation-form-center">
      <div className="user-creation-form-container card">
        <div className="card-body">
          <h2>User Creation Form</h2>
          <form onSubmit={handleSubmit} className="user-creation-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              <small className="text-muted">Format: 123-456-7890</small>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-primary">Create User</button>
              <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserCreationForm;
