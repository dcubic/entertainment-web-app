import styles from './App.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/pages/layouts/RootLayout';
import HomePage from './components/pages/content/HomePage';
import SpecificMediaPage from './components/pages/content/SpecificMediaPage';
import BookmarksPage from './components/pages/content/BookmarksPage';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/media', element: <HomePage /> },
    { path: '/media/:type', element: <SpecificMediaPage /> },
    { path: 'media/bookmarked', element: <BookmarksPage /> }
  ]}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
