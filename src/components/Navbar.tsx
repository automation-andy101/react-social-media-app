import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {!user ? <Link to='/login'>Login</Link> : <Link to='/createPost'>Create Post</Link>}
            <div className="user">
                {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <img src={user?.photoURL || "" } width="20" height="20" alt=""/>
                        <button onClick={signUserOut}>Sign Out</button>
                    </>
                )}
            </div>
        </nav>
    )
}