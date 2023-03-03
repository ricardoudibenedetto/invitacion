import React from 'react'
import { LoginFormComponent } from '../components/login/LoginFormComponent'

export const LoginPage = () => {
  return (
    <main className='container'>
      <h1>Mis 15 Maia</h1>
      <section>
        <LoginFormComponent />
      </section>
    </main>
  )
}
