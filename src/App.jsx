import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
