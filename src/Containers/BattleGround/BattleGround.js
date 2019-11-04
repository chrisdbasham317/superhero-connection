import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import { setCombatant1, setCombatant2, setWinner } from '../../Actions';
import fight_icon from '../../images/fight-icon.gif'; 
import './BattleGround.css';
import { bindActionCreators } from 'redux';

export class BattleGround extends Component {
  constructor(combatant1, combatant2) {
    super(combatant1, combatant2);
    this.state = {
      challenger1: this.props.combatant1,
      challenger2: this.props.combatant2,
      modalState: true,
      timerComplete: true
    }
  }

  setDefaultBattle = () => {
    if (this.state.challenger1 === '') {
      this.setState({ challenger1: 'Aquaman' })
      if (this.state.challenger2 === '') {
        this.setState({challenger2 : 'Aquaman'})
      }
    } else if (this.state.challenger2 === '') {
      this.setState({ challenger2: 'Aquaman' })
      if (this.state.challenger2 === '') {
        this.setState({challenger2 : 'Aquaman'})
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setDefaultBattle()
    this.props.setCombatant1(this.state.challenger1);
    this.props.setCombatant2(this.state.challenger2);
    this.setState({ modalState: false });
    this.determineWinner()
    this.displayTimer()
  }

  displayTimer = () => {
    this.setState({timerComplete: false})
    setTimeout(() => { this.setState({ timerComplete: true }) }, 5000);
  }

  determineWinner = () => {
    const hero1Stats = this.props.heroes.filter(hero => hero.name === this.props.combatant1)[0].powerstats;
    const hero2Stats = this.props.heroes.filter(hero => hero.name === this.props.combatant2)[0].powerstats;
    const attributes = Object.keys(hero1Stats);
    let hero1Counter = 0;
    let hero2Counter = 0;
    attributes.map(attr => {
      if (hero1Stats[attr] > hero2Stats[attr]) {
        return hero1Counter++
      } else if (hero1Stats[attr] < hero2Stats[attr]) {
        return hero2Counter++
      }
    });
    return this.setWinner(hero1Counter, hero2Counter);
  }
  
  setWinner = (hero1Counter, hero2Counter) => {
    if (hero1Counter > hero2Counter) {
      return this.props.setWinner(this.state.challenger1)
    } else if (hero1Counter < hero2Counter) {
      return this.props.setWinner(this.state.challenger2)
    } else {
      return this.props.setWinner(null)
    }
  }

  render() {
    const hero1 = this.props.heroes.filter(hero => hero.name === this.props.combatant1);
    const hero2 = this.props.heroes.filter(hero => hero.name === this.props.combatant2);
    const options = this.props.heroes.map(hero => <option
      key={hero.id}
      value={`${hero.name}`}
    >{hero.name}</option>)
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
              <h1 className='h1--hero-form'>Select Your Heroes</h1>
              <label htmlFor='challenger1'>Hero 1:</label>
              <select
                defaultValue={this.state.challenger1}
                name='challenger1'
                onChange={(event) => this.handleChange(event)}
              >{options}</select>
              <label htmlFor='challenger2'>Hero 2:</label>
              <select
                defaultValue={this.state.challenger2}
                name='challenger2'
                onChange={(event) => this.handleChange(event)}
              >{options}</select>
              <button
                className='button--start-fight'
                onClick={(event) => this.handleSubmit(event)}
              >Fight!</button>
            </form>
          </ReactModal>
        </section>
        {!this.state.modalState && <section className='section--heroes-selected'>
          <div className='div--hero-1'>
            <HeroCard
              key={hero1[0].id}
              id={hero1[0].id}
              name={hero1[0].name}
              img={hero1[0].images.md}
            />
          </div>
          {!this.state.timerComplete && <img className='img--fight-icon'src={fight_icon} alt='determining winner gif'/>}
          {this.state.timerComplete && <button className='button--winner'><Link to='/winner' className='link--winner'>See Results!</Link></button>}
          <div className='div--hero-2'>
            <HeroCard
              key={hero2[0].id}
              id={hero2[0].id}
              name={hero2[0].name}
              img={hero2[0].images.md}
            />
          </div>
        </section>}
      </section>
    )
  }  
}

export const mapStateToProps = ({ heroes, combatant1, combatant2 }) => ({
  heroes,
  combatant1,
  combatant2,
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setCombatant1,
    setCombatant2,
    setWinner
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BattleGround);