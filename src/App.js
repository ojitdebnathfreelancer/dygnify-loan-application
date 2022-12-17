import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Business from './Componets/Detaisl/Business/Business';
import Loan from './Componets/Detaisl/Loan/Loan';
import Personal from './Componets/Detaisl/Personal/Personal';
import Form from './Componets/Form/Form';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Form></Form>
      },
      {
        path:'/personal',
        element:<Personal></Personal>
      },
      {
        path:'/business',
        element:<Business></Business>
      },
      {
        path:'loan',
        element:<Loan></Loan>
      }
    ],
  }
]);

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
