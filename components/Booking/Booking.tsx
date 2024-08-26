"use client";
import styles from "./Booking.module.css";
import DateTimeButton from "./components/DateTimeButton";
import { useState } from "react";
import Image from "next/image";
import MobileView from "./components/MobileView";

const Booking = () => {
    const [activeItem, setActiveItem] = useState<string>("pickup");

    const handleClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className={styles.bookingSection}>
            <div className={styles.container}>
                {/* menu section  */}
                <div className={styles.menu}>
                    {/* top section of the booking menu  */}
                    <div className={styles.top}>
                        <div
                            className={`${styles.pickup} ${
                                activeItem === "pickup" ? styles.active : ""
                            }`}
                            onClick={() => handleClick("pickup")}
                        >
                            Same as Pick-Up
                        </div>
                        <div
                            className={`${styles.dropoff} ${
                                activeItem === "dropoff" ? styles.active : ""
                            }`}
                            onClick={() => handleClick("dropoff")}
                        >
                            Different Drop-off
                        </div>
                        <select name="" className={styles.vehicleType}>
                            <option value="">Select vehicle type</option>
                            <option value="">Maruthy</option>
                            <option value="">Alto</option>
                            <option value="">nano</option>
                        </select>
                    </div>
                    {/* middle section */}
                    <div className={styles.middle}>
                        <div className={styles.locationContainer}>
                            <select className={styles.locationSelect} defaultValue={styles.opton1}>
                                <option value={styles.option1} >
                                    Al Quoz
                                </option>
                                <option value={styles.option2}>Deira</option>
                                <option value={styles.option3}>Jumeirah</option>
                                <option value={styles.option4}>Marina</option>
                            </select>
                        </div>
                   { activeItem==='dropoff'  &&
                   <div className={styles.locationContainer} >
                  <select className={styles.locationSelect} defaultValue={styles.opton1}>
                       <option value={styles.option1} >
                           Al Quoz
                       </option>
                       <option value={styles.option2}>Deira</option>
                       <option value={styles.option3}>Jumeirah</option>
                       <option value={styles.option4}>Marina</option>
                   </select>
               </div> }     
                        {/* date time input box */}

                        <DateTimeButton />

                        <DateTimeButton />
                        {/* divider */}
                        <div className={styles.divider}></div>
                        {/* search box */}
                        <div className={styles.searchBox}>
                            <Image
                                src="/icons/search box.svg"
                                alt="search box"
                                width={64}
                                height={41}
                            />
                        </div>
                        <div className={styles.quickbook}>
                            <span>Quick book</span>
                        </div>
                    </div>

                    {/* bottom section */}
                    <div className={styles.bottom}>
                        <div className={styles.bottomText}>
                            Download our App for easy accessibility anytime,
                            anywhere!
                        </div>
                        <div className={styles.iconGroup}>
                            <div className={styles.appStore}>
                                <Image
                                    src="/icons/appstore.svg"
                                    alt="appstore icon"
                                    width={109}
                                    height={32}
                                />
                            </div>
                            <div className={styles.googlePlay}>
                                <Image
                                    src="/icons/googlePlay.svg"
                                    alt="google play icon"
                                    width={109}
                                    height={32}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* icons on the side  */}

                <div className={styles.phone}>
                    <Image
                        src="/icons/phone icon.svg"
                        alt=""
                        width={48}
                        height={45}
                    />
                </div>
                <div className={styles.whiteBackground}>
                    <Image
                        src="./icons/white bg.svg"
                        alt=""
                        width={48}
                        height={45}
                    />
                </div>
                <div className={styles.twentyfour}>
                    <Image
                        src="./icons/time.svg"
                        alt=""
                        width={34}
                        height={34}
                    />
                </div>
            </div>

            <div className={styles.mobileViews}>
                <MobileView />
            </div>
        </div>
    );
};

export default Booking;
