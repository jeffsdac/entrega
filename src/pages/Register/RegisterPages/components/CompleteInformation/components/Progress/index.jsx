import React from 'react';

import Styles from './progress.module.scss'

const Progress = () => {
    return (
        <div className={Styles.progress_container}>
            <span className={Styles.progress_number}>
                1
            </span>
            <hr className={Styles.progress_line}/>
            <span className={Styles.progress_number}>
                2
            </span>
            <hr className={Styles.progress_line}/>
            <span className={Styles.progress_number}>
                3
            </span>
        </div>
    );
}

export default Progress;