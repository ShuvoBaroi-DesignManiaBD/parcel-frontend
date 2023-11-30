/* eslint-disable react/prop-types */
import { getAuth, updateProfile, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Configs/Firebase.config";
import Swal from "sweetalert2";
import toast from 'react-hot-toast';
import { getRole, saveUser } from "../APIs/Auth";



export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
            console.log(user);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const createUserWithEmail = async (userData) => {
        const email = userData.email;
        const password = userData.password;
        const name = userData.name;
        const photo = userData.photo;
        await createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                setUser(user?.user);
                console.log(user);
                updateUserProfile(name, photo)
                .then(toast.success("Your account created successfully"))
                .catch(err => console.error(err));
                // return user
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: error,
                })
            });
    }

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                setUser(user?.user);
                toast.success("You have successfully logged in")
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: error,
                })
            });
    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(async user => {
                setUser(user?.user);
                const role = await getRole(user?.user?.email);
                console.log(role);
                role?.data === '' && saveUser(user.user)
                .then(toast.success("You have successfully logged in"))
                .catch(err => console.error(err));
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Success!!!',
                //     text: 'You have successfully logged in',
                // })
            })
            .catch(err => {
                console.error(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong at the time of creating your account!',
                })
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch((err) => {
                console.error(err);
            });
    }

    const resetPass = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Please check your inbox for thee reset password mail',
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong',
                })
                console.error(err);
            });
    }

    // Update profile
    // const updateUserProfile  = (image, name) => {
    //     console.log(image, name);
    //     return updateProfile(user, {
    //         displayName: name, 
    //         photoURL: image
    //     });
    // }

    const updateUserProfile = async (name, photo) => {
        // const auth = getAuth();
        // Assuming 'user' is defined somewhere in your component or 
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    };
    

    const authentication = {
        createUserWithEmail,
        signInWithEmail,
        updateUserProfile,
        googleLogin,
        logout,
        resetPass,
        loading,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    )
}
