import React, { useEffect, useState } from 'react'
import { ToHome } from '../components/buttons/ToHome';

import { getUsers } from '../firebase';
import { UsuarioI } from '../types/types'
import { 
  HeaderComponent, 
  InvitadosComponent, 
  LoaderComponent 
} from '../components';


export const ListaInvitadosPage = () => {
  const [usuarios, setUsuarios] = useState<UsuarioI[]>([])
  const [isLoader, setIsLoader] = useState(false)

  const obtenerUsuarios = () => {
    setIsLoader(true)
    getUsers().then((users: UsuarioI[]) => {
      console.log(users)
      setUsuarios(users);
      setIsLoader(false)
    })
  }
  
  useEffect(() => {
    obtenerUsuarios();
  }, [])

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
