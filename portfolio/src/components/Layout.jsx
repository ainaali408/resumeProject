import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: '64px' }}>{children}</div>
      </>
    );
  };
  
  export default Layout;
  