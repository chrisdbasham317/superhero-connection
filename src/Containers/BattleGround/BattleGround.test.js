import React from 'react';
import { shallow } from 'enzyme';
import { BattleGround, mapStateToProps, mapDispatchToProps } from './BattleGround';
import { setCombatant1, setCombatant2, setWinner } from '../../Actions';


jest.mock('../../Actions');

describe('BattleGround', () => {
  let wrapper
  const mockHeroes = [
    {
      id: 4,
      name: 'superman',
      images: {
        md: 'medium image',
        lg: 'large image'
      }
    },
    {
      id: 5,
      name: 'superboy',
      images: {
        md: 'medium image',
        lg: 'large image'
      }
    }
  ]
  const mockSetCombatant1 = jest.fn();
  const mockSetCombatant2 = jest.fn();
  const mockSetWinner = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <BattleGround
        heroes={mockHeroes}
        combatant1={'superman'}
        combatant2={'superboy'}
        setCombatant1={mockSetCombatant1}
        setCombatant2={mockSetCombatant2}
        setWinner={mockSetWinner}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should set the default battle to state if state is empty strings', () => {
    wrapper.setState({ challenger1: '', challenger2: '' });
    wrapper.instance().setDefaultBattle()
    expect(wrapper.state().challenger1).toEqual('Aquaman');
    expect(wrapper.state().challenger2).toEqual('Aquaman');
  });

  it('should call handleChange when a change occurs', () => {
    const mockHandleChange = jest.fn();
    wrapper.instance().handleChange = mockHandleChange
    const mockEvent = {
      target: {
        name: 'challenger1',
        value: 'Bane'
      }
    }
    wrapper.find('select').first().simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'challenger1',
        value: 'Bane'
      }
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().challenger1).toEqual('Bane');
  });

  it('should call handleSubmit when submit btn is clicked', () => {
    const mockHandleSubmit = jest.fn();
    wrapper.instance().handleSubmit = mockHandleSubmit;
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.find('.button--start-fight').simulate('click', mockEvent);
    expect(mockHandleSubmit).toHaveBeenCalledWith(mockEvent);
  });

  describe('handleSubmit', () => {
    let mockEvent

    beforeEach(() => {
      mockEvent = {
        preventDefault: jest.fn()
      }
    });
    it('should call setDefaultBattle when handleSubmit is called', () => {
      const mockSetDefaultBattle = jest.fn();
      wrapper.instance().setDefaultBattle = mockSetDefaultBattle;
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockSetDefaultBattle).toHaveBeenCalled();
    });

    it('should call setCombatant1 when handleSubmit is called', () => {
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockSetCombatant1).toHaveBeenCalledWith('superman');
    });

    it('should call setCombatant2 when handleSubmit is called', () => {
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockSetCombatant2).toHaveBeenCalledWith('superboy');
    }); 
  });
})