import classes from "./App.module.css";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import { useRef, useState,useEffect } from "react";

function App() {
  const menuRef = useRef(null)
  const worksRef = useRef(null)
  const ContactRef = useRef(null)
  const homeRef = useRef(null)

  const [backgroundColor, setBackgroundColor] = useState({
    Homecolor : "white",
    worksColor : "black",
    ContactColor : "black",
    thcolor:"black",
    twcolor : "white",
    tccolor : "white"
  });
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Define the scroll position and corresponding background colors
    const scrollPositions = [
      { position: 0, Homecolor: 'white' , worksColor: 'black', Contactcolor: 'black' , thcolor : "black" , twcolor: "white" , tccolor: "white" }, // Set the initial background color
      { position: 720, Homecolor: 'black' , worksColor: 'white', Contactcolor: 'black' , thcolor : "white" , twcolor: "black" , tccolor: "white"},    // Change background color at scroll position 300
      { position: 4000, Homecolor: 'black' , worksColor: 'black', Contactcolor: 'white', thcolor : "white" , twcolor: "white" , tccolor: "black"},
      // Add more scroll positions and colors as needed
    ];

    for (const { position, thcolor, tccolor,twcolor, Homecolor , worksColor , Contactcolor } of scrollPositions) {
      if (scrollY >= position) {
        setBackgroundColor({
          Homecolor : Homecolor,
          worksColor : worksColor,
          ContactColor : Contactcolor,
          tccolor:tccolor,
          twcolor : twcolor,
          thcolor : thcolor
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const works = () =>{
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const contacts = () =>{
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
  }


  const home = () =>{
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={classes.total}>
    <div className={classes.menu}  >
    </div>
    <div className={classes.options} ref={menuRef}>
      <div className={classes.option} style={{"background-color" : backgroundColor.Homecolor , "color" : backgroundColor.thcolor}} onClick={home} >HOME</div>
      <div className={classes.option}  style={{"background-color" : backgroundColor.worksColor, "color" : backgroundColor.twcolor}} onClick={works}>WORKS</div>
      <div className={classes.option} style={{"background-color" : backgroundColor.ContactColor, "color" : backgroundColor.tccolor}} onClick={contacts}>CONTACT</div>
    </div>
    <div  className={classes.container}>
    <div ref={homeRef}>
    <Hero />
    </div>
    
    <div ref={worksRef}>
    <Works/>
    </div>
    <div ref={ContactRef}>
    <Footer/>
    </div>
    </div>
      
    </div>
  );
}

export default App;
