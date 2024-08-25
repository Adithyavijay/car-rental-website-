import React from "react";
import styles from './MobileView.module.css';
import DateTimeButton from "./DateTimeButton";
import { useState } from "react";



const MobileView: React.FC = () => {   

   const [showBooking,setShowBooking]=useState<boolean>(false)
   const [showDropoff,setShowDropoff] = useState<string>('pickup')

   const handleClick=()=>{
      setShowBooking(prev=>!prev)
   }

   const handleDropoff=(item:string)=>{
      setShowDropoff(item)
   }

   return (

      <div className={styles.mobileView}>
      <div className={styles.button}>
          <div className={[styles.button,styles.BookNow].join(" ") } onClick={handleClick}>
              <button className={styles.btn}>Book a Car</button>
          </div>
          <div className={styles.button}>
              <button className={styles.btn}>Quick book</button>
          </div>
      </div>  
      {showBooking ? 
    (<div className={styles.menu}>
          <div className={styles.menuWrapper}>
              <div className={`${styles.pickup}  ${ showDropoff === 'pickup' ? styles.active : ''}`} onClick={()=>handleDropoff('pickup')}>Same as Pick-Up</div>
              <div className={`${styles.dropoff}  ${showDropoff==='dropoff' ?styles.active: ''}`} onClick={()=>handleDropoff('dropoff')}>Different Drop-off</div>
              <select name="" className={styles.mobileVehicle}>
                  <option value="">vehicle type</option>
                  <option value="">Maruthy</option>
                  <option value="">Alto</option>
                  <option value="">nano</option>
              </select>
          </div>
          <div className={styles.inputGroup}>
                    <select className={`${styles.locationSelect} `}>
                        <option value="al-quoz">Pick up Location</option>
                        <option value="al-quoz">Al Quoz</option>
                        <option value="deira">Deira</option>
                        <option value="jumeirah">Jumeirah</option>
                        <option value="marina">Marina</option>
                    </select>
                {showDropoff ==='dropoff'  &&    <select className={`${styles.locationSelect} `}>
                        <option value="al-quoz">Drop Off Location</option>
                        <option value="al-quoz">Al Quoz</option>
                        <option value="deira">Deira</option>
                        <option value="jumeirah">Jumeirah</option>
                        <option value="marina">Marina</option>
                    </select> }
                    <DateTimeButton additionalStyles={styles.mobileDateTime} />  
                    <DateTimeButton additionalStyles={styles.mobileDateTime} />
                   
                   
         </div>

          
      </div>) : ''
}
   </div>
   )
}

export default MobileView