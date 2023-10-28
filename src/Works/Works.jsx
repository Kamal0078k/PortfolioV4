import React , {useEffect} from 'react'
import classes from "./Works.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";
import Project from './Project/Project';
import Project2 from './Project/Project2';
import gsap from "gsap";
import Project3 from './Project/Project3';
import Project4 from './Project/Project4';
import Project5 from './Project/Project5';

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
              scrub: true,
            },
          }
        );
      }, []);


  return (
    <div className={classes.maincontainer}>
        <div className={classes.title}>
          <div className={classes.fronttitle}>
            <div className={classes.toofrontitle} id='inner'>WORKS</div>
          </div>
          <div className={classes.backtitle}>
          <div className={classes.toobacktitle}></div>
          </div>
        </div>
        <div className={classes.projects}>
          <div className={classes.project}>
          <div className={classes.work}>
          <div>
          <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <Project/>
          </div>
          <div>
          <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <Project3/>
          </div>
          <div>
          <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <Project2/>
          </div>
          <div>
          <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <Project4/>
          </div>
          <div>
          <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>React</div>
            <Project5/>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Works
