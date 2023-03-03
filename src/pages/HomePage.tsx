import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { CardComponent } from '../components/card/CardComponent'
import { ConfirmacionComponent } from '../components/confirmacion/ConfirmacionComponent';
import { ContadorComponent } from '../components/contador/ContadorComponent'

export const HomePage = () => {
    const { logout, usuario } = useContext( AuthContext );

    console.log(usuario)
    const onLogout = () => {
        logout( );
      
    }
    return (
        <div className='container'>
            <h1 className='font-monserrat'>Mis 15 Maia</h1>

            <button onClick={onLogout}>salir</button>
            <h2>Te invito a festejar mi cumpleaños </h2>
            <h2 className='my-1'>Sabado 1 abril, 2023</h2>
            <h1>21:30hs</h1>
            <ConfirmacionComponent />
      {/*       <CardComponent>
                <>
                    <h3 className='verdeOscuro'>CBU: 123123123123</h3>
                    <h3 className='verdeOscuro'>Alias: hola.cama.ruta</h3>
                </>
            </CardComponent> */}
       
            <ContadorComponent />

        </div>
    )
}
