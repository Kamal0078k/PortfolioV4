import React from "react";
import classes from "./Hero.module.css";
//cubic-bezier(0.67, 0.09, 0, 1.16)
const Hero = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.back}>
        <div className={classes.tooback}></div>
      </div>
      <div className={classes.front}>
        <div className={classes.heading}>
          <div className={classes.kamal}>PORTFOLIO</div>
          <div className={classes.corners}>
            <img src="corner.svg" className={classes.corner} />
            <img src="corner.svg" className={classes.cornert} />
          </div>
        </div>
        <div className={classes.line}>
          <div className={classes.lineinner}>ARUKALA</div>
          <div className={classes.lineinner1}>SAI</div>
          <div className={classes.lineinner2}>KAMAL</div>
        </div>
        <div className={classes.skillsouter}>
        <ul className={classes.skills}>
          <li>FRONT END DEVELOPER</li>
          </ul>
        </div>
        <div className={classes.skillsouter}>
        <ul className={classes.skills}>
          <li>UI/UX DESIGNER</li>
          </ul>
        </div>
        <div className={classes.skillsouter}>
        <ul className={classes.skills}>
          <li>GRAPHIC DESIGNER</li>
        </ul>
        </div>
        
        <div className={classes.quote}>
        <div className={classes.quoteinner}>
        Hi! I design and develope websites using Figma and ReactJS 
        </div>
          
        </div>
        <div className={classes.mainquote}>
        
              <div className={classes.mainquoteinner}>
                Simplicity will stand out, <br /> while complexity will get
                <br /> lost in the crowd
              </div>
             
       
              
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
