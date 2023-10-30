import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.maincontainer}>
    <div className={classes.second}>
    <div className={classes.quote}>Creativity is a<br/>never ending<br/> process.</div>
      <div className={classes.info}>
        <div className={classes.connect}>Connect</div>
        <div className={classes.connecter} >LinkedIn</div>
        <div className={classes.connecter}>Instagram</div>
        <div className={classes.connecter}>Github</div>
        <div className={classes.connecter}>Resume</div>
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
