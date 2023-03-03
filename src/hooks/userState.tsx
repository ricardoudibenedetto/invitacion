import React, { useState } from 'react'
import { UsuarioI } from '../types/types'

export const userState = () => {
    
    const [usuario, setUsuario] = useState<UsuarioI>()
  
    const modificarAsistencia = (acepto: boolean) => {
        debugger
        let usua = usuario 
        setUsuario( {...usuario, confirmo: acepto})
    }
    return {
        modificarAsistencia,
        usuario,
        setUsuario

    }
}
