import { createBrowserRouter } from 'react-router-dom';
import Register from '../features/auth/pages/Register.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  }
])

export default router;