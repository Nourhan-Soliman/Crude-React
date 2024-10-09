import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div
        className="border-end"
        style={{ width: '200px', height: '100vh', position: 'fixed', backgroundColor: '#cdbfbf' }}
      >
        <div className="d-flex align-items-center justify-content-center p-3">
          <h4>Sidebar Title</h4>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
       
          <li className="nav-item">
            <Link className="nav-link" to={'/Product'}>Get All Products</Link>
          </li>
         
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
