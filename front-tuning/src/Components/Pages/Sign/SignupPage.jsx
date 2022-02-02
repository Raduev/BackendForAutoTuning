import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/features/reducerSign";
import "./SignUp.css";
import { Button, TextField } from "@mui/material";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [blurFirstName, setBlurFirstName] = useState(true);
  const [blurLastName, setBlurLastName] = useState(true);
  const [blurNumber, setBlurNumber] = useState(true);
  const [complete, setComplete] = useState("");
  const [avatar, setAvatar] = useState("");
  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);
  const token = useSelector((state) => state.application.token);
  const [NotEmail, setNotEmail] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const valid =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotEmail("Некорректный емаил");
    } else {
      setNotEmail("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = () => {
    setLogin("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setNumber("");
    setComplete(true);
    dispatch(createUser(login, password, firstName, lastName, number));
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  };

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  const handleBlurFirstName = () => {
    firstName === "" ? setBlurFirstName(false) : setBlurFirstName(true);
  };

  const handleBlurLastName = () => {
    lastName === "" ? setBlurLastName(false) : setBlurLastName(true);
  };

  const handleBlurNumber = () => [
    number === "" ? setBlurNumber(false) : setBlurNumber(true),
  ];

  return (
    
    <div className="SignUpMain">
      <div className="SignUpWindow">
      <div className="BackLinkBlock">
          {/* <Link className="LinkMain" to="/signIn">
            <button className="Back">⬅</button>
          </Link> */}
        </div>
        <h2 className="title">Регистрация</h2>
        {/* <div className="error">{NotEmail}</div> */}
        <div className="SignUpBlock">
          <TextField
            error={!blurLogin ? true : false}
            id={!blurLogin ? "outlined-error" : "outlined-basic"}
            label={!blurLogin ? "Поле пустое!" : "Email"}
            variant="outlined"
            // className="loginINP"
            onBlur={handleBlurLogin}
            type="email"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => handleChangeLogin(e)}
          />
          <div className="error">{NotEmail}</div>
          {/* {!blurLogin ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="SignUpBlock">
          <TextField
            error={!blurPassword ? true : false}
            id={!blurPassword ? "outlined-error" : "outlined-basic"}
            label={!blurPassword ? "Поле пустое!" : "Password"}
            variant="outlined"
            onBlur={handleBlurPassword}
            // className="passwordINP"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
          {/* {!blurPassword ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )} */}
        </div>
        {/* <div className="mainINP"> */}
        <div className="SignUpBlock">
          <TextField
            error={!blurFirstName ? true : false}
            id={!blurFirstName ? "outlined-error" : "outlined-basic"}
            label={!blurFirstName ? "Поле пустое!" : "Имя"}
            variant="outlined"
            onBlur={handleBlurFirstName}
            // className="firstNameINP"
            type="firstName"
            placeholder="Введите Имя"
            value={firstName}
            onChange={(e) => handleChangeName(e)}
          />
          {/* {!blurFirstName ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="SignUpBlock">
          <TextField
            error={!blurLastName ? true : false}
            id={!blurLastName ? "outlined-error" : "outlined-basic"}
            label={!blurLastName ? "Поле пустое!" : "Фамилия"}
            variant="outlined"
            onBlur={handleBlurLastName}
            // className="lastNameINP"
            type="lastName"
            placeholder="Введите Фамилию"
            value={lastName}
            onChange={(e) => handleChangeLastName(e)}
          />
          {/* {!blurLastName ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="SignUpBlock">
          <TextField
            error={!blurNumber ? true : false}
            id={!blurNumber ? "outlined-error" : "outlined-basic"}
            label={!blurNumber ? "Поле пустое!" : "Номер телефона"}
            variant="outlined"
            onBlur={handleBlurNumber}
            // className="numberINP"
            type="number"
            placeholder="Введите номер телефона"
            value={number}
            onChange={(e) => handleChangeNumber(e)}
          />
          {/* {!blurNumber ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )} */}
        </div>
        {/* <div className="input__wrapper">
          <input
            className="inputInput__file"
            type="file"
            value={avatar}
            onChange={(e) => handleChangeAvatar(e)}
          />
          <label htmlFor="input__file" class="input__file-button">
            <span class="avatarFile">
              <img className="avatar" src={avatar} alt="avatar" />
            </span>
          </label>
        </div> */}
        <Link className="LinkMain" to="/signIn">
        <button
            
          className={
            !login ||
            !password ||
            !firstName ||
            !lastName ||
            !number ||
            signingUp ||
            NotEmail
              ? "NotRegisterBTN"
              : "RegisterBTN"
          }
          onClick={handleSubmit}
          disabled={
            !login ||
            !password ||
            !firstName ||
            !lastName ||
            !number ||
            signingUp ||
            NotEmail
          }
        >
          Зарегистрироваться
        </button>
        </Link>
        <div className={!error ? "NoEmpty" : "BlockError"}></div>
      </div>
    </div>
    // </div>
  );
};

export default SignupPage;
