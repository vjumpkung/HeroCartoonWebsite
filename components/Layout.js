import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));

const Layout = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
