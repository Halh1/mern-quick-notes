import { useState } from 'react';
import LoginForm from '../../../components/LoginForm/LoginForm';
import SignUpForm from "../../../components/SignUpForm/SignUpForm";


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <main>
            <h1>AuthPage</h1>
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    );
}