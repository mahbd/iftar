const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to our Ramadan-exclusive food delivery service. By using our
          service, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          1. Service Duration
        </h2>
        <p className="text-gray-700">
          Our food delivery service operates only during the month of Ramadan.
          After Ramadan, the service will be discontinued.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          2. Payment Policy
        </h2>
        <p className="text-gray-700">
          We only accept cash on delivery. No other payment methods, including
          online transactions, are supported.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          3. Order Cancellations
        </h2>
        <p className="text-gray-700">
          Orders can only be canceled before they are dispatched. Once
          dispatched, cancellations will not be accepted.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          4. Liability
        </h2>
        <p className="text-gray-700">
          We are not responsible for any health-related issues arising from food
          consumption. Please ensure you check the ingredients if you have
          allergies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          5. Changes to Terms
        </h2>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. Updates will
          be communicated to our users as necessary.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          6. Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about these terms, please contact us at{" "}
          <span className="font-medium text-blue-600">
            mahmudula2000@gmail.com
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
