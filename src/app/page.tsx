import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Expert from "./components/Expert";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Service/>
      <About/>
      <Expert/>
      <Contact/>
    </>
  );
}
