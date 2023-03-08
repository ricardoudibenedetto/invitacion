import { useContext } from 'react'
import { AuthContext } from '../auth';
import { 
    ConfirmacionComponent, 
    ContadorComponent, 
    DressingComponent, 
    HeaderComponent, 
    InformacionComponent, 
    MapsComponent, 
    RegaloComponent 
} from '../components'


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
