import { useContext, useState } from 'react';
import { AuthContext } from '../../auth';
import { upDateAsist } from '../../firebase';
import { userState } from '../../hooks/userState';
import { FadeInComponent } from '../fadeIn/FadeInComponent';
import './style.css'


export const ConfirmacionComponent = () => {
    /* const {usuario, setUsuario, modificarAsistencia} = userState() */
    const { usuario, setUsuario } = useContext(AuthContext)

    const [formState, setFormState] = useState({
        accepted: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        /*  modificarAsistencia(value == 'true'? true : false) */
        /*   debugger */
        setUsuario({ ...usuario, confirmo: value == 'true' ? true : false })
        upDateAsist(`${usuario.nombre}${usuario.apellido}`, value == 'true' ? true : false)
        console.log(usuario)
        setFormState({
            ...formState,
            [name]: value,
        });

    };

    return (
        <FadeInComponent>
            <form className='w-100'>
                <div className='radio-button-group gap-20 d-flex justify-center '>
                    <label className={`radio-button ${usuario.confirmo ? 'backgroundVerdeOscuro' : ''}`}>
                        <input
                            type="radio"
                            name="accepted"
                            value="true"
                            checked={usuario.confirmo}
                            onChange={handleInputChange}
                        />
                        Asistir
                    </label>
                    <label className={`radio-button ${!usuario.confirmo ? 'backgroundVerdeOscuro' : ''}`}>
                        <input
                            type="radio"
                            name="accepted"
                            value="false"
                            checked={!usuario.confirmo}
                            onChange={handleInputChange}
                        />
                        No asistir
                    </label>
                </div>
            </form>
        </FadeInComponent>
    )
}

