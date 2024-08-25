'use client'
import Image from "next/image"
import styles from './Banner.module.css';
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const totalImages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.imageWrapper+" "+styles.desktop}>
        {[...Array(totalImages)].map((_, index) => (
          <Image
            key={`desktop-${index}`}
            src="/images/banner org.svg"
            alt={`Banner Image ${index + 1}`}
            className={`${styles.image} ${styles.desktopImage} ${index === currentImageIndex ? styles.active : ''}`}
            width={1312}
            height={405}
            sizes="(max-width: 960px) 100vw, 1312px"
            style={{
              animationDelay: `${index * 5}s`
            }}
          />
        ))}
      </div>
      <div className={styles.imageWrapper +" "+styles.mobile}>
        {[...Array(totalImages)].map((_, index) => (
          <Image
            key={`mobile-${index}`}
            src="/images/car cliped mob.svg"
            alt={`Mobile Banner Image ${index + 1}`}
            className={`${styles.mobImage} ${index === currentImageIndex ? styles.active : ''}`}
            width={699.73}
            height={216}
            sizes="(max-width: 960px) 100vw, 1312px"
            style={{
              animationDelay: `${index * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;