import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="text-center text-lg-start text-light bg-primary"> 
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {year} Copyright muneeb todo.net. All rights reserved.
        </div> 
      </footer> 
    </>
  );
}

export default Footer;
