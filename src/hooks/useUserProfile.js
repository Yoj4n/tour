import { useState, useEffect } from "react";

const useUserProfile = () => {
  const [user, setUser] = useState({
    username: "",
    lastname: "",
    email: "",
    celular: "",
    password: "",
    useUserProfile,
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

  const handleSave = () => {
    // let users = JSON.parse(localStorage.getItem("users")) || [];
    let users = JSON.parse(sessionStorage.getItem("users")) || [];
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));

    if (!sessionUser) {
      alert("Error: No hay un usuario en sesión.");
      return;
    }
    const updatedUser = { ...sessionUser, ...user };
    // const updatedUsers = users.map(user =>
    //   user.email === sessionUser.email ? { ...user, ...user } : user
    // );
    const updatedUsers = users.map((u) =>
      u.email === sessionUser.email ? updatedUser : u
    );

    // localStorage.setItem("users", JSON.stringify(updatedUsers));
    // localStorage.setItem("user", JSON.stringify(user));
    // sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("users", JSON.stringify(updatedUsers));
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
    setUser((prevUser) => ({ ...prevUser }));
    window.dispatchEvent(new Event("storage"));
    alert("Perfil actualizado correctamente.");
  };

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
