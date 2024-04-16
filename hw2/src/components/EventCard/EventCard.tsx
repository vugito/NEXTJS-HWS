import React, {useState} from 'react';
import styles from "./EventCard.module.css";
import Image from "next/image";
import {Event} from "@/types";
import Link from "next/link";


interface Props {
    event: Event
}

const EventCard = ({event}: Props) => {

    const {id, title, images} = event;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };


    return (
        <div key={id} className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>{title}</span>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.imgList}>
                    <div className={styles.leftArrow} onClick={prevSlide}>&#10094;</div>
                    {images.map((img, index) => (
                        <div key={img.id} className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}>
                            <Image width={256} height={256} src={img.imgLink} alt="Image"/>
                        </div>
                    ))}
                    <div className={styles.rightArrow} onClick={nextSlide}><b>&#10095;</b></div>
                </div>

            </div>
            <div className={styles.footer}>
                <Link href={`/events/${event.id}`}>
                    <button className={styles.button}>Open card</button>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;