import NavBar from '../../NavBar.tsx';
import { Outlet } from 'react-router-dom';

function RootLayout() {
    return <div>
        <NavBar />
        <div>
            <Outlet />
        </div>
    </div>
}

export default RootLayout;