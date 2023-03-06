import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
export const ToHome = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/home', { replace: true })
    }
    return (
        <button className='btn-toHome verdeBackground' onClick={toHome}>{'↩'}</button>
    )
}
