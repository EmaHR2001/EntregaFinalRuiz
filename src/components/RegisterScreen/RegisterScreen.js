import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Este campo es requerido.")
        .max(10, "Máximo 10 caracteres."),
    lastName: Yup.string()
        .required("Este campo es requerido.")
        .max(10, "Máximo 10 caracteres."),
    email: Yup.string()
        .email("El email es incorrecto.")
        .required("Este campo es obligatorio."),
    password: Yup.string()
        .required("Este campo es requerido.")
        .min(6, "Mínimo 6 caracteres.")
        .max(20, "Máximo 20 caracteres.")
});

const RegisterScreen = () => {
    const { register } = useContext(LoginContext);

    const handleFormSubmit = (values) => {
        register({ ...values });
    };

    return (
        <div className="login-container">
            <div className="login">
                <h2>Registrarme</h2>

                <Formik
                    validationSchema={schema}
                    initialValues={{
                        name: '',
                        lastName: '',
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
                                    name="name"
                                    value={values.name}
                                    type='text'
                                    className="form__input"
                                    placeholder='Primer nombre'
                                />
                                {errors.name && <p className='error-alert'>{errors.name}</p>}
                            </div>

                            <div className='input-container'>
                                <input
                                    onChange={handleChange}
                                    name="lastName"
                                    value={values.lastName}
                                    type='text'
                                    className="form__input"
                                    placeholder='Segundo nombre'
                                />
                                {errors.lastName && <p className='error-alert'>{errors.lastName}</p>}
                            </div>

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
                                    placeholder='Crear contraseña'
                                />
                                {errors.password && <p className='error-alert'>{errors.password}</p>}
                            </div>

                            <Link className='form__quest' to={"/login"}>¿Ya tienes una cuenta?</Link>
                            <button className='form__btn' type='submit'>Registrarme</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterScreen;