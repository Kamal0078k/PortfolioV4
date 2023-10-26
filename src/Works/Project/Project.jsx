import React, {useEffect} from 'react'
import classes from "./Project.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";

import gsap from "gsap";



const Project = () => {

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
              start: "top 90%",
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
            <div className={classes.titleinner}>DOGGO</div>
          </div>
          <div className={classes.description}>Welcome to Doggo, a trusted companion in pet care services.
Doggo dedicated to providing top-notch pet sitting, pet walking,
and pet travel solutions for pet owners. It’s user-friendly website
offers a seamless experience, connecting pet owners with experienced
caregivers who ensure the well-being of your beloved furry friends.
Whether you need a reliable pet sitter, a caring dog walker,
or safe pet transport, we've got you covered.</div>
        </div>
            <div className={classes.image}>
            <img src='Doggo.png' className={classes.imageinner} />
            </div>
        </div>
    </div>
  )
}

export default Project
