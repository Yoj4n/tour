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

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("user")) || {};
    setUser(datosGuardados);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Guardar cambios en localStorage
  const handleSave = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  
    if (!sessionUser) {
      alert("Error: No hay un usuario en sesión.");
      return;
    }
  
    const updatedUsers = users.map(user => 
      user.email === sessionUser.email ? { ...user, ...user } : user
    );
  
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    sessionStorage.setItem("user", JSON.stringify(user)); // Actualizar sesión activa
    
    window.dispatchEvent(new Event("storage")); // Notificar cambio al Navbar
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
          window.dispatchEvent(new Event("storage"));
          return updatedUser;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return { user, handleChange, handleSave, handleImageUpload };
};

export default useUserProfile;
