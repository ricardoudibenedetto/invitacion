import { useEffect, useState } from 'react'
import { FadeInComponent } from '../fadeIn/FadeInComponent';
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
        <FadeInComponent>
            <div className='d-flex justify-center w-100'>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{days.toString().split('')[0]}</span>
                        <span className='numeroContador verdeBackground'>{days.toString().split('')[1] ?? '0'}</span>
                    </div>
                    <p className='text-center font-size-1'>
                        Días
                    </p>
                </div>
                <span className='separator'>:</span>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{hours.toString().split('')[0]}</span>

                        <span className='numeroContador verdeBackground'>{hours.toString().split('')[1] ?? '0'} </span>
                    </div>
                    <p className='text-center font-size-1'>
                        Horas
                    </p>
                </div>
                <span className='separator'>:</span>
                <div>
                    <div className='d-flex align-center'>
                        <span className='numeroContador verdeBackground'>{minutes.toString().split('')[0]}</span>
                        <span className='numeroContador verdeBackground'>{minutes.toString().split('')[1] ?? '0'}</span>
                    </div>
                    <p className='text-center font-size-1'>
                        Minutos
                    </p>
                </div>
            </div>
        </FadeInComponent>
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
    return { days, hours, minutes, seconds };


}

