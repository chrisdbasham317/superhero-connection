import { isLoading, hasErrored, setHeroes } from '../Actions';
import { getDefaultHeroes } from '../helpers/helperFuncs';
import { fetchHeroes } from './fetchHeroes';

describe('fetchHeroes', () => {
  let mockDispatch
  let getDefaultHeroes

  beforeEach(() => {
    mockDispatch = jest.fn();
    getDefaultHeroes = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [{name: 'superman'}]
      })
    }))
  })

  it('should call dispatch with isLoading(true', () => {
    const thunk = fetchHeroes();
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch', () => {
    const thunk = fetchHeroes();
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalled();
  })
})