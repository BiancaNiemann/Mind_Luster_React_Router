import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
//import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";

const LazyAbout = React.lazy(()=>import('./components/About'))
//using lazy react to load a page that is big and slows the page down helps to make the app smaller

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} >
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;


// putting a star * as the path name will send the user to the page not found component because star is used when nothing matches

//the index route tells the app that when the products page is selected it must show the featured page info on it

//using dynamic routes users/:UserId, react will first match any used routes for example users/admin before using userId