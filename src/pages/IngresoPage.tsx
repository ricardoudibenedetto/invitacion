import { HeaderComponent, ListaIngresoComponent, LoaderComponent, ToHome } from "../components"
import { useInvitados } from "../hooks/useInvitados";

export const IngresoPage = () => {

    const { isLoader, usuarios, modificarIngreso } = useInvitados();

    return (
        <div className='container'>
            <HeaderComponent />
            {
                !isLoader ?
                    <>
                    <ListaIngresoComponent usuarios={usuarios} modificarIngreso={modificarIngreso} />
                    </> :
                    <div className='centerLoad'>
                        <LoaderComponent />
                    </div>
            }
            <ToHome />
        </div>
    )
}
