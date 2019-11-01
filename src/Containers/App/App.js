import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink } from 'react-router-dom';
import { fetchHeroes } from '../../Thunks/fetchHeroes';
import Heroes from '../Heroes/Heroes';
import BattleGround from '../BattleGround/BattleGround';
import HeroPage from '../HeroPage/HeroPage';
import WinnerCircle from '../WinnerCircle/WinnerCircle';
import './App.css';

export class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    return (
      <div className='div--app'>
        <header className='header--nav-bar'>
          <h1 className='h1--main-title'>SuperHero Battle</h1>
          <div className='div--nav-links'>
            <NavLink className='links' to='/'>Home</NavLink>
            <NavLink className='links' to='/battle'>Battle</NavLink>
          </div>
        </header>
        <main>
          <Route exact path='/'>
            <Heroes />
          </Route>
          <Route path='/battle'>
            <BattleGround /> 
          </Route>
          <Route path='/hero/:id' render={({ match }) => (
            <HeroPage
              id={match.params.id}
            />
          )}/>
          <Route path='/winner'>
            <WinnerCircle />
          </Route>
        </main>
      </div>
    )
}
}

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchHeroes }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
