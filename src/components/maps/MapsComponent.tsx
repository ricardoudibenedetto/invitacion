import { FadeInComponent } from '../'
import './style.css'
export const MapsComponent = () => {
  return (
    <FadeInComponent>
    <div className='d-flex flex-colum' >
       
        <h1 className='font-240 mt-0'>Salon Antares eventos.</h1>
        <p className='font-125'>Dinamarca 2326, Temperley</p>
      
      <iframe
        style={{ border: 'none', height: '300px', borderRadius: '16px', alignSelf: 'center' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.1049506110426!2d-58.37002388443592!3d-34.75294898042107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d35899bc449%3A0x8f298c49968b1a88!2sDinamarca%202326%2C%20Temperley%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677866671336!5m2!1ses-419!2sar"
        loading="lazy"
      ></iframe>
    </div>
    </FadeInComponent>
  )
}