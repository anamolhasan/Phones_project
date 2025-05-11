import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* existing imports */

import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';
import Phone from './components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "phones",
        element: <Phones/>,
        hydrateFallbackElement: <h2>loading............</h2>,
        loader: ()=> fetch('http://localhost:5000/phones')
      },
      {
        path:'/phone/:id',
        element:<Phone/>,
        hydrateFallbackElement: <h2>loading............</h2>,
        loader:({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);

/* existing code */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
