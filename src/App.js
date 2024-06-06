import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Products from "./page/Products/Products";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./page/Login/Login";
import About from "./page/About/About";
import Wishlist from "./page/Wishlist/Wishlist";
import Register from "./page/Register/Register";
import Artisans from "./page/Artisans/Artisans";
import Contact from "./page/Contact/Contact";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/artisans",
        element: <Artisans />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
