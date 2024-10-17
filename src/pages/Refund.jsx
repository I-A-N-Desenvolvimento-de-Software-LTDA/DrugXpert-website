
import React from 'react';

const Refund = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Return and Refund Policy</h2>
      <p className="text-sm text-gray-500">Last updated: October 17, 2024</p>
      <p className="text-gray-700">
        Thank you for shopping at DrugXpert.
      </p>
      <p className="text-gray-700">
        If, for any reason, You are not completely satisfied with a purchase, We invite you to review our policy on refunds 
        and returns.
      </p>
      <p className="text-gray-700">
        The following terms apply to any products purchased through our Service.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Interpretation and Definitions</h2>
      <h3 className="text-xl font-semibold text-gray-800">Interpretation</h3>
      <p className="text-gray-700">
        Capitalized words have meanings defined below, regardless of whether they appear in singular or plural form.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">Definitions</h3>
      <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li><strong>Company:</strong> Israel Antunes Neto Desenvolvimento de Software LTDA, Rua Armando Perali, 34, 101.</li>
        <li><strong>Goods:</strong> Items offered for sale on the Service.</li>
        <li><strong>Orders:</strong> A request by You to purchase Goods from Us.</li>
        <li><strong>Service:</strong> Refers to the Website.</li>
        <li>
          <strong>Website:</strong> DrugXpert, accessible from <a href="https://drugxpert.net/" target="_blank" className="text-blue-600 hover:underline">drugxpert</a>.
        </li>
        <li>
          <strong>You:</strong> The individual or entity accessing or using the Service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">Your Order Cancellation Rights</h2>
      <p className="text-gray-700">
        You are entitled to cancel your Order within 14 days without giving a reason. The deadline is 14 days from the day you 
        or a designated third party takes possession of the Goods.
      </p>
      <p className="text-gray-700">To cancel, contact us by:</p>
      <ul className="list-disc list-inside">
        <li>Email: <a href="mailto:support@drugxpert.net" className="text-blue-600 hover:underline">support@drugxpert.net</a></li>
      </ul>
      <p className="text-gray-700">
        We will reimburse you within 14 days using the same payment method, without additional fees.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Conditions for Returns</h2>
      <p className="text-gray-700">To be eligible for a return, ensure the following:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>The Goods were purchased in the last 14 days.</li>
        <li>The Goods are in their original packaging.</li>
      </ul>
      <p className="text-gray-700">The following items cannot be returned:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Custom or personalized items.</li>
        <li>Items that deteriorate quickly or have expired.</li>
        <li>Unsealed items for health or hygiene reasons.</li>
        <li>Items mixed with others in an inseparable manner after delivery.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">Returning Goods</h2>
      <p className="text-gray-700">
        You are responsible for the cost and risk of returning Goods to the address below:
      </p>
      <address className="text-gray-700">
        1 Infinite Loop<br />
        Cupertino, CA 95014<br />
        USA
      </address>
      <p className="text-gray-700">
        We recommend using insured and trackable mail, as we cannot issue refunds without receipt or proof of delivery.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Gifts</h2>
      <p className="text-gray-700">
        If marked as a gift, you will receive a gift credit for returns. If the item wasn’t marked as a gift, the refund will 
        be sent to the original purchaser.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
      <p className="text-gray-700">If you have questions about our Returns and Refund Policy, contact us:</p>
      <ul className="list-disc list-inside">
        <li>Email: <a href="mailto:support@drugxpert.net" className="text-blue-600 hover:underline">support@drugxpert.net</a></li>
      </ul>
    </div>
  );
};

export default Refund;
