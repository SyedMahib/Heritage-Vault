import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 relative">
        Cookie Policy
        <span className="block w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
      </h1>

      <p className="mb-4">
        This Cookie Policy explains how HeritageVault uses cookies and similar
        technologies when you visit our website. By using the site, you agree to
        the use of cookies as outlined below.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device when you
        visit a website. They help us understand user behavior, remember
        preferences, and improve your browsing experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Types of Cookies We Use
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Essential Cookies:</strong> Necessary for the website to
          function properly.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us understand how visitors
          use our site.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Remember your preferences and
          settings.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Track website usage and
          performance with tools like Google Analytics.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. How to Control Cookies
      </h2>
      <p className="mb-4">
        You can choose to accept or reject cookies through your browser
        settings. Most browsers allow you to block or delete cookies, but please
        note that some features of the site may not function properly without
        them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Third-Party Cookies
      </h2>
      <p className="mb-4">
        We may use third-party services that place cookies on your device to
        deliver better content and services. These include analytics providers,
        social media integrations, and advertising platforms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Changes will be
        posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        For questions about our Cookie Policy, email us at{" "}
        <a
          href="mailto:support@heritagevault.com"
          className="text-blue-500 underline"
        >
          support@heritagevault.com
        </a>
        .
      </p>
    </div>
  );
};

export default CookiePolicy;
