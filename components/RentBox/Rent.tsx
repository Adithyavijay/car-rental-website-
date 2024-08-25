import Image from "next/image";
import styles from "./Rent.module.css";
import React from "react";

const Rent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Rent/Lease In three easy steps</div>
            <div className={styles.rentBoxesContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.number}>
                        <Image src="./icons/01 group.svg" alt="logo" width={64} height={52}/>
                    </div>
                    <div className={styles.rentBox}>
                        <div className={styles.imageContainer}>
                            <Image src="./icons/rentLocation.svg" alt="logo" width={56} height={46} />
                        </div>
                        <div className={styles.content}>
                            Select the location. Browse through our available
                            options and find the perfect car to suit your needs
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.number}>
                    <Image src="./icons/02 group.svg" alt="logo" width={64} height={52}/>
                    </div>
                    <div className={styles.rentBox}>
                        <div className={styles.imageContainer}>
                            <Image src="./icons/rentDate.svg" alt="logo" width={64} height={46}/>
                        </div>
                        <div className={styles.content}>
                            Choose your desired Pick-Up date and time.
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.number}>
                    <Image src="./icons/03 group.svg" alt="logo" width={64} height={52}/>
                    </div>
                    <div className={styles.rentBox}>
                        <div className={styles.imageContainer}>
                            <Image src="./icons/rentCar.svg" alt="logo" width={68} height={46}/>
                        </div>
                        <div className={styles.content}>
                            Make payment and book the car. Select an option to
                            either have the car delivered to your location or
                            pick it up directly from us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rent;
