import '../assets/css/contact.css';
// import { Typography } from '@mui/material';
import CustomNavbar from '../components/CustomNavbar';

const ContactUs = () => {
  return (
    <div className="container">
      <header>
        <CustomNavbar />
      </header>
      <div className='empty'>
        
      </div>
      <div className='details'>
      </div>
      <main className='conbg'>
        <section className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      {/* <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer> */}
    </div>
  );
};

export default ContactUs;