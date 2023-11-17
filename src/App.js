// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Collections from './Components/Collections/Collections';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import { useEffect, useState } from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: 'collections', element: <Collections></Collections>},
        {path: 'orders', element: <Orders></Orders>},
        {path: 'login', element: <Login></Login>}
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
