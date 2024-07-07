import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import RootLayout from "./components/pages/layouts/RootLayout";
import HomePage from "./components/pages/content/HomePage";
import SpecificMediaPage from "./components/pages/content/SpecificMediaPage";
import BookmarksPage from "./components/pages/content/BookmarksPage";
import LoginPage from "./components/pages/authentication/LoginPage";
import SignupPage from "./components/pages/authentication/SignupPage";
import AuthLayout from "./components/pages/layouts/AuthLayout";
import PrivateRoute from "./components/utils/PrivateRoute";
import { initialDataLoader } from "./loaders/initialDataLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: initialDataLoader,
    errorElement: <Navigate to="/login" replace />,
    children: [
      { path: "", element: <Navigate to="/media" replace /> },
      {
        path: "/media",
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            ),
          },
          {
            path: "/media/:type",
            element: (
              <PrivateRoute>
                <SpecificMediaPage />
              </PrivateRoute>
            ),
          },
          {
            path: "/media/bookmarks",
            element: (
              <PrivateRoute>
                <BookmarksPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
