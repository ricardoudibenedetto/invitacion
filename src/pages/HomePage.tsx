import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { CardComponent } from '../components/card/CardComponent'
import { ConfirmacionComponent } from '../components/confirmacion/ConfirmacionComponent';
import { ContadorComponent } from '../components/contador/ContadorComponent'
import { HeaderComponent } from '../components/header/HeaderComponent';
import { InformacionComponent } from '../components/informacion/InformacionComponent';
import { MapsComponent } from '../components/maps/MapsComponent';

export const HomePage = () => {
    const { usuario } = useContext(AuthContext);

    return (
        <div className='container'>
           <HeaderComponent />
            <h1 className='font-monserrat mt-none px-3 font-size-300'>Maia</h1>
{/* 
            <p>Te invito a festejar mi cumpleaños </p> */}
            {/* <p className='my-1'>Sabado 1 abril, 2023</p> */}
            <InformacionComponent />
            <MapsComponent />
            <h1 className='selfStart'>Dressing code: <br />
            Elegante</h1>
            <ContadorComponent />
            <ConfirmacionComponent />
        </div>
    )
}
