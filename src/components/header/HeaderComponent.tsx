import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import './style.css'
export const HeaderComponent = () => {
    const { logout, usuario } = useContext(AuthContext);
    const onLogout = () => {
        logout();

    }

    const navigate = useNavigate()

    const navigateTo = (path: string) => {
        navigate(path, { replace: true })
    }

    return (
        <header className={`header ${usuario.esAdmin ? 'space-between' : 'align-end'}`}>
            {
                usuario.esAdmin ?
                    <nav className='d-flex gap-20'>
                        <a onClick={() => navigateTo('/listaInvitados')}>Invitados</a>
                        <a onClick={() => navigateTo('/cronograma')}>Cronograma</a>
                        <a onClick={() => navigateTo('/micro')}>Micro</a>
                    </nav> :
                    <></>
            }
            <button className='btn-header' onClick={onLogout}>Salir</button>
        </header>
    )
}
