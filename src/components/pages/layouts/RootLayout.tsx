import styles from "./RootLayout.module.css";
import NavBar from "../../navbar/NavBar.tsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
