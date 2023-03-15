import { upDateIngreso } from "../../firebase"
import { UsuarioI } from "../../types/types"
import './style.css'
interface Props {
    usuarios: UsuarioI[],
    modificarIngreso: Function
}
export const ListaIngresoComponent: React.FC<Props> = ({ usuarios,modificarIngreso }) => {
    
    return (
        <div>
            <h1>Ingresos</h1>
            <ol>
                {usuarios.sort( (usA, usB)=>{ 
                   if(usA.ingreso) return 0
                   return -1
                 } ).map(({ nombre, apellido, ingreso }: UsuarioI) => (
                    <li key={`${nombre}${apellido}`} className={` ${ingreso? 'text-through':''} `} onClick={()=> {modificarIngreso(nombre, apellido, ingreso)} }>{nombre} {apellido} 
                     </li>
                ))}
            </ol>

        </div>
    )
}
