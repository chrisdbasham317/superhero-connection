import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './WinnerCircle.css'

export const WinnerCircle = ({winner, heroes}) => {
  const winnerInfo = heroes.filter(hero => hero.name === winner)[0]
  return (
    <section className='section--winner-circle'>
    {!winner && <h1>It seems those heroes are evenly matched</h1>}
      {winner &&
      <section>
        <h1 className='h1--winner-circle'>WinnerCircle</h1>
        <div className='div--winner-info'>
          <h2 className='h2--winner-name'>{winnerInfo.name}</h2>
          <img className='img--winner-img'src={ winnerInfo.images.md } alt='Winner' />
        </div>
      </section>}
    </section>
  )
}

export const mapStateToProps = ({winner, heroes}) => ({
  winner,
  heroes
})

export default connect(mapStateToProps)(WinnerCircle);

WinnerCircle.propTypes = {
  winner: PropTypes.string,
  heroes: PropTypes.array
}