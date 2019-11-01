import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadingIcon from '../../images/loading-icon.jpg';


const HeroPage = ({ id, heroes }) => {
  const heroId = parseInt(id.split('').filter(elem => elem !== '}').join(''));
  const currentHero = heroes.filter(hero => hero.id === heroId)[0];
  const attributes = currentHero ? Object.keys(currentHero.powerstats) : null;
  const aliases = currentHero ? currentHero.biography.aliases.map(alias => <li>{alias}</li>) : null;
  const powerStats = currentHero ? attributes.map(stat => <li>{`${stat}: ${currentHero.powerstats[stat]}`}</li>) : null;
  return (
    <section className='section--hero-page'>
      {!currentHero && loadingIcon}
      {currentHero && 
      <div className='div--loaded-hero-data-render'>
        <h1 className='h1--hero-name'>{currentHero.name}</h1>
        <img src={currentHero.images.md} alt={`${currentHero.name} photo`} />
        <ul className='ul--alias-list'>
          <p>Aliases</p>
          {aliases}
        </ul>
        <ul className='ul--stats-list'>
          <p>Attributes</p>
          {powerStats}
        </ul>
        <p>Birth Place: {currentHero.biography.placeOfBirth}</p>
        <p>First Appearance: {currentHero.biography.firstAppearance}</p>
        <p>Publisher: {currentHero.biography.publisher}</p>
        <p>Alignment: {currentHero.biography.alignment}</p>
        <div className='link--hero-battle-btn'>
          <Link to='/battle'>Choose Hero</Link>
        </div>
      </div>    
      }
    </section>
  )
}

export const mapStateToProps = ({ heroes }) => ({
  heroes
})

export default connect(mapStateToProps)(HeroPage);