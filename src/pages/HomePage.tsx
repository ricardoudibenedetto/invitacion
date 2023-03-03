import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { CardComponent } from '../components/card/CardComponent'
import { ConfirmacionComponent } from '../components/confirmacion/ConfirmacionComponent';
import { ContadorComponent } from '../components/contador/ContadorComponent'
import { HeaderComponent } from '../components/header/HeaderComponent';
import { MapsComponent } from '../components/maps/MapsComponent';

export const HomePage = () => {
    const { usuario } = useContext(AuthContext);

    return (
        <div className='container'>
           <HeaderComponent />
            <h1 className='font-monserrat mt-none'>Mis 15 Maia</h1>

            <p>Te invito a festejar mi cumpleaños </p>
            <p className='my-1'>Sabado 1 abril, 2023</p>
            <h2>21:30hs</h2>
            <MapsComponent />
            <ContadorComponent />
            <ConfirmacionComponent />
        </div>
    )
}
