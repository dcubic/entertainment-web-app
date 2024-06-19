import { NavLink } from 'react-router-dom';
import styles from './Authentication.module.css';

function LoginPage() {
    return <div className={styles.pageContainer}>
        <form className={styles.form}>
            <h1>Login</h1>
            <input />
            <input />
            <button>Login to your account</button>
            <div className={styles.modeSwapContainer}>
                <p>Don't have an account?</p>
                <NavLink to='TODO'>Sign Up</NavLink>
            </div>
        </form>
    </div>
}

export default LoginPage;