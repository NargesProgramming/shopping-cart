import './App.css';
import { BrowserRouter as Router ,Routes , Route ,Navigate } from "react-router-dom";
import { Provider } from "react-redux";

//components
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//redux
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <Router>
            <Navbar />
        <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/" element={<Navigate replace to="/products" /> }/>
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
