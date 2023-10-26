import React , {useEffect} from 'react'
import classes from "./Works.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";
import Project from './Project/Project';
import gsap from "gsap";

const Works = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(CustomEase);
        gsap.fromTo(
          "#inner",
          {
            y: 200,
          },
          {
            y: 0,
            duration:1,
ease: "power4.out",
    
            scrollTrigger: {
              trigger: "#inner",
              start: "top 90%",
              end: "bottom 50%%",
            //   scrub: true,
            },
          }
        );
      }, []);


  return (
    <div className={classes.maincontainer}>
       <div className={classes.back}>
        <div className={classes.tooback}></div>
      </div>
      <div className={classes.front}>
      <div className={classes.line}>
          <div className={classes.lineinner} id='inner'>WORKS</div>
        </div>
        <div className={classes.projects}>
        <Project/>
       
        </div>
        

      </div>
    </div>
  )
}

export default Works
