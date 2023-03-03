import { ReactElement, useReducer, useState } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types, UsuarioI } from '../types/types';

// const initialState = {
//     logged: false,
// }



interface Props {
  children: ReactElement
}
export const AuthProvider: React.FC<Props> = ({ children }) => {
  
  const [usuario, setUsuario] = useState<UsuarioI>()

  const init = () => {
    setUsuario(JSON.parse(localStorage.getItem('user') || '{}'))
    const user = JSON.parse( localStorage.getItem('user') || '{}');
    console.log(usuario)
    return {
      logged: usuario?.nombre ||( !!user && user.nombre),
      user: usuario,
    }
  }
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (user: UsuarioI) => {
    setUsuario(user)
    localStorage.setItem('user', JSON.stringify( user ) );
    
    const action = { type: types.login, payload: user }
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUsuario(undefined)
    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState,

      // Methods
      login,
      logout,
      usuario,
      setUsuario
    }}>
      {children}
    </AuthContext.Provider>
  );
}
