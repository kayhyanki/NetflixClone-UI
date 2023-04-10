import React from "react";

import styles from './FooterLinks.module.css'; 

const FooterLinks = () => {
   const links = [
      'Audio & Subtitles',
      'Audio Description',
      'Help Center',
      'Gift Cards',
      'Media Center',
      'Invester Relations',
      'Jobs',
      'Terms of Use',
      'Privacy',
      'Leagal Notice',
      'Cookie Preferences',
      'Impressum',
      'Contact Us'
   ];
   return(

   <ul className={styles.linksList}>
      {links.map(link =>(
         <li className={styles.link} key={link}>
            <a href="/">{link}</a>
         </li>
      ))}
   </ul>
   );
};

export default FooterLinks;