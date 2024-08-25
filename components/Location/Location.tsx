import Image from "next/image";
import styles from './Location.module.css'

const Location : React.FC =()=>{
    return (
        <div className={styles.wrapper}>
        <div className={styles.locations}>
            <div className={styles.header}>Locations</div>
            <ul className={styles.list}>
                <li className={styles.location}>
                    <Image className={styles.icon} src="./icons/location icon.svg" alt="Location Icon" width={24} height={24} />
                    <span className={styles.text}>Dubai</span>
                </li>
                <li className={styles.line}></li>
                <li className={styles.location}>
                    <Image className={styles.icon} src="./icons/location icon.svg" alt="Location Icon" width={24} height={24} />
                    <span className={styles.text}>Abu Dhabi</span>
                </li>
                <li className={styles.line}></li>
                <li className={styles.location}>
                    <Image className={styles.icon} src="./icons/location icon.svg" alt="Location Icon" width={24} height={24} />
                    <span className={styles.text}>Sharjah</span>
                </li>
                <li className={styles.line}></li>
                <li className={styles.location}>
                    <Image className={styles.icon} src="./icons/location icon.svg" alt="Location Icon" width={24} height={24} />
                    <span className={styles.text}>Fujairah</span>
                </li>
                <li className={styles.line}></li>
                <li className={styles.location}>
                    <Image className={styles.icon} src="./icons/location icon.svg" alt="Location Icon" width={24} height={24} />
                    <span className={styles.text}>Ras Al Khaimah</span>
                </li>
            </ul>
        </div> 
        </div>
    )
} 

export default Location;