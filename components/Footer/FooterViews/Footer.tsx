import React from 'react';
import styles from './Footer.module.css';

const Footer : React.FC = () => {
  return (
    <footer className={styles.container}>
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.companyInfo}>
          <img src="./icons/company logo.svg" alt="Company Logo" className={styles.logo} />
          <p className={styles.tagline}>Member of the <br /> Al Habtoor Group</p>
        </div> 
        <nav className={styles.footerLinks}>
         <section className={styles.firstSection}>
          <div className={styles.linkColumn}>
            <a href="#" className={styles.link}>Home</a>
            <a href="#" className={styles.link}>About Us</a>
            <a href="#" className={styles.link}>Services</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="#" className={styles.link}>Offers</a>
            <a href="#" className={styles.link}>Locations</a>
            <a href="#" className={styles.link}>Contact Us</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="#" className={styles.link}>FAQ</a>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Service Request</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="#" className={styles.link}>Career</a>
            <a href="#" className={styles.link}>Terms & Conditions</a>
          </div>
        </section>
        <div className={styles.secondSection}>
            <div className={styles.title}>Al Habtoor Companies</div>
            <div className={styles.listWrapper}>
            <ul className={styles.list}>
              <li className={styles.item}>Hospitality</li>
              <li className={styles.item}>Real Estate</li>
              <li className={styles.item}>Education</li>
              <li className={styles.item}>Publishing</li>
              <li className={styles.item}>Automotive</li>
              <li className={styles.item}>Vehicle Leasing</li>
            </ul>       
        </div>
        </div>
        </nav>
        <div className={styles.socialMedia}>
          <p>Follow us on</p>
          <img src="./icons/social media icons.svg" className={styles.socialIcons} alt="Social Media Icons"  />
          <img src="./icons/secure global sign.svg" className={styles.additionalIcons} alt="Additional Social Icon"  />
        </div>
      </div>
     
      <hr className={styles.divider} />
      <p className={styles.copywright}>© 2018 Car rental LLC - All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer