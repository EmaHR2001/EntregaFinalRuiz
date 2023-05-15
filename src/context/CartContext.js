import { useState, createContext, useEffect, useContext } from "react";
import { db } from '../firebase/config'
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { LoginContext } from "./LoginContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { user } = useContext(LoginContext)
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (user.logged) {
            const userRef = doc(db, "usersData", user.uid);
            getDoc(userRef)
                .then((userDoc) => {
                    const productos = userDoc.data().cart;
                    setCart(productos)
                })
                .catch((error) => {
                    console.log("Error al obtener el documento:", error);
                });
        } else {
            setCart([]);
        }
    }, [user.logged, user.uid]);

    const updateCart = async (newCart) => {
        const userRef = doc(db, 'usersData', user.uid);
        const cartObj = { cart: newCart };
        try {
            await setDoc(userRef, cartObj, { merge: true });
            console.log("Campo 'cart' actualizado exitosamente");
        } catch (error) {
            console.error("Error al actualizar campo 'cart': ", error);
        }
    }

    const agregarAlCarrito = async (item) => {
        const newCart = [...cart, item];
        setCart(newCart)
        updateCart(newCart);
    }

    const removerItem = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
        updateCart(newCart);
    };


    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const vaciarCarrito = async () => {
        const newCart = [];
        setCart(newCart);
        updateCart(newCart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            totalCantidad,
            isInCart,
            vaciarCarrito,
            removerItem,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}