import { useState, useEffect } from "react";

const useUserProfile = () => {
  const [user, setUser] = useState({
    username: "",
    lastname: "",
    email: "",
    celular: "",
    password: "",
    imagen: "",
  });

  // Cargar datos desde localStorage al montar el hook
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("user")) || {};
    setUser(datosGuardados);
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Guardar cambios en localStorage
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Perfil actualizado correctamente.");
  };

  // Manejar subida de imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => {
          const updatedUser = { ...prevUser, imagen: reader.result };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          return updatedUser;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return { user, handleChange, handleSave, handleImageUpload };
};

export default useUserProfile;
