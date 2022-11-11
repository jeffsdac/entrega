import React from 'react';

import Styles from './card.module.scss'

const CardOficina = ({titleCard = '', localWorkshop = '', onClick = () => {}, id}) => {
  return (
    <div id={id} className={Styles.card_container} onClick = {(e) => onClick(e)}>
        <span className={Styles.workshop}></span>
        <div className={Styles.text_card}>
          <h4>{titleCard}</h4>
          <p>{localWorkshop}</p>
        </div>
    </div>
  );
}

export default CardOficina;