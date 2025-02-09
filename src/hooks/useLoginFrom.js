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

  // Verificar usuario existente al cargar
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = 
        JSON.parse(sessionStorage.getItem("user")) || 
        JSON.parse(localStorage.getItem("user"));
        
      if (savedUser) {
        navigate("/", { replace: true });
      }
    };
    
    checkAuth();
  }, [navigate]);

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
          
          navigate("/reserva", {
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
        // Lógica de Registro
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
        
        navigate("/", {
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