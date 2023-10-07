import './index.css'
import { useState } from "react"




const UserProfile = () => {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: userName,
            email: email,
            password: password
        };

        // Check if the user exists
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            // already exists, welcome back
            setWelcomeMessage(`Welcome back, ${existingUser.name}!`);
        } else {
            // New user, add to the list and welcome
            setUsers([...users, newUser]);
            setWelcomeMessage(`Welcome, ${userName}!`);
        }

        // Clear the form
        setUserName("");
        setEmail("");
        setPassword("");

        // Set the user as logged in
        setIsLogged(true);
    }

    

    return (
        <div id='userProfile'>
            { isLogged ? (
                <h2>{welcomeMessage}</h2>
            ) : (
                <form id='user' onSubmit={handleSubmit}>
                    <input onChange={e => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" />
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default UserProfile;
