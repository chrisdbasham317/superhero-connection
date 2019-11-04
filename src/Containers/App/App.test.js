import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { fetchHeroes } from '../../Thunks/fetchHeroes';


jest.mock('../../Thunks/fetchHeroes');

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App
        fetchHeroes={jest.fn}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleClick is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleClick(mockEvent);
    expect(wrapper.state().modalState).toEqual(false);
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchHeroes', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchHeroes();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchHeroes(actionToDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
})