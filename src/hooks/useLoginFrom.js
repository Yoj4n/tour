import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useLoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: location.state?.username || "",
    lastname: location.state?.lastname || "",
    email: location.state?.email || "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      if (isLogin) {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (!savedUser) {
          throw new Error("Usuario no registrado");
        }

        if (
          savedUser.email === formData.email &&
          savedUser.password === formData.password
        ) {
          sessionStorage.setItem("user", JSON.stringify(savedUser));

          const redirectPath = location.state?.fromBooking ? "/reserva" : "/";
        

          navigate(redirectPath, {
            state: {
              username: savedUser.username,
              lastname: savedUser.lastname,
              email: savedUser.email,
            },
            replace: true,
          });

          window.dispatchEvent(new Event("storage"));
        } else {
          throw new Error("Credenciales incorrectas");
        }
      } else {
        if (!formData.username || !formData.lastname) {
          throw new Error("Nombre y apellidos son requeridos");
        }

        const userData = {
          username: formData.username.trim(),
          lastname: formData.lastname.trim(),
          email: formData.email.toLowerCase().trim(),
          password: formData.password,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("user", JSON.stringify(userData));

        const redirectPath = location.state?.fromBooking ? "/reserva" : "/";

        navigate(redirectPath, {
          state: userData,
          replace: true,
        });

        window.dispatchEvent(new Event("storage"));
      }
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return {
    isLogin,
    setIsLogin,
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
  };
};

export default useLoginForm;