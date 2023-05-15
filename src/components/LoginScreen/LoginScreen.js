import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login } = useContext(LoginContext)

    const [values, setValues] = useState({
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

        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Inicia Sesión</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form__input"
                        placeholder='Tu email'
                    />

                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form__input"
                        placeholder='Contraseña'
                    />

                    <Link className="form__quest" to={"/register"}>¿Aun no tienes una cuenta?</Link>
                    <button className='form__btn' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen