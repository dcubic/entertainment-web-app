import styles from "./Layout.module.css";
import NavBar from "../../navbar/NavBar.tsx";
import { Outlet, useLoaderData } from "react-router-dom";

function RootLayout() {
  const loaderData = useLoaderData();
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <div>
        <Outlet context={loaderData} />
      </div>
    </div>
  );
}

export default RootLayout;
