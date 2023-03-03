

export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}

export interface AuthI {
    logged: boolean,
    user: any
}

export interface UsuarioI {
    apellido?: string,
    confirmo?: boolean,
    esAdmin?: boolean,
    ingreso?: boolean,
    nombre?: string,
    viajaEnBuss?: boolean
}
