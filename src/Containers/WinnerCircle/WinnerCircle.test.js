import React from 'react';
import { shallow } from 'enzyme';
import { WinnerCircle, mapStateToProps } from './WinnerCircle';

describe('WinnerCircle', () => {
  let wrapper
  const mockHeroes = [
    {
      id: 4,
      name: 'Superman',
      images: {
        md: 'medium image',
        lg: 'large image'
      },
      powerstats: {
        strength: 100,
        intelligence: 100,
      }
    },
    {
      id: 5,
      name: 'superboy',
      images: {
        md: 'medium image',
        lg: 'large image'
      },
      powerstats: {
        strength: 100,
        intelligence: 85,
      }
    }
  ]
  beforeEach(() => {
    wrapper = shallow(<WinnerCircle
      winner={'Superman'}
      heroes={mockHeroes}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return an object with the heroes array, and the winner', () => {
    const expected = {
      heroes: mockHeroes,
      winner: 'Superman'
    };
    const mockState = {
      heroes: mockHeroes,
      winner: 'Superman'
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});