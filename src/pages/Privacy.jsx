import React from 'react';

const Privacy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy for DrugXpert</h1>

      <p className="mb-4">
        At DrugXpert, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and how we keep it safe.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
        <ul className="list-disc list-inside mb-4">
          <li><strong>Personal Information:</strong> When you sign up for an account, we may ask for your name, email address, and other identifying details.</li>
          <li><strong>Usage Data:</strong> We collect information on how you use our platform, such as pages visited, time spent on the site, and interactions with features.</li>
          <li><strong>Cookies:</strong> Our website uses cookies to improve your experience, remembering preferences and providing personalized content.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
        <ul className="list-disc list-inside mb-4">
          <li>Provide and maintain our services.</li>
          <li>Improve the user experience on DrugXpert.</li>
          <li>Respond to customer service requests and support needs.</li>
          <li>Send you updates and promotional information, only with your consent.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. How We Protect Your Information</h2>
      <p className="mb-4">
        We implement a variety of security measures to ensure your personal information is protected, including encryption and secure servers. We do not sell, trade, or share your personal data with third parties without your consent, except where required by law.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services, such as payment processors or analytics tools, that collect, store, or process your information. These third parties are carefully selected and have their own privacy policies in place.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving promotional emails by following the unsubscribe link provided in those communications.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Changes to this Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify users of significant updates.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@drugxpert.com" className="text-blue-500 underline">support@drugxpert.com</a>.
      </p>
    </div>
  );
}

export default Privacy;
