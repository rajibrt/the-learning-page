import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = (email) => {
        return sendEmailVerification(auth.currentUser);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser)
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        verifyEmail,
        updateUserProfile,
        signIn,
        providerLogin,
        logOut,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;