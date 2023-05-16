import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .email("El email es incorrecto.")
        .required("Este campo es obligatorio."),
    password: Yup.string()
        .required("Este campo es requerido.")
        .min(6, "Mínimo 6 caracteres.")
        .max(20, "Máximo 20 caracteres.")
});

const LoginScreen = () => {
    const { login } = useContext(LoginContext)

    const handleFormSubmit = (values) => {
        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Inicia Sesión</h2>

                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleFormSubmit}
                >
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <form className="form" onSubmit={handleSubmit}>

                            <div className='input-container'>
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    value={values.email}
                                    type='email'
                                    className="form__input"
                                    placeholder='Ingresar email'
                                />
                                {errors.email && <p className='error-alert'>{errors.email}</p>}
                            </div>

                            <div className='input-container'>
                                <input
                                    onChange={handleChange}
                                    name="password"
                                    value={values.password}
                                    type='password'
                                    className="form__input"
                                    placeholder='Ingresa contraseña'
                                />
                                {errors.password && <p className='error-alert'>{errors.password}</p>}
                            </div>

                            <Link className='form__quest' to={"/register"}>¿Aun no tienes una cuenta?</Link>
                            <button className='form__btn' type='submit'>Ingresar</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginScreen