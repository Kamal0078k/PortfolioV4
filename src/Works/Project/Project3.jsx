import React, {useEffect} from 'react'
import classes from "./Project.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";

import gsap from "gsap";



const Project3 = () => {

  
  return (
    <div className={classes.main} id='main'>
        <div className={classes.container}>
        <div className={classes.overlay}></div>
        <div className={classes.matter}>
          <div className={classes.title}>
            <div className={classes.titleinner}>NIKE</div>
          </div>
          <div className={classes.description}>The Minimalistic Nike Air Max Web UI is a sleek and
contemporary web design concept, created to showcase
the iconic Nike Air Max sneakers with a clean and user-friendly interface.
This project places a strong emphasis on simplicity and aesthetics, using
a minimalist approach to highlight the beauty and features
of the Nike Air Max line.</div>
        </div>
            <div className={classes.image}>
            <img src='Air.png' className={classes.imageinner} />
            </div>
        </div>
    </div>
  )
}

export default Project3
