import './Contacto.css';

const Contacto = () => {

    return (
        <main className='form-container'>
            <div className='formulario'>
                <h2>Contacta con tu vendedor</h2>
                <form>
                    <div className='form-div form-div-input'>
                        <label for="nombre">Nombre y apellido</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <div className='form-div form-div-input'>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className='form-div form-div-input'>
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" required />
                    </div>

                    <div className='form-div'>
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="10" cols="60"></textarea>
                    </div>

                    <input type="submit" value="Enviar"></input>
                </form>
            </div>

        </main>
    );
}

export default Contacto;