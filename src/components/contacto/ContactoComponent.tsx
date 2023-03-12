import { FadeInComponent } from '../fadeIn/FadeInComponent'
import './style.css'
export const ContactoComponent = () => {
    return (
        <FadeInComponent >
            <section>
                <p className='text-center' >Para no perdernos de nada etiquetame en todo lo que subas esa noche.
                <br /><br />
                    <div className='centerElements'>
                        <div className='borde-verde'>
                            <div className='punto-verde'></div>
                            <div className='centro-verde'></div>
                        </div> <a target={'_blank'} href="https://www.instagram.com/maiiposso12_/"> <b className='verdeOscuro font-size-150'>MaiaPosso.</b> </a>
                    </div>
                </p>
            </section>
        </FadeInComponent>
    )
}
