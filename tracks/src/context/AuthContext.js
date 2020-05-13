import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      // Set error message in the state
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

// Signup function
const signup = dispatch => async ({ email, password }) => {
  try {
    // post for signing up
    const response = await trackerApi.post('/signup', { email, password });

    // store the toke on AsyncStorage
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });

    // navigate to TrackList
    navigate('TrackList');
  } catch (err) {
    // set as error
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
};

// Signin function
const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

// Signout function
const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);