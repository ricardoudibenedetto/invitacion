import React, { useContext } from 'react'
import { AuthContext } from '../../auth';
import './style.css'
export const HeaderComponent = () => {
    const { logout, usuario } = useContext(AuthContext);
    const onLogout = () => {
        logout();

    }

    return (
        <header className='header'>
                <button className='btn-header' onClick={onLogout}>salir</button>
        </header>
    )
}
