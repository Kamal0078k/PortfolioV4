import React, {useEffect} from 'react'
import classes from "./Project.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";

import gsap from "gsap";



const Project4 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(CustomEase);
        gsap.fromTo(
          "#main",
          {
            scale: 0.4,
          },
          {
            scale: 1,
            
ease: "power4.out",
    
            scrollTrigger: {
              trigger: "#main",
              start: "top 100%",
              end: "bottom 50%%",
              scrub: true,
            },
          }
        );
      }, []);
  return (
    <div className={classes.main} id='main'>
        <div className={classes.container}>
        <div className={classes.overlay}></div>
        <div className={classes.matter}>
          <div className={classes.title}>
            <div className={classes.titleinner}>ATG HOTEL</div>
          </div>
          <div className={classes.description}>This case study about the hotel booking app is quite simple and a fascinating task. This app is for customers who want to book hotels in their specific areas by knowing each and every detail about the hotel.</div>
        </div>
            <div className={classes.image}>
            <img src='Hotel.png' className={classes.imageinner} />
            </div>
        </div>
    </div>
  )
}

export default Project4
