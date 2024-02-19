const Error = ({ error }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src="/pikachusad.png" alt="" className="w-40" />
        <p className="text-4xl font-bold">Pokemon Not Found</p>
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    </>
  );
};
export default Error;
