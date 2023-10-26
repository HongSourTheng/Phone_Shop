import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:":id",
        element: <ProductDetail />,
      },
      {
        path: "service",
        element: <h1>service</h1>,
      },
      {
        path: "accessories",
        element: <h1>accessories</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
