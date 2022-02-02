import React from "react";
import SignupPage from "./SignupPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../redux/features/reducerSign";
import "./Signin.css";
import { Button, TextField } from "@mui/material";

const SigninPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [complete, setComplete] = useState("");
  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);
  const token = useSelector((state) => state.application.token);
  const [NotEmail, setNotEmail] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const valid =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotEmail("Некоректный емаил");
    } else {
      setNotEmail("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLogin("");
    setPassword("");
    setComplete(true);
    dispatch(auth(login, password));
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  }

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  return (
    <div className="SignInMain">
      <div className="SignInWindow">
        <div className="titleBlock">
        <h2 className="title">Вход</h2>
        </div>
        {!NotEmail ? (
          <span className="error">{error}</span>
        ) : (
          <span className="error">{NotEmail}</span>
        )}
        <div className="SignUpBlock">
          <TextField
            error={!blurLogin ? true : false}
            id={!blurLogin ? "outlined-error" : "outlined-basic"}
            label={!blurLogin ? "Поле пустое!" : "Email"}
            variant="outlined"
            className="loginINP"
            onBlur={handleBlurLogin}
            type="email"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        <div className="SignUpBlock">
          <TextField
            error={!blurPassword ? true : false}
            id={!blurLogin ? "outlined-error" : "outlined-basic"}
            label={!blurPassword ? "Поле пустое!" : "Password"}
            variant="outlined"
            onBlur={handleBlurPassword}
            className="passwordINP"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <Button
          id="signInBtn"
          variant="contained"
          onClick={handleSubmit}
          disabled={!login || !password || signingIn || NotEmail}
        >
          Войти
        </Button>
        <div className="SigninBlock">
          <span className="textOne">Не зарегистрированы ?</span>
          <Link className="Link" to="/signUp">
            Зарегистрироваться
          </Link>
        </div>
        <div className="MainLinkBlock">
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
