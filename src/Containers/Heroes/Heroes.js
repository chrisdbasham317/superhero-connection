import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDefaultHeroes } from '../../helpers/helperFuncs';

export const Heroes = ({ heroes }) => {
  const defaultHeroes = getDefaultHeroes(heroes.heroes);
  console.log(defaultHeroes);
  return (
    <h1>Heroes</h1>
  )
}

export const mapStateToProps = (heroes) => ({
  heroes
})

export default connect(mapStateToProps)(Heroes);