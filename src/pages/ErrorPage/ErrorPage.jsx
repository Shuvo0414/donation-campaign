const ErrorPage = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Oops! Something Went Wrong</h1>
      <p className="text-gray-600 text-xl mt-2">
        We apologize, but an unexpected error occurred. Please try again
        later..!!
      </p>
    </div>
  );
};

export default ErrorPage;
