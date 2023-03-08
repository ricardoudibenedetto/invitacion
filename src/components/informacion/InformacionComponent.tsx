import { FadeInComponent } from '../fadeIn/FadeInComponent'
import './style.css'
export const InformacionComponent = () => {
  return (
    <FadeInComponent>
      <div>
        <p>
          Queria invitarte a formar parte de <b>una noche especial.</b> <br />
          Te invito a celebrar <b>mis 15 años.</b>
        </p>
        <h1 className='mb-none text-center pr-2'>Sábado 1 de <br />
          Abril 2023</h1>

        <p className='font-240 mt-none text-center pr-2'><b>21:30hs</b></p>
      </div>
    </FadeInComponent>
  )
}
