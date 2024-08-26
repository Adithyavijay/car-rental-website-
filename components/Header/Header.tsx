"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

const Header: React.FC = () => {
    const [active, setActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const isMobile = useMediaQuery('(max-width: 550px)');
    const smallScreen = useMediaQuery('(max-width:1250px')
    
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            
        };
    }, [isActive]);



    const handleClick = () => {
        if (smallScreen) {
            setIsActive((prev) => !prev);
        }
    };

  
 
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.brand}>
                {isMobile ?( <Image
                        src="/icons/car brand mobile.svg"
                        alt="Logo"
                        width={155.94}
                        height={23.6}
                    /> ):( <Image
                        src="/icons/carRental.svg"
                        alt="Logo"
                        width={355}
                        height={52}
                    /> ) }    
                </div>
                <div
                    className={`${styles.navbarToggle} ${
                        isActive ? styles.isActive : ""
                    }`}
                    onClick={handleClick}
                >
                    <div className={styles.bar}></div>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <div
                    className={`${styles.options} ${
                        isActive ? styles.active : ""
                    }`}
                    onClick={handleClick}
                >
                    <div className={styles.About}>About</div>
                    <div className={styles.offers}>Offers</div>
                    <div className={styles.corporate}>Corporate</div>
                    <div className={styles.personal}>Personal</div>
                    <div className={styles.location}>Location</div>
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.bellIcon}>
                        <Image
                            src="/icons/bellicon.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                    </div>

                    <div className={styles.user}>
                        <Image
                            src="/icons/name.svg"
                            alt="user"
                            width={114}
                            height={29}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.socialIcons}>
                <Image
                    src="/icons/insta fb x in.svg"
                    alt="social media icons"
                    width={101}
                    height={15.5}
                />
            </div>
            <div className={styles.navbarText}>
                Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor
                Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply |
                Follow us on Social Media for New Offers
            </div>
        </div>
    );
};

export default Header;
