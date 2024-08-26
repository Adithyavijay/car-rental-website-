/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Subscription.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface userInfo {
    name: string;
    email: string;
}
interface Errors {
    name?: string;
    email?: string;
    phoneNumber?:string;
}

const SubscriptionSection: React.FC = () => {
    const [inputVal, setInputVal] = useState<userInfo>({
        name: "",
        email: "",
    });

    const [number, setNumber] = useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width:1260px)");
    const [errors, setErrors] = useState<Errors>({});
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: "",
        }));
    };
    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhoneNumber(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            phoneNumber: "",
        }));
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("button clicked");
        const validationErrors: Errors = validate(inputVal);
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            toast.success("user subscribed");
        } else {
            setErrors(validationErrors);
            toast.error("error subscribing");
        }
    };
    const handleGetLink = () => {
        if (phoneNumber.length !== 10) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: "Phone number must be 10 digits",
            }));
            toast.error("Invalid phone number");
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: "",
            }));
            toast.success("Link sent successfully");
            // Here you would typically send the link to the provided phone number
        }
    };

    // validation
    const validate = (values: userInfo): Errors => {
        const { name, email } = values;
        const validationErrors: Errors = {};
        if (!name.trim()) {
            validationErrors.name = "Name cannot be empty";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            validationErrors.email = "invalid email format";
        }
        return validationErrors;
    };

    return (
        <div className={styles.subscriptionContainer}>
            <div>
                <Toaster />
            </div>
            {/* left section */}
            <div className={styles.menuOne}>
                <div className={styles.heading}>
                    Subscribe here for exclusive offers and updates!
                </div>
                <div className={styles.inputGroup}>
                    <input
                        className={styles.inputField}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={inputVal.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <div className={styles.error}>{errors.name}</div>
                    )}
                    <input
                        className={styles.inputField}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inputVal.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <div className={styles.error}>{errors.email}</div>
                    )}
                </div>
                <div className={`${styles.text} `}>
                    Dont miss out! Enter your email and your name, then hit
                    subscribe to unlock a world of special offers and details.
                </div>

                <button className={styles.button} onClick={handleClick}>
                    Subscribe
                </button>
            </div>
            {/* right section */}
            <div className={styles.menuTwo}>
                {isMobile ? (
                    <div className={`${styles.imageContainer} `}>
                        <Image
                            src="./images/Rectangle.svg"
                            id="Image"
                            alt=""
                            width={154}
                            height={263}
                        />
                    </div>
                ) : (
                    <div className={`${styles.imageContainer}`}>
                        <Image
                            src="./images/Rectangle fon.svg"
                            id="Image"
                            alt=""
                            width={231}
                            height={417}
                        />
                    </div>
                )}

                <div className={styles.descContainer}>
                    <div className={styles.headText}>
                        Enter your number and receive <br />a direct link to
                        download the app
                    </div>
                    <div className={`${styles.mobileText} ${styles.mobile}`}>
                        Enter your number and <br /> receive a direct link{" "}
                        <br /> to download the app
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.fullWidthInput}
                            type="text"
                            placeholder="Enter the phone number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            maxLength={10}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.blackButton} onClick={handleGetLink}>Get the link</div>
                    </div>
                    {errors.phoneNumber && (
                            <div style={{color:'white'}} className={styles.error+" "+styles.desktop}>{errors.phoneNumber}</div>
                        )}
                    <div className={styles.appLinks}>
                        <p className={styles.appLinksText}>Get it on</p>
                        <div className={styles.linkGroup}>
                            <div className={styles.linkItem}>
                                <div className={styles.linkIcon}>
                                    <img
                                        src="./icons/appleIcon.svg"
                                        alt="Apple Store"
                                    />
                                </div>
                                <div className={styles.linkText}>
                                    <span className={styles.smallText}>
                                        <img
                                            src="./icons/download on the.svg"
                                            alt="Download on the"
                                        />
                                    </span>{" "}
                                    <br />
                                    <span className={styles.largeText}>
                                        <img
                                            src="./icons/app store word.svg"
                                            alt="App Store"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={styles.linkItem}>
                                <div className={styles.linkIcon}>
                                    <img
                                        src="./icons/googlePlaysub.svg"
                                        alt="Google Play"
                                    />
                                </div>
                                <div className={styles.linkText}>
                                    <span className={styles.smallText}>
                                        <img
                                            src="./icons/get it on the.svg"
                                            alt="Get it on the"
                                        />
                                    </span>
                                    <br />
                                    <span>
                                        <img
                                            src="./icons/google play word.svg"
                                            alt="Google Play"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view  */}
                <div className={styles.mobileInputBox + " " + styles.mobile}>
                    <input type="text" placeholder="Enter phone number"  value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            maxLength={10}/>
                </div>
                <div className={`${styles.mobileButton} ${styles.mobile}`}>
                    <button className={styles.btn}  onClick={handleGetLink}><span>Get the link</span></button>
                </div>
                {errors.phoneNumber && (
                            <div style={{color:'white',marginLeft:'5px',paddingTop:'5px'}} className={styles.error+" "+styles.mobile}>{errors.phoneNumber}</div>
                        )}
            </div>
        </div>
    );
};

export default SubscriptionSection;
