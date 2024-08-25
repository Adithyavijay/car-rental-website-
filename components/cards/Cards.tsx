import React from "react";
import styles from './Cards.module.css';
import Image from "next/image";

const Cards: React.FC = () => { 

    
    return (
        <div className={styles.cards}>
            <div className={styles.cardText}>Most popular cars</div>
            <div className={styles.cardContainer}>
                {/* First Card */}
                <div className={styles.card}>
                <div className={styles.imageContainer}>
                        <Image src="/images/blue car.svg" alt="car image" width={360} height={290} className={styles.image} />
                </div>
                    <div className={styles.cardDescription}>
                        <div className={styles.cardHeader}>Mitsubishi Eclipse</div>
                        <div className={styles.cardDetails}>
                            Eclipse Cross is a fusion of sharp coupe looks and
                            dynamic SUV mobility with signature Mitsubishi
                            styling, technology, and driving confidence.
                        </div>
                        <div className={styles.cardFeatures}>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/first svg.svg" alt="icon" width={12} height={15} className={styles.image}/>
                                </div>
                                <div className={styles.iconText}>6 people</div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/automatic gear.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>Automatic</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/car door.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>5 doors</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/air conditioner.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>AC</span>
                            </div>
                        </div>
                        <div className={styles.lastSection}>
                            <div className={styles.price}>AED 2700/Monthly</div>
                            <div className={styles.booking}>Book Now</div>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image src="/images/red car.svg" alt="car image" width={360} height={290} className={styles.image} />
                        </div>
                    <div className={styles.cardDescription}>
                        <div className={styles.cardHeader}>Jac J7</div>
                        <div className={styles.cardDetails}>
                            S3 Plus has been rated Five-Star in C-NCAP including
                            front impact, side impact, frontal side impact &
                            Whipping test.
                        </div>
                        <div className={styles.cardFeatures}>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/first svg.svg" alt="icon" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>6 people</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/automatic gear.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>Automatic</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/car door.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>5 doors</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/air conditioner.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>AC</span>
                            </div>
                        </div>
                        <div className={styles.lastSection}>
                            <div className={styles.price}>AED 2700/Monthly</div>
                            <div className={styles.booking}>Book Now</div>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div className={styles.card}>
                <div className={styles.imageContainer}>
                        <Image src="/images/blue car.svg" alt="car image" width={360} height={290} className={styles.image} />
                </div>
                    <div className={styles.cardDescription}>
                        <div className={styles.cardHeader}>Mitsubishi Eclipse</div>
                        <div className={styles.cardDetails}>
                            Eclipse Cross is a fusion of sharp coupe looks and
                            dynamic SUV mobility with signature Mitsubishi
                            styling, technology, and driving confidence.
                        </div>
                        <div className={styles.cardFeatures}>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/first svg.svg" alt="icon" width={12} height={15} className={styles.image}/>
                                </div>
                                <div className={styles.iconText}>6 people</div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/automatic gear.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>Automatic</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/car door.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>5 doors</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/air conditioner.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>AC</span>
                            </div>
                        </div>
                        <div className={styles.lastSection}>
                            <div className={styles.price}>AED 2700/Monthly</div>
                            <div className={styles.booking}>Book Now</div>
                        </div>
                    </div>
                </div>
                {/* fourth card */}
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image src="/images/red car.svg" alt="car image" width={360} height={290} className={styles.image} />
                        </div>
                    <div className={styles.cardDescription}>
                        <div className={styles.cardHeader}>Jac J7</div>
                        <div className={styles.cardDetails}>
                            S3 Plus has been rated Five-Star in C-NCAP including
                            front impact, side impact, frontal side impact &
                            Whipping test.
                        </div>
                        <div className={styles.cardFeatures}>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/first svg.svg" alt="icon" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>6 people</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/automatic gear.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>Automatic</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/car door.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>5 doors</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconContainer}>
                                    <Image src="/icons/air conditioner.svg" alt="logo" width={12} height={15} />
                                </div>
                                <span className={styles.iconText}>AC</span>
                            </div>
                        </div>
                        <div className={styles.lastSection}>
                            <div className={styles.price}>AED 2700/Monthly</div>
                            <div className={styles.booking}>Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
