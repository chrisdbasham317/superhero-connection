import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDefaultHeroes } from '../../helpers/helperFuncs';
import HeroCard from '../../Components/HeroCard/HeroCard';
import './Heroes.css';

export const Heroes = ({ heroes, isLoading }) => {
  const heroCards = heroes.map(hero => {
    return (<HeroCard
      key={hero.id}
      id={hero.id}
      name={hero.name}
      img={hero.images.sm}
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