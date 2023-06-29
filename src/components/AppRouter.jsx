import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from '../pages/Main/Main';
import Catalog from "../pages/Catalog/Catalog";
import Contacts from "../pages/Contacts/Contacts";
import Error from "../pages/Error";
import Item from '../pages/Item/Item';

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Main />}></Route>
      <Route path="/" element={<Main />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="catalog/:id" element={<Item />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}