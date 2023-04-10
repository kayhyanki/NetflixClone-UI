   import React from "react";

   import PlayIcon from "./PlayIcon";
   import InfoIcon from "./InfoIcon";

   import billboardHeroTitleImg from "../Billboard/assets/billboardTitle.webp";
   import billboardHeroImg from "../Billboard/assets/billboard.webp";

   import styles from './Billboard.module.css'; 

   const Billboard = () => 
   {
      return(
         <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                  <img src={billboardHeroImg} alt=""/>
                  <div className={styles.fadeOut}></div>
                  <div className={styles.info}>
                     <img src={billboardHeroTitleImg} alt="MoneyHeist: logo"/>
                     <div className={styles.description}>Eight theives take hostages and lock
                      themselves in the Royal Mint of Spain as a criminal mastermind manipulates 
                      the police to carry out his plan.</div>
                     <div className={styles.links}>
                     <a href="/">
                        <PlayIcon/>
                        <span>Play</span>
                        </a>
                     <button>
                        <InfoIcon/>
                        <span>More Info</span>
                        </button>
                     </div>
                  
                  </div>
            </div>
         </div>
      );
   };

   export default Billboard;