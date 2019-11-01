import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDefaultHeroes } from '../../helpers/helperFuncs';
import HeroCard from '../../Components/HeroCard/HeroCard';

export const Heroes = ({ heroes, isLoading }) => {
  const heroCards = heroes.map(hero => {
    return (<HeroCard
      key={hero.id}
      name={hero.name}
      img={hero.images.md}
    />)
  })
  return (
    <section>
      {!isLoading && heroCards}
    </section>
  )
}

export const mapStateToProps = ({ heroes, isLoading }) => ({
  heroes,
  isLoading
})

export default connect(mapStateToProps)(Heroes);