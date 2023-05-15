import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase/config";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";


export const LoginContext = createContext()


export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: null,
        email: null,
        uid: null,
        logged: false
    })

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const userUid = userCredential.user.uid;
                const userData = collection(db, 'usersData');
                const docRef = doc(userData, userUid);
                return setDoc(docRef, {
                    name: `${values.name} ${values.lastName}`,
                    cart: [],
                    orders: []
                });
            })
            .catch((err) => console.log(err))
    }

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err))
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({
                name: null,
                email: null,
                logged: false,
                uid: null
            });
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "usersData", user.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUser({
                        name: userDoc.data().name,
                        email: user.email,
                        logged: true,
                        uid: user.uid
                    });
                }
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout,
            register
        }}>
            {children}
        </LoginContext.Provider>
    )
}