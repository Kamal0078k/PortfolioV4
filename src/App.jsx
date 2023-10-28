import classes from "./App.module.css";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";

function App() {
  return (
    <div className={classes.container}>
      <Hero />
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
