import React from 'react';
import logo from '../Assets/logojpg-removebg-preview.png'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light p-3"
        style={{
          backgroundColor: '#cdbfbf',
          textAlign: 'center',
          height: '90px',
          position: 'fixed',
          top: 0,
          width: '100%', 
        }}
      >
        <div>
          <Link className="navbar-brand logo" to="/">
            <img
              src={logo} 
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
          </Link>
        </div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'linear-gradient(108.35deg, #daaa9d -36.03%, #ddd8cd 128.44%)',
            width: '40px',
            height: '40px',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'transparent',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ms-4">
              <Link className="nav-link" aria-current="page" to="/" style={{ color: 'black' }}>
                Home
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/about">About</Link> {/* Updated to use /about */}
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/footer">Contact</Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/product">Products</Link> 
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
