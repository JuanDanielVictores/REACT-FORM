import React, { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";



function Formulario() {
  const [form, setForm] = useState({ nombre: "", correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ nombre: "", correo: "", contraseña: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "nombre") {
      errorMsg = !value.trim() ? "El nombre es obligatorio." : "";
    } else if (name === "correo") {
      errorMsg = validateEmail(value);
    } else if (name === "contraseña") {
      errorMsg = validatePassword(value);
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreError = !form.nombre.trim() ? "El nombre es obligatorio." : "";
    const correoError = validateEmail(form.correo);
    const contraseñaError = validatePassword(form.contraseña);
    setErrors({ nombre: nombreError, correo: correoError, contraseña: contraseñaError });
    if (!nombreError && !correoError && !contraseñaError) {
      alert("Formulario enviado con éxito 🚀");
    }
  };

  return (
    <form className="card p-4 shadow" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className={`form-control ${errors.correo ? "is-invalid" : ""}`}
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
        {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className={`form-control ${errors.contraseña ? "is-invalid" : ""}`}
          name="contraseña"
          value={form.contraseña}
          onChange={handleChange}
        />
        {errors.contraseña && <div className="invalid-feedback">{errors.contraseña}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Enviar</button>
    </form>
  );
}

export default Formulario;
