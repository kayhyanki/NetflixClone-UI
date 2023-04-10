import React from 'react';

import Segment from '../Segment';

import styles from './Titles.module.css';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title="My List" />
            <Segment title="Trending Now" />
            <Segment title="Anime" />
            <Segment title="Casual Viewing" />
        </div>
    );
};

export default Titles;