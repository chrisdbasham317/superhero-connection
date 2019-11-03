import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';


export const HeroCard = ({ id, name, img })  => {
  const currentPath = window.location.pathname
  return (
    <section className='section--hero-card'>
      <img className='img--card-pic' src={img} alt={`picture of ${name}`} />
      <h2>{name}</h2>
      {currentPath !== '/battle' && <div className='div--view-more-btn'>
        <Link
          className='link--view-more-btn'
          to={{ pathname: `/hero/${id}}`, param: id }}>More Info</Link>
      </div>}
    </section>
  )
}

export default HeroCard;