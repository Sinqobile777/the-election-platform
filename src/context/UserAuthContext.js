import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const userContext = createContext();
export const useAuth = () => useContext(userContext);

const UserAuthContext = ({ children }) => {
    const [error, setError] = useState("");
    const [currentuser, setCurrentUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return unsubscribe;
    }, []);

const UserLogin = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logout = () => {
    return signOut (auth);
}

    const Register = async (email, password, firstName, lastName, province) => {
        setError("");
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const userRef = doc(db, "user", result.user.uid);
            await setDoc(userRef, { firstName, lastName, email, province });
            alert("Welcome! New user created successfully.");
            navigate('./HomeRegistered');
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("Email already in use. Try another email");
            } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
                setError("Password must be at least 6 characters");
            } else {
                setError("An error occurred. Please try again later.");
            }
        } 
    };
    

    const value = {
        Register,
        error,
        currentuser,
        UserLogin,
        logout,
        db
    };

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default UserAuthContext;
