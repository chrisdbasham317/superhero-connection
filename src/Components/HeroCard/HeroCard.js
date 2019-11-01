import React from 'react';


export const HeroCard = ({ name }) => {
  return (
    <section>
      {/* <img src={img} alt={`picture of ${name}`} /> */}
      <h2>{name}</h2>
    </section>
  )
}

export default HeroCard;