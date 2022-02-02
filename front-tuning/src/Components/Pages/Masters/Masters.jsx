import React, { useEffect } from "react";
import "./master.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMaster } from "../../../redux/features/reducerMasters";
import { Link } from "react-router-dom";
import { chooseMaster } from '../../../redux/features/reducerCart'

const Masters = () => {
  const masters = useSelector((state) => state.masterReducer.masters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMaster());
  }, []);

  const handleChoiceMaster = (master) => {
    dispatch(chooseMaster(master));
  };


  return (
    <div className="master_main">
      <div className="master_wrapper">
      <h1>Мастера меча онлайн</h1>
      <h2>Выберите своего мастера</h2>
      <hr className="master_hr" />
      <div className="master_flex_blocks">
        {masters.map((item, index) => {
          return (
            <>
              <div className="master_block">
                <div className="master_img">
                  <img width={180} height={140} src={item.image} alt="" />
                </div>
                <div className="master_name"><span className="master_span"></span> {item.name}</div>
                <Link to="/accept" onClick={() => handleChoiceMaster(item._id)} className="master_btn">
                  Выбрать
                </Link>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Masters;
