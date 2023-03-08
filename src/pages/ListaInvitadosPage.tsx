import React, { useEffect, useState } from 'react'
import { ToHome } from '../components/buttons/ToHome';

import { HeaderComponent } from '../components/header/HeaderComponent';
import { InvitadosComponent } from '../components/invitados/InvitadosComponent';
import { LoaderComponent } from '../components/loader/LoaderComponent';
import { actualizarListaFS, getUsers } from '../firebase';
import { formatTitleCase } from '../helpers/formatTitleCase';
import { UsuarioI } from '../types/types'


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

    <div className='container '>
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
