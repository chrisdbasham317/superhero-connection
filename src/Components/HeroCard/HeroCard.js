import React from 'react';
import './HeroCard.css';


export const HeroCard = ({ name, img }) => {
  return (
    <section className='section--hero-card'>
      <img className='img--card-pic' src={img} alt={`picture of ${name}`} />
      <h2>{name}</h2>
    </section>
  )
}

export default HeroCard;