import React from 'react';
import { shallow } from 'enzyme';
import { Heroes, mapStateToProps } from './Heroes';

describe('Heroes', () => {
  let wrapper
  const mockHeroes = [
    {
      id: 4,
      name: 'superman',
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
    wrapper = shallow(<Heroes
      heroes={mockHeroes}
      isLoading={false}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return an object with the heroes array, and isLoading', () => {
    const mockState = {
      heroes: mockHeroes,
      isLoading: false      
    }
    const expected = {
      heroes: mockHeroes,
      isLoading: false
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });  
})