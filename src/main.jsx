import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/Home.jsx";
import AboutTab from "./layouts/AboutTab.jsx";
import ServicesTab from "./layouts/ServicesTab.jsx";
import ContactTab from "./layouts/ContactTab.jsx";
import { Provider } from "react-redux";
import mySiteStore from "./store/index.js";
import Blogs from "./components/Blogs.jsx";
import BlogDetails from "./components/BlogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutTab /> },
      { path: "/services", element: <ServicesTab /> },
      { path: "/blogs", element: <Blogs blogsNumber={10} /> },
      { path: "/blogdetails/:id", element: <BlogDetails /> },
      { path: "/contact", element: <ContactTab /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mySiteStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);