import React from "react";
import useUserProfile from "../../hooks/useUserProfile"; 
import "../../styles/Perfil/Perfil.css";

const FormularioPerfil = () => {
  const { user, handleChange, handleSave, handleImageUpload } = useUserProfile();

  return (
    <div className="perfil-container">
      <div className="perfil-imagen">
        <label htmlFor="imagen-input">
          <img
            src={user.imagen || "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"}
            alt="Perfil"
            className="imagen-preview"
          />
        </label>
        <input type="file" id="imagen-input" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
      </div>

      <div className="perfil-form">
        <h2>DATOS DE USUARIO</h2>
        <div className="form-grid">
          <div className="columna">
            <div className="input-group-perfil">
              <label>NOMBRES</label>
              <input type="text" name="username" defaultValue={user.username} onChange={handleChange} />
            </div>
            <div className="input-group-perfil">
              <label>CORREO ELECTRÓNICO</label>
              <input type="email" name="email" defaultValue={user.email} onChange={handleChange} />
            </div>
            <div className="input-group-perfil">
              <label>CONTRASEÑA</label>
              <input type="password" name="password" defaultValue={user.password} onChange={handleChange} />
            </div>
          </div>

          <div className="columna">
            <div className="input-group-perfil">
              <label>APELLIDOS</label>
              <input type="text" name="lastname" defaultValue={user.lastname} onChange={handleChange} />
            </div>
            <div className="input-group-perfil">
              <label>CELULAR</label>
              <input type="text" name="celular" defaultValue={user.celular} onChange={handleChange} />
            </div>
          </div>
        </div>
        <button className="guardar-btn" onClick={handleSave}>Guardar Cambios</button>
      </div>
    </div>
  );
};

export default FormularioPerfil;
