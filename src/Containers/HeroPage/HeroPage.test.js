import React from 'react';
import { shallow } from 'enzyme';
import { setCombatant1, setCombatant2 } from '../../Actions';
import { HeroPage, mapStateToProps, mapDispatchToProps } from './HeroPage';


describe('HeroPage', () => {
  let wrapper
  const mockHeroes = [
    {
      id: 4,
      name: 'superman',
      biography: {
        aliases: ['Man of Steel']
      },
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
      biography: {
        aliases: ['Conner']
      },
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
  let mockSetCombatant1 = jest.fn();
  let mockSetCombatant2 = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<HeroPage
      id={'4}'}
      heroes={mockHeroes}
      combatant1={'superman'}
      setCombatant1={mockSetCombatant1}
      setCombatant2={mockSetCombatant2}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setCombatant2 when combatant1 is defined', () => {
    wrapper.find('.link--add-hero').simulate('click');
    expect(mockSetCombatant2).toHaveBeenCalledWith('superman');
  })

  it('should return an object with the heroes array, and combatant1', () => {
    const mockState = {
      heroes: mockHeroes,
      combatant1: 'superman'      
    }
    const expected = {
      heroes: mockHeroes,
      combatant1: 'superman'
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });  
})