
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbarre from './Components/Navbarre';
import ListeRoutes from './Routes/ListeRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import { CartProvider} from "react-use-cart"

function App() {
  return (
    <div>
  <CartProvider>
      <Router>
      <Navbarre/>
      <ListeRoutes/>
      <ToastContainer/>
      </Router>
      </CartProvider>
     
      
    </div>
  );
}

export default App;
