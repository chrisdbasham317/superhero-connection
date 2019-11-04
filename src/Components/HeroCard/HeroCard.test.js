import React from 'react';
import { shallow } from 'enzyme';
import HeroCard from './HeroCard';

describe('HeroCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HeroCard
      id={3}
      name={'Superman'}
      img={'thisIsAnImage'}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});