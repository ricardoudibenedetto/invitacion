import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../auth';
import './style.css'
import { addUser, getUser } from '../../firebase';
import { LoaderComponent } from '../loader/LoaderComponent';
export const LoginFormComponent = () => {
  const { login } = useContext(AuthContext);
  const [isLoader, setIsLoader] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async () => {
    setIsLoader(true)
    if (userRef.current && passwordRef.current) {
      let usuario: string = userRef.current.value.trim().toLocaleLowerCase()
      let password: string = passwordRef.current.value.trim().toLocaleLowerCase()
      /*  addUser(usuario, password); */

      let idUsuario = `${usuario}${password}`.replaceAll(' ', '').toLowerCase();

      await getUser(idUsuario)
        .then((usuarioFS) => {
          if (usuarioFS == undefined) {
            setIsErrorLogin(true)
            setIsLoader(false)
            return
          }
          login(usuarioFS)
          setIsLoader(false)
        })
        .catch(
          error => {
            setIsErrorLogin(true)
            setIsLoader(false)
          }
        )
    }
  }
  
  return (
    <form >
      <div className='form'>
        <input type="text" name="user" autoComplete='off' ref={userRef} id="user" placeholder='Nombre' />
        <input type="text" name="password" autoComplete='off' ref={passwordRef} id="pasword" placeholder='Apellido' />
        {!isLoader ?
          <button className='btn-login' type='button' onClick={onLogin} >Ingresar</button> :
          <LoaderComponent />}
      </div>
      {
        isErrorLogin ? <p className='errorMensagge'>El nombre o el apellido que ingresaste no existe. Recorda que no debes ingresar tildes o caracteres especiales.</p> : <></> 
      }
    </form>
  )
}
