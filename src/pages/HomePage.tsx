import React from 'react'
import { CardComponent } from '../components/card/CardComponent'
import { ContadorComponent } from '../components/contador/ContadorComponent'

export const HomePage = () => {
    return (
        <div className='container'>
            <h1 className='font-monserrat'>Mis 15 Maia</h1>

            <h2>Te invito a festejar mi cumpleaños </h2>
            <h2 className='my-1'>Sabado 1 abril, 2023</h2>
            <h1>21:30hs</h1>
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
