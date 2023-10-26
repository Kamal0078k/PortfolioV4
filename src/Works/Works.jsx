import React , {useEffect} from 'react'
import classes from "./Works.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";
import Project from './Project/Project';
import Project2 from './Project/Project2';
import gsap from "gsap";
import Project3 from './Project/Project3';

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
        <Project2/>
        <Project3/>
        </div>
        

      </div>
    </div>
  )
}

export default Works
