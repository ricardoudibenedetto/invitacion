import { formatTitleCase } from '../../helpers/formatTitleCase'
import { UsuarioI } from '../../types/types'
import { InvitadoItem } from './InvitadoItem'
import './style.css'

interface Props {
    usuarios: UsuarioI[]
}
export const InvitadosComponent: React.FC<Props> = ({ usuarios }) => {
    return (
        <>
            <h2>Confirmados</h2>
            <ol>
                {
                    usuarios.filter((user: UsuarioI) => user.confirmo == true).map(({ nombre = '', apellido = '' }: UsuarioI) => (
                        <InvitadoItem key={`${nombre}${apellido}`} nombre={nombre} apellido={apellido} />
                    ))
                }
            </ol>
            <h2>No Confirmados</h2>
            <ol>
                {
                    usuarios.filter((user: UsuarioI) => user.confirmo == false).map(({ nombre = '', apellido = '' }: UsuarioI) => (
                        <InvitadoItem key={`${nombre}${apellido}`} nombre={nombre} apellido={apellido} />
                    ))
                }
            </ol>
        </>
    )
}
