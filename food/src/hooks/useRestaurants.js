import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Call api
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'vancouver'
        }
      });
      setErrorMessage('');
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Get the initial data
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, restaurants, errorMessage];
};