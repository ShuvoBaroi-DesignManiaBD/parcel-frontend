import { getAuth, updateProfile } from "firebase/auth";
import Container from "../Components/Shared/Container";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";


const Home = () => {
    // const {user} = useAuth();
    // const auth = getAuth();
    // console.log(auth.currentUser);
    // useEffect(() => {
    //     // Assuming 'user' is defined somewhere in your component or 
    //     updateProfile(auth.currentUser,{
    //         displayName: "name",
    //         photoURL: "image"
    //     })
    // })
    return (
        <Container>
            <h2>Hello</h2>
            <button className="primaryButton">
                login
            </button>
        </Container>
            
    );
};

export default Home;