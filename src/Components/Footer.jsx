import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black opacity-90">
      <footer className="footer sm:footer-horizontal items-center p-10 container mx-auto text-white">
        <div className="flex items-center">
          <img className="w-[100px]" src={Logo} alt="" />
          <div className="flex flex-col">
            <p>Heritage Vault.</p>
            <p className="">Tracking Artifacts since 2001</p>
          </div>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link onClick={handleNavClick} to="/about" className="link link-hover">About us</Link>
          <Link onClick={handleNavClick} to="/contact" className="link link-hover">Contact</Link>
          <Link onClick={handleNavClick} to={`/allArtifacts`} className="link link-hover">
            Collections
          </Link>
          <Link onClick={handleNavClick} to={`/addArtifacts`} className="link link-hover">
            Add an Artifact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link onClick={handleNavClick} to="/termsOfUse" className="link link-hover">
            Terms of use
          </Link>
          <Link onClick={handleNavClick} to="/privacyPolicy" className="link link-hover">
            Privacy policy
          </Link>
          <Link onClick={handleNavClick} to="/cookiePolicy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">socials</h6>
          <Link to="https://www.facebook.com/syed.mahib.14" target="blank" className="link link-hover">
            Facebook
          </Link>
          <Link to="https://www.instagram.com/" target="blank" className="link link-hover">
            Instagram
          </Link>
          <Link to="https://x.com/?lang=en" target="blank" className="link link-hover">
            Twitter
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
