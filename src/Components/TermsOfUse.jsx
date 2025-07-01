import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 relative">
          Terms Of Use
          <span className="block w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        </h1>

      <p className="mb-4">
        Welcome to HeritageVault. By accessing or using our website, you agree
        to be bound by these Terms of Use and our Privacy Policy. If you do not
        agree with any part of these terms, you must not use our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Our Website</h2>
      <p className="mb-4">
        You agree to use HeritageVault only for lawful purposes. You may not use
        our site to upload or distribute any material that is harmful,
        offensive, or infringes on the rights of others.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, including text, images, and code on this site, is the
        property of HeritageVault or its content providers and is protected by
        copyright laws. Unauthorized use may result in legal action.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Content</h2>
      <p className="mb-4">
        By submitting artifacts, comments, or other content, you grant us the
        right to display and use them for the purpose of the website. You must
        have the rights to any content you upload.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
      <p className="mb-4">
        HeritageVault is provided “as is” without warranties of any kind. We do
        not guarantee the accuracy, reliability, or availability of the site at
        all times.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Use at any time. Continued
        use of the site after changes means you accept the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at:{" "}
        <a
          href="mailto:support@heritagevault.com"
          className="text-blue-500 underline"
        >
          support@heritagevault.com
        </a>
      </p>
    </div>
  );
};

export default TermsOfUse;
