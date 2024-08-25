'use client';
import React, { useState } from 'react';
import styles from './DateTimeButton.module.css';
import Image from 'next/image';

type DateTimeButtonProps = {
  additionalStyles?: string;
};

const DateTimeButton : React.FC<DateTimeButtonProps> = ({additionalStyles}) => {
  const [showInput, setShowInput] = useState(false);
  const [formattedDateTime, setFormattedDateTime] = useState<string>('');

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatDateTime(value);
    setFormattedDateTime(formattedValue);
    setShowInput(false); // Close the dropdown after selecting
  };

  const formatDateTime = (value: string): string => {
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-GB', options).replace(',', ' ');
  };

  return (
    <div className={[styles.container, additionalStyles].join(" ")}>
      <button onClick={handleButtonClick} className={styles.button}>
        <Image
          src="/icons/calender icon.svg"
          alt="Calendar Icon"
          width={10}
          height={10}
          className={styles.calenderIcon}
        />
        <span className={styles.buttonText}>
          {formattedDateTime ? formattedDateTime : 'Select Date & Time'}
        </span>
      </button>
      {showInput && (
        <input
          type="datetime-local"
          onChange={handleDateTimeChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default DateTimeButton;
