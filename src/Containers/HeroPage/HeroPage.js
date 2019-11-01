import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadingIcon from '../../images/loading-icon.jpg';


const HeroPage = ({ id, heroes }) => {
  const heroId = parseInt(id.split('').filter(elem => elem !== '}').join(''));
  const currentHero = heroes.filter(hero => hero.id === heroId)[0];
  return (
    <section>
      {!currentHero && loadingIcon}
      {currentHero && 
      <div className='div--loaded-hero-data-render'>
        <h1>{currentHero.name}</h1>
        <img src={currentHero.images.md} />
      </div>    
      }
    </section>
  )
}

export const mapStateToProps = ({ heroes }) => ({
  heroes
})

export default connect(mapStateToProps)(HeroPage);