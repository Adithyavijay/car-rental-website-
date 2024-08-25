'use client'
import { useState } from 'react';
import styles from './Accordion.module.css';
import Image from 'next/image';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is my eligibility to book a car?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question: "Can I book for any period of time?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question: "Can I opt for a car for a longer period?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question: "Can I book a one-way trip?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question: "Is there a home delivery option available?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question: "How can I make the payment?",
        answer: "You should be of 18 years old above and you must possess a valid driving license"
    }
];

const Accordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/*  <!-- frequently asked questions --> */}
            <div className={styles.sectionHeader}>
                Frequently Asked Questions
            </div>

            {/*  <!-- Accordion section -->  */}
            <div className={styles.wrapper}>
                <div className={styles.Section}>
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <div className={styles.accordion}>
                                <div
                                    className={styles.header}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className={styles.question}>
                                        {faq.question}
                                    </span>
                                    <span className={styles.icon}>
                                        <Image
                                            src={activeIndex === index ? "./icons/xmark.svg" : "./icons/plus.svg"}
                                            alt={activeIndex === index ? "Close" : "Open"}
                                            width={24}
                                            height={24}
                                        />
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className={styles.content}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                            <div className={styles.divider}></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Accordion;
