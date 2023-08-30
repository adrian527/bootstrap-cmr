import { styled } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Main from './pages/Main';
import FAQs from './pages/FAQs';
import Products from './pages/Products';
import ProductsProvider from './provider/ProductsProvider';
import Admin from './pages/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/faqs',
        element: <FAQs />
      },
      {
        path: '/products/:productName',
        element: <Products />
      },
      {
        path: '/admin',
        element: <Admin />
      }
    ]
  },
]);

function App() {
  return (
    <WebSite className='container'>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </WebSite>);
}

const WebSite = styled.div`
  padding: 5rem 2rem 0;
  background-color: white;
  box-shadow: 0px 0px 35px 3px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0px 0px 35px 3px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 35px 3px rgba(0,0,0,0.3);
`;

export default App;