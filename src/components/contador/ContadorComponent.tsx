import React, { useEffect, useState } from 'react'
import './style.css'
const targetDate = '04-01-2023'
export const ContadorComponent = () => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [targetDate]);

    const { days, hours, minutes, seconds } = timeRemaining;

    return (
        <>
            <h2 >Faltan</h2>

            <div className='d-flex justify-center'>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{days.toString().split('')[0]}</span>
                        <span className='numeroContador verdeBackground'>{days.toString().split('')[1] ?? '0'}</span>
                    </div>
                    <p className='text-center'>
                        Días
                    </p>
                </div>
                <span className='separator'>:</span>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{hours.toString().split('')[0]}</span>

                        <span className='numeroContador verdeBackground'>{hours.toString().split('')[1] ?? '0'} </span>
                    </div>
                    <p className='text-center'>
                        Horas
                    </p>
                </div>
                <span className='separator'>:</span>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{minutes.toString().split('')[0]}</span>
                        <span className='numeroContador verdeBackground'>{minutes.toString().split('')[1] ?? '0'}</span>
                    </div>
                    <p className='text-center'>
                        Minutos
                    </p>
                </div>

            </div>
            {/*   <p>
                {days} dìas {hours} Horas {minutes} Minutos {seconds} Segundos
            </p> */}

        </>

    );
}

function calculateTimeRemaining(targetDate: any) {
    let distance = new Date(2023, 3, 1, 21, 30).getTime() - new Date().getTime();



    let milliseconds = distance % 1000;
    distance = (distance - (milliseconds)) / 1000;

    let seconds = distance % 60

    distance = (distance - seconds) / 60;

    let minutes = distance % 60
    distance = (distance - minutes) / 60;

    let hours = distance % 24
    let days = (distance - hours) / 24;

    /*  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000); */
    return { days, hours, minutes, seconds };


}

