import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Shop } from "./pages/shop"
import { Cart } from "./pages/cart"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
