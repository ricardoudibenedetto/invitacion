import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../auth';
import './style.css'
import { getUsers, addUser, getUser } from '../../firebase';
import { LoaderComponent } from '../loader/LoaderComponent';
import { UsuarioI } from '../../types/types';
export const LoginFormComponent = () => {
  const { login } = useContext( AuthContext );
const [isLoader, setIsLoader] = useState(false)
/*   const usuarios = getUser().then( usuario => {

    let a = usuario
    console.log(a)
  }); */
/*   const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState(''); */

  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onLogin  = async() => {
    setIsLoader(true)
  /*   addUser(); */
  if(userRef.current && passwordRef.current){
    let usuario: string = userRef.current.value.trim()
    let password: string = passwordRef.current.value.trim()
    
    let idUsuario = `${usuario}${password}`.replaceAll(' ','').toLowerCase();

   await getUser(idUsuario)
    .then( (usuarioFS) => {
      if(usuarioFS == undefined){
        alert('el usuario que ingresaste no existe')
        setIsLoader(false)
        return
      }
      login(usuarioFS)
      setIsLoader(false)
    })
    .catch(
      error => {
        alert('el usuario que ingresaste no existe')
        setIsLoader(false)
      }
    )

    /* alert("asdasd") */
    /* 
    login( 'Ricardo Di Benedetto' ); */
  }
    
  }
  return (
    <form >
      <div className='form'>
        <input type="text" name="user" autoComplete='off' ref={userRef} id="user" placeholder='Nombre' />
        <input type="text" name="password" autoComplete='off' ref={passwordRef} id="pasword" placeholder='Apellido' />
        {!isLoader?
          <button className='btn-login' type='button' onClick={onLogin} >Ingresar</button>:
        <LoaderComponent />}
      </div>
    </form>
  )
}
