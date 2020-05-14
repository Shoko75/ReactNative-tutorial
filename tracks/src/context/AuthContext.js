import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      // Set error message in the state
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMassage: '' };
    default:
      return state;
  }
};

// Login Automation
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signin');
  }
};

// Delete errorMassage when navigate to different page
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

// Signup function
const signup = dispatch => async ({ email, password }) => {
  try {
    // post for signing up
    const response = await trackerApi.post('/signup', { email, password });

    // store the toke on AsyncStorage
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    // navigate to TrackList
    navigate('TrackList');
  } catch (err) {
    // set as error
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
};

// Signin function
const signin = dispatch => async ({ email, password }) => {
  try {
    // Post signin
    const response = await trackerApi.post('/signin', { email, password });

    // Handle success by updating state
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    //navigate to TrackList
    navigate('TrackList');
  } catch (err) {
    // error
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
  }
};

// Signout function
const signout = dispatch => async () => {
  // remove token from storage
  await AsyncStorage.removeItem('token');

  // navigate to login
  dispatch({ type: 'signout' });
  navigate('Signin');
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);