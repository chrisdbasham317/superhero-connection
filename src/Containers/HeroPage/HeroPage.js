import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCombatant1 } from '../../Actions';
import { setCombatant2 } from '../../Actions';
import loadingIcon from '../../images/loading-icon.jpg';
import './HeroPage.css';


export const HeroPage = ({ id, heroes, combatant1, setCombatant1, setCombatant2 }) => {
  const heroId = parseInt(id.split('').filter(elem => elem !== '}').join(''));
  const currentHero = heroes.filter(hero => hero.id === heroId)[0];
  const heroName = currentHero.name
  const attributes = currentHero ? Object.keys(currentHero.powerstats) : null;
  const aliases = currentHero ? currentHero.biography.aliases.map(alias => <li key={alias}>{alias}</li>) : null;
  const powerStats = currentHero ? attributes.map(stat => <li key={stat} className='li--stats'>{`${stat}: ${currentHero.powerstats[stat]}`}</li>) : null;
  return (
    <section className='section--hero-page'>
      {!currentHero && loadingIcon}
      {currentHero && 
      <div className='div--loaded-hero-data-render'>
        <section className='section--name-pic'>
          <h1 className='h1--hero-name'>{heroName}</h1>
          <img src={currentHero.images.md} alt={`${heroName}`} />
          <div className='link--hero-battle-btn'>
            <Link className='link--add-hero' to='/battle' onClick={() => {
              return !combatant1 ? setCombatant1(heroName) : setCombatant2(heroName);
            }}>Choose Hero</Link>
          </div>
        </section>
        <section className='section--hero-info'>
          <h2 className='h2--info-label'>Aliases</h2>
          <ul className='ul--alias-list'>
            {aliases}
          </ul>
          <h2 className='h2--info-label'>Attributes</h2>
          <ul className='ul--stats-list'>
            {powerStats}
          </ul>
          <h2 className='h2--info-label'>Birth Place:</h2>
          <p>{currentHero.biography.placeOfBirth}</p>
          <h2 className='h2--info-label'>First Appearance:</h2>
          <p>{currentHero.biography.firstAppearance}</p>
          <h2 className='h2--info-label'>Publisher:</h2>
          <p>{currentHero.biography.publisher}</p>
          <h2 className='h2--info-label'>Alignment:</h2>
          <p>{currentHero.biography.alignment}</p>
        </section>
      </div>    
      }
    </section>
  )
}

export const mapStateToProps = ({ heroes, combatant1 }) => ({
  heroes,
  combatant1,
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({setCombatant1, setCombatant2}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);

HeroPage.propTypes = {
  id: PropTypes.string,
  heroes: PropTypes.array,
  combatant1: PropTypes.string,
  setCombatant1: PropTypes.func,
  setCombatant2: PropTypes.func
}