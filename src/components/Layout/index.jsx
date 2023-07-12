const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#e3e4ea]">
      <div className="w-[480px] rounded-[25px] overflow-hidden bg-[#fff] shadow-custom  mx-auto  p-[32px]">
        {children}
      </div>
    </div>
  );
};
export default Layout;
