import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { CardComponent } from '../components/card/CardComponent'
import { ConfirmacionComponent } from '../components/confirmacion/ConfirmacionComponent';
import { ContadorComponent } from '../components/contador/ContadorComponent'
import { DressingComponent } from '../components/dressing/DressingComponent';
import { FadeInComponent } from '../components/fadeIn/FadeInComponent';
import { HeaderComponent } from '../components/header/HeaderComponent';
import { InformacionComponent } from '../components/informacion/InformacionComponent';
import { MapsComponent } from '../components/maps/MapsComponent';
import { RegaloComponent } from '../components/regalo/RegaloComponent';

export const HomePage = () => {
    const { usuario } = useContext(AuthContext);


    return (
        <div className='container d-flex flex-colum gap-20 justify-center'>
            <HeaderComponent />
            <h1 className='font-monserrat mt-none px-3 font-size-300'>Maia</h1>


            <InformacionComponent />
            <MapsComponent />
            <DressingComponent />
            <RegaloComponent />
            <ContadorComponent />
            <ConfirmacionComponent />
        </div>
    )
}
