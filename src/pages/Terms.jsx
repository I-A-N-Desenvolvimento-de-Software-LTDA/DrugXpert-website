// src/pages/Terms.jsx
import React from 'react';

const Terms = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
      <p className="text-sm text-gray-500">Last updated: October 17, 2024</p>
      <p className="text-gray-700 leading-relaxed">
        Please read these terms and conditions carefully before using Our Service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Interpretation and Definitions</h2>
      <h3 className="text-xl font-semibold text-gray-800">Interpretation</h3>
      <p className="text-gray-700">
        The words with capitalized initial letters have meanings defined below, regardless of their singular or plural forms.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">Definitions</h3>
      <p className="text-gray-700">For the purposes of these Terms and Conditions:</p>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party, where
          “control” means ownership of 50% or more of the voting rights.
        </li>
        <li><strong>Country:</strong> Refers to Brazil.</li>
        <li>
          <strong>Company:</strong> Israel Antunes Neto Desenvolvimento de Software LTDA, Rua Armando Perali, 34, 101.
        </li>
        <li><strong>Device:</strong> Any device that can access the Service, such as a computer or cellphone.</li>
        <li><strong>Service:</strong> Refers to the Website.</li>
        <li>
          <strong>Terms:</strong> These Terms and Conditions, which govern the relationship between You and the Company.
        </li>
        <li>
          <strong>Website:</strong> Refers to DrugXpert, accessible from{' '}
          <a href="https://drugxpert.net/" target="_blank" className="text-blue-600 hover:underline"> drugxpert
          </a>.
        </li>
        <li>
          <strong>You:</strong> The individual accessing the Service, or the entity represented by the individual.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">Acknowledgment</h2>
      <p className="text-gray-700">
        These Terms govern the use of the Service and the relationship between You and the Company. By accessing the Service, 
        you agree to these Terms. If you are under 18, you may not use the Service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Links to Other Websites</h2>
      <p className="text-gray-700">
        Our Service may contain links to external sites. We are not responsible for their content, privacy policies, or practices. 
        We recommend reviewing their policies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Termination</h2>
      <p className="text-gray-700">
        We may terminate or suspend your access immediately if you breach these Terms. Upon termination, your right to use the Service will cease.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Limitation of Liability</h2>
      <p className="text-gray-700">
        Our liability is limited to the amount paid by You through the Service, or 100 USD if no purchase was made.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Governing Law</h2>
      <p className="text-gray-700">
        These Terms are governed by the laws of Brazil, without regard to conflict of law principles.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Disputes Resolution</h2>
      <p className="text-gray-700">
        If You have any dispute about the Service, you agree to first attempt to resolve it by contacting the Company.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">For European Union (EU) Users</h2>
      <p className="text-gray-700">
        If You are a European Union consumer, you are entitled to the protections under the laws of your country of residence.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">United States Legal Compliance</h2>
      <p className="text-gray-700">
        You represent and warrant that you are not in a country subject to U.S. sanctions, nor listed on any U.S. restricted party list.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Severability and Waiver</h2>
      <h3 className="text-xl font-semibold text-gray-800">Severability</h3>
      <p className="text-gray-700">
        If any provision of these Terms is deemed unenforceable, the remaining provisions will remain in effect.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">Waiver</h3>
      <p className="text-gray-700">
        Failure to enforce any provision of these Terms will not constitute a waiver of such provision.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Changes to These Terms and Conditions</h2>
      <p className="text-gray-700">
        We reserve the right to modify these Terms at any time. If a revision is material, we will provide at least 30 days' notice.
        By continuing to use the Service after changes become effective, you agree to be bound by the revised terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms and Conditions, you can contact us:
      </p>
      <ul className="list-disc list-inside">
        <li>Email: contact@drugxpert.net</li>
      </ul>
    </div>
  );
};

export default Terms;
