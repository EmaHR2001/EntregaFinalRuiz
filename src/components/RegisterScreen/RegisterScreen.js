import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register({ ...values });
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Registrarme</h2>

                <form className='form' onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="name"
                        value={values.name}
                        type={'text'}
                        className="form__input"
                        placeholder='Primer nombre'
                    />

                    <input
                        onChange={handleChange}
                        name="lastName"
                        value={values.lastName}
                        type={'text'}
                        className="form__input"
                        placeholder='Segundo nombre'
                    />

                    <input
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form__input"
                        placeholder='Ingresar email'
                    />

                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form__input"
                        placeholder='Crear contraseña'
                    />

                    <Link className='form__quest' to={"/login"}>¿Ya tienes una cuenta?</Link>
                    <button className='form__btn' type='submit'>Registrarme</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen