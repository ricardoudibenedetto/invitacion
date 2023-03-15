import React, { useEffect, useState } from 'react'
import { ToHome } from '../components/buttons/ToHome';

import { getUsers } from '../firebase';
import { UsuarioI } from '../types/types'
import { 
  HeaderComponent, 
  InvitadosComponent, 
  LoaderComponent 
} from '../components';
import { useInvitados } from '../hooks/useInvitados';


export const ListaInvitadosPage = () => {

  const {isLoader, usuarios} = useInvitados();
  
  return (
    <div className='container'>
      <HeaderComponent />
      {
        !isLoader ?
          <>
            <InvitadosComponent usuarios={usuarios} />
          </> :
          <div className='centerLoad'>
            <LoaderComponent />
          </div>
      }
      <ToHome />
    </div>
  )
}
