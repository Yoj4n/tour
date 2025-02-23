import { useState} from "react";
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
      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (isLogin) {
        const savedUser = users.find(user => user.email === formData.email);

        if (!savedUser) {
          throw new Error("Usuario no registrado");
        }

        if (savedUser.password === formData.password) {
          localStorage.setItem("user", JSON.stringify(savedUser));

          sessionStorage.setItem("user", JSON.stringify(savedUser));
          window.dispatchEvent(new Event("storage"));
          const redirectPath = location.state?.fromBooking ? "/reserva" : "/";

          navigate(redirectPath, {
            state: savedUser,
            replace: true,
          });

          window.dispatchEvent(new Event("storage"));
        } else {
          throw new Error("Credenciales incorrectas");
        }
      } else {
        if (users.some(user => user.email === formData.email)) {
          throw new Error("Este correo ya está registrado");
        }

        if (!formData.username || !formData.lastname) {
          throw new Error("Nombre y apellidos son requeridos");
        }

        const newUser = {
          username: formData.username.trim(),
          lastname: formData.lastname.trim(),
          email: formData.email.toLowerCase().trim(),
          password: formData.password,
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify(newUser));
        sessionStorage.setItem("user", JSON.stringify(newUser));

        const redirectPath = location.state?.fromBooking ? "/reserva" : "/";
        window.dispatchEvent(new Event("storage"));
        navigate(redirectPath, {
          state: newUser,
          replace: true,
        });

        
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
