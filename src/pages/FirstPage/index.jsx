import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './firstPage.module.scss'

function FirstPage() {
  return (
    <div className={Styles.firstPage}>
        <div className={Styles.slides}>

        </div>
        <div className={Styles.options_container}>
            <h2>Qual desses você é?</h2>
            <Link to='./login'>Cliente</Link>
            <Link to='./loginWorkShop'>Oficina</Link>
        </div>
    </div>
  );
}

export default FirstPage;