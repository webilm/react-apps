import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import HomePage from './Home/Homepage/HomePage';
import ProductDetails from './Home/ProductDetails/ProductDetails';
import Cart from './Home/Cart/Cart';
// import Login from './Home/Login/Login';
import Login from './Home/Regeister/Login';
// import Register from './Home/Register/Register';
import Register from './Home/Regeister/Register';
import Shipping from './Home/Shipping/Shipping';
import Profile from './Home/Profile/Profile';
import AddressNew from './Home/AddressNew/AddressNew';
import UpdateProfile from './Home/UpdateProfile/UpdateProfile';
import UpdatePassword from './Home/UpdatePassword/UpdatePassword';
import UserOrder from './Home/UserOrder/UserOrder';
import NewProduct from './Home/NewProduct/NewProduct';
import ProductsAdmin from './Home/ProductsAdmin/ProductsAdmin';
import UploadImages from './Home/UploadImages/UploadImages';
import OrdersAdmin from './Home/OrdersAdmin/OrdersAdmin';
import UpdateOrder from './Home/UpdateOrder/UpdateOrder';
import UsersAdmin from './Home/UsersAdmin/UsersAdmin';
import UpdateUserAdmin from './Home/UpdateUserAdmin/UpdateUserAdmin';

const ComponentsList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address/new" element={<AddressNew />} />
        <Route path="/update/profile" element={<UpdateProfile />} />
        <Route path="/update/password" element={<UpdatePassword />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="/new/product" element={<NewProduct />} />
        <Route path="/products/admin" element={<ProductsAdmin />} />
        <Route path="/upload/images" element={<UploadImages />} />
        <Route path="/orders/admin" element={<OrdersAdmin />} />
        <Route path="/update/order" element={<UpdateOrder />} />
        <Route path="/users/admin" element={<UsersAdmin />} />
        <Route path="/update/user/admin" element={<UpdateUserAdmin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default ComponentsList;