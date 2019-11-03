import React from 'react';
import { connect } from 'react-redux';


export const WinnerCircle = ({winner, heroes}) => {
  const winnerInfo = heroes.filter(hero => hero.name === winner)[0]
  console.log(winnerInfo)
  return (
    <section>
      <h1>WinnerCircle</h1>
      <h2>{winnerInfo.name}</h2>
      <img src={winnerInfo.images.md}/>
    </section>
  )
}

export const mapStateToProps = ({winner, heroes}) => ({
  winner,
  heroes
})

export default connect(mapStateToProps)(WinnerCircle);