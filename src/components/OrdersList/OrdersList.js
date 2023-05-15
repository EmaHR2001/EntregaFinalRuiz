import { useContext, useState } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { LoginContext } from '../../context/LoginContext';
import { db } from '../../firebase/config';
import './OrdersList.scss';

const OrdersList = () => {
    const { user } = useContext(LoginContext);
    const [ordersData, setOrdersData] = useState([]);

    const fetchOrdersData = async () => {
        const userDocRef = doc(collection(db, "usersData"), user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const ordersIds = userDocSnapshot.get("orders");

        const ordersRef = collection(db, "orders");
        const ordersQuery = query(ordersRef, where("id", "in", ordersIds));
        const ordersSnapshot = await getDocs(ordersQuery);

        const ordersData = ordersSnapshot.docs.map((doc) => doc.data());
        setOrdersData(ordersData);
    }
    fetchOrdersData()

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Date(date).toLocaleDateString('es-ES', options);
    };

    const calculateDeliveryDate = (date) => {
        const result = new Date(date);
        result.setDate(result.getDate() + 7);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return result.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="orders-container">
            <h2>Tus pedidos</h2>
            <div className='orders-list'>
                {ordersData.map((order) => (
                    <div key={order.id} className="order">
                        <div className='code'>
                            <h3>Código: {order.id}</h3>
                            <p>Fecha: {formatDate(order.fyh.toDate())}</p>
                        </div>
                        <div className='lista'>
                            {
                                order.items.map((item) => (
                                    <div className="order-item" key={item.id}>
                                        <img alt={item.title} src={item.image} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='total'>
                            <p>Total: ${order.total}</p>
                            <p>Fecha de entrega: {calculateDeliveryDate(order.fyh.toDate())}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default OrdersList;