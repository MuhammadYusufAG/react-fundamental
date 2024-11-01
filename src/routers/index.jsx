import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Index";
import Blog from "../pages/blogs";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      },
      {
        path:"/about",
        element: <About/>
      }
    ]
  },
]);
