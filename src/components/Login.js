import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiArrowRightCircle } from "react-icons/fi";
import "../styles/Login.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}
        </h2>

        <form className="auth-form">
          {!isLogin && (
            <div className="name-row">
              <div className="input-group-login">
                <FiUser className="input-icon-u" />
                <input
                  type="text"
                  id="username"
                  className="auth-input"
                  placeholder="Nombre de usuario"
                />
              </div>
              <div className="input-group-login">
                <FiUser className="input-icon-u" />
                <input
                  type="text"
                  id="lastname"
                  className="auth-input"
                  placeholder="Apellidos"
                />
              </div>
            </div>
          )}
          <div className="input-group-login">
            <FiMail className="input-icon" />
            <input
              type="email"
              id="email"
              className="auth-input"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="input-group-login">
            <FiLock className="input-icon" />
            <input
              type="password"
              id="password"
              className="auth-input"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? "Acceder ahora" : "Registrarse gratis"}
          </button>
        </form>

        <div className="toggle-text">
          <p>
            {isLogin ? "¿Primera vez aquí?" : "¿Ya tienes cuenta?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-link"
            >
              {isLogin ? "Crea una cuenta" : "Inicia sesión"}
            </button>
          </p>
        </div>

        {!isLogin && (
          <p className="terms-text">
            Al registrarte, aceptas nuestros términos y condiciones de uso.
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
