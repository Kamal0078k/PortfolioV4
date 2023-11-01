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
              start: "top 100%",
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
              <a rel="noreferrer" href='https://www.figma.com/file/Et2qo0fmepPv5d0fS9K77b/Untitled?type=design&node-id=0%3A1&mode=design&t=Q4iAhNhq1X4FiZ2w-1' target='_blank'><Project/></a>
            </div>
            <div>
            <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <a rel="noreferrer" href='https://www.figma.com/file/nvfystouNfkpTlCdqrQl2o/Untitled?type=design&node-id=0-1&mode=design&t=xg7uPQJDbPEr225i-0' target='_blank'><Project3/></a>
            </div>
            <div>
            <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <a rel="noreferrer" href='https://www.figma.com/file/znpf4AIJQlYjYcGZhB6uW7/Chat?type=design&node-id=0%3A1&mode=design&t=7O7mpTLUxF6Fk6Ys-1' target='_blank'><Project2/></a>
            </div>
            <div>
            <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>UI/UX</div>
            <a rel="noreferrer" href='https://www.figma.com/file/ivgxKqunUhF1Nkt3s0gpCe/Hotels?type=design&node-id=19%3A745&mode=design&t=Q4iAhNhq1X4FiZ2w-1' target='_blank'><Project4/></a>
            </div>
            <div>
            <div style={{"margin-left":"11%" , "margin-bottom": "1%"}}>React</div>
            <a rel="noreferrer" href='https://metaforaark.netlify.app/' target='_blank'><Project5/></a>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Works
