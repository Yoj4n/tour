import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Para mostrar errores
  const navigate = useNavigate();

  // Verificar si hay sesión activa al cargar el componente
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
    if (savedUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        setErrorMessage("Este usuario no está registrado.");
        return;
      }

      if (savedUser.email === formData.email && savedUser.password === formData.password) {
        sessionStorage.setItem("user", JSON.stringify(savedUser)); 
        alert("Inicio de sesión exitoso");
        navigate("/");
      } else {
        setErrorMessage("Credenciales incorrectas.");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      sessionStorage.setItem("user", JSON.stringify(formData));
      alert("Registro exitoso");
      navigate("/");
    }
  };

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

        {!isLogin && <p className="terms-text">Al registrarte, aceptas nuestros términos y condiciones de uso.</p>}
      </div>
    </div>
  );
};

export default AuthForm;
