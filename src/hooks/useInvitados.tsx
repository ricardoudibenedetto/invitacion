import { useEffect, useState } from 'react'
import { getUsers, upDateIngreso } from '../firebase'
import { UsuarioI } from '../types/types'

export const useInvitados = () => {
    const [usuarios, setUsuarios] = useState<UsuarioI[]>([])
    const [isLoader, setIsLoader] = useState(false)
    const [errorMensagge, setErrorMensagge] = useState<null | string>(null);
    const [hasChange, setHasChange] = useState(false)
    const obtenerUsuarios = () => {
        setIsLoader(true)
        getUsers()
            .then((users: UsuarioI[]) => {
                setUsuarios(users);
            })
            .catch(error => {
                setErrorMensagge("No pudimos obtener la lista de invitados, intente más tarde.")
            })
            .finally(() => setIsLoader(false));
    }

    const modificarIngreso = (nombre:string, apellido:string, ingreso:boolean) => {
        
        setIsLoader(true)
        upDateIngreso(`${nombre}${apellido}`, !ingreso)
        .then(()=>{
        })
        .catch(()=>{
            setErrorMensagge("No pudimos obtener la lista de invitados, intente más tarde.")
        })
        .finally(()=>{
            setHasChange(!hasChange)
            setIsLoader(false)
        }) 
    }

    useEffect(() => {
        obtenerUsuarios();
    }, [hasChange])

    return {
        modificarIngreso,
        usuarios,
        isLoader,
        errorMensagge
    }
}
