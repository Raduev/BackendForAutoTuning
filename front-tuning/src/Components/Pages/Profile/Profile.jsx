import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartLoad, deleteCart } from "../../../redux/features/reducerCart";
import { userLoad } from "../../../redux/features/reducerProfile";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.application.token);

  useEffect(() => {
    dispatch(userLoad(token));
    dispatch(cartLoad());
  }, []);

  const user = useSelector((state) => state.profilfeReducer.user);

  const cart = useSelector((state) => state.cartsReducer.carts);
  const auto = useSelector((state) =>
    state.carsReducer.cars.find((item) => item._id === cart?.auto)
  );
  const service = useSelector((state) =>
    state.serviceReducer.service.find((item) => item._id === cart?.service)
  );
  const master = useSelector((state) =>
    state.masterReducer.masters.find((item) => item._id === cart?.master)
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleDeleteCart = () => {
    dispatch(deleteCart(cart._id));
  };

  return (
    <div className="mainProfile">
      <div className="sidebar">
        {user.map((item) => {
          return (
            <>
              <h1>Мой профиль</h1>
              <span className="name">{item.firstName}</span>
              <span className="name"> {item.lastName}</span>
              <h4>Номер телефона:</h4>
              <span>{item.number}</span>
              <button onClick={handleLogout}>Выход</button>
            </>
          );
        })}
      </div>
      <div className="cart">
        <h1>Мои заказы</h1>
        {auto && service && master ? (
          <div className="cart_card">
            <button className="cart-deleteButton" onClick={handleDeleteCart}>⨉</button>
            <h2>Ваше авто: {auto.name}</h2>
            <h2>Услуга: {service.name}</h2>
            <h2>Мастер: {master.name}</h2>
            <span className="cart-price">
              Итого: <span style={{color: 'red'}}>{master.price * service.time * auto.coefficient}₽</span>
            </span>
          </div>
        ) : (
          <div>Нет заказов</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
