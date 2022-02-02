import React, { useEffect } from "react";
import Main from "./Components/Pages/main";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import Contacts from "./Components/Pages/contacts/contacts";
import Company from "./Components/Pages/company/company";
import SigninPage from "./Components/Pages/Sign/SigninPage";
import Service from "./Components/Pages/Service/Service";
import Profile from "./Components/Pages/Profile/Profile";
import SignupPage from "./Components/Pages/Sign/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import Masters from "../src/Components/Pages/Masters/Masters";
import Accept from "./Components/Pages/Accept/Accept";
import { loadService } from "./redux/features/reducerService";
import { loadMaster } from "./redux/features/reducerMasters";
import { loadCars } from "./redux/features/reducerCars";
import { cartLoad } from "./redux/features/reducerCart";

const App = () => {
  const token = useSelector((state) => state.application.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadService());
    dispatch(loadMaster());
    dispatch(loadCars());
    dispatch(cartLoad());
  }, []);

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signIn" element={<SigninPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/profile" element={<Navigate to="/" replace />} />
          <Route path="/masters" element={<Masters />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Service />} />
            <Route path="/company" element={<Company />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/signIn"
              element={<Navigate to="/profile" replace />}
            />
            <Route path="/masters" element={<Masters />} />
            <Route path="/accept" element={<Accept />} />
          </Route>
        </Routes>
      </div>
    );
  }
};

export default App;
