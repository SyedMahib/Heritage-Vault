import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 relative">
          Privacy Policy
          <span className="block w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        </h1>
      <p className="mb-4">
        At HeritageVault, we are committed to protecting your privacy. This
        Privacy Policy outlines how we collect, use, and safeguard your
        information when you use our website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and any content you submit (e.g., artifact listings, comments). We also
        collect non-personal data like browser type, IP address, and usage
        behavior for analytics.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your information helps us to:
        <ul className="list-disc ml-6 mt-2">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Send updates and important notices</li>
          <li>Enhance user experience and security</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information. We may share data with
        trusted third-party services that help us operate the site, only under
        strict confidentiality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We use cookies to personalize content and analyze traffic. You can
        disable cookies through your browser settings, but it may affect site
        functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Security</h2>
      <p className="mb-4">
        We implement industry-standard measures to protect your data. However,
        no system is completely secure, and we cannot guarantee absolute safety.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. Any changes will be posted
        on this page with a revised date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, contact us at:{" "}
        <a href="mailto:support@heritagevault.com" className="text-blue-500 underline">
          support@heritagevault.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
