import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import './BattleGround.css';

export class BattleGround extends Component {
  constructor(combatant1, combatant2) {
    super(combatant1, combatant2);
    this.state = {
      challenger1: this.props.combatant1,
      challenger2: this.props.combatant2,
      modalState: true
    }
  }

  determineSelectStatus = (heroName, combatantNum) => {
    return this.props[`combatant${combatantNum}`] === heroName ? true : false;
  }
  render() {
    const hero1 = this.props.heroes.filter(hero => hero.id === this.props.combatant1);
    const hero2 = this.props.heroes.filter(hero => hero.id === this.props.combatant2);
    const renderReady = [...hero1, ...hero2];
    const options1 = this.props.heroes.map(hero => <option value={`${hero.name}`} selected={this.determineSelectStatus(hero.name, 1)}>{hero.name}</option>)
    const options2 = this.props.heroes.map(hero => <option value={`${hero.name}`} selected={this.determineSelectStatus(hero.name, 2)}>{hero.name}</option>)
    return (
      <section className='section--battle-ground'>
        <section className='section--heroes-modal'>
          <ReactModal
            ariaHideApp={false}
            isOpen={this.state.modalState}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.85)",
              },
              content: {}
            }}
            contentLabel="Hero Selections"
            className="HeroSelectionFormModal"
            overlayClassName="HeroSelectionFormOverlay"
          >
            <form className='form--hero-selection'>
              <h1>Select Your Heroes</h1>
              <select>{options1}</select>
              <select>{options2}</select>
              <button className='button-start-fight'>Fight!</button>
            </form>
          </ReactModal>
        </section>
        {renderReady.length > 1 ? <section className='section--heroes-selected'>
          <div>
            <HeroCard
              key={hero1[0].id}
              id={hero1[0].id}
              name={hero1[0].name}
              img={hero1[0].images.md}
            />
          </div>
          <div>
            <HeroCard
              key={hero2[0].id}
              id={hero2[0].id}
              name={hero2[0].name}
              img={hero2[0].images.md}
            />
          </div>
        </section> : null}
      </section>
    )
  }  
}

export const mapStateToProps = ({ heroes, combatant1, combatant2, toggleModal }) => ({
  heroes,
  combatant1,
  combatant2,
  toggleModal
})

export default connect(mapStateToProps)(BattleGround);