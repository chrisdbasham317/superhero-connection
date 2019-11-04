import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
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
    this.state = {
      modalState: true
    }
  }

  componentDidMount() {
    this.props.fetchHeroes();
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({ modalState: false });
  }

  render() {
    return (
      <div className='div--app'>
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
          contentLabel="App Welcome Page"
          className="WelcomeModal"
          overlayClassName="WelcomeOverlay"
        >
          <article className='article--welcome-modal'>
            <h1 className='h1--welcome-modal'>Welcome to SuperHero Battle!</h1>
            <p className='p--welocome-modal'>
              <span>SuperHero Battle</span> is a place where you can find out more information about some of your favorite superheroes and villians. More importantly, it's where you find out who could beat who in a head to head fight!
            </p>
            <button
              className='button--close-modal'
              onClick={(event) => this.handleClick(event)}
            >Enter to find out!</button>
          </article>
        </ReactModal>
        <header className='header--nav-bar'>
          <h1 className='h1--main-title'>SuperHero Battle</h1>
          <div className='div--nav-links'>
            <NavLink exact activeClassName='active' className='links' to='/'>Home</NavLink>
            <NavLink activeClassName='active' className='links' to='/battle'>Battle</NavLink>
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

App.propTypes = {
  fetchHeroes: PropTypes.func
}
