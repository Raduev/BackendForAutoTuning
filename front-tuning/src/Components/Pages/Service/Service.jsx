import "./Service.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLoad } from "../../../redux/features/reducerProfile";
import { loadService } from "../../../redux/features/reducerService";
import { Link } from "react-router-dom";
import { chooseService } from "../../../redux/features/reducerCart";

const Service = () => {
  const services = useSelector((state) => state.serviceReducer.service);

  // const carts = useSelector(state => state.cartsReducer.carts)

  
  const token = useSelector(state => state.application.token)

  // useEffect(() => {
  //     dispatch(userLoad(token))
  // }, [])

  // const user = useSelector(state => state.profilfeReducer.user)

  // console.log(user);
  // const userId = user

  // console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);

  const handleChooseService = (serviceId) => {
    token ? dispatch(chooseService(serviceId)) : alert('Авторизируйтесь')
  };

  return (
    <div className="sevice-main">
      <div className="sevice_container">
        <h1>Список наших услуг</h1>
        <div className="srvice_services">
          {services.map((item) => {
            return (
              <div className="service_cart">
                <div className="service_image">
                  <img src={item.img} />
                </div>
                <div className="service_name">{item.name}</div>
                <Link
                  to={ token ? '/masters' : ''}
                  className="sevice_btn"
                  onClick={() => handleChooseService(item._id)}
                >
                  Выбрать
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
