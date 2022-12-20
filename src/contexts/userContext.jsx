import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import masterApi from '../apis/masterApi';

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userFetchStatus, setUserFetchStatus] = useState('loading');

  const getUser = async () => {
    try {
      const { data } = await masterApi.get('/users/me');

      setUser(data.data.user);
      setUserFetchStatus('success');
    } catch (err) {
      console.log(err);

      setUserFetchStatus('error');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <userContext.Provider
      value={{ user, setUser, userFetchStatus, setUserFetchStatus }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
