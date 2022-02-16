import React from "react";
import { useForm } from "react-hook-form";
import UserContext from "../components/Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Api";
import { API_URL } from "../services/Api";
import instagramLogo from "../assets/1384063.png";
import facebookLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import { toast } from "react-toastify";

const Login = () => {
  const loginGoogle = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  const loginFacebook = () => {
    window.location.href = `${API_URL}/auth/facebook`;
  };

  const { user, setUserSession } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginError = () =>
    toast.error("Email ou mot de passe incorrect", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const loginSuccess = () =>
    toast.success("Connexion réussie !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await login(email, password);
      await setUserSession(user);
      loginSuccess();
      console.log(user);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (e) {
      loginError();
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex justify-center px-8">
        <form
          className="w-full max-w- h-full flex flex-col items-center"
          action="/login/password"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap -mx-3 mb-6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              {...register("email")}
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-8 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="current-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 leading-tight focus:outline-none"
              {...register("password")}
              id="current-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="loginButton text-center local mt-3">
            Connexion
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mb-4">OU</h1>
        <div className="loginButton google" onClick={loginGoogle}>
          <img src={googleLogo} alt="" className="icon" />
          Google
        </div>
        <div className="loginButton facebook" onClick={loginFacebook}>
          <img src={facebookLogo} alt="" className="icon" />
          Facebook
        </div>
        <div className="loginButton instagram">
          <img src={instagramLogo} alt="" className="icon" />
          <p className="text-black">Instagram</p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center pt-4">
        <button className="buttonLink hover:text-white" onClick={() => navigate("/inscription")}>
          S'INSCRIRE
        </button>
        <p className="text-right text-xs w-max ">Pas encore inscrit ?</p>
      </div>
    </>
  );
};

export default Login;
