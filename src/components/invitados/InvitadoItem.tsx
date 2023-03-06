import React from 'react'
import { formatTitleCase } from '../../helpers/formatTitleCase'
interface Props {
    nombre: string,
    apellido: string
}
export const InvitadoItem: React.FC<Props> = ({ nombre, apellido }) => {
    return (
        <li>
            {formatTitleCase(nombre)} {formatTitleCase(apellido)}
        </li>
    )
}
