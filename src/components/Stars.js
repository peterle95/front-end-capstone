import React from 'react';
import styles from '../.module.css';
import {FaStarHalfAlt, FaStar, FaRegStar} from 'react-icons/fa';

function Stars({rating}) {

    const starRating = Array.from({length: 5}, (undef, index) => {
        let theStar = index + 0.5;
        return(
            <span key={index}>
                {rating >= index + 1 ? <FaStar className={styles.icon}/>
                : rating > theStar ? <FaStarHalfAlt className={styles.icon}/>
                : <FaRegStar className={styles.icon}/>}
            </span>
        );
    });

    return(
        <>
            {starRating}
        </>
    );
}

export default Stars;