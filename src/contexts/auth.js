import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../service/auth';
import api from '../service/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RnAuth:user');
      const storageToken = await AsyncStorage.getItem('@RnAuth:token');
      console.log(storageUser);
      console.log(storageToken);
      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email, password) {
    //console.log(email);
    //console.log(password);
    // const response = await auth.signIn();

    api.defaults.headers = {'Content-Type': 'application/json'};
    const response = await api.post('/users/login', {
      email: email,
      password: password,
    });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await AsyncStorage.setItem(
      '@RnAuth:user',
      JSON.stringify(response.data.user),
    );
    await AsyncStorage.setItem('@RnAuth:token', response.data.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
