import { RouterProvider } from 'react-router-dom';
import { router } from './router'
import { GlobalUserLoginProvider } from './contexts/user-login.context';

function App() {
  return (
    <GlobalUserLoginProvider>
      <RouterProvider router={router} />
    </GlobalUserLoginProvider>
  );
}

export default App;
