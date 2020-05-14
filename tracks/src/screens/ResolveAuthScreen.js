import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  // Cheack whether already signin or not
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;