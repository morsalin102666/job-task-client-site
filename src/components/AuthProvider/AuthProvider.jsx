import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuth = new GoogleAuthProvider()
const githubAuth = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    // All state
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // =============== create a new user email or pass =================
    const createNewUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // =============== update email userName or photoUrl =================
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // =============== login email ==================
    const logInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // =============== logout email =================
    const logOutEmail = () => {
        return signOut(auth)
    }

    // =============== logout email =================
    const signinGoogel = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }


    // =============== logout email =================
    const signinGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuth)
    }


    // =============== set user =================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }

    }, [])


    // Auth info 
    const authInfo = {
        user,
        loading,
        createNewUser,
        updateUserProfile,
        logOutEmail,
        logInEmail,
        signinGoogel,
        signinGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;