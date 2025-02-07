import React from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import useAuthForm from "../hooks/useLoginFrom.js";
import "../styles/Login.css";

const AuthForm = () => {
  const { isLogin, setIsLogin, formData, handleChange, handleSubmit, errorMessage } = useAuthForm();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="name-row">
              <div className="input-group-login">
                <FiUser className="input-icon-u" />
                <input type="text" id="username" className="auth-input" placeholder="Nombre" value={formData.username} onChange={handleChange} required />
              </div>
              <div className="input-group-login">
                <FiUser className="input-icon-u" />
                <input type="text" id="lastname" className="auth-input" placeholder="Apellidos" value={formData.lastname} onChange={handleChange} required />
              </div>
            </div>
          )}
          <div className="input-group-login">
            <FiMail className="input-icon" />
            <input type="email" id="email" className="auth-input" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group-login">
            <FiLock className="input-icon" />
            <input type="password" id="password" className="auth-input" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="auth-button">{isLogin ? "Acceder ahora" : "Registrarse gratis"}</button>
        </form>

        <div className="toggle-text">
          <p>
            {isLogin ? "¿Primera vez aquí?" : "¿Ya tienes cuenta?"}{" "}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? "Crea una cuenta" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

