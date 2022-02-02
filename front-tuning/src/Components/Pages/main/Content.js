import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/features/reducerCars';
import { chooseAuto } from '../../../redux/features/reducerCart'
import { Link } from 'react-router-dom';

const Content = () => {

  const token = localStorage.getItem("token")

  const cars = useSelector(state => state.carsReducer.cars)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCars())
  }, [])

  const handleChooseCar = (auto) => {
    token ? dispatch(chooseAuto(auto)) : alert("Авторизируйтесь")
  }

  return (
    <div className='content-cars'>
      <h1>Выберите марку</h1>
      <div className='main-cars-wrapper'>
        { cars.map((item) => {
          return (
            <Link key={item._id} to={ token ? '/services' : '/signIn'} onClick={() => handleChooseCar(item._id)} className='cars-wrapper'>
              <img src={item.image} alt="" className='cars_logo'/>
              <div className='cars-name'>{item.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Content;