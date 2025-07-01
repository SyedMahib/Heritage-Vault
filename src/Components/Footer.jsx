import React from "react";
import Logo from "../assets/logo.png"
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black opacity-90">
      <footer className="footer sm:footer-horizontal items-center p-10 container mx-auto text-white">
        <aside className="flex items-center">
          <img className="w-[100px]" src={Logo} alt=""/>
          <p className="">
            Heritage Vault.
            <br />
            Tracking Artifacts since 2001
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <Link to={`/allArtifacts`} className="link link-hover">Collections</Link>
          <Link to={`/addArtifacts`} className="link link-hover">Add an Artifact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/termsOfUse" className="link link-hover">Terms of use</Link>
          <Link to="/privacyPolicy" className="link link-hover">Privacy policy</Link>
          <Link to="/cookiePolicy" className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
