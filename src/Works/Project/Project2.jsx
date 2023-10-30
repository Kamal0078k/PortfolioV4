import React, {useEffect} from 'react'
import classes from "./Project.module.css"
import { ScrollTrigger, CustomEase } from "gsap/all";

import gsap from "gsap";



const Project2 = () => {

 
  return (
    <div className={classes.main} id='main'>
        <div className={classes.container}>
        <div className={classes.overlay}></div>
        <div className={classes.matter}>
          <div className={classes.title}>
            <div className={classes.titleinner}>CHAT</div>
          </div>
          <div className={classes.description}>I have designed a stunning chat application UI in Figma,
showcasing an exceptional dark mode theme.
The overall aesthetic is pleasing, with a harmonious
blend of colors, typography, and visual elements
that exude sophistication. The dark mode not only
enhances the visual appeal but also contributes to
a more comfortable user experience by reducing eye strain..</div>
        </div>
            <div className={classes.image}>
            <img src='Chat.png' className={classes.imageinner} />
            </div>
        </div>
    </div>
  )
}

export default Project2
