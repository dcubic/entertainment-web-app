import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';

function AuthLayout() {
  return <div className={styles.appContainer}>
    <Outlet />
  </div>
}

export default AuthLayout;