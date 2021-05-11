import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const LayOut = (props) => {
  return (
    <div>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
export default LayOut;
