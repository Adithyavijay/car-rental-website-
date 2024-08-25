import React from 'react'
import styles from './FooterMobile.module.css';

const FooterMobile : React.FC = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.topSection}>
    <div className={styles.header}>
        <div className={styles.headerLeft}>
           <img src="/icons/mob-company-logo.svg" alt="" />
        </div>
        <div className={styles.headerRight}>
            <img src="/icons/mob-social media icons.svg" className="social-icons" alt="Social Media Icons"  />
        </div>
        
    </div> 
        <div className={styles.linkWrapper}>
            <div className={styles.footerLinks}>
            <a href="#" className={styles.link}>Home</a>
            <a href="#" className={styles.link}>Offers</a>
            <a href="#" className={styles.link}>Career</a>
            <a href="#" className={styles.link}>About Us</a>
            <a href="#" className={styles.link}>Locations</a>
            <a href="#" className={styles.link}>FAQ</a>
            <a href="#" className={styles.link}>Terms & Conditions</a>
            <a href="#" className={styles.link}>Service Request</a>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Services</a>
            <a href="#" className={styles.link}>Contact Us</a>
            </div>
        </div>
    
    </div>
     <div className={styles.bottomSection}>
        <div className={styles.name}>Al habtoor Companies</div>
        <div className={styles.listWrapper}>
            <ul className={styles.list}>
              <li className={styles.item}>Hospitality</li>
              <li className={styles.item}>Real Estate</li>
              <li className={styles.item}>Publishing</li>
              <li className={styles.item}>Automotive</li>
              <li className={styles.item}>Vehicle Leasing</li>
            </ul>       
        </div>
        <div className={styles.secureIcon}>
            <img src="/icons/mob secure.svg" alt="" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copywright}>
            © 2023 Car rental LLC - All Rights Reserved. 
        </div>
    </div>   


 </div>
  )
}

export default FooterMobile ;