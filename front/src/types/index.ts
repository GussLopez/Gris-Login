export type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type RegisterForm = Pick<User, 'name' | 'phone' | 'email'> & {
    password: string,
    password_confirmation: string
}