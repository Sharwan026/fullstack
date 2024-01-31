// import React from 'react';
// import { Card, CardContent, CardMedia,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import "../assets/css/custumcard.css"
import { Link } from 'react-router-dom';
import { Image } from '@rsuite/icons';

const CustumCard = ({ title, description }) => {
  return (
    <div className="card">
      <img src={Image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <Link to={'/home2'}><button className='explore'>Explore Now</button></Link>
    </div>
  );
};

CustumCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
}

export default CustumCard;
