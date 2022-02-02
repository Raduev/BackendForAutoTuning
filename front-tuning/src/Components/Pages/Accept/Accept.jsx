import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './accept-style.css'
import { Link } from 'react-router-dom';
import { postOrder } from '../../../redux/features/reducerCart';

const Accept = () => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cartsReducer.carts)
  const auto = useSelector(state => state.carsReducer.cars.find((item) => item._id === cart.auto))
  const service = useSelector( state => state.serviceReducer.service.find((item) => item._id === cart.service))
  const master = useSelector(state => state.masterReducer.masters.find((item) => item._id === cart.master))
  


  const acceptOrder = (cart) => {
    dispatch(postOrder(cart))
  }

  return (
    <div className='accept'>
      <div className='selected'>
        <div className='choosen_auto'>
          <div className='choosen_auto_name'>{ auto.name }</div>
          <div className='wrapper-image'><div className='choosen_auto_wrapper_img'><img className='choosen_auto_img' src={ auto.image }/></div></div>
        </div>
        <div className='choosen_service'>
          <div className='choosen_service_name'>{ service.name }</div>
          <div className='wrapper-image'><div className='choosen_auto_wrapper_img'><img className='choosen_auto_img' src={ service.img }/></div></div>
        </div>
        <div className='choosen_master'>
          <div className='choosen_master_name'>{ master.name }</div>
          <div className='wrapper-image'><div className='choosen_auto_wrapper_img'><img className='choosen_auto_img' src={ master.image }/></div></div>
        </div>
        <div className='accept_button_wrapper'>
          <Link className='accept_button' onClick={() => acceptOrder(cart)} to='/profile'>Подтвердить заказ</Link>
        </div>
      </div>
    </div>
  );
};

export default Accept;