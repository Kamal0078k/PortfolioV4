import classes from "./App.module.css";
import Hero from "./Hero/Hero";
import Works from "./Works/Works";

function App() {
  return (
    <div className={classes.container}>
      <Hero />
      <Works/>
    </div>
  );
}

export default App;
