import React from 'react';
import { connect } from 'react-redux';
import HeroCard from '../../Components/HeroCard/HeroCard';
import './Heroes.css';

export const Heroes = ({ heroes, isLoading }) => {
  const heroCards = heroes.map(hero => {
    return (<HeroCard
      key={hero.id}
      id={hero.id}
      name={hero.name}
      img={hero.images.md}
    />)
  })
  return (
    <section className='section--heroes'>
      {!isLoading && heroCards}
    </section>
  )
}

export const mapStateToProps = ({ heroes, isLoading }) => ({
  heroes,
  isLoading
})

export default connect(mapStateToProps)(Heroes);