import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.maincontainer}>
    <div className={classes.second}>
    <div className={classes.quote}>Creativity is a<br/>never ending<br/> process.</div>
      <div className={classes.info}>
        <div className={classes.connect}>Connect</div>
        <a href='https://www.linkedin.com/in/kamal-arukala-08534b173' rel="noreferrer" target='_blank'><div className={classes.connecter} >LinkedIn</div></a>
        <a href='https://www.instagram.com/drshmirtz/'  target='_blank' rel="noreferrer"><div className={classes.connecter}>Instagram</div></a>
        <a href='https://github.com/Kamal0078k' target='_blank' rel="noreferrer"><div className={classes.connecter}>Github</div></a>
        <a href='resume.pdf' download="kamal.pdf" target='_blank'><div className={classes.connecter}>Resume</div></a>
        
      </div>
      <div className={classes.info}>
        <div className={classes.connect}>Contact</div>
        <div className={classes.connecter} >email :</div>
        <div className={classes.connecter}>saikamal0078@gmail.com</div>
        <div className={classes.connecter} >Phone :</div>
        <div className={classes.connecter}>+91 8374743555</div>
      </div>
    </div>
      
    </div>
  )
}

export default Footer
