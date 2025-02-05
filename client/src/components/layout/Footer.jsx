import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="borderTop">
     <div className="container  pt-5 pt-5 ">
     <div className="row ms-auto me-auto">
        <div className="col-12 mb-4">
            <ul className="d-flex justify-content-center align-items-center gap-5 navfont">
              <Link to='/' className="lightColor d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-house-fill fs-6"></i>
              <span>Home</span>
              </Link>
              <Link to='/about' className="lightColor d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-person-fill lightColor  fs-6"></i>
              <span>About</span>
              </Link>
              <Link to='/contact-us' className="lightColor d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-telephone-fill fs-6"></i>
              <span>Contact</span>
              </Link>
              
             
            </ul>
        </div>
      </div>
      <div className="row borderBottom mb-3">
        <div className="col-12">
            <ul className="d-flex justify-content-center align-items-center gap-4">
              <Link to='#'>
              <i className="bi bi-facebook lightColor  fs-6"></i>
              </Link>
              <Link to='#'>
              <i className="bi bi-linkedin lightColor fs-6"></i>
              </Link>
              <Link to='#'>
              <i className="bi bi-instagram lightColor fs-6"></i>
              </Link>
              <Link to='#'>
              <i className="bi bi-twitter lightColor fs-6"></i>
              </Link>
            </ul>
        </div>
      </div>
      <div className="row">
        <p className="lightColor text-center p-2 mb-2">All Right Reserved </p>
      </div>
     </div>
    </section>
  );
}

export default Footer;
