import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommentProvider from './Context/CommentProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentProvider>
      <RouterProvider router={router}></RouterProvider>
    </CommentProvider>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
     />
  </StrictMode>,
)
