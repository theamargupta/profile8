import Navbar from "components/navbar/Nav";

const Container = ({ children }) => {
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="xl:container m-auto min-h-screen max-w-7xl py-0 px-32">{children}</div>
    </div>
  );
};

export default Container;
