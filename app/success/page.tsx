const Page = () => {
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <h1 className={"font-bold text-lg md:text-2xl text-green-900"}>
        Order placed successfully
      </h1>
      <p>
        Your order has been created successfully. Our team will contact you soon
        by phone.
      </p>
    </div>
  );
};

export default Page;
