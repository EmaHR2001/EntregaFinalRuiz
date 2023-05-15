import { useState } from "react"
import "./PreguntasFrecuentes.scss";

const PreguntasFrecuentes = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const questions = [
        {
            question: '¿Cuáles son las opciones de pago que aceptan?',
            answer: 'Aceptamos una amplia variedad de opciones de pago, incluyendo tarjetas de crédito y débito, PayPal, transferencias bancarias y efectivo a través de puntos de pago en tiendas físicas. También puede optar por guardar su información de pago para futuras compras en nuestra tienda en línea. Nos aseguramos de ofrecer opciones de pago seguras y confiables para garantizar que su información personal esté protegida.'
        },
        {
            question: '¿Cuál es el plazo de entrega de los libros?',
            answer: 'El plazo de entrega puede variar dependiendo de la ubicación de envío y el método de envío seleccionado durante el proceso de compra. Normalmente, nuestro plazo de entrega oscila entre 3 y 7 días hábiles para envíos estándar, pero también ofrecemos opciones de envío más rápidas para aquellos que necesitan sus libros de manera urgente. Si su libro está disponible en formato de ebook, puede descargarlo inmediatamente después de la compra.'
        },
        {
            question: '¿Puedo cancelar mi pedido después de haberlo hecho?',
            answer: 'Siempre y cuando su pedido aún no haya sido enviado, puede cancelarlo antes de que se procese. Si ya se envió su pedido, tendrá que devolverlo para recibir un reembolso completo. Si necesita cancelar su pedido, comuníquese con nuestro servicio de atención al cliente lo antes posible para que podamos asistirlo en el proceso de cancelación.'
        },
        {
            question: '¿Puedo devolver un libro si no estoy satisfecho con mi compra?',
            answer: 'Sí, ofrecemos una política de devolución de 30 días para aquellos que no estén satisfechos con su compra. Si no está satisfecho con su libro físico, simplemente póngase en contacto con nuestro servicio de atención al cliente para iniciar el proceso de devolución. Le reembolsaremos el precio de compra completo, sin hacer preguntas. Tenga en cuenta que los libros electrónicos no se pueden devolver debido a su naturaleza digital.'
        },
        {
            question: '¿Cómo puedo descargar un ebook después de la compra?',
            answer: 'Después de realizar la compra del ebook, recibirá un correo electrónico con un enlace de descarga para su libro electrónico. Simplemente haga clic en el enlace de descarga en el correo electrónico para acceder al archivo del ebook. Además, si creó una cuenta en nuestro sitio web durante el proceso de compra, también puede acceder a sus descargas desde su área de cuenta en nuestro sitio web.'
        },
        {
            question: '¿Tienen un programa de afiliados para promocionar sus libros en mi sitio web o blog?',
            answer: 'Sí, ofrecemos un programa de afiliados para aquellos que desean promocionar nuestros libros en su sitio web o blog. Con nuestro programa de afiliados, puede ganar comisiones por cada venta que se genere a través de su enlace de afiliado. Para unirse a nuestro programa de afiliados, visite nuestra sección de afiliados en nuestro sitio web y complete el formulario de solicitud. Después de revisar su solicitud, le proporcionaremos un enlace de afiliado único que puede utilizar para promocionar nuestros libros en su sitio web o blog.'
        }
    ];

    const handleQuestionClick = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(index);
        }
    };

    return (
        <main className='quests-container'>
            <section className="faq-section">
                <h2>Preguntas Frecuentes</h2>
                {questions.map((q, index) => (
                    <div
                        key={index}
                        className={`faq-container ${selectedQuestion === index ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(index)}
                    >
                        <h3 className="faq-question">{q.question}</h3>
                        {selectedQuestion === index && (
                            <div className="faq-answer">{q.answer}</div>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}

export default PreguntasFrecuentes;