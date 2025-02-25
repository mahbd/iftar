import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Head>
        <title>
          Privacy Policy | Iftar Delights - Ramadan-exclusive Food Delivery
          Service
        </title>
      </Head>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to our Ramadan-exclusive food delivery service. Your privacy
          is important to us, and we are committed to protecting it.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          1. Information We Collect
        </h2>
        <p className="text-gray-700">
          We only collect necessary information to fulfill your orders, such as
          your name, phone number, and delivery address. No financial details
          are collected as we only offer cash on delivery.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700">
          We use your information solely to process and deliver your orders. We
          do not share, sell, or distribute your data to third parties.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          3. Data Retention
        </h2>
        <p className="text-gray-700">
          Since our service operates only during Ramadan, all collected data
          will be deleted after the completion of the service period.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          4. Security
        </h2>
        <p className="text-gray-700">
          We take reasonable steps to protect your data from unauthorized access
          and misuse. However, no method is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          5. Changes to This Policy
        </h2>
        <p className="text-gray-700">
          We may update this policy as needed. Any changes will be communicated
          to our customers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          6. Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about this policy, please contact us at{" "}
          <span className="font-medium text-blue-600">
            mahmudula2000@gmail.com
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
