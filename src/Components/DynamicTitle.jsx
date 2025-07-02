import { useLocation } from "react-router";
import {  useEffect } from "react";


const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Heritage Vault"; 

    const titleMap = {
      "/": "Home | Heritage Vault",
      "/addArtifacts": "Add Artifacts | Heritage Vault",
      "/allArtifacts": "All Artifacts | Heritage Vault",
      "/myArtifacts": "My Artifacts | Heritage Vault",
      "/likedArtifatcs": "My Liked Artifacts | Heritage Vault",
      "/about": "About Us | Heritage Vault",
      "/contact": "Contact Us | Heritage Vault",
      "/termsOfUse": "Terms Of Use | Heritage Vault",
      "/privacyPolicy": "Privacy Policy | Heritage Vault",
      "/cookiePolicy": "Cookie Policy | Heritage Vault"
    };

    if (titleMap[path]) {
      title = titleMap[path];
    } else if (/^\/artifacts\/[^/]+$/.test(path)) {
      title = "Artifact Details | Heritage Vault";
    } else if (/^\/updateArtifacts\/[^/]+$/.test(path)) {
      title = "Update Artifact | Heritage Vault";
    }

    document.title = title;
  }, [location]);

  return null;
};

export default DynamicTitle;
