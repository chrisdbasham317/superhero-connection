import { isLoading, hasErrored, setHeroes } from '../Actions';
import { getDefaultHeroes } from '../helpers/helperFuncs';
import { fetchHeroes } from './fetchHeroes';

jest.mock('../helpers/helperFuncs');

describe('fetchHeroes', () => {
  let mockDispatch

  beforeEach(() => {
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [{ name: 'superman' }]
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
  });

  it('should call getDefaultHeroes helper function with correct arg', () => {
    const expected = { results: [{ name: 'superman' }] }
    const thunk = fetchHeroes();
    thunk(mockDispatch);

    expect(getDefaultHeroes).toHaveBeenCalledWith(expected)
  });

  it('should dispatch isLoading(false)', async () => {
    const thunk = fetchHeroes();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch setHeroes(heroes)', async () => {
    const thunk = fetchHeroes();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setHeroes());
  });

  it('should dispatch isLoading(false) if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    const thunk = fetchHeroes();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch hasErrored if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error'
    }));
    const thunk = fetchHeroes();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'));
  });
});