import { useState } from 'react';
import '../assets/css/kccform.css';
import CustomNavbar from '../components/CustomNavbar';

const KccForm = () => {
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [cropDetails, setCropDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div>
      <main>
      <CustomNavbar/>
      </main>
    <div className="container">
      <div className="card kisan-credit-card">
        <div className="card-body">
          <h2 className="card-title text-center">Kisan Credit Card Scheme Application Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Father's Name:</label>
              <input type="text" className="form-control" value={fatherName} onChange={(e) => setFatherName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Village:</label>
              <input type="text" className="form-control" value={village} onChange={(e) => setVillage(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>District:</label>
              <input type="text" className="form-control" value={district} onChange={(e) => setDistrict(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Aadhar Number:</label>
              <input type="text" className="form-control" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Loan Amount:</label>
              <input type="number" className="form-control" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Crop Details:</label>
              <textarea className="form-control" value={cropDetails} onChange={(e) => setCropDetails(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default KccForm;
