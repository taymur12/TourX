import React from 'react';
import { createContext } from 'react';
import FirebaseAuth from '../hooks/useFirebase';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

   const allContext = FirebaseAuth()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;