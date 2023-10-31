const Home = () => {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <div className="h-48 p-2 w-192 flex justify-center items-end py-6">
          <p className="text-6xl text-black p-2">Welcome</p>
          <p className="text-8xl text-purple-800 p-2">John</p>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex flex-col justify-start items-center w-64 h-48 rounded-md hover:shadow-md p-4 m-2 bg-purple-600">
            <p className="text-lg text-white p-2">Account Number</p>
            <p className="text-2xl  text-white p-2">012345678998</p>
          </div>
          <div className=" flex flex-col justify-start items-center w-64 h-48 rounded-md hover:shadow-md p-4 m-2 bg-purple-600">
            <p className="text-lg text-white p-2">Account Name</p>
            <p className="text-2xl  text-white p-2">TX Pvt. Ltd.</p>
          </div>
          <div className=" flex flex-col justify-start items-center w-70 h-48 rounded-md hover:shadow-md p-4 m-2 bg-purple-600">
            <p className="text-lg text-white p-2">
              Account Qualification Status
            </p>
            <p className="text-2xl  text-white p-2">Prospect</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
