import React, {createContext, useEffect} from 'react';
import {UserInterface} from './types/atoms';
import Storage from './utils/storage';

import LoggedInStack from './navigation/LoggedInStack.tsx';
import NoUserStack from './navigation/NoUserStack.tsx';



export interface contextInterface {
  user?: UserInterface;
  setUser: (obj: UserInterface | null) => void;
  users: UserInterface[];
  setUsers: (obj: UserInterface[]) => void;
  registerUser?: UserInterface;
  setRegisterUser: (obj: UserInterface) => void;
}

const AppContext = createContext<contextInterface>({
  user: undefined,
  setUser: (obj: UserInterface | null) => obj,
  users: [],
  setUsers: (objs: UserInterface[]) => objs,
  registerUser: undefined,
  setRegisterUser: (obj: UserInterface) => obj,
});

const AppProvider = () => {
  const [user, setUser] = React.useState<UserInterface>();
  const [registerUser, setRegisterUser] = React.useState<UserInterface>();
  const [allUser, setAllUser] = React.useState<UserInterface[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await Storage.getItem('users');
        const activeUser = await Storage.getItem('user');
        Boolean(users) && setAllUser(JSON.parse(users));
        Boolean(activeUser) && setUser(JSON.parse(activeUser));
      } catch (error) {
        console.error('Hata:', error);
      } finally {
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const setUsers = async () => {
      try {
        const updatedAllUser = allUser.map(existingUser => {
          if (existingUser.idn === user?.idn) {
            return {...user};
          }
          return existingUser;
        });
        await Storage.setItem('users', JSON.stringify(updatedAllUser));
        await Storage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    setUsers();
  }, [allUser, user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        users: allUser,
        setUsers: setAllUser,
        registerUser: registerUser,
        setRegisterUser: setRegisterUser,
      }}>
{/*       <AnimationScreen /> */}
      
          {user ? (
          <LoggedInStack/>
        ) : (
          <NoUserStack/>
        )}
    </AppContext.Provider>
  );
}


export {AppProvider, AppContext};

export default AppProvider;
