const Container = ({ children }) => {
  return (
    <div className="container mx-auto bg-white/50 rounded-xl my-12">
      {children}
    </div>
  );
};

export default Container;
