import React from 'react';
import { connect } from 'react-redux';
import './WinnerCircle.css'

export const WinnerCircle = ({winner, heroes}) => {
  const winnerInfo = heroes.filter(hero => hero.name === winner)[0]
  console.log(winnerInfo)
  return (
    <section className='section--winner-circle'>
      <h1 className='h1--winner-circle'>WinnerCircle</h1>
      <div className='div--winner-info'>
        <h2 className='h2--winner-name'>{winnerInfo.name}</h2>
        <img className='img--winner-img'src={winnerInfo.images.md} />
      </div>
    </section>
  )
}

export const mapStateToProps = ({winner, heroes}) => ({
  winner,
  heroes
})

export default connect(mapStateToProps)(WinnerCircle);