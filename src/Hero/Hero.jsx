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
          <div className={classes.kamal}>KAMAL</div>
          <div className={classes.corners}>
            <img src="corner.svg" className={classes.corner} />
            <img src="corner.svg" className={classes.cornert} />
          </div>
        </div>
        <div className={classes.line}>
          <div className={classes.lineinner}>BORN</div>
          <div className={classes.lineinner1}>TO</div>
          <div className={classes.lineinner2}>DESIGN</div>
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
        A MIND WILLING TO CREATE STUNNING VISUALS
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
