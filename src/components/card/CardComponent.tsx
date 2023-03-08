import { ReactElement } from 'react'
import './style.css'
interface Props {
    children: ReactElement
}

export const CardComponent = ({children}: Props) => {
  return (
    <div className='card verdeBackground'>
        {children}
    </div>
  )
}
