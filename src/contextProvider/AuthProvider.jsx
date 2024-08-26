/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import userAxiosPublic from "../hooks/userAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const axiosPublic = userAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const ProfileUpdate = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser) {
                //get token 
                // console.log(currentUser);
                const userInfo = {email : currentUser.email}
                axiosPublic.post("/jwt", userInfo)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }else{
                //remove token 
                localStorage.removeItem('access-token')
                setLoading(false)
            }
           

        })
        return () => {
            unSubscribe()
        }
        

    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        signIn,
        signInGoogle,
        createUser,
        logout,
        ProfileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider