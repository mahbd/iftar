const DataDeletionRequest = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Data Deletion Request
        </h1>
        <p className="text-gray-700">
          If you wish to delete your data, please call us directly at
          <span className="font-medium text-blue-600">
            {" "}
            <a href="tel:+8801522106307">+8801522106307</a>
          </span>
          . We will process your request promptly and ensure your information is
          removed from our system.
        </p>
      </div>
    </div>
  );
};

export default DataDeletionRequest;
