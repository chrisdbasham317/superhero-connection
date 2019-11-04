import React from 'react';
import { shallow } from 'enzyme';
import { BattleGround, mapStateToProps, mapDispatchToProps } from './BattleGround';
import { setCombatant1, setCombatant2, setWinner } from '../../Actions';


jest.mock('../../Actions');
jest.useFakeTimers();

describe('BattleGround', () => {
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

    it('should update state when handleSubmit is called', async () => {
      await wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state().modalState).toEqual(false);
    })

    it('should call determineWinner when handleSubmit is called', async () => {
      const mockDetermineWinner = jest.fn();
      wrapper.instance().determineWinner = mockDetermineWinner;
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockDetermineWinner).toHaveBeenCalled();
    });

    it('should call displayTimer when handleSubmit is called', async () => {
      const mockDisplayTimer = jest.fn();
      wrapper.instance().displayTimer = mockDisplayTimer;
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockDisplayTimer).toHaveBeenCalled();
    });
  });

  it('should update state when displayTimer is called', () => {
    wrapper.instance().displayTimer();
    expect(wrapper.state().timerComplete).toEqual(false);
    jest.advanceTimersByTime(5000);
    expect(wrapper.state().timerComplete).toEqual(true);
  });

  it('should call setWinner when determineWinner is called', () => {
    const mockSetWinner = jest.fn();
    wrapper.instance().setWinner = mockSetWinner;
    wrapper.instance().determineWinner();
    expect(mockSetWinner).toHaveBeenCalledWith(1, 0);
  })
})