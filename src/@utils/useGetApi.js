import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { API_CONFIG } from '../@constants/api_config';

const dataFetchReducer = (state, action) => {
//   console.log('1: state', state)
//   console.log('2: action', action)
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const config = API_CONFIG;

const useGetApi = (
  source,
  initialData,
  defaultFetch,
) => {

  const [shouldFetch, setShouldFetch] = useState(defaultFetch);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: shouldFetch,
    isError: false,
    data: initialData,
  })

  useEffect(() => {
    let cancel
    config.url = source;
    config.cancelToken = new axios.CancelToken(c => cancel = c);
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios.request(config);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      }
      catch (error) {
        if (axios.isCancel(error)) {
        //   console.log('3: CANCEL', error)
          return
        }
        dispatch({ type: 'FETCH_FAILURE'});
      }
      // console.log('1', shouldFetch, method, sourceURL)
      setShouldFetch(false);
    }
    // console.log('2', shouldFetch, method, sourceURL)
    if (shouldFetch) fetchData();
    return () => cancel()
  }, [shouldFetch, source]);

  return [state, setShouldFetch];
}

export default useGetApi