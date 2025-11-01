import Navigations from "./components/Landing";
import Description from "./components/Body";

import "./App.css";
import Footer from "./components/Footer";
import Portfolio from "./portfolio";
import Stacks from "./Stacks";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <Navigations />
      <Description />
      <Stacks/>
      <Portfolio/>
       <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
