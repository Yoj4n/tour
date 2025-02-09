import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useLoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: location.state?.username || "",
    lastname: location.state?.lastname || "",
    email: location.state?.email || "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem("user"));
    if (savedUser) {
      navigate("/"); // Redirige si ya está autenticado
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
        sessionStorage.setItem("username", savedUser.username);
        sessionStorage.setItem("lastname", savedUser.lastname);

        navigate("/reserva", {
          state: { username: savedUser.username, lastname: savedUser.lastname, email: savedUser.email },
        });
      } else {
        setErrorMessage("Credenciales incorrectas.");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      sessionStorage.setItem("user", JSON.stringify(formData));
      sessionStorage.setItem("username", formData.username);
      sessionStorage.setItem("lastname", formData.lastname);

      navigate("/", {
        state: { username: formData.username, lastname: formData.lastname, email: formData.email },
      });
    }
  };

  return { isLogin, setIsLogin, formData, handleChange, handleSubmit, errorMessage };
};

export default useLoginForm;
